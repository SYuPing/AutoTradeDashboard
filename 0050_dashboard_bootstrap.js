window.ETFDashboardBootstrap = {
  "date": "2026-05-20",
  "generated_at": "2026-05-20T13:34:30.775Z",
  "sourceDates": {
    "newsDate": "2026-05-20",
    "tradeDate": "2026-05-20",
    "strategyDate": "2026-05-20",
    "shortTermDate": "2026-05-20"
  },
  "dataManifest": {
    "latest_date": "2026-05-20",
    "latest_updated_at": "2026-05-20T13:34:30.684Z",
    "signature": "1779284070684.7424",
    "source_dates": {
      "newsDate": "2026-05-20",
      "tradeDate": "2026-05-20",
      "strategyDate": "2026-05-20",
      "shortTermDate": "2026-05-20"
    },
    "generated_at": "2026-05-20T13:34:30.775Z"
  },
  "state": {
    "date": "2026-05-20",
    "daily_capital": 100000,
    "starting_weight": 0.259925,
    "starting_notional": 25992.5,
    "starting_shares": 281,
    "starting_avg_cost": 92.849998,
    "current_weight": 0.2146,
    "current_notional": 21460,
    "shares_held": 232,
    "avg_cost": 92.849998,
    "cost_basis_total": 21541.2,
    "market_value": 21460,
    "used_capital": 21460,
    "remaining_capital": 77146.75,
    "cash_balance_before": 72614.25,
    "cash_balance_after": 77146.75,
    "equity": 98606.75,
    "realized_pnl_cum": -718.75,
    "unrealized_pnl": -81.2,
    "last_trade_price": 92.5,
    "last_mark_price": 92.5,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-20 09:30:09",
        "target_weight": 0.260908,
        "current_weight_before": 0,
        "delta_weight": 0.260908,
        "delta_notional": 26090.85,
        "quote_fresh": true,
        "cash_before": 98705.1,
        "cash_after": 72614.25,
        "equity_after": 98705.1,
        "shares_before": 0,
        "shares_after": 281,
        "fill_shares": 281,
        "avg_cost_after": 92.849998,
        "realized_pnl_cum": -701.6,
        "unrealized_pnl": 0,
        "cumulative_pnl": -701.6
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-20 13:20:06",
        "target_weight": 0.2146,
        "current_weight_before": 0.259925,
        "delta_weight": -0.045325,
        "delta_notional": 4532.5,
        "quote_fresh": true,
        "cash_before": 72614.25,
        "cash_after": 77146.75,
        "equity_after": 98606.75,
        "shares_before": 281,
        "shares_after": 232,
        "fill_shares": -49,
        "avg_cost_after": 92.849998,
        "realized_pnl_cum": -718.75,
        "unrealized_pnl": -81.2,
        "cumulative_pnl": -799.95
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-19\\trade_state.json",
    "order_notional": 4532.5,
    "order_weight": -0.045325,
    "cumulative_pnl": -799.95
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏空防守、先不重押；若要部署，優先做「0050/台積電權值籃子」的低比例避險或減碼，不追多。",
    "instrument": "0050（或台積電權值籃子）／現金保留",
    "window": "T+1 ~ T+5",
    "confidence": "中低",
    "execution_points": [
      "1. **宏觀與跨資產一致偏 risk-off**",
      "2. **0050 結構偏弱，不適合早盤重押**",
      "3. **若一定要做，採「小部位、分批、偏防守」**"
    ],
    "data_needs": [
      "台指期夜盤 / 開盤前電子盤走勢",
      "台積電現貨開盤前委買委賣與盤前撮合",
      "外資期貨未平倉與台指期淨部位",
      "開盤前 0050 成分權值股的即時量價",
      "美元兌台幣匯率與美債殖利率變化"
    ],
    "risk_points": [
      "目前訊號偏向**台股開盤承壓**，但不是極端崩盤訊號，所以**不建議一早重倉追空**。",
      "最大風險是：**AI/半導體題材盤中突然反彈，造成空方或避險部位被軋。",
      "若你今天只能做一筆，建議**先保留現金或只下小部位防守單**，等開盤後確認量價再決定是否加碼。"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏空防守、先不重押；若要部署，優先做「0050/台積電權值籃子」的低比例避險或減碼，不追多。**\n- 操作標的：**0050（或台積電權值籃子）／現金保留**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中低**\n\n執行重點\n1. **宏觀與跨資產一致偏 risk-off**\n- 美股、QQQ、SPY、DIA 同步走弱，VIX 上升，UUP 走強，這是典型風險趨避環境。\n- 台積電 ADR 也跌，對台股開盤權值股是直接壓力。\n\n2. **0050 結構偏弱，不適合早盤重押**\n- Breadth 只有 **bullish 9 / bearish 19**，且 **near low 15**，代表內部結構偏弱。\n- 權值核心台積電 5D **-2.22%**、聯發科 **-14.73%**、台達電 **-12.76%**，主力權值並不健康。\n- 雖然聯電、中信金相對強，但不足以扭轉整體指數壓力。\n\n3. **若一定要做，採「小部位、分批、偏防守」**\n- 不是直接空殺，而是先用小部位確認市場是否延續 risk-off。\n- 若開盤後 15~30 分鐘，0050/台積電無法站穩、量增下跌，可再加碼防守部位。\n- 若開盤快速收復且台積電 ADR 壓力被消化，再考慮撤回避險、轉中性。\n\n補充資料需求\n- **台指期夜盤 / 開盤前電子盤走勢**\n- **台積電現貨開盤前委買委賣與盤前撮合**\n- **外資期貨未平倉與台指期淨部位**\n- **開盤前 0050 成分權值股的即時量價**\n- **美元兌台幣匯率與美債殖利率變化**\n\n風險提醒\n- 目前訊號偏向**台股開盤承壓**，但不是極端崩盤訊號，所以**不建議一早重倉追空**。\n- 最大風險是：**AI/半導體題材盤中突然反彈，造成空方或避險部位被軋。**\n- 若你今天只能做一筆，建議**先保留現金或只下小部位防守單**，等開盤後確認量價再決定是否加碼。"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，反彈先減碼；權值股以防守型與相對強勢股小倉位試單，不做全面追空/追多。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電（2330）",
      "聯發科（2454）",
      "台達電（2308） / 鴻海（2317）"
    ],
    "risk_points": [
      "若台積電續跌、聯發科無法止穩、0050 成分股 near low 擴大，則「降槓桿觀望」會失效，需轉為偏空思維。",
      "若美股風險情緒突然回升、QQQ 轉強，且台積電 ADR 同步止跌，則 0050 可能快速反彈，空方判斷會失準。",
      "若金融/防禦股的量增無法擴散到權值核心，反彈多半只是短彈，不宜追價。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，反彈先減碼；權值股以防守型與相對強勢股小倉位試單，不做全面追空/追多。**\n- 0050：目前 breadth **bearish 19 > bullish 9**，且 **near low 15**，代表內部結構偏弱，短線不適合追價。\n- 權值股：台積電、聯發科、台達電等核心權值偏弱，先看是否止跌再決定是否接回。\n- 避險：若要操作，優先保留現金，等 T+1~T+5 出現止跌/轉強訊號再進場。\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n宏觀是 risk-off、偏空；但 0050 技術面不是全面崩壞，而是「權值拖累 + 內部廣度偏弱」，屬於**宏觀確認、技術面偏弱但未完全失控**。\n- 信心：**中**\n\n權值股焦點\n1. **台積電（2330）**\n- 0050 權重高達 **60.79%**，是短線方向核心。\n- 5D **-2.22% bearish**，ADR 也偏弱，代表台股大盤與 0050 很難脫離它單獨走強。\n- 只要台積電沒止跌，0050 反彈通常都偏弱。\n\n2. **聯發科（2454）**\n- 權重 **5.24%**，5D **-14.73%**，是高 beta 權值壓力來源。\n- 這種跌幅代表市場對成長/科技權值的風險偏好明顯降溫。\n- 若聯發科續弱，0050 的反彈高度會被壓制。\n\n3. **台達電（2308） / 鴻海（2317）**\n- 台達電 5D **-12.76% bearish**，鴻海 5D **-2.00% neutral**。\n- 台達電偏弱代表 AI/電力/機電鏈條短線不穩；鴻海若無法轉強，權值輪動也撐不起來。\n- 這兩檔是觀察 0050 是否能止穩的重要輔助指標。\n\n風險提醒\n- **若台積電續跌、聯發科無法止穩、0050 成分股 near low 擴大，則「降槓桿觀望」會失效，需轉為偏空思維。**\n- **若美股風險情緒突然回升、QQQ 轉強，且台積電 ADR 同步止跌，則 0050 可能快速反彈，空方判斷會失準。**\n- **若金融/防禦股的量增無法擴散到權值核心，反彈多半只是短彈，不宜追價。**"
  },
  "morning": {
    "generated_at": "2026-05-20 09:30:09",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-20\\trade_state.json",
    "trade_state": {
      "date": "2026-05-20",
      "daily_capital": 100000,
      "starting_weight": 0,
      "starting_notional": 0,
      "starting_shares": 0,
      "starting_avg_cost": 0,
      "current_weight": 0.260908,
      "current_notional": 26090.85,
      "shares_held": 281,
      "avg_cost": 92.849998,
      "cost_basis_total": 26090.85,
      "market_value": 26090.85,
      "used_capital": 26090.85,
      "remaining_capital": 72614.25,
      "cash_balance_before": 98705.1,
      "cash_balance_after": 72614.25,
      "equity": 98705.1,
      "realized_pnl_cum": -701.6,
      "unrealized_pnl": 0,
      "last_trade_price": 92.849998,
      "last_mark_price": 92.849998,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-20 09:30:09",
          "target_weight": 0.260908,
          "current_weight_before": 0,
          "delta_weight": 0.260908,
          "delta_notional": 26090.85,
          "quote_fresh": true,
          "cash_before": 98705.1,
          "cash_after": 72614.25,
          "equity_after": 98705.1,
          "shares_before": 0,
          "shares_after": 281,
          "fill_shares": 281,
          "avg_cost_after": 92.849998,
          "realized_pnl_cum": -701.6,
          "unrealized_pnl": 0,
          "cumulative_pnl": -701.6
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-19\\trade_state.json",
      "order_notional": 26090.85,
      "order_weight": 0.260908,
      "cumulative_pnl": -701.6
    },
    "base_decision": {
      "date": "2026-05-20",
      "final_positions": {
        "0050.TW": 0.261538,
        "2412.TW": 0.040865,
        "2886.TW": 0.040865,
        "2891.TW": 0.032692,
        "2303.TW": 0.049038,
        "CONDITIONAL_HEDGE_OR_REDUCE_0050": 0,
        "CASH": 0.575
      },
      "exposure": 0.425,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.425,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位",
      "regime": "RISK_OFF",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.5,
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
        "current_month_return": 0.0423,
        "current_month_drawdown": -0.0111,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-20",
      "final_positions": {
        "0050.TW": 0.260908,
        "2412.TW": 0.040865,
        "2886.TW": 0.040865,
        "2891.TW": 0.032692,
        "2303.TW": 0.049038,
        "CONDITIONAL_HEDGE_OR_REDUCE_0050": 0,
        "CASH": 0.739092
      },
      "exposure": 0.260908,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.260908,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位",
      "regime": "RISK_OFF",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.5,
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
        "current_month_return": 0.0423,
        "current_month_drawdown": -0.0111,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": -2.1602,
        "focus_positive_count": 3,
        "focus_positive": [
          "2308.TW",
          "2345.TW",
          "2382.TW"
        ],
        "action": "EXECUTE",
        "reason": "MORNING_CONFIRM_OK",
        "target_exposure": 0.45
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 92.8499984741211,
          "prev_close": 94.9000015258789,
          "change_pct": -2.1602,
          "as_of": "2026-05-20T01:10:00"
        },
        "2308.TW": {
          "last_price": 1930,
          "prev_close": 1915,
          "change_pct": 0.7833,
          "as_of": "2026-05-20T01:10:00"
        },
        "2317.TW": {
          "last_price": 244,
          "prev_close": 245,
          "change_pct": -0.4082,
          "as_of": "2026-05-20T01:10:00"
        },
        "2330.TW": {
          "last_price": 2195,
          "prev_close": 2205,
          "change_pct": -0.4535,
          "as_of": "2026-05-20T01:10:00"
        },
        "2345.TW": {
          "last_price": 2430,
          "prev_close": 2390,
          "change_pct": 1.6736,
          "as_of": "2026-05-20T01:10:00"
        },
        "2382.TW": {
          "last_price": 292.5,
          "prev_close": 290,
          "change_pct": 0.8621,
          "as_of": "2026-05-20T01:10:00"
        },
        "USO": {
          "last_price": 152.99000549316406,
          "prev_close": 149.2899932861328,
          "change_pct": 2.4784,
          "as_of": "2026-05-19T19:59:00"
        },
        "GLD": {
          "last_price": 411.5199890136719,
          "prev_close": 418.42999267578125,
          "change_pct": -1.6514,
          "as_of": "2026-05-19T19:59:00"
        },
        "TLT": {
          "last_price": 83,
          "prev_close": 83.55999755859375,
          "change_pct": -0.6702,
          "as_of": "2026-05-19T19:59:00"
        },
        "QQQ": {
          "last_price": 701.530029296875,
          "prev_close": 705.8800048828125,
          "change_pct": -0.6162,
          "as_of": "2026-05-19T19:59:00"
        },
        "SPY": {
          "last_price": 733.7899780273438,
          "prev_close": 738.6500244140625,
          "change_pct": -0.658,
          "as_of": "2026-05-19T19:59:00"
        },
        "UUP": {
          "last_price": 27.790000915527344,
          "prev_close": 27.700000762939453,
          "change_pct": 0.3249,
          "as_of": "2026-05-19T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 92.8499984741211,
        "prev_close": 94.9000015258789,
        "change_pct": -2.1602,
        "as_of": "2026-05-20T01:10:00"
      },
      "2308.TW": {
        "last_price": 1930,
        "prev_close": 1915,
        "change_pct": 0.7833,
        "as_of": "2026-05-20T01:10:00"
      },
      "2317.TW": {
        "last_price": 244,
        "prev_close": 245,
        "change_pct": -0.4082,
        "as_of": "2026-05-20T01:10:00"
      },
      "2330.TW": {
        "last_price": 2195,
        "prev_close": 2205,
        "change_pct": -0.4535,
        "as_of": "2026-05-20T01:10:00"
      },
      "2345.TW": {
        "last_price": 2430,
        "prev_close": 2390,
        "change_pct": 1.6736,
        "as_of": "2026-05-20T01:10:00"
      },
      "2382.TW": {
        "last_price": 292.5,
        "prev_close": 290,
        "change_pct": 0.8621,
        "as_of": "2026-05-20T01:10:00"
      },
      "USO": {
        "last_price": 152.99000549316406,
        "prev_close": 149.2899932861328,
        "change_pct": 2.4784,
        "as_of": "2026-05-19T19:59:00"
      },
      "GLD": {
        "last_price": 411.5199890136719,
        "prev_close": 418.42999267578125,
        "change_pct": -1.6514,
        "as_of": "2026-05-19T19:59:00"
      },
      "TLT": {
        "last_price": 83,
        "prev_close": 83.55999755859375,
        "change_pct": -0.6702,
        "as_of": "2026-05-19T19:59:00"
      },
      "QQQ": {
        "last_price": 701.530029296875,
        "prev_close": 705.8800048828125,
        "change_pct": -0.6162,
        "as_of": "2026-05-19T19:59:00"
      },
      "SPY": {
        "last_price": 733.7899780273438,
        "prev_close": 738.6500244140625,
        "change_pct": -0.658,
        "as_of": "2026-05-19T19:59:00"
      },
      "UUP": {
        "last_price": 27.790000915527344,
        "prev_close": 27.700000762939453,
        "change_pct": 0.3249,
        "as_of": "2026-05-19T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 92.85,
        "shares": 281,
        "notional": 26090.85,
        "weight": 0.260908,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -701.6,
    "equity": 98705.1,
    "telegram_message": "[0930 執行結果]\n策略：Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.000\n起始股數：0\n今日已用：26,091\n今日剩餘：72,614\n下單金額：26,091\n現金前後：98,705 -> 72,614\n總資產：98,705\n持有股數：281\n持有均價：92.85\n已實現損益：-702\n未實現損益：0\n目前累積損益：-702\n0050部位：0.261\n現金：0.739\n0050即時：-2.16% @ 2026-05-20T01:10:00\n承接來源：cache\\trade_execution\\2026-05-19\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 93 × 281 股（約 26,091）\n參考資產：USO:+2.48% / GLD:-1.65% / TLT:-0.67% / QQQ:-0.62%\n目標曝險：0.261\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-20 13:20:06",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-20\\trade_state.json",
    "trade_state": {
      "date": "2026-05-20",
      "daily_capital": 100000,
      "starting_weight": 0.259925,
      "starting_notional": 25992.5,
      "starting_shares": 281,
      "starting_avg_cost": 92.849998,
      "current_weight": 0.2146,
      "current_notional": 21460,
      "shares_held": 232,
      "avg_cost": 92.849998,
      "cost_basis_total": 21541.2,
      "market_value": 21460,
      "used_capital": 21460,
      "remaining_capital": 77146.75,
      "cash_balance_before": 72614.25,
      "cash_balance_after": 77146.75,
      "equity": 98606.75,
      "realized_pnl_cum": -718.75,
      "unrealized_pnl": -81.2,
      "last_trade_price": 92.5,
      "last_mark_price": 92.5,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-20 09:30:09",
          "target_weight": 0.260908,
          "current_weight_before": 0,
          "delta_weight": 0.260908,
          "delta_notional": 26090.85,
          "quote_fresh": true,
          "cash_before": 98705.1,
          "cash_after": 72614.25,
          "equity_after": 98705.1,
          "shares_before": 0,
          "shares_after": 281,
          "fill_shares": 281,
          "avg_cost_after": 92.849998,
          "realized_pnl_cum": -701.6,
          "unrealized_pnl": 0,
          "cumulative_pnl": -701.6
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-20 13:20:06",
          "target_weight": 0.2146,
          "current_weight_before": 0.259925,
          "delta_weight": -0.045325,
          "delta_notional": 4532.5,
          "quote_fresh": true,
          "cash_before": 72614.25,
          "cash_after": 77146.75,
          "equity_after": 98606.75,
          "shares_before": 281,
          "shares_after": 232,
          "fill_shares": -49,
          "avg_cost_after": 92.849998,
          "realized_pnl_cum": -718.75,
          "unrealized_pnl": -81.2,
          "cumulative_pnl": -799.95
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-19\\trade_state.json",
      "order_notional": 4532.5,
      "order_weight": -0.045325,
      "cumulative_pnl": -799.95
    },
    "base_decision": {
      "date": "2026-05-20",
      "final_positions": {
        "0050.TW": 0.261538,
        "2412.TW": 0.040865,
        "2886.TW": 0.040865,
        "2891.TW": 0.032692,
        "2303.TW": 0.049038,
        "CONDITIONAL_HEDGE_OR_REDUCE_0050": 0,
        "CASH": 0.575
      },
      "exposure": 0.425,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.425,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位",
      "regime": "RISK_OFF",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.5,
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
        "current_month_return": 0.0423,
        "current_month_drawdown": -0.0111,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-20",
      "final_positions": {
        "0050.TW": 0.2146,
        "2412.TW": 0.033654,
        "2886.TW": 0.033654,
        "2891.TW": 0.026923,
        "2303.TW": 0.040384,
        "CONDITIONAL_HEDGE_OR_REDUCE_0050": 0,
        "CASH": 0.7854
      },
      "exposure": 0.2146,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.2146,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位",
      "regime": "RISK_OFF",
      "0050_mode": true,
      "constraints": {
        "max_exposure": 0.5,
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
        "current_month_return": 0.0423,
        "current_month_drawdown": -0.0111,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": -0.6445,
        "focus_positive_count": 1,
        "focus_positive": [
          "2382.TW"
        ],
        "action": "REDUCE",
        "reason": "MIDDAY_CONFIRM_FAIL",
        "target_exposure": 0.35
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 92.5,
          "prev_close": 93.0999984741211,
          "change_pct": -0.6445,
          "as_of": "2026-05-20T05:00:00"
        },
        "2308.TW": {
          "last_price": 1905,
          "prev_close": 1915,
          "change_pct": -0.5222,
          "as_of": "2026-05-20T05:00:00"
        },
        "2317.TW": {
          "last_price": 239.5,
          "prev_close": 245,
          "change_pct": -2.2449,
          "as_of": "2026-05-20T05:00:00"
        },
        "2330.TW": {
          "last_price": 2190,
          "prev_close": 2205,
          "change_pct": -0.6803,
          "as_of": "2026-05-20T04:59:00"
        },
        "2345.TW": {
          "last_price": 2325,
          "prev_close": 2390,
          "change_pct": -2.7197,
          "as_of": "2026-05-20T05:00:00"
        },
        "2382.TW": {
          "last_price": 290,
          "prev_close": 290,
          "change_pct": 0,
          "as_of": "2026-05-20T05:00:00"
        },
        "USO": {
          "last_price": 152.99000549316406,
          "prev_close": 149.2899932861328,
          "change_pct": 2.4784,
          "as_of": "2026-05-19T19:59:00"
        },
        "GLD": {
          "last_price": 411.5199890136719,
          "prev_close": 418.42999267578125,
          "change_pct": -1.6514,
          "as_of": "2026-05-19T19:59:00"
        },
        "TLT": {
          "last_price": 83,
          "prev_close": 83.55999755859375,
          "change_pct": -0.6702,
          "as_of": "2026-05-19T19:59:00"
        },
        "QQQ": {
          "last_price": 701.530029296875,
          "prev_close": 705.8800048828125,
          "change_pct": -0.6162,
          "as_of": "2026-05-19T19:59:00"
        },
        "SPY": {
          "last_price": 733.7899780273438,
          "prev_close": 738.6500244140625,
          "change_pct": -0.658,
          "as_of": "2026-05-19T19:59:00"
        },
        "UUP": {
          "last_price": 27.790000915527344,
          "prev_close": 27.700000762939453,
          "change_pct": 0.3249,
          "as_of": "2026-05-19T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 92.5,
        "prev_close": 93.0999984741211,
        "change_pct": -0.6445,
        "as_of": "2026-05-20T05:00:00"
      },
      "2308.TW": {
        "last_price": 1905,
        "prev_close": 1915,
        "change_pct": -0.5222,
        "as_of": "2026-05-20T05:00:00"
      },
      "2317.TW": {
        "last_price": 239.5,
        "prev_close": 245,
        "change_pct": -2.2449,
        "as_of": "2026-05-20T05:00:00"
      },
      "2330.TW": {
        "last_price": 2190,
        "prev_close": 2205,
        "change_pct": -0.6803,
        "as_of": "2026-05-20T04:59:00"
      },
      "2345.TW": {
        "last_price": 2325,
        "prev_close": 2390,
        "change_pct": -2.7197,
        "as_of": "2026-05-20T05:00:00"
      },
      "2382.TW": {
        "last_price": 290,
        "prev_close": 290,
        "change_pct": 0,
        "as_of": "2026-05-20T05:00:00"
      },
      "USO": {
        "last_price": 152.99000549316406,
        "prev_close": 149.2899932861328,
        "change_pct": 2.4784,
        "as_of": "2026-05-19T19:59:00"
      },
      "GLD": {
        "last_price": 411.5199890136719,
        "prev_close": 418.42999267578125,
        "change_pct": -1.6514,
        "as_of": "2026-05-19T19:59:00"
      },
      "TLT": {
        "last_price": 83,
        "prev_close": 83.55999755859375,
        "change_pct": -0.6702,
        "as_of": "2026-05-19T19:59:00"
      },
      "QQQ": {
        "last_price": 701.530029296875,
        "prev_close": 705.8800048828125,
        "change_pct": -0.6162,
        "as_of": "2026-05-19T19:59:00"
      },
      "SPY": {
        "last_price": 733.7899780273438,
        "prev_close": 738.6500244140625,
        "change_pct": -0.658,
        "as_of": "2026-05-19T19:59:00"
      },
      "UUP": {
        "last_price": 27.790000915527344,
        "prev_close": 27.700000762939453,
        "change_pct": 0.3249,
        "as_of": "2026-05-19T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 92.5,
        "shares": 49,
        "notional": 4532.5,
        "weight": -0.045325,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -799.95,
    "equity": 98606.75,
    "telegram_message": "[1320 執行結果]\n策略：Strategy A 主導 + Strategy C 輔助 + Strategy B 條件式小部位\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.260\n起始股數：281\n今日已用：21,460\n今日剩餘：77,147\n下單金額：4,532\n現金前後：72,614 -> 77,147\n總資產：98,607\n持有股數：232\n持有均價：92.85\n已實現損益：-719\n未實現損益：-81\n目前累積損益：-800\n0050部位：0.215\n現金：0.785\n0050即時：-0.64% @ 2026-05-20T05:00:00\n承接來源：cache\\trade_execution\\2026-05-19\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 92 × 49 股（約 4,532）\n參考資產：USO:+2.48% / GLD:-1.65% / TLT:-0.67% / QQQ:-0.62%\n目標曝險：0.215\nquote判斷：REDUCE | MIDDAY_CONFIRM_FAIL",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-20",
    "generated_at": "2026-05-20T13:34:30.778Z",
    "categories": {
      "technology": [
        {
          "title": "Google to release first smart glasses since Google Glass flop",
          "summary": "Google 將於秋季推出首款智慧眼鏡，讓其人工智慧產品可與使用者互動，為 Google Glass 失利後再度進軍該市場。",
          "source": "01-google-to-release-first-smart-glasses-since-google.md",
          "link": "https://www.bbc.com/news/articles/cvgz1ynq1nqo?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Tech Life",
          "summary": "本篇訪問專家，探討人工智慧被駭客利用所帶來的風險，以及可能對資安造成的威脅與影響。",
          "source": "02-tech-life.md",
          "link": "https://www.bbc.co.uk/sounds/play/w3ct8jxw?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "Four species of aliens recovered from crashed UFOs according to CIA scientist... here's what they look like",
          "summary": "報導稱一名 CIA 科學家證實，墜毀 UFO 中曾回收四種外星物種，並暗示美國政府可能已與其接觸。",
          "source": "03-four-species-of-aliens-recovered-from-crashed-ufos.md",
          "link": "https://www.dailymail.com/sciencetech/article-15831085/cia-scientist-ufo-crash-alien-species.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Mutant 'super pigs' develop alarming new abilities in nuclear fallout zone",
          "summary": "科學家發現，核災廢墟中存活的突變「超級豬」出現新能力，引發對輻射環境下生物適應與風險的關注。",
          "source": "04-mutant-super-pigs-develop-alarming-new-abilities-i.md",
          "link": "https://www.dailymail.com/sciencetech/article-15831575/mutant-super-pigs-fukushima-japan.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "The six facial features that predict if he'll be a good husband, according to ancient face reading",
          "summary": "古老面相學聲稱可從男性臉部特徵判斷是否適合當好丈夫，並有愛好者拿好萊塢男星作為例子。",
          "source": "05-the-six-facial-features-that-predict-if-he-ll-be-a.md",
          "link": "https://www.dailymail.com/sciencetech/article-15830719/face-reading-predicts-good-husband.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Real life Jurassic Park? De-extinction breakthrough as scientists hatch live chicks from a fully ARTIFICIAL egg",
          "summary": "科學家成功以全人工蛋孵出活雞，宣稱這項去滅絕突破可望為復活已滅絕物種鋪路。",
          "source": "06-real-life-jurassic-park-de-extinction-breakthrough.md",
          "link": "https://www.dailymail.com/sciencetech/article-15830009/extinction-breakthrough-hatch-chicks-ARTIFICIAL-egg.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Earth's sinking cities: Study reveals the urban areas plummeting toward sea level - leaving millions of residents at risk of being plunged underwater",
          "summary": "慕尼黑工業大學研究警告，全球多座城市正快速下沉逼近海平面，恐使數百萬居民面臨淹水風險。",
          "source": "07-earth-s-sinking-cities-study-reveals-the-urban-are.md",
          "link": "https://www.dailymail.com/sciencetech/article-15830389/Sea-levels-rising-dramatically-subsidence.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "The doctor who desperately tried to save Pompeii's victims: Study reveals how one man was clinging on to a medical kit as he was engulfed by Vesuvius' eruption",
          "summary": "研究指出，龐貝一名男子在維蘇威火山爆發時緊抓醫療包逃生，推測他可能是試圖救治傷者的醫師。",
          "source": "08-the-doctor-who-desperately-tried-to-save-pompeii-s.md",
          "link": "https://www.dailymail.com/sciencetech/article-15829921/Pompeii-victim-carrying-medica-kit.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Zoe Kleinman: Why the AI industry is the real winner of the Musk-Altman trial",
          "summary": "奧克蘭的馬斯克與奧特曼訴訟，意外揭開 AI 產業面貌，也凸顯兩位核心人物的巨大自我與業界角力。",
          "source": "09-zoe-kleinman-why-the-ai-industry-is-the-real-winne.md",
          "link": "https://www.bbc.com/news/articles/crlp991nw41o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Elon Musk has lost yet another legal battle. Why he'll still keep fighting",
          "summary": "馬斯克在與 OpenAI 的高調訴訟中敗訴，但外界認為他不太可能因此改變強硬、好鬥的行事風格，仍會持續上訴或尋求其他法律途徑。",
          "source": "10-elon-musk-has-lost-yet-another-legal-battle-why-he.md",
          "link": "https://www.bbc.com/news/articles/cqlpz4w6v13o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "Helport AI Announces Strategic Board Appointment of Former U.S. Bank Executive Dr. Yu Pan",
          "summary": "Helport AI 宣布任命前美國銀行高管潘宇博士加入董事會，強化企業 AI 治理策略，因應 AI 勞動部署在受監管產業持續擴張。",
          "source": "01-helport-ai-announces-strategic-board-appointment-o.md",
          "link": "https://www.financialcontent.com/article/gnwcq-2026-5-19-helport-ai-announces-strategic-board-appointment-of-former-us-bank-executive-dr-yu-pan",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "UK should set maximum working temperature rules, advisers say",
          "summary": "英國氣候監管機構指出，歷屆政府未妥善因應極端高溫，建議政府制定職場最高工作溫度規範，以降低熱浪對勞工健康與安全的風險。",
          "source": "02-uk-should-set-maximum-working-temperature-rules-ad.md",
          "link": "https://www.bbc.com/news/articles/cm2p1j4y0kro?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Young drivers targeted by 'ghost brokers' selling fake car insurance online",
          "summary": "英國金融監管機構警告，詐騙「幽靈經紀人」透過社群媒體向年輕駕駛販售假車險，消費者恐面臨無保險與財務損失風險。",
          "source": "03-young-drivers-targeted-by-ghost-brokers-selling-fa.md",
          "link": "https://www.bbc.com/news/articles/c1w29zw0q44o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "finance"
        },
        {
          "title": "Supermarkets urged to limit food prices by government",
          "summary": "英國政府據悉呼籲超市自願限制雞蛋、麵包與牛奶等民生雜貨價格，以減輕物價壓力；相關價格上限並非強制。",
          "source": "04-supermarkets-urged-to-limit-food-prices-by-governm.md",
          "link": "https://www.bbc.com/news/articles/c5y7qz806q3o?at_medium=RSS&at_campaign=rss",
          "strength": 3,
          "sentiment": "stagflation",
          "category": "finance"
        },
        {
          "title": "TD Cowen Sees 140% Upside In Strategy Stock",
          "summary": "TD Cowen上調Strategy（MSTR）目標價，認為該股仍有約140%上漲空間，反映市場對其後市看法轉趨樂觀。",
          "source": "05-td-cowen-sees-140-upside-in-strategy-stock.md",
          "link": "https://finance.yahoo.com/markets/stocks/articles/td-cowen-sees-140-upside-123100312.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Jordan Capital and Investment Fund Announces Launch of Manara Ventures, A JOD 50 Million Technology Scale-Up Fund to Accelerate Jordan’s Innovation Economy",
          "summary": "約旦資本與投資基金宣布成立 Manara Ventures，規模 5,000 萬約旦第納爾，將投資科技與創新成長型企業，並獲區域機構投資人支持。",
          "source": "06-jordan-capital-and-investment-fund-announces-launc.md",
          "link": "https://www.sarahanews.net/1331183-jordan-capital-and-investment-fund-announces-launch-of-manara-ventures-a-jod-50-million-technology-scale-up-fund-to-accelerate-jordans-innovation-economy/",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Futures Fall on Extended Chip Losses, Inflation Worries",
          "summary": "美股指數期貨週二下跌，受晶片股續跌拖累，且通膨疑慮未消；雖然美債拋售暫歇、油價回落，仍未能提振市場。",
          "source": "07-futures-fall-on-extended-chip-losses-inflation-wor.md",
          "link": "https://www.newsmax.com/finance/streettalk/stocks-semiconductor-chip/2026/05/19/id/1256747",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "時論廣場》賴總統應去黨化(張瑞雄)",
          "summary": "文章指出賴清德總統上任兩年面臨朝野對立、貧富差距、關稅衝擊與台海緊張等多重壓力，呼籲總統應去黨化以降低政治對抗。",
          "source": "01.md",
          "link": "https://www.chinatimes.com/opinion/20260519004107-262104",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "The Hong Kong Chartered Governance Institute Announces Gill Meller's Appointment as President of The Chartered Governance Institute",
          "summary": "香港特許治理公會宣布，Gill Meller當選為全球機構The Chartered Governance Institute主席，成為HKCGI所屬九大分會之一的重要人事任命。",
          "source": "02-the-hong-kong-chartered-governance-institute-annou.md",
          "link": "https://www.itbiznews.com/news/articleView.html?idxno=213318",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Supermarkets urged to limit food prices by government",
          "summary": "英國政府據報呼籲超市自願限制部分民生食品價格，涵蓋雞蛋、麵包與牛奶等關鍵雜貨，屬非強制性措施。",
          "source": "03-supermarkets-urged-to-limit-food-prices-by-governm.md",
          "link": "https://www.bbc.com/news/articles/c5y7qz806q3o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Grant Shapps quits aerospace firm after watchdog probe",
          "summary": "前英國國防大臣格蘭特·夏普斯辭去劍橋航太公司主席職務，稱此舉是為了簡化相關事宜。",
          "source": "04-grant-shapps-quits-aerospace-firm-after-watchdog-p.md",
          "link": "https://www.bbc.com/news/articles/cvgzjlqv1q9o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "John Swinney wins vote to be re-appointed first minister",
          "summary": "蘇格蘭民族黨領袖約翰·斯溫尼贏得投票，將再度出任蘇格蘭首席部長，並於週三正式宣誓就職，之後將組建新內閣。",
          "source": "05-john-swinney-wins-vote-to-be-re-appointed-first-mi.md",
          "link": "https://www.bbc.com/news/articles/cz924vxx39wo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "HS2 could cost up to £102.7bn and trains will be slower than first planned",
          "summary": "英國高鐵HS2重整後公布新估算，總成本可能高達1027億英鎊，且列車速度將低於原先規劃，顯示這項延宕且超支的工程再度縮減。",
          "source": "06-hs2-could-cost-up-to-102-7bn-and-trains-will-be-sl.md",
          "link": "https://www.bbc.com/news/articles/c794xw7p2dqo?at_medium=RSS&at_campaign=rss",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Reform announces candidate for Makerfield by-election",
          "summary": "Reform UK 宣布由水管工 Robert Kenyon 代表該黨參加 Makerfield 補選，正式推出候選人角逐該席位。",
          "source": "07-reform-announces-candidate-for-makerfield-by-elect.md",
          "link": "https://www.bbc.com/news/articles/ce3pwdwlk0yo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Burnham confirmed as Labour candidate in Makerfield",
          "summary": "工黨正式宣布安迪·伯納姆將代表該黨參加梅克菲爾德補選，確認其候選人身分。",
          "source": "08-burnham-confirmed-as-labour-candidate-in-makerfiel.md",
          "link": "https://www.bbc.com/news/articles/cewpj870pw7o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "LG closes school over abuse of four pupils",
          "summary": "卡諾州烏恩戈戈地方政府因一名教師涉嫌對四名未成年學生不當行為，已下令暫時關閉阿爾哈迪德私立學校，案件並已送交法院審理。",
          "source": "09-lg-closes-school-over-abuse-of-four-pupils.md",
          "link": "https://promptnewsonline.com/lg-closes-school-over-abuse-of-four-pupils/",
          "strength": 2,
          "sentiment": "risk_off",
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
      "portfolioValue": 108499.31412675885
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
    }
  ]
};
