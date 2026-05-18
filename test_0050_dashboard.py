from pathlib import Path


def test_dashboard_html_exists_and_has_core_sections():
    html_path = Path(__file__).with_name("0050_dashboard.html")
    text = html_path.read_text(encoding="utf-8")

    assert "台股 ETF 管理系統" in text
    assert "買 / 賣 / 紀錄" not in text
    assert "預設接 0050 模擬倉，這裡先作為操作入口與回填面板。" not in text
    assert "0050 持倉明細" in text
    assert "回測趨勢圖" in text
    assert "模擬倉趨勢圖" in text
    assert "日內變化量" in text
    assert "最高點" in text
    assert "最低點" in text
    assert "近 7 日" in text
    assert "backtest-tooltip" in text
    assert ".news-strength.low" in text
    assert ".news-strength.medium" in text
    assert ".news-strength.high" in text
    assert "overflow-y: auto" in text
    assert "slice(0, 10)" in text
    assert 'name="tradeDate"' not in text
    assert 'id="tradePrice"' not in text
    assert 'id="tradeShares"' not in text
    assert "bootstrap?.sourceDates" in text
    assert "latestTradeDate" in text
    assert "科技" in text
    assert "金融" in text
    assert "政治" in text
    assert "trade_state.json" in text
    assert "latest_data.json" in text
    assert "daily_investment_strategy.json" in text
    assert "taiwan_short_term.json" in text
    assert "backtest_switch_summary.csv" in text
