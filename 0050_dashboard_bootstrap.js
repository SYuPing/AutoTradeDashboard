window.ETFDashboardBootstrap = {
  "date": "2026-05-28",
  "generated_at": "2026-05-28T05:30:02.961Z",
  "sourceDates": {
    "newsDate": "2026-05-28",
    "tradeDate": "2026-05-28",
    "strategyDate": "2026-05-28",
    "shortTermDate": "2026-05-28"
  },
  "dataManifest": {
    "latest_date": "2026-05-28",
    "latest_updated_at": "2026-05-28T05:30:02.545Z",
    "signature": "1779946202545.5593",
    "source_dates": {
      "newsDate": "2026-05-28",
      "tradeDate": "2026-05-28",
      "strategyDate": "2026-05-28",
      "shortTermDate": "2026-05-28"
    },
    "generated_at": "2026-05-28T05:30:02.961Z"
  },
  "state": {
    "date": "2026-05-28",
    "daily_capital": 100000,
    "starting_weight": 0.443205,
    "starting_notional": 44320.5,
    "starting_shares": 441,
    "starting_avg_cost": 97.697643,
    "current_weight": 0,
    "current_notional": 0,
    "shares_held": 0,
    "avg_cost": 0,
    "cost_basis_total": 0,
    "market_value": 0,
    "used_capital": 0,
    "remaining_capital": 100394.5,
    "cash_balance_before": 56074,
    "cash_balance_after": 100394.5,
    "equity": 100394.5,
    "realized_pnl_cum": 987.8,
    "unrealized_pnl": 0,
    "last_trade_price": 100.5,
    "last_mark_price": 100.5,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-28 09:30:10",
        "target_weight": 0.457978,
        "current_weight_before": 0.463171,
        "delta_weight": -0.005192,
        "delta_notional": 519.25,
        "quote_fresh": true,
        "cash_before": 55554.75,
        "cash_after": 56074,
        "equity_after": 101871.85,
        "shares_before": 446,
        "shares_after": 441,
        "fill_shares": -5,
        "avg_cost_after": 97.697643,
        "realized_pnl_cum": -248.04,
        "unrealized_pnl": 2713.19,
        "cumulative_pnl": 2465.15
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-28 13:20:11",
        "target_weight": 0,
        "current_weight_before": 0.443205,
        "delta_weight": -0.443205,
        "delta_notional": 44320.5,
        "quote_fresh": true,
        "cash_before": 56074,
        "cash_after": 100394.5,
        "equity_after": 100394.5,
        "shares_before": 441,
        "shares_after": 0,
        "fill_shares": -441,
        "avg_cost_after": 0,
        "realized_pnl_cum": 987.8,
        "unrealized_pnl": 0,
        "cumulative_pnl": 987.8
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-27\\trade_state.json",
    "order_notional": 44320.5,
    "order_weight": -0.443205,
    "cumulative_pnl": 987.8
  },
  "strategy": {
    "decision": "",
    "strategy": "",
    "instrument": "",
    "window": "",
    "confidence": "",
    "execution_points": [
      "1. **宏觀面偏 risk-off，但台股內部結構偏強**",
      "2. **跨資產訊號不一致，不能直接重倉**",
      "3. **台股早盤優先看台積電 ADR 與權值股延續性**"
    ],
    "data_needs": [
      "台指期夜盤走勢",
      "台積電現貨開盤前委買委賣與預估開盤價",
      "外資/投信盤前籌碼或期貨淨部位",
      "0050 盤前預估量與前一日成交量比",
      "台積電、聯發科、鴻海的 5 分鐘級別量價結構"
    ],
    "risk_points": [
      "目前宏觀是 **成長放緩 + 防禦偏好**，若早盤台股只是靠 ADR 高開，但量能不跟，容易出現 **開高走低**。",
      "原油、黃金與美元訊號不完全一致，代表市場仍在消化宏觀敘事，**不適合一次性重倉**。",
      "若開盤後 30 分鐘內：",
      "台積電跌破開盤價",
      "0050 量增但不漲",
      "聯發科/台達電/鴻海同步轉弱"
    ],
    "raw_text": "9點前決策\n- **決策：降槓桿小部位試單**\n- **策略：偏多，但只做「台股權值龍頭」的試單，不追價滿倉**\n- **操作標的：0050 或 0050 相關權值股籃子（以台積電、聯發科、台達電、鴻海為核心）**\n- **觀察窗：T+1 ~ T+5**\n- **信心：中等偏高，但不是滿分；適合先小部位進場，不適合激進重倉**\n\n執行重點\n1. **宏觀面偏 risk-off，但台股內部結構偏強**\n- 新聞主線是「歐洲/英國成長放緩 + 能源/通膨尾風險」，理論上對風險資產不利。\n- 但台股 0050 技術面是 **bullish 28 / bearish 11 / momentum+ 28**，結構明顯偏多。\n- 代表：**大盤不是全面轉弱，而是資金仍集中在權值與強勢股。**\n\n2. **跨資產訊號不一致，不能直接重倉**\n- TLT 上漲、工業金屬下跌，符合風險趨避。\n- 但 SPY/QQQ 仍偏強、VIX 下滑，表示市場還沒完全進入恐慌。\n- 這種環境下，**最好的做法不是空手，也不是重押，而是小部位跟隨強勢結構。**\n\n3. **台股早盤優先看台積電 ADR 與權值股延續性**\n- TSM ADR **+2.52%**，對台積電與 0050 是明確正面。\n- 0050 權值焦點中，台積電、聯發科、台達電、鴻海、日月光投控都偏強。\n- 因此早盤若台積電/聯發科開高不失速，可用 **0050 分批試單**；若開高走弱，則不追。\n\n補充資料需求\n若要把「小部位試單」升級成「直接進場偏多」，我還需要以下資料：\n- **台指期夜盤走勢**\n- **台積電現貨開盤前委買委賣與預估開盤價**\n- **外資/投信盤前籌碼或期貨淨部位**\n- **0050 盤前預估量與前一日成交量比**\n- **台積電、聯發科、鴻海的 5 分鐘級別量價結構**\n\n風險提醒\n- 目前宏觀是 **成長放緩 + 防禦偏好**，若早盤台股只是靠 ADR 高開，但量能不跟，容易出現 **開高走低**。\n- 原油、黃金與美元訊號不完全一致，代表市場仍在消化宏觀敘事，**不適合一次性重倉**。\n- 若開盤後 30 分鐘內：\n- 台積電跌破開盤價\n- 0050 量增但不漲\n- 聯發科/台達電/鴻海同步轉弱\n則應停止加碼，甚至把試單降回現金。\n\n**結論：現在可以部署，但只建議「降槓桿小部位試單」，方向偏多，標的以 0050 或權值籃子為主。**"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔分批；權值股以強勢龍頭續抱、弱勢權值不接刀；若要操作，偏向 T+1~T+5 的拉回承接，不做盤中追高。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330)",
      "聯發科(2454) / 台達電(2308)",
      "廣達(2382) / 世芯-KY(3661) / 川湖(2059)"
    ],
    "risk_points": [
      "若台積電回檔失守、聯發科/台達電漲勢中斷，0050 會從「強勢輪動」轉成「高檔震盪」。",
      "若美債/美元避險情緒快速反轉，宏觀風險降溫，今天的降槓桿判斷可能失效，0050 會重新轉為偏多。",
      "若權值股廣度從目前 bullish 28 明顯縮水，或 volume spike 轉成高檔爆量不漲，代表短線上攻力道衰退，應立即降低部位。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔分批；權值股以強勢龍頭續抱、弱勢權值不接刀；若要操作，偏向 T+1~T+5 的拉回承接，不做盤中追高。**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330)**\n- 0050 權重最高，且 5D +5.26% 仍偏強，是 0050 方向的核心。\n- 但目前宏觀是 Risk-off，代表台股雖有技術支撐，仍不適合在高位追價。\n- 做法：**只看回檔承接，不追突破。**\n\n2. **聯發科(2454) / 台達電(2308)**\n- 兩檔 5D 漲幅都很強，屬於 0050 內部最明顯的多頭推進股。\n- 它們代表的是權值股內部的資金集中度，若續強，0050 才有機會維持相對強勢。\n- 做法：**強勢續抱，但不在急漲後追高。**\n\n3. **廣達(2382) / 世芯-KY(3661) / 川湖(2059)**\n- 這幾檔是目前 0050/權值結構中的相對弱勢點，且有明顯回落。\n- 在宏觀偏空時，弱勢權值通常會先拖累指數節奏。\n- 做法：**先避開，等止跌訊號再說。**\n\n風險提醒\n- **若台積電回檔失守、聯發科/台達電漲勢中斷，0050 會從「強勢輪動」轉成「高檔震盪」。**\n- **若美債/美元避險情緒快速反轉，宏觀風險降溫，今天的降槓桿判斷可能失效，0050 會重新轉為偏多。**\n- **若權值股廣度從目前 bullish 28 明顯縮水，或 volume spike 轉成高檔爆量不漲，代表短線上攻力道衰退，應立即降低部位。**"
  },
  "morning": {
    "generated_at": "2026-05-28 09:30:10",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-28\\trade_state.json",
    "trade_state": {
      "date": "2026-05-28",
      "daily_capital": 100000,
      "starting_weight": 0.463171,
      "starting_notional": 46317.1,
      "starting_shares": 446,
      "starting_avg_cost": 97.697643,
      "current_weight": 0.457979,
      "current_notional": 45797.85,
      "shares_held": 441,
      "avg_cost": 97.697643,
      "cost_basis_total": 43084.66,
      "market_value": 45797.85,
      "used_capital": 45797.85,
      "remaining_capital": 56074,
      "cash_balance_before": 55554.75,
      "cash_balance_after": 56074,
      "equity": 101871.85,
      "realized_pnl_cum": -248.04,
      "unrealized_pnl": 2713.19,
      "last_trade_price": 103.849998,
      "last_mark_price": 103.849998,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-28 09:30:10",
          "target_weight": 0.457978,
          "current_weight_before": 0.463171,
          "delta_weight": -0.005192,
          "delta_notional": 519.25,
          "quote_fresh": true,
          "cash_before": 55554.75,
          "cash_after": 56074,
          "equity_after": 101871.85,
          "shares_before": 446,
          "shares_after": 441,
          "fill_shares": -5,
          "avg_cost_after": 97.697643,
          "realized_pnl_cum": -248.04,
          "unrealized_pnl": 2713.19,
          "cumulative_pnl": 2465.15
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-27\\trade_state.json",
      "order_notional": 519.25,
      "order_weight": -0.005192,
      "cumulative_pnl": 2465.15
    },
    "base_decision": {
      "date": "2026-05-28",
      "final_positions": {
        "0050.TW": 0.458333,
        "CASH": 0.45,
        "TLT": 0.091667,
        "GLD": 0
      },
      "exposure": 0.55,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.55,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "MIXED",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.55,
        "edge_filter": "NO TRADE",
        "learning_enabled": true,
        "0050_priority": true,
        "0050_proxy_boost": 0.25,
        "0050_proxy_focus": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW",
          "2383.TW",
          "2454.TW",
          "2881.TW",
          "2891.TW",
          "3711.TW"
        ],
        "monthly_target_return": 0.05,
        "monthly_max_drawdown": -0.03,
        "current_month_return": 0.0727,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-28",
      "final_positions": {
        "0050.TW": 0.457978,
        "CASH": 0.542022,
        "TLT": 0.091667,
        "GLD": 0
      },
      "exposure": 0.457978,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.457978,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "MIXED",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.55,
        "edge_filter": "NO TRADE",
        "learning_enabled": true,
        "0050_priority": true,
        "0050_proxy_boost": 0.25,
        "0050_proxy_focus": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW",
          "2383.TW",
          "2454.TW",
          "2881.TW",
          "2891.TW",
          "3711.TW"
        ],
        "monthly_target_return": 0.05,
        "monthly_max_drawdown": -0.03,
        "current_month_return": 0.0727,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 3.7463,
        "focus_positive_count": 3,
        "focus_positive": [
          "2317.TW",
          "2330.TW",
          "2382.TW"
        ],
        "action": "EXECUTE",
        "reason": "MORNING_CONFIRM_OK",
        "target_exposure": 0.45
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 103.8499984741211,
          "prev_close": 100.0999984741211,
          "change_pct": 3.7463,
          "as_of": "2026-05-28T01:10:00"
        },
        "2308.TW": {
          "last_price": 2500,
          "prev_close": 2520,
          "change_pct": -0.7937,
          "as_of": "2026-05-28T01:10:00"
        },
        "2317.TW": {
          "last_price": 267.5,
          "prev_close": 264,
          "change_pct": 1.3258,
          "as_of": "2026-05-28T01:10:00"
        },
        "2330.TW": {
          "last_price": 2345,
          "prev_close": 2300,
          "change_pct": 1.9565,
          "as_of": "2026-05-28T01:10:00"
        },
        "2345.TW": {
          "last_price": 2545,
          "prev_close": 2620,
          "change_pct": -2.8626,
          "as_of": "2026-05-28T01:09:00"
        },
        "2382.TW": {
          "last_price": 316.5,
          "prev_close": 312,
          "change_pct": 1.4423,
          "as_of": "2026-05-28T01:10:00"
        },
        "USO": {
          "last_price": 131.02000427246094,
          "prev_close": 137,
          "change_pct": -4.365,
          "as_of": "2026-05-27T19:59:00"
        },
        "GLD": {
          "last_price": 408.5199890136719,
          "prev_close": 414,
          "change_pct": -1.3237,
          "as_of": "2026-05-27T19:59:00"
        },
        "TLT": {
          "last_price": 85.29000091552734,
          "prev_close": 85.0999984741211,
          "change_pct": 0.2233,
          "as_of": "2026-05-27T19:59:00"
        },
        "QQQ": {
          "last_price": 729.489990234375,
          "prev_close": 730.280029296875,
          "change_pct": -0.1082,
          "as_of": "2026-05-27T19:59:00"
        },
        "SPY": {
          "last_price": 750.469970703125,
          "prev_close": 750.5900268554688,
          "change_pct": -0.016,
          "as_of": "2026-05-27T19:59:00"
        },
        "UUP": {
          "last_price": 27.764999389648438,
          "prev_close": 27.75,
          "change_pct": 0.0541,
          "as_of": "2026-05-27T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 103.8499984741211,
        "prev_close": 100.0999984741211,
        "change_pct": 3.7463,
        "as_of": "2026-05-28T01:10:00"
      },
      "2308.TW": {
        "last_price": 2500,
        "prev_close": 2520,
        "change_pct": -0.7937,
        "as_of": "2026-05-28T01:10:00"
      },
      "2317.TW": {
        "last_price": 267.5,
        "prev_close": 264,
        "change_pct": 1.3258,
        "as_of": "2026-05-28T01:10:00"
      },
      "2330.TW": {
        "last_price": 2345,
        "prev_close": 2300,
        "change_pct": 1.9565,
        "as_of": "2026-05-28T01:10:00"
      },
      "2345.TW": {
        "last_price": 2545,
        "prev_close": 2620,
        "change_pct": -2.8626,
        "as_of": "2026-05-28T01:09:00"
      },
      "2382.TW": {
        "last_price": 316.5,
        "prev_close": 312,
        "change_pct": 1.4423,
        "as_of": "2026-05-28T01:10:00"
      },
      "USO": {
        "last_price": 131.02000427246094,
        "prev_close": 137,
        "change_pct": -4.365,
        "as_of": "2026-05-27T19:59:00"
      },
      "GLD": {
        "last_price": 408.5199890136719,
        "prev_close": 414,
        "change_pct": -1.3237,
        "as_of": "2026-05-27T19:59:00"
      },
      "TLT": {
        "last_price": 85.29000091552734,
        "prev_close": 85.0999984741211,
        "change_pct": 0.2233,
        "as_of": "2026-05-27T19:59:00"
      },
      "QQQ": {
        "last_price": 729.489990234375,
        "prev_close": 730.280029296875,
        "change_pct": -0.1082,
        "as_of": "2026-05-27T19:59:00"
      },
      "SPY": {
        "last_price": 750.469970703125,
        "prev_close": 750.5900268554688,
        "change_pct": -0.016,
        "as_of": "2026-05-27T19:59:00"
      },
      "UUP": {
        "last_price": 27.764999389648438,
        "prev_close": 27.75,
        "change_pct": 0.0541,
        "as_of": "2026-05-27T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 103.85,
        "shares": 5,
        "notional": 519.25,
        "weight": -0.005192,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 2465.15,
    "equity": 101871.85,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.463\n起始股數：446\n今日已用：45,798\n今日剩餘：56,074\n下單金額：519\n現金前後：55,555 -> 56,074\n總資產：101,872\n持有股數：441\n持有均價：97.70\n已實現損益：-248\n未實現損益：2,713\n目前累積損益：2,465\n0050部位：0.458\n現金：0.542\n0050即時：+3.75% @ 2026-05-28T01:10:00\n承接來源：cache\\trade_execution\\2026-05-27\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 104 × 5 股（約 519）\n參考資產：USO:-4.37% / GLD:-1.32% / TLT:+0.22% / QQQ:-0.11%\n目標曝險：0.458\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-28 13:20:11",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-28\\trade_state.json",
    "trade_state": {
      "date": "2026-05-28",
      "daily_capital": 100000,
      "starting_weight": 0.443205,
      "starting_notional": 44320.5,
      "starting_shares": 441,
      "starting_avg_cost": 97.697643,
      "current_weight": 0,
      "current_notional": 0,
      "shares_held": 0,
      "avg_cost": 0,
      "cost_basis_total": 0,
      "market_value": 0,
      "used_capital": 0,
      "remaining_capital": 100394.5,
      "cash_balance_before": 56074,
      "cash_balance_after": 100394.5,
      "equity": 100394.5,
      "realized_pnl_cum": 987.8,
      "unrealized_pnl": 0,
      "last_trade_price": 100.5,
      "last_mark_price": 100.5,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-28 09:30:10",
          "target_weight": 0.457978,
          "current_weight_before": 0.463171,
          "delta_weight": -0.005192,
          "delta_notional": 519.25,
          "quote_fresh": true,
          "cash_before": 55554.75,
          "cash_after": 56074,
          "equity_after": 101871.85,
          "shares_before": 446,
          "shares_after": 441,
          "fill_shares": -5,
          "avg_cost_after": 97.697643,
          "realized_pnl_cum": -248.04,
          "unrealized_pnl": 2713.19,
          "cumulative_pnl": 2465.15
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-28 13:20:11",
          "target_weight": 0,
          "current_weight_before": 0.443205,
          "delta_weight": -0.443205,
          "delta_notional": 44320.5,
          "quote_fresh": true,
          "cash_before": 56074,
          "cash_after": 100394.5,
          "equity_after": 100394.5,
          "shares_before": 441,
          "shares_after": 0,
          "fill_shares": -441,
          "avg_cost_after": 0,
          "realized_pnl_cum": 987.8,
          "unrealized_pnl": 0,
          "cumulative_pnl": 987.8
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-27\\trade_state.json",
      "order_notional": 44320.5,
      "order_weight": -0.443205,
      "cumulative_pnl": 987.8
    },
    "base_decision": {
      "date": "2026-05-28",
      "final_positions": {
        "0050.TW": 0.458333,
        "CASH": 0.45,
        "TLT": 0.091667,
        "GLD": 0
      },
      "exposure": 0.55,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.55,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "MIXED",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.55,
        "edge_filter": "NO TRADE",
        "learning_enabled": true,
        "0050_priority": true,
        "0050_proxy_boost": 0.25,
        "0050_proxy_focus": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW",
          "2383.TW",
          "2454.TW",
          "2881.TW",
          "2891.TW",
          "3711.TW"
        ],
        "monthly_target_return": 0.05,
        "monthly_max_drawdown": -0.03,
        "current_month_return": 0.0727,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-28",
      "final_positions": {
        "0050.TW": 0,
        "CASH": 1,
        "TLT": 0,
        "GLD": 0
      },
      "exposure": 0,
      "status": "NO_TRADE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "MIXED",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.55,
        "edge_filter": "NO TRADE",
        "learning_enabled": true,
        "0050_priority": true,
        "0050_proxy_boost": 0.25,
        "0050_proxy_focus": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW",
          "2383.TW",
          "2454.TW",
          "2881.TW",
          "2891.TW",
          "3711.TW"
        ],
        "monthly_target_return": 0.05,
        "monthly_max_drawdown": -0.03,
        "current_month_return": 0.0727,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": -1.999,
        "focus_positive_count": 0,
        "focus_positive": [],
        "action": "CANCEL",
        "reason": "MIDDAY_CORE_BREAKDOWN",
        "target_exposure": 0
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 100.5,
          "prev_close": 102.55000305175781,
          "change_pct": -1.999,
          "as_of": "2026-05-28T05:00:00"
        },
        "2308.TW": {
          "last_price": 2385,
          "prev_close": 2520,
          "change_pct": -5.3571,
          "as_of": "2026-05-28T05:00:00"
        },
        "2317.TW": {
          "last_price": 261,
          "prev_close": 264,
          "change_pct": -1.1364,
          "as_of": "2026-05-28T05:00:00"
        },
        "2330.TW": {
          "last_price": 2280,
          "prev_close": 2300,
          "change_pct": -0.8696,
          "as_of": "2026-05-28T05:00:00"
        },
        "2345.TW": {
          "last_price": 2405,
          "prev_close": 2620,
          "change_pct": -8.2061,
          "as_of": "2026-05-28T05:00:00"
        },
        "2382.TW": {
          "last_price": 311,
          "prev_close": 312,
          "change_pct": -0.3205,
          "as_of": "2026-05-28T05:00:00"
        },
        "USO": {
          "last_price": 131.02000427246094,
          "prev_close": 137,
          "change_pct": -4.365,
          "as_of": "2026-05-27T19:59:00"
        },
        "GLD": {
          "last_price": 408.5199890136719,
          "prev_close": 414,
          "change_pct": -1.3237,
          "as_of": "2026-05-27T19:59:00"
        },
        "TLT": {
          "last_price": 85.29000091552734,
          "prev_close": 85.0999984741211,
          "change_pct": 0.2233,
          "as_of": "2026-05-27T19:59:00"
        },
        "QQQ": {
          "last_price": 729.489990234375,
          "prev_close": 730.280029296875,
          "change_pct": -0.1082,
          "as_of": "2026-05-27T19:59:00"
        },
        "SPY": {
          "last_price": 750.469970703125,
          "prev_close": 750.5900268554688,
          "change_pct": -0.016,
          "as_of": "2026-05-27T19:59:00"
        },
        "UUP": {
          "last_price": 27.764999389648438,
          "prev_close": 27.75,
          "change_pct": 0.0541,
          "as_of": "2026-05-27T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 100.5,
        "prev_close": 102.55000305175781,
        "change_pct": -1.999,
        "as_of": "2026-05-28T05:00:00"
      },
      "2308.TW": {
        "last_price": 2385,
        "prev_close": 2520,
        "change_pct": -5.3571,
        "as_of": "2026-05-28T05:00:00"
      },
      "2317.TW": {
        "last_price": 261,
        "prev_close": 264,
        "change_pct": -1.1364,
        "as_of": "2026-05-28T05:00:00"
      },
      "2330.TW": {
        "last_price": 2280,
        "prev_close": 2300,
        "change_pct": -0.8696,
        "as_of": "2026-05-28T05:00:00"
      },
      "2345.TW": {
        "last_price": 2405,
        "prev_close": 2620,
        "change_pct": -8.2061,
        "as_of": "2026-05-28T05:00:00"
      },
      "2382.TW": {
        "last_price": 311,
        "prev_close": 312,
        "change_pct": -0.3205,
        "as_of": "2026-05-28T05:00:00"
      },
      "USO": {
        "last_price": 131.02000427246094,
        "prev_close": 137,
        "change_pct": -4.365,
        "as_of": "2026-05-27T19:59:00"
      },
      "GLD": {
        "last_price": 408.5199890136719,
        "prev_close": 414,
        "change_pct": -1.3237,
        "as_of": "2026-05-27T19:59:00"
      },
      "TLT": {
        "last_price": 85.29000091552734,
        "prev_close": 85.0999984741211,
        "change_pct": 0.2233,
        "as_of": "2026-05-27T19:59:00"
      },
      "QQQ": {
        "last_price": 729.489990234375,
        "prev_close": 730.280029296875,
        "change_pct": -0.1082,
        "as_of": "2026-05-27T19:59:00"
      },
      "SPY": {
        "last_price": 750.469970703125,
        "prev_close": 750.5900268554688,
        "change_pct": -0.016,
        "as_of": "2026-05-27T19:59:00"
      },
      "UUP": {
        "last_price": 27.764999389648438,
        "prev_close": 27.75,
        "change_pct": 0.0541,
        "as_of": "2026-05-27T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 100.5,
        "shares": 441,
        "notional": 44320.5,
        "weight": -0.443205,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 987.8,
    "equity": 100394.5,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：NO_TRADE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.443\n起始股數：441\n今日已用：0\n今日剩餘：100,394\n下單金額：44,320\n現金前後：56,074 -> 100,394\n總資產：100,394\n持有股數：0\n持有均價：0.00\n已實現損益：988\n未實現損益：0\n目前累積損益：988\n0050部位：0.000\n現金：1.000\n0050即時：-2.00% @ 2026-05-28T05:00:00\n承接來源：cache\\trade_execution\\2026-05-27\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 100 × 441 股（約 44,320）\n參考資產：USO:-4.37% / GLD:-1.32% / TLT:+0.22% / QQQ:-0.11%\n目標曝險：0.000\nquote判斷：CANCEL | MIDDAY_CORE_BREAKDOWN",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-28",
    "generated_at": "2026-05-28T05:30:02.965Z",
    "categories": {
      "technology": [
        {
          "title": "NASA boss reveals unsettling reality behind newly released UFO files",
          "summary": "NASA負責人表示，新解密的UFO檔案顯示，數十年來確有未解現象被隱藏，並未向美國公眾公開。",
          "source": "01-nasa-boss-reveals-unsettling-reality-behind-newly-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15853471/NASA-boss-reveals-unsettling-reality-newly-released-UFO-files.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Fury erupts as thousands of sea lions face 'mass slaughter' in three US states",
          "summary": "美國太平洋西北地區因擬擴大在三州獵殺海獅，引發強烈爭議與抗議，相關官員正推動執行計畫。",
          "source": "02-fury-erupts-as-thousands-of-sea-lions-face-mass-sl.md",
          "link": "https://www.dailymail.com/sciencetech/article-15852637/Fury-erupts-sea-lions-face-mass-slaughter-three-US-states.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Chilling bodycam reveals UFO-linked Air Force general met shadowy Pentagon unit before he vanished... and his perplexed wife's reaction",
          "summary": "報導稱，一名失蹤空軍將領在消失前數小時，曾與五角大廈神秘單位秘密會面；最新曝光的執法紀錄影像也引發外界對其行蹤與妻子反應的關注。",
          "source": "03-chilling-bodycam-reveals-ufo-linked-air-force-gene.md",
          "link": "https://www.dailymail.com/sciencetech/article-15852221/william-mccasland-ufo-pentagon-disappearance-new-mexico.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Noah's Ark mystery deepens as ancient map points to resting place of biblical vessel",
          "summary": "一張古地圖被指可能暗藏諾亞方舟位置，且其細節與《聖經》記載的停靠地點相符，引發外界對方舟下落的新一輪關注。",
          "source": "04-noah-s-ark-mystery-deepens-as-ancient-map-points-t.md",
          "link": "https://www.dailymail.com/sciencetech/article-15852247/noahs-ark-map-ararat-turkey.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Google Rolls Out ‘AI Mode’ in Search for Indian Users: What It Is, How It Works",
          "summary": "Google在印度推出搜尋「AI Mode」，提供即時AI回答、智慧摘要與深入主題探索，且無需註冊即可使用。",
          "source": "05-google-rolls-out-ai-mode-in-search-for-indian-user.md",
          "link": "https://www.business2business.co.in/article/5481/google-ai-mode-search-india-2025",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Exascale Labs to Present at Guosheng Securities SST Industry Forum in Shanghai on May 29, 2026",
          "summary": "Exascale Labs宣布將於5月29日在上海國盛證券SST產業論壇發表演講，聚焦AI資料中心電力架構、HVDC與固態變壓器在高密度GPU部署中的應用。",
          "source": "06-exascale-labs-to-present-at-guosheng-securities-ss.md",
          "link": "https://www.benzinga.com/pressreleases/26/05/g52804099/exascale-labs-to-present-at-guosheng-securities-sst-industry-forum-in-shanghai-on-may-29-2026",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "MCU has marveled India in the last five years",
          "summary": "近五年來，漫威電影宇宙在印度累積龐大粉絲群，帶動民眾頻繁搜尋最新好萊塢作品，顯示其在當地影響力持續升高。",
          "source": "07-mcu-has-marveled-india-in-the-last-five-years.md",
          "link": "https://www.business2business.co.in/article/1457/mcu-has-marveled-india-in-the-last-five-years",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "The rise of the fruit that tastes like custard",
          "summary": "針對標題所述，文章指出釋迦樹因耐旱耐熱而受重視，但其果實質地嬌嫩、運輸與出口不易，限制了國際市場拓展。",
          "source": "08-the-rise-of-the-fruit-that-tastes-like-custard.md",
          "link": "https://www.bbc.com/news/articles/ce8pmrp0m47o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Porn company fined £600,000 by Ofcom over age check failings",
          "summary": "英國通訊管理局 Ofcom 指出，色情公司 Youngtek Solutions Ltd 在 2025 年 7 至 9 月間未落實年齡驗證，已被罰款 60 萬英鎊，之後才補強驗證措施。",
          "source": "09-porn-company-fined-600-000-by-ofcom-over-age-check.md",
          "link": "https://www.bbc.com/news/articles/clypxw6penno?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Champion ethical hacker warns AI tools like Mythos will make competing harder",
          "summary": "知名白帽駭客 Chompie 表示，像 Claude Mythos 這類 AI 工具將提升攻防能力，讓頂尖倫理駭客之間的競爭更困難。",
          "source": "10-champion-ethical-hacker-warns-ai-tools-like-mythos.md",
          "link": "https://www.bbc.com/news/articles/c3r2zjpryzro?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "Wet AMD Market Set for Robust Growth Through 2036, Driven by Advancements in Anti-VEGF Therapies | DelveInsight",
          "summary": "濕性黃斑部病變市場預期至2036年穩健成長，主因為診斷病例增加、現有治療需求與多項抗VEGF新療法陸續上市。",
          "source": "01-wet-amd-market-set-for-robust-growth-through-2036-.md",
          "link": "https://www.prnewswire.com/news-releases/wet-amd-market-set-for-robust-growth-through-2036-driven-by-advancements-in-anti-vegf-therapies--delveinsight-302782608.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "EXCLUSIVE: HUHU Secures $15 Million First Major European Semiconductor Foundry Contract",
          "summary": "HUHUTECH德國子公司取得歐洲半導體晶圓代工廠系列訂單，總值約1,390萬歐元，為其首筆歐洲重大基準合約。",
          "source": "02-exclusive-huhu-secures-15-million-first-major-euro.md",
          "link": "https://www.benzinga.com/markets/small-cap/26/05/52804105/exclusive-huhu-secures-15-million-first-major-european-semiconductor-foundry-contract",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Wind Turbine Anti-corrosion Film Market Poised for Expansion as Wind Farms Adopt Advanced Surface Protection Forecast 2026-2032",
          "summary": "QYResearch發布《風力渦輪機防腐膜市場2026報告》，分析2026至2032年市場趨勢，指出風電場採用先進表面防護將帶動需求成長。",
          "source": "03-wind-turbine-anti-corrosion-film-market-poised-for.md",
          "link": "https://www.openpr.com/news/4528906/wind-turbine-anti-corrosion-film-market-poised-for-expansion-as",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Robinhood Will Let Customers Connect Their Own AI Agents to Trade Stocks and Use Credit Cards",
          "summary": "Robinhood 宣布將允許付費方案用戶連接自有 AI 代理進行股票交易，並可使用信用卡相關功能，顯示其持續擴展金融與科技服務。",
          "source": "04-robinhood-will-let-customers-connect-their-own-ai-.md",
          "link": "https://www.barrons.com/advisor/articles/robinhood-ai-agent-credit-card-63531b09",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Zeta partner Mastercard to power next-gen credit processing for banks, fintechs",
          "summary": "Zeta與Mastercard宣布5年全球合作，將為銀行與金融科技業者提供新一代信用卡處理服務，強化支付基礎設施與產品能力。",
          "source": "05-zeta-partner-mastercard-to-power-next-gen-credit-p.md",
          "link": "https://www.business2business.co.in/article/3211/zeta-partner-mastercard-to-power-next-gen-credit-processing-for-banks-fintechs",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Adani Wilmar aims to raise up to Rs 4,000 crore via IPO",
          "summary": "Adani Wilmar計劃透過首次公開募股籌資最高4000億盧比，作為擴張業務與提升資金來源的一部分。",
          "source": "06-adani-wilmar-aims-to-raise-up-to-rs-4-000-crore-vi.md",
          "link": "https://www.business2business.co.in/article/2987/adani-wilmar-aims-to-raise-up-to-rs-4000-crore-via-ipo",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Drivers and risks of cryptocurrency boom",
          "summary": "加密貨幣價格上漲吸引追逐波動的投資人進場，市場熱度升高，但也伴隨更大風險與劇烈波動。",
          "source": "07-drivers-and-risks-of-cryptocurrency-boom.md",
          "link": "https://www.business2business.co.in/article/1198/drivers-and-risks-of-cryptocurrency-boom",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Launch of decentralised exchange next month- WazirX",
          "summary": "印度最大加密貨幣交易所 WazirX 表示，已進入推出自家去中心化交易所的後期階段，預計將於下月上線。",
          "source": "08-launch-of-decentralised-exchange-next-month-wazirx.md",
          "link": "https://www.business2business.co.in/article/2988/launch-of-decentralised-exchange-next-month-wazirx",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Exascale Labs to Present at Guosheng Securities SST Industry Forum in Shanghai on May 29, 2026",
          "summary": "Exascale Labs將於5月29日在上海國盛證券SST產業論壇發表，討論固態變壓器與HVDC架構在新一代AI資料中心的重要性，並提及其與D. Boral ARC Acquisition I Corp.的擬議合併。",
          "source": "09-exascale-labs-to-present-at-guosheng-securities-ss.md",
          "link": "https://www.globenewswire.com/fr/news-release/2026/05/27/3301957/0/en/Exascale-Labs-to-Present-at-Guosheng-Securities-SST-Industry-Forum-in-Shanghai-on-May-29-2026.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Top 7 best ethanol stocks to invest in India 2024",
          "summary": "文章介紹 2024 年印度值得關注的 7 檔乙醇概念股，點名 Triveni Engineering、Balrampur Chini Mills 等公司，供投資人參考。",
          "source": "10-top-7-best-ethanol-stocks-to-invest-in-india-2024.md",
          "link": "https://www.business2business.co.in/article/5183/top-7-best-ethanol-stocks-to-invest-in-india-2024",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "Legal bid to block UK-backed French migrant detention centre",
          "summary": "英國內政部表示，若法國移民拘留中心未啟用，英國將不會依協議向法方付款，該案旨在遏止偷渡越境。",
          "source": "01-legal-bid-to-block-uk-backed-french-migrant-detent.md",
          "link": "https://www.bbc.com/news/articles/cdxpdqvdyz7o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "One in six young people will not be in work or training in five years without action, report warns",
          "summary": "報告警告，若不採取行動，五年內每六名年輕人就有一人可能失業或未受訓，青年進入職場的機會正變得遙不可及。",
          "source": "02-one-in-six-young-people-will-not-be-in-work-or-tra.md",
          "link": "https://www.bbc.com/news/articles/cy026x9jpd0o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Burnham and Streeting accuse Blair of ignoring inequality as they hit back at ex-PM",
          "summary": "工黨市長伯納姆與前部長斯特里廷回應前首相布萊爾長文，反批其忽視不平等問題，雙方就工黨路線再起爭論。",
          "source": "03-burnham-and-streeting-accuse-blair-of-ignoring-ine.md",
          "link": "https://www.bbc.com/news/articles/ckgp4llnn12o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Sturgeon defends 'no comment' police interview after SNP funds probe arrest",
          "summary": "前蘇格蘭民族黨領袖史特金在黨內資金調查中被捕後，律師稱她在警方訊問時回答「不予置評」屬標準做法，之後已以書面回覆警方提問。",
          "source": "04-sturgeon-defends-no-comment-police-interview-after.md",
          "link": "https://www.bbc.com/news/articles/cwy2kww2jzpo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Will Tony Blair's intervention change the Labour debate?",
          "summary": "布萊爾介入工黨內部辯論，但雖仍有支持者，黨內其他派系似乎並不買帳，影響力有限。",
          "source": "05-will-tony-blair-s-intervention-change-the-labour-d.md",
          "link": "https://www.bbc.com/news/articles/cx21vx5x550o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "MetaVia Presents Higher-Dose Phase 1 Results for DA-1726 at EASL Congress 2026, Supporting Potential in Obesity and MASH",
          "summary": "MetaVia在EASL 2026公布DA-1726高劑量一期結果，48毫克組於第54天平均減重最高9.1%，且未見平台，並顯示早期肝臟改善跡象。",
          "source": "06-metavia-presents-higher-dose-phase-1-results-for-d.md",
          "link": "https://www.prnewswire.com/news-releases/metavia-presents-higher-dose-phase-1-results-for-da-1726-at-easl-congress-2026-supporting-potential-in-obesity-and-mash-302782740.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "politics"
        },
        {
          "title": "Govt to spend ₹22,810 cr on Atmanirbhar Bharat Rozgar Yojana, to benefit over 58 lakh employees",
          "summary": "印度內閣批准「自立印度就業計畫」私營部門EPF補貼方案，總支出1,584億盧比，預計惠及逾58萬名員工。",
          "source": "07-govt-to-spend-22-810-cr-on-atmanirbhar-bharat-rozg.md",
          "link": "https://www.business2business.co.in/article/2619/govt-to-spend-%C3%A2%E2%80%9A%C2%B922-810-cr-on-atmanirbhar-bharat-rozgar-yojana-to-benefit-over-58-lakh-employees",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "politics"
        },
        {
          "title": "Bill Soon To Tackle Bankruptcy In Financial Sector: Shaktikanta Das",
          "summary": "印度經濟事務 सचिव達斯表示，一項處理金融業破產問題的法案已備妥，預計很快將提交國會審議。",
          "source": "08-bill-soon-to-tackle-bankruptcy-in-financial-sector.md",
          "link": "https://www.business2business.co.in/article/535/bill-soon-to-tackle-bankruptcy-in-financial-sector-shaktikanta-das",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "‘WILL BUDGET 2017 FLIP THE CART?’ – Expert piece by Khaitan & Co. on pre-budget expectations by the e-commerce sector!",
          "summary": "文章討論印度2017預算案前，電商業界對政策的期待，聚焦數位印度、無現金經濟與電子商務發展環境。",
          "source": "09-will-budget-2017-flip-the-cart-expert-piece-by-kha.md",
          "link": "https://www.business2business.co.in/article/507/will-budget-2017-flip-the-cart-expert-piece-by-khaitan-co-on-pre-budget-expectations-by-the-e-commerce-sector",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Energy bills to rise for millions as impact of Iran war hits",
          "summary": "英國監管機構調高能源價格上限，典型家庭年能源帳單將增加221英鎊，數百萬戶受影響。",
          "source": "10-energy-bills-to-rise-for-millions-as-impact-of-ira.md",
          "link": "https://www.bbc.com/news/articles/ce8pw464986o?at_medium=RSS&at_campaign=rss",
          "strength": 4,
          "sentiment": "stagflation",
          "category": "politics"
        }
      ]
    }
  },
  "backtestSeries": [
    {
      "date": "2026-03-31",
      "portfolioValue": 99908
    },
    {
      "date": "2026-04-01",
      "portfolioValue": 99642.44785304078
    },
    {
      "date": "2026-04-02",
      "portfolioValue": 101506.96698233142
    },
    {
      "date": "2026-04-06",
      "portfolioValue": 101642.13837772392
    },
    {
      "date": "2026-04-07",
      "portfolioValue": 102484.22499877859
    },
    {
      "date": "2026-04-08",
      "portfolioValue": 102381.7407737798
    },
    {
      "date": "2026-04-13",
      "portfolioValue": 102184.12787111141
    },
    {
      "date": "2026-04-14",
      "portfolioValue": 102697.71094923312
    },
    {
      "date": "2026-04-15",
      "portfolioValue": 102898.87259016199
    },
    {
      "date": "2026-04-16",
      "portfolioValue": 102950.90728355444
    },
    {
      "date": "2026-04-17",
      "portfolioValue": 102957.89912668921
    },
    {
      "date": "2026-04-20",
      "portfolioValue": 102934.38142125095
    },
    {
      "date": "2026-04-21",
      "portfolioValue": 103326.45969898932
    },
    {
      "date": "2026-04-22",
      "portfolioValue": 103735.96465288293
    },
    {
      "date": "2026-04-23",
      "portfolioValue": 104583.11600055217
    },
    {
      "date": "2026-04-24",
      "portfolioValue": 105715.44098991615
    },
    {
      "date": "2026-04-27",
      "portfolioValue": 105918.29072436929
    },
    {
      "date": "2026-04-28",
      "portfolioValue": 105548.6105911698
    },
    {
      "date": "2026-04-29",
      "portfolioValue": 105167.22352682996
    },
    {
      "date": "2026-04-30",
      "portfolioValue": 104608.0797494795
    },
    {
      "date": "2026-05-01",
      "portfolioValue": 104569.30772779461
    },
    {
      "date": "2026-05-04",
      "portfolioValue": 107313.37700087814
    },
    {
      "date": "2026-05-05",
      "portfolioValue": 107215.59837250716
    },
    {
      "date": "2026-05-06",
      "portfolioValue": 108627.08945961503
    },
    {
      "date": "2026-05-07",
      "portfolioValue": 110258.15187055156
    },
    {
      "date": "2026-05-08",
      "portfolioValue": 109781.37234326996
    },
    {
      "date": "2026-05-11",
      "portfolioValue": 109469.11703978326
    },
    {
      "date": "2026-05-12",
      "portfolioValue": 109493.90942083597
    },
    {
      "date": "2026-05-13",
      "portfolioValue": 109205.02387799877
    },
    {
      "date": "2026-05-14",
      "portfolioValue": 109883.72807965252
    },
    {
      "date": "2026-05-15",
      "portfolioValue": 109495.71260592811
    },
    {
      "date": "2026-05-18",
      "portfolioValue": 109125.10316755052
    },
    {
      "date": "2026-05-19",
      "portfolioValue": 108925.99697109383
    },
    {
      "date": "2026-05-20",
      "portfolioValue": 108519.08810844416
    },
    {
      "date": "2026-05-21",
      "portfolioValue": 109282.46814690603
    },
    {
      "date": "2026-05-22",
      "portfolioValue": 110436.33464464608
    },
    {
      "date": "2026-05-25",
      "portfolioValue": 111721.24132446112
    },
    {
      "date": "2026-05-26",
      "portfolioValue": 111302.68236865028
    },
    {
      "date": "2026-05-27",
      "portfolioValue": 112143.94238095923
    },
    {
      "date": "2026-05-28",
      "portfolioValue": 111138.43556605384
    }
  ],
  "mockPortfolioSeries": [
    {
      "date": "2026-05-13",
      "openValue": 100130.75,
      "closeValue": 100130.75,
      "deltaValue": 0,
      "points": [
        {
          "slot": "0930",
          "equity": 100130.75,
          "timestamp": "2026-05-13 21:54:47"
        },
        {
          "slot": "1325",
          "equity": 100130.75,
          "timestamp": "2026-05-13 21:55:03"
        }
      ]
    },
    {
      "date": "2026-05-14",
      "openValue": 100752.35,
      "closeValue": 100380.9,
      "deltaValue": -371.45000000001164,
      "points": [
        {
          "slot": "0930",
          "equity": 100752.35,
          "timestamp": "2026-05-14 09:30:08"
        },
        {
          "slot": "1320",
          "equity": 100380.9,
          "timestamp": "2026-05-14 13:20:05"
        }
      ]
    },
    {
      "date": "2026-05-15",
      "openValue": 101064.45,
      "closeValue": 100087.95,
      "deltaValue": -976.5,
      "points": [
        {
          "slot": "0930",
          "equity": 101064.45,
          "timestamp": "2026-05-15 09:30:08"
        },
        {
          "slot": "1320",
          "equity": 100087.95,
          "timestamp": "2026-05-15 13:20:05"
        }
      ]
    },
    {
      "date": "2026-05-18",
      "openValue": 99155.55,
      "closeValue": 99155.55,
      "deltaValue": 0,
      "points": [
        {
          "slot": "0930",
          "equity": 99155.55,
          "timestamp": "2026-05-18 09:30:08"
        },
        {
          "slot": "1320",
          "equity": 99155.55,
          "timestamp": "2026-05-18 13:20:13"
        }
      ]
    },
    {
      "date": "2026-05-19",
      "openValue": 98999.1,
      "closeValue": 98705.1,
      "deltaValue": -294,
      "points": [
        {
          "slot": "0930",
          "equity": 98999.1,
          "timestamp": "2026-05-19 09:30:10"
        },
        {
          "slot": "1320",
          "equity": 98705.1,
          "timestamp": "2026-05-19 13:20:13"
        }
      ]
    },
    {
      "date": "2026-05-20",
      "openValue": 98705.1,
      "closeValue": 98606.75,
      "deltaValue": -98.35000000000582,
      "points": [
        {
          "slot": "0930",
          "equity": 98705.1,
          "timestamp": "2026-05-20 09:30:09"
        },
        {
          "slot": "1320",
          "equity": 98606.75,
          "timestamp": "2026-05-20 13:20:06"
        }
      ]
    },
    {
      "date": "2026-05-21",
      "openValue": 99209.95,
      "closeValue": 99408,
      "deltaValue": 198.0500000000029,
      "points": [
        {
          "slot": "0930",
          "equity": 99209.95,
          "timestamp": "2026-05-21 09:30:12"
        },
        {
          "slot": "1320",
          "equity": 99408,
          "timestamp": "2026-05-21 13:20:06"
        }
      ]
    },
    {
      "date": "2026-05-22",
      "openValue": 99465.75,
      "closeValue": 99717.75,
      "deltaValue": 252,
      "points": [
        {
          "slot": "0930",
          "equity": 99465.75,
          "timestamp": "2026-05-22 09:30:09"
        },
        {
          "slot": "1320",
          "equity": 99717.75,
          "timestamp": "2026-05-22 13:20:13"
        }
      ]
    },
    {
      "date": "2026-05-25",
      "openValue": 100431.75,
      "closeValue": 100660.25,
      "deltaValue": 228.5,
      "points": [
        {
          "slot": "0930",
          "equity": 100431.75,
          "timestamp": "2026-05-25 09:30:10"
        },
        {
          "slot": "1320",
          "equity": 100660.25,
          "timestamp": "2026-05-25 13:20:07"
        }
      ]
    },
    {
      "date": "2026-05-26",
      "openValue": 100819.15,
      "closeValue": 100673.15,
      "deltaValue": -146,
      "points": [
        {
          "slot": "0930",
          "equity": 100819.15,
          "timestamp": "2026-05-26 09:30:11"
        },
        {
          "slot": "1320",
          "equity": 100673.15,
          "timestamp": "2026-05-26 13:20:11"
        }
      ]
    },
    {
      "date": "2026-05-27",
      "openValue": 101624.75,
      "closeValue": 101358.95,
      "deltaValue": -265.8000000000029,
      "points": [
        {
          "slot": "0930",
          "equity": 101624.75,
          "timestamp": "2026-05-27 09:30:10"
        },
        {
          "slot": "1320",
          "equity": 101358.95,
          "timestamp": "2026-05-27 13:20:10"
        }
      ]
    },
    {
      "date": "2026-05-28",
      "openValue": 101871.85,
      "closeValue": 100394.5,
      "deltaValue": -1477.3500000000058,
      "points": [
        {
          "slot": "0930",
          "equity": 101871.85,
          "timestamp": "2026-05-28 09:30:10"
        },
        {
          "slot": "1320",
          "equity": 100394.5,
          "timestamp": "2026-05-28 13:20:11"
        }
      ]
    }
  ]
};
