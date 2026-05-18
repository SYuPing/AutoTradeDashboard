const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const {
  buildMockPortfolioSeries,
  buildBacktestSeries,
  buildDashboardBootstrap,
  buildLatestDataManifest,
  resolveLatestDashboardDates,
  buildNewsSnapshot,
  writeLatestDataManifest,
  writeDashboardBootstrap,
} = require('./0050_dashboard_snapshot');

function writeText(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf8');
}

function seedDashboardDate(rootDir, date, equity) {
  for (const category of ['technology', 'finance', 'politics']) {
    const articlePath = path.join(rootDir, 'cache', date, category, `01-${category}.md`);
    writeText(articlePath, `# ${date} ${category} headline\n\n- source: example\n- category: ${category}\n- published: 2026-05-16 00:00:00\n- importance: 1\n- market_sentiment: neutral\n- sentiment_score: 0\n- sentiment_strength: 1\n- macro_driver: mixed\n- event_type: mixed\n- event_direction: neutral\n- impact_scope: local\n- link: https://example.com/${date}/${category}\n\n---\n\n## 中文摘要\n\n${date} ${category} summary`);
  }

  writeJson(path.join(rootDir, 'cache', date, 'daily_investment_strategy.json'), {
    decision: `decision-${date}`,
    strategy: `strategy-${date}`,
  });
  writeJson(path.join(rootDir, 'cache', date, 'taiwan_short_term.json'), {
    stance: `stance-${date}`,
    suggestion: `suggestion-${date}`,
  });

  const tradeDir = path.join(rootDir, 'cache', 'trade_execution', date);
  writeJson(path.join(tradeDir, 'trade_state.json'), {
    date,
    equity,
    cash_balance_after: equity - 10,
    market_value: 10,
    shares_held: 1,
    avg_cost: 10,
    cumulative_pnl: equity - 100,
    realized_pnl_cum: 1,
    unrealized_pnl: 2,
    last_mark_price: 10,
    last_trade_price: 10,
    last_slot: '1320',
    order_notional: 10,
  });
  writeJson(path.join(tradeDir, 'trade_execution_0930.json'), {
    generated_at: `${date} 09:30:00`,
    slot: '0930',
    trade_state: { equity: equity - 5, order_notional: 5 },
    final_decision: { status: 'EXECUTE', reason: 'morning' },
  });
  writeJson(path.join(tradeDir, 'trade_execution_1320.json'), {
    generated_at: `${date} 13:20:00`,
    slot: '1320',
    trade_state: { equity, order_notional: 10 },
    final_decision: { status: 'EXECUTE', reason: 'midday' },
  });
}

const snapshot = buildNewsSnapshot(path.join(__dirname, '..', 'cache', '2026-05-15'));
const series = buildBacktestSeries(path.join(__dirname, '..', 'backtest_switch_summary.csv'));
const mockSeries = buildMockPortfolioSeries(path.join(__dirname, '..', 'cache', 'trade_execution'));
const latestManifest = buildLatestDataManifest(path.join(__dirname, '..', 'cache'));
const expectedLatestDate = fs.readdirSync(path.join(__dirname, '..', 'cache'))
  .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name))
  .sort((a, b) => a.localeCompare(b, 'en'))
  .at(-1);
const expectedBacktestLastDate = fs.readFileSync(path.join(__dirname, '..', 'backtest_switch_summary.csv'), 'utf8')
  .replace(/^\uFEFF/, '')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((line) => line.split(',')[0])
  .at(-1);
const expectedBacktestLastValue = Number(fs.readFileSync(path.join(__dirname, '..', 'backtest_switch_summary.csv'), 'utf8')
  .replace(/^\uFEFF/, '')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .at(-1)
  .split(',')[8]);

assert.equal(snapshot.categories.technology.length, 10, 'technology should expose all 10 news items');
assert.equal(snapshot.categories.finance.length, 10, 'finance should expose all 10 news items');
assert.equal(snapshot.categories.politics.length, 10, 'politics should expose all 10 news items');

assert.match(snapshot.categories.finance[0].title, /Flocean/i);
assert.match(snapshot.categories.politics[0].title, /analysis|At a glance|Starmer|Burnham/i);
assert.ok(series.length >= 20, 'backtest series should include the full date history');
assert.equal(series[0].date, '2026-03-31');
assert.equal(series[series.length - 1].date, expectedBacktestLastDate);
assert.equal(series[0].portfolioValue, 99908);
assert.equal(series[series.length - 1].portfolioValue, expectedBacktestLastValue);
assert.ok(mockSeries.length >= 1, 'mock portfolio series should be present');
assert.ok(mockSeries[0].points.length >= 1, 'mock portfolio series should include points');
assert.equal(latestManifest.latest_date, expectedLatestDate);
assert.ok(latestManifest.signature, 'latest manifest should expose a signature');
assert.ok(latestManifest.latest_updated_at, 'latest manifest should expose a timestamp');
assert.ok(latestManifest.source_dates, 'latest manifest should expose source dates');

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), '0050-dashboard-'));
const bootstrap = buildDashboardBootstrap(path.join(__dirname, '..', 'cache', '2026-05-15'));
const bootstrapPath = writeDashboardBootstrap(
  path.join(__dirname, '..', 'cache', '2026-05-15'),
  { outDir: tempDir }
);
const manifestPath = writeLatestDataManifest(path.join(__dirname, '..', 'cache'), { outDir: tempDir });
const bootstrapText = fs.readFileSync(bootstrapPath, 'utf8');
const manifestText = fs.readFileSync(manifestPath, 'utf8');

assert.ok(bootstrap.backtestSeries.length >= 20, 'bootstrap should embed backtest data');
assert.ok(bootstrap.mockPortfolioSeries?.length >= 1, 'bootstrap should embed mock portfolio data');
assert.equal(bootstrap.dataManifest.signature, latestManifest.signature);
assert.ok(bootstrap.sourceDates, 'bootstrap should embed source dates');
assert.match(bootstrapText, /window\.ETFDashboardBootstrap\s*=\s*\{/);
assert.match(bootstrapText, /"technology"/);
assert.match(bootstrapText, /"backtestSeries"/);
assert.match(bootstrapText, /"mockPortfolioSeries"/);
assert.match(bootstrapText, /"dataManifest"/);
assert.match(bootstrapText, /"sourceDates"/);
assert.match(manifestText, /"latest_date"/);
assert.match(manifestText, /"signature"/);

const freshnessRoot = fs.mkdtempSync(path.join(os.tmpdir(), '0050-freshness-'));
seedDashboardDate(freshnessRoot, '2026-05-15', 150);
seedDashboardDate(freshnessRoot, '2026-05-16', 250);
const freshnessResolved = resolveLatestDashboardDates(freshnessRoot);
assert.equal(freshnessResolved.newsDate, '2026-05-16');
assert.equal(freshnessResolved.tradeDate, '2026-05-16');
assert.equal(freshnessResolved.strategyDate, '2026-05-16');

const freshnessBootstrap = buildDashboardBootstrap(path.join(freshnessRoot, 'cache', '2026-05-15'));
assert.equal(freshnessBootstrap.sourceDates.newsDate, '2026-05-16');
assert.equal(freshnessBootstrap.sourceDates.tradeDate, '2026-05-16');
assert.equal(freshnessBootstrap.sourceDates.strategyDate, '2026-05-16');
assert.equal(freshnessBootstrap.state.equity, 250);
assert.equal(freshnessBootstrap.parsedMacro.date, '2026-05-16');

console.log('dashboard snapshot ok');
