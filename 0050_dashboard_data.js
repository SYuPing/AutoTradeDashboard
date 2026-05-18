(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ETFDashboardData = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  function parseMacroNews(text) {
    const items = { technology: [], finance: [], politics: [] };
    const currentCategoryMap = { 科技: 'technology', 金融: 'finance', 政治: 'politics' };
    const categoryLabelMap = { technology: '科技', finance: '金融', politics: '政治' };

    let current = null;

    function pushCurrent() {
      if (!current) return;
      if (!current.summary) current.summary = current.title;
      if (!items[current.category].some((x) => x.title === current.title && x.summary === current.summary)) {
        items[current.category].push(current);
      }
      current = null;
    }

    for (const raw of String(text || '').split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;

      const articleMatch = line.match(/^\d+\.\s*\[(科技|金融|政治)\]\s*(.+)$/);
      if (articleMatch) {
        pushCurrent();
        current = {
          category: currentCategoryMap[articleMatch[1]],
          categoryLabel: articleMatch[1],
          title: articleMatch[2].trim(),
          summary: '',
          source: 'macro.md',
        };
        continue;
      }

      if (current && line.startsWith('摘要：')) {
        current.summary = line.replace(/^摘要：/, '').trim();
        continue;
      }
    }

    pushCurrent();
    return { items, categoryLabelMap };
  }

  return { parseMacroNews };
});
