const fs = require('node:fs');
const path = require('node:path');

const CATEGORY_ORDER = ['technology', 'finance', 'politics'];

function parseArticleMarkdown(text, filePath) {
  const lines = String(text || '').split(/\r?\n/);
  const titleLine = lines.find((line) => /^#\s+/.test(line.trim())) || '';
  const title = titleLine.replace(/^#\s+/, '').trim();
  let summary = '';
  let inSummary = false;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^##\s+中文摘要/.test(line) || /^摘要[:：]/.test(line)) {
      inSummary = true;
      continue;
    }
    if (inSummary) {
      summary = line.replace(/^[-*]\s*/, '').trim();
      break;
    }
  }

  if (!summary) {
    const summaryLine = lines.find((line) => /^摘要[:：]/.test(line.trim()));
    if (summaryLine) summary = summaryLine.replace(/^摘要[:：]\s*/, '').trim();
  }

  const linkLine = lines.find((line) => /^-\s+link:\s*/i.test(line.trim())) || '';
  const strengthLine = lines.find((line) => /^-\s+sentiment_strength:\s*/i.test(line.trim())) || '';
  const sentimentLine = lines.find((line) => /^-\s+market_sentiment:\s*/i.test(line.trim())) || '';

  return {
    title: title || path.basename(filePath || ''),
    summary: summary || title || path.basename(filePath || ''),
    source: path.basename(filePath || ''),
    link: linkLine.replace(/^-\s+link:\s*/i, '').trim(),
    strength: Number(strengthLine.replace(/^-\s+sentiment_strength:\s*/i, '').trim() || 0),
    sentiment: sentimentLine.replace(/^-\s+market_sentiment:\s*/i, '').trim(),
  };
}

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((name) => name.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function parseCsv(text) {
  const rows = [];
  const lines = String(text || '').replace(/^\uFEFF/, '').trim().split(/\r?\n/);
  if (!lines.length) return rows;

  const parseLine = (line) => {
    const cells = [];
    let cell = '';
    let quoted = false;

    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (quoted) {
        if (ch === '"') {
          if (line[i + 1] === '"') {
            cell += '"';
            i += 1;
          } else {
            quoted = false;
          }
        } else {
          cell += ch;
        }
      } else if (ch === '"') {
        quoted = true;
      } else if (ch === ',') {
        cells.push(cell);
        cell = '';
      } else {
        cell += ch;
      }
    }

    cells.push(cell);
    return cells;
  };

  const headers = parseLine(lines[0]).map((header) => header.trim());
  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const cells = parseLine(line);
    const row = {};
    headers.forEach((header, idx) => {
      row[header] = (cells[idx] ?? '').trim();
    });
    rows.push(row);
  }
  return rows;
}

function buildBacktestSeries(csvPath) {
  if (!fs.existsSync(csvPath)) return []; 
  const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  return rows
    .map((row) => ({
      date: row.date,
      portfolioValue: Number(row.portfolio_value_after),
    }))
    .filter((row) => row.date && Number.isFinite(row.portfolioValue))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function isDateDirectory(name, fullPath) {
  return /^\d{4}-\d{2}-\d{2}$/.test(name) && fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
}

function listDateDirectories(rootDir) {
  if (!fs.existsSync(rootDir)) return [];
  return fs.readdirSync(rootDir)
    .filter((name) => isDateDirectory(name, path.join(rootDir, name)))
    .sort((a, b) => a.localeCompare(b, 'en'));
}

function latestDateUnder(rootDir, predicate) {
  const dates = listDateDirectories(rootDir).reverse();
  for (const date of dates) {
    const fullPath = path.join(rootDir, date);
    if (predicate(fullPath, date)) return date;
  }
  return '';
}

function resolveLatestDashboardDates(repoRoot) {
  const cacheRoot = path.join(repoRoot, 'cache');
  const tradeRoot = path.join(cacheRoot, 'trade_execution');

  const newsDate = latestDateUnder(cacheRoot, (fullPath) => CATEGORY_ORDER.every((category) => {
    const categoryDir = path.join(fullPath, category);
    return fs.existsSync(categoryDir) && fs.statSync(categoryDir).isDirectory() && listMarkdownFiles(categoryDir).length > 0;
  }));

  const tradeDate = latestDateUnder(tradeRoot, (fullPath) => fs.existsSync(path.join(fullPath, 'trade_state.json')));

  const strategyDate = latestDateUnder(cacheRoot, (fullPath) =>
    fs.existsSync(path.join(fullPath, 'daily_investment_strategy.json')) && fs.existsSync(path.join(fullPath, 'taiwan_short_term.json'))
  );

  return {
    newsDate,
    tradeDate,
    strategyDate,
    shortTermDate: strategyDate,
  };
}

function extractEquity(payload) {
  const value = payload?.trade_state?.equity ?? payload?.equity ?? payload?.final_decision?.equity;
  return Number.isFinite(Number(value)) ? Number(value) : null;
}

function buildMockPortfolioSeries(tradeExecutionRoot) {
  if (!fs.existsSync(tradeExecutionRoot)) return [];

  const dates = fs.readdirSync(tradeExecutionRoot)
    .filter((name) => isDateDirectory(name, path.join(tradeExecutionRoot, name)))
    .sort((a, b) => a.localeCompare(b, 'en'));

  return dates.map((date) => {
    const dir = path.join(tradeExecutionRoot, date);
    const state = readJsonIfExists(path.join(dir, 'trade_state.json'));
    const morning = readJsonIfExists(path.join(dir, 'trade_execution_0930.json'));
    const midday = readJsonIfExists(path.join(dir, 'trade_execution_1320.json'))
      || readJsonIfExists(path.join(dir, 'trade_execution_1325.json'));

    const points = [];
    const morningEquity = extractEquity(morning) ?? extractEquity(state);
    if (morningEquity !== null) {
      points.push({
        slot: '0930',
        equity: morningEquity,
        timestamp: morning?.generated_at || morning?.trade_state?.last_slot || '09:30',
      });
    }

    const middayEquity = extractEquity(midday) ?? extractEquity(state);
    if (middayEquity !== null) {
      points.push({
        slot: midday?.slot || '1320',
        equity: middayEquity,
        timestamp: midday?.generated_at || midday?.trade_state?.last_slot || '13:20',
      });
    }

    if (!points.length) return null;

    const openValue = points[0].equity;
    const closeValue = points[points.length - 1].equity;

    return {
      date,
      openValue,
      closeValue,
      deltaValue: closeValue - openValue,
      points,
    };
  }).filter(Boolean);
}

function buildLatestDataManifest(cacheRoot) {
  if (!fs.existsSync(cacheRoot)) {
    return { latest_date: '', latest_updated_at: '', signature: '', generated_at: new Date().toISOString(), source_dates: {} };
  }

  const dates = fs.readdirSync(cacheRoot)
    .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name) && fs.existsSync(path.join(cacheRoot, name)) && fs.statSync(path.join(cacheRoot, name)).isDirectory())
    .sort((a, b) => a.localeCompare(b, 'en'));

  const watchedFiles = [];
  const stack = [cacheRoot];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (/\.(json|md|csv)$/i.test(entry.name) && entry.name !== 'latest_data.json') {
        watchedFiles.push(fullPath);
      }
    }
  }

  const backtestPath = path.join(path.dirname(cacheRoot), 'backtest_switch_summary.csv');
  if (fs.existsSync(backtestPath)) watchedFiles.push(backtestPath);

  let latestMtimeMs = 0;
  for (const filePath of watchedFiles) {
    const stat = fs.statSync(filePath);
    if (stat.mtimeMs > latestMtimeMs) latestMtimeMs = stat.mtimeMs;
  }

  const repoRoot = path.dirname(cacheRoot);
  const sourceDates = resolveLatestDashboardDates(repoRoot);

  return {
    latest_date: dates.length ? dates[dates.length - 1] : '',
    latest_updated_at: latestMtimeMs ? new Date(latestMtimeMs).toISOString() : '',
    signature: String(latestMtimeMs || 0),
    source_dates: sourceDates,
    generated_at: new Date().toISOString(),
  };
}

function writeLatestDataManifest(cacheRoot, options = {}) {
  const outDir = options.outDir || cacheRoot;
  const manifest = buildLatestDataManifest(cacheRoot);
  const outPath = path.join(outDir, 'latest_data.json');
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), 'utf8');
  return outPath;
}

function buildNewsSnapshot(cacheDateDir, limitPerCategory = 10) {
  const categories = {};
  for (const category of CATEGORY_ORDER) {
    const dir = path.join(cacheDateDir, category);
    const files = listMarkdownFiles(dir).slice(0, limitPerCategory);
    categories[category] = files.map((fileName) => {
      const filePath = path.join(dir, fileName);
      const text = fs.readFileSync(filePath, 'utf8');
      const parsed = parseArticleMarkdown(text, filePath);
      return { ...parsed, category };
    });
  }

  return {
    date: path.basename(cacheDateDir),
    generated_at: new Date().toISOString(),
    categories,
  };
}

function writeNewsSnapshot(cacheDateDir, limitPerCategory = 10) {
  const snapshot = buildNewsSnapshot(cacheDateDir, limitPerCategory);
  const outPath = path.join(cacheDateDir, '0050_news_snapshot.json');
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2), 'utf8');
  return outPath;
}

function buildDashboardBootstrap(cacheDateDir, limitPerCategory = 10) {
  const repoRoot = path.resolve(path.join(path.dirname(cacheDateDir), '..'));
  const cacheRoot = path.join(repoRoot, 'cache');
  const tradeRoot = path.join(cacheRoot, 'trade_execution');
  const sourceDates = resolveLatestDashboardDates(repoRoot);
  const tradeDate = sourceDates.tradeDate || path.basename(cacheDateDir);
  const newsDate = sourceDates.newsDate || path.basename(cacheDateDir);
  const strategyDate = sourceDates.strategyDate || path.basename(cacheDateDir);
  const tradeDir = path.join(tradeRoot, tradeDate);
  const newsDir = path.join(cacheRoot, newsDate);
  const strategyDir = path.join(cacheRoot, strategyDate);
  const backtestPath = path.join(repoRoot, 'backtest_switch_summary.csv');
  const dataManifest = buildLatestDataManifest(cacheRoot);

  return {
    date: tradeDate || newsDate || path.basename(cacheDateDir),
    generated_at: new Date().toISOString(),
    sourceDates,
    dataManifest,
    state: readJsonIfExists(path.join(tradeDir, 'trade_state.json')),
    strategy: readJsonIfExists(path.join(strategyDir, 'daily_investment_strategy.json')),
    shortTerm: readJsonIfExists(path.join(strategyDir, 'taiwan_short_term.json')),
    morning: readJsonIfExists(path.join(tradeDir, 'trade_execution_0930.json')),
    midday: readJsonIfExists(path.join(tradeDir, 'trade_execution_1320.json'))
      || readJsonIfExists(path.join(tradeDir, 'trade_execution_1325.json')),
    parsedMacro: buildNewsSnapshot(newsDir, limitPerCategory),
    backtestSeries: buildBacktestSeries(backtestPath),
    mockPortfolioSeries: buildMockPortfolioSeries(tradeRoot),
  };
}

function writeDashboardBootstrap(cacheDateDir, options = {}) {
  const outDir = options.outDir || path.resolve(__dirname);
  const repoRoot = path.resolve(path.join(path.dirname(cacheDateDir), '..'));
  const sourceDates = resolveLatestDashboardDates(repoRoot);
  if (sourceDates.newsDate) {
    writeNewsSnapshot(path.join(repoRoot, 'cache', sourceDates.newsDate), options.limitPerCategory ?? 10);
  }
  const bootstrap = buildDashboardBootstrap(cacheDateDir, options.limitPerCategory ?? 10);
  const outPath = path.join(outDir, '0050_dashboard_bootstrap.js');
  const text = `window.ETFDashboardBootstrap = ${JSON.stringify(bootstrap, null, 2)};\n`;
  fs.writeFileSync(outPath, text, 'utf8');
  return outPath;
}

if (require.main === module) {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: node tools/0050_dashboard_snapshot.js <cache-date-dir>');
    process.exit(1);
  }
  const repoRoot = path.resolve(path.join(path.dirname(target), '..'));
  const sourceDates = resolveLatestDashboardDates(repoRoot);
  const newsDir = sourceDates.newsDate ? path.join(repoRoot, 'cache', sourceDates.newsDate) : target;
  const outPath = writeNewsSnapshot(newsDir, 10);
  const bootstrapPath = writeDashboardBootstrap(target);
  const manifestPath = writeLatestDataManifest(path.dirname(target));
  console.log(outPath);
  console.log(bootstrapPath);
  console.log(manifestPath);
}

module.exports = {
  buildBacktestSeries,
  buildDashboardBootstrap,
  buildLatestDataManifest,
  buildMockPortfolioSeries,
  buildNewsSnapshot,
  latestDateUnder,
  parseArticleMarkdown,
  resolveLatestDashboardDates,
  writeLatestDataManifest,
  writeDashboardBootstrap,
  writeNewsSnapshot,
};
