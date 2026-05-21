window.ETFDashboardBootstrap = {
  "date": "2026-05-21",
  "generated_at": "2026-05-21T05:30:02.439Z",
  "sourceDates": {
    "newsDate": "2026-05-21",
    "tradeDate": "2026-05-21",
    "strategyDate": "2026-05-21",
    "shortTermDate": "2026-05-21"
  },
  "dataManifest": {
    "latest_date": "2026-05-21",
    "latest_updated_at": "2026-05-21T05:30:02.344Z",
    "signature": "1779341402344.1128",
    "source_dates": {
      "newsDate": "2026-05-21",
      "tradeDate": "2026-05-21",
      "strategyDate": "2026-05-21",
      "shortTermDate": "2026-05-21"
    },
    "generated_at": "2026-05-21T05:30:02.439Z"
  },
  "state": {
    "date": "2026-05-21",
    "daily_capital": 100000,
    "starting_weight": 0.223563,
    "starting_notional": 22356.35,
    "starting_shares": 233,
    "starting_avg_cost": 92.859655,
    "current_weight": 0.221644,
    "current_notional": 22164.45,
    "shares_held": 231,
    "avg_cost": 92.859655,
    "cost_basis_total": 21450.58,
    "market_value": 22164.45,
    "used_capital": 22164.45,
    "remaining_capital": 77243.55,
    "cash_balance_before": 77051.65,
    "cash_balance_after": 77243.55,
    "equity": 99408,
    "realized_pnl_cum": -712.57,
    "unrealized_pnl": 713.87,
    "last_trade_price": 95.949997,
    "last_mark_price": 95.949997,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-21 09:30:12",
        "target_weight": 0.221583,
        "current_weight_before": 0.220632,
        "delta_weight": 0.000951,
        "delta_notional": 95.1,
        "quote_fresh": true,
        "cash_before": 77146.75,
        "cash_after": 77051.65,
        "equity_after": 99209.95,
        "shares_before": 232,
        "shares_after": 233,
        "fill_shares": 1,
        "avg_cost_after": 92.859655,
        "realized_pnl_cum": -718.75,
        "unrealized_pnl": 522,
        "cumulative_pnl": -196.75
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-21 13:20:06",
        "target_weight": 0.221644,
        "current_weight_before": 0.223563,
        "delta_weight": -0.001919,
        "delta_notional": 191.9,
        "quote_fresh": true,
        "cash_before": 77051.65,
        "cash_after": 77243.55,
        "equity_after": 99408,
        "shares_before": 233,
        "shares_after": 231,
        "fill_shares": -2,
        "avg_cost_after": 92.859655,
        "realized_pnl_cum": -712.57,
        "unrealized_pnl": 713.87,
        "cumulative_pnl": 1.3
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-20\\trade_state.json",
    "order_notional": 191.9,
    "order_weight": -0.001919,
    "cumulative_pnl": 1.3
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏多，但不追價；以 0050 或台積電為主，先用 20%~30% 目標部位試單",
    "instrument": "0050 優先，其次台積電/權值股籃子",
    "window": "T+1 ~ T+5",
    "confidence": "中等偏低",
    "execution_points": [
      "1. **今天不是全面風險趨避，但也不是強單邊多頭**",
      "2. **台股早盤偏多的核心依據是台積電 ADR +2.29%**",
      "3. **操作上以「開盤後確認」而不是「開盤前硬追」**"
    ],
    "data_needs": [
      "台指期夜盤 / 早盤報價",
      "台積電現貨開盤前委買委賣與 ADR 價差",
      "外資期貨未平倉、台指期淨多空",
      "開盤前盤前量能與權值股掛單",
      "0050 成分權值股的 5 分鐘 K 線與量價",
      "是否有重大台股盤前新聞：法說、關稅、地緣、匯率"
    ],
    "risk_points": [
      "最大風險是「美股強、台股不跟」**，尤其 0050 內部 breadth 偏弱，可能出現開高走低",
      "台積電 ADR 強不代表台股一定續強**，若台幣、期貨、外資籌碼不配合，容易假突破",
      "TLT/GLD 同漲**代表市場仍有防禦心態，若早盤風險偏好退潮，科技權值股可能先被賣",
      "所以今天的最佳做法不是重押，而是**先試單、看盤後再決定是否加碼"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏多，但不追價；以 0050 或台積電為主，先用 20%~30% 目標部位試單**\n- 操作標的：**0050 優先，其次台積電/權值股籃子**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中等偏低**\n\n執行重點\n1. **今天不是全面風險趨避，但也不是強單邊多頭**\n- 美股、QQQ、TSM、DIA 同漲，VIX 下滑，代表**風險偏好仍在**\n- 但 **TLT、GLD 同漲**，表示市場對成長/政策不確定性仍有對沖需求\n- 所以我不會滿倉追多，而是**先小部位切入**\n\n2. **台股早盤偏多的核心依據是台積電 ADR +2.29%**\n- 0050 權重最大的是台積電，ADR 強勢通常對台股開盤有正面帶動\n- QQQ +1.66%、SPY +1.02%、DIA +1.27% 也支持台股權值股開高\n- 但 0050 breadth 只有 **bullish 7 / bearish 26**，內部結構偏弱，代表**不是全面健康上攻**\n\n3. **操作上以「開盤後確認」而不是「開盤前硬追」**\n- 若 9:00 開盤後 5~15 分鐘：\n- 0050/台積電**不破開盤價**\n- 台積電、聯發科、鴻海等權值股**沒有明顯賣壓**\n- 台指期/現貨同步偏強\n→ 才加碼到目標部位\n- 若開盤後快速翻黑或台積電失守開盤價，則**停止加碼**\n\n補充資料需求\n若要把「小部位試單」升級成「直接進場偏多」，我還需要以下資料：\n\n- **台指期夜盤 / 早盤報價**\n- **台積電現貨開盤前委買委賣與 ADR 價差**\n- **外資期貨未平倉、台指期淨多空**\n- **開盤前盤前量能與權值股掛單**\n- **0050 成分權值股的 5 分鐘 K 線與量價**\n- **是否有重大台股盤前新聞：法說、關稅、地緣、匯率**\n\n風險提醒\n- **最大風險是「美股強、台股不跟」**，尤其 0050 內部 breadth 偏弱，可能出現開高走低\n- **台積電 ADR 強不代表台股一定續強**，若台幣、期貨、外資籌碼不配合，容易假突破\n- **TLT/GLD 同漲**代表市場仍有防禦心態，若早盤風險偏好退潮，科技權值股可能先被賣\n- 所以今天的最佳做法不是重押，而是**先試單、看盤後再決定是否加碼**"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔分批；權值股以台積電、聯發科、台達電的反彈減碼/不追多為主；若要做，偏向短打防守型金控而非追科技。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電 2330",
      "聯發科 2454 / 台達電 2308",
      "中信金 2891 / 金控族群"
    ],
    "risk_points": [
      "若台積電 2330 轉弱、聯發科 2454 與台達電 2308 續跌，0050 會再被拖回去，短線判斷失效。",
      "若 TLT/GLD 持續上漲但 QQQ 轉弱，代表市場開始從風險偏好切回防禦，台股權值股會先受壓。",
      "若 0050 內部 breadth 仍維持 bearish 多於 bullish，代表只是反彈不是趨勢翻多，不宜追價。",
      "若原油反彈、美元轉強、VIX 回升，風險偏好會快速降溫，台股短線多單要立刻收斂。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔分批；權值股以台積電、聯發科、台達電的反彈減碼/不追多為主；若要做，偏向短打防守型金控而非追科技。**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電 2330**\n- 0050 權重最高，方向幾乎決定 ETF 短線節奏。\n- 雖然 TSM ADR、QQQ 同步偏強，屬於宏觀風險偏好支撐，但 2330 自身 5D 仍是 **-1.58% bearish**，代表台股本地技術面還沒完全跟上。\n- 結論：**可視為 0050 的核心觀察點，但目前不適合追價。**\n\n2. **聯發科 2454 / 台達電 2308**\n- 兩檔都是高權重且 5D 明顯偏弱：**2454 -7.58%**、**2308 -11.55%**。\n- 這代表 0050 內部不是全面轉強，而是權值核心仍有壓力，會拖累 ETF 反彈延續性。\n- 結論：**若這兩檔不能止跌，0050 反彈多半只是技術性反抽。**\n\n3. **中信金 2891 / 金控族群**\n- 2891 5D **+5.28% bullish**，且整體金控有量能放大跡象，屬於相對抗跌區。\n- 在目前「風險偏好與避險並存」的環境下，金控比純科技更適合短線防守配置。\n- 結論：**若要做台股短線，金控是比追高科技更穩的選項。**\n\n風險提醒\n- **若台積電 2330 轉弱、聯發科 2454 與台達電 2308 續跌，0050 會再被拖回去，短線判斷失效。**\n- **若 TLT/GLD 持續上漲但 QQQ 轉弱，代表市場開始從風險偏好切回防禦，台股權值股會先受壓。**\n- **若 0050 內部 breadth 仍維持 bearish 多於 bullish，代表只是反彈不是趨勢翻多，不宜追價。**\n- **若原油反彈、美元轉強、VIX 回升，風險偏好會快速降溫，台股短線多單要立刻收斂。**"
  },
  "morning": {
    "generated_at": "2026-05-21 09:30:12",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-21\\trade_state.json",
    "trade_state": {
      "date": "2026-05-21",
      "daily_capital": 100000,
      "starting_weight": 0.220632,
      "starting_notional": 22063.2,
      "starting_shares": 232,
      "starting_avg_cost": 92.849998,
      "current_weight": 0.221583,
      "current_notional": 22158.3,
      "shares_held": 233,
      "avg_cost": 92.859655,
      "cost_basis_total": 21636.3,
      "market_value": 22158.3,
      "used_capital": 22158.3,
      "remaining_capital": 77051.65,
      "cash_balance_before": 77146.75,
      "cash_balance_after": 77051.65,
      "equity": 99209.95,
      "realized_pnl_cum": -718.75,
      "unrealized_pnl": 522,
      "last_trade_price": 95.099998,
      "last_mark_price": 95.099998,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-21 09:30:12",
          "target_weight": 0.221583,
          "current_weight_before": 0.220632,
          "delta_weight": 0.000951,
          "delta_notional": 95.1,
          "quote_fresh": true,
          "cash_before": 77146.75,
          "cash_after": 77051.65,
          "equity_after": 99209.95,
          "shares_before": 232,
          "shares_after": 233,
          "fill_shares": 1,
          "avg_cost_after": 92.859655,
          "realized_pnl_cum": -718.75,
          "unrealized_pnl": 522,
          "cumulative_pnl": -196.75
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-20\\trade_state.json",
      "order_notional": 95.1,
      "order_weight": 0.000951,
      "cumulative_pnl": -196.75
    },
    "base_decision": {
      "date": "2026-05-21",
      "final_positions": {
        "0050.TW": 0.221739,
        "2891.TW": 0.073913,
        "2892.TW": 0.064674,
        "2880.TW": 0.064674,
        "STRATEGYB_PAIR": 0,
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
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0372,
        "current_month_drawdown": -0.016,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-21",
      "final_positions": {
        "0050.TW": 0.221583,
        "2891.TW": 0.073913,
        "2892.TW": 0.064674,
        "2880.TW": 0.064674,
        "STRATEGYB_PAIR": 0,
        "CASH": 0.778417
      },
      "exposure": 0.221583,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.221583,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0372,
        "current_month_drawdown": -0.016,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 2.1482,
        "focus_positive_count": 5,
        "focus_positive": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW"
        ],
        "action": "EXECUTE",
        "reason": "MORNING_CONFIRM_OK",
        "target_exposure": 0.45
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 95.0999984741211,
          "prev_close": 93.0999984741211,
          "change_pct": 2.1482,
          "as_of": "2026-05-21T01:10:00"
        },
        "2308.TW": {
          "last_price": 2010,
          "prev_close": 1915,
          "change_pct": 4.9608,
          "as_of": "2026-05-21T01:10:00"
        },
        "2317.TW": {
          "last_price": 247,
          "prev_close": 240,
          "change_pct": 2.9167,
          "as_of": "2026-05-21T01:10:00"
        },
        "2330.TW": {
          "last_price": 2230,
          "prev_close": 2185,
          "change_pct": 2.0595,
          "as_of": "2026-05-21T01:10:00"
        },
        "2345.TW": {
          "last_price": 2500,
          "prev_close": 2355,
          "change_pct": 6.1571,
          "as_of": "2026-05-21T01:10:00"
        },
        "2382.TW": {
          "last_price": 295.5,
          "prev_close": 290,
          "change_pct": 1.8966,
          "as_of": "2026-05-21T01:10:00"
        },
        "USO": {
          "last_price": 144.22999572753906,
          "prev_close": 152.9600067138672,
          "change_pct": -5.7074,
          "as_of": "2026-05-20T19:59:00"
        },
        "GLD": {
          "last_price": 417.3800048828125,
          "prev_close": 411.5,
          "change_pct": 1.4289,
          "as_of": "2026-05-20T19:59:00"
        },
        "TLT": {
          "last_price": 83.9000015258789,
          "prev_close": 83.0199966430664,
          "change_pct": 1.06,
          "as_of": "2026-05-20T19:59:00"
        },
        "QQQ": {
          "last_price": 713.0700073242188,
          "prev_close": 701.530029296875,
          "change_pct": 1.645,
          "as_of": "2026-05-20T19:59:00"
        },
        "SPY": {
          "last_price": 741.25,
          "prev_close": 733.72998046875,
          "change_pct": 1.0249,
          "as_of": "2026-05-20T19:59:00"
        },
        "UUP": {
          "last_price": 27.719999313354492,
          "prev_close": 27.790000915527344,
          "change_pct": -0.2519,
          "as_of": "2026-05-20T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 95.0999984741211,
        "prev_close": 93.0999984741211,
        "change_pct": 2.1482,
        "as_of": "2026-05-21T01:10:00"
      },
      "2308.TW": {
        "last_price": 2010,
        "prev_close": 1915,
        "change_pct": 4.9608,
        "as_of": "2026-05-21T01:10:00"
      },
      "2317.TW": {
        "last_price": 247,
        "prev_close": 240,
        "change_pct": 2.9167,
        "as_of": "2026-05-21T01:10:00"
      },
      "2330.TW": {
        "last_price": 2230,
        "prev_close": 2185,
        "change_pct": 2.0595,
        "as_of": "2026-05-21T01:10:00"
      },
      "2345.TW": {
        "last_price": 2500,
        "prev_close": 2355,
        "change_pct": 6.1571,
        "as_of": "2026-05-21T01:10:00"
      },
      "2382.TW": {
        "last_price": 295.5,
        "prev_close": 290,
        "change_pct": 1.8966,
        "as_of": "2026-05-21T01:10:00"
      },
      "USO": {
        "last_price": 144.22999572753906,
        "prev_close": 152.9600067138672,
        "change_pct": -5.7074,
        "as_of": "2026-05-20T19:59:00"
      },
      "GLD": {
        "last_price": 417.3800048828125,
        "prev_close": 411.5,
        "change_pct": 1.4289,
        "as_of": "2026-05-20T19:59:00"
      },
      "TLT": {
        "last_price": 83.9000015258789,
        "prev_close": 83.0199966430664,
        "change_pct": 1.06,
        "as_of": "2026-05-20T19:59:00"
      },
      "QQQ": {
        "last_price": 713.0700073242188,
        "prev_close": 701.530029296875,
        "change_pct": 1.645,
        "as_of": "2026-05-20T19:59:00"
      },
      "SPY": {
        "last_price": 741.25,
        "prev_close": 733.72998046875,
        "change_pct": 1.0249,
        "as_of": "2026-05-20T19:59:00"
      },
      "UUP": {
        "last_price": 27.719999313354492,
        "prev_close": 27.790000915527344,
        "change_pct": -0.2519,
        "as_of": "2026-05-20T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 95.1,
        "shares": 1,
        "notional": 95.1,
        "weight": 0.000951,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -196.75,
    "equity": 99209.95,
    "telegram_message": "[0930 執行結果]\n策略：Strategy A primary + Strategy C rotation + conditional Strategy B\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.221\n起始股數：232\n今日已用：22,158\n今日剩餘：77,052\n下單金額：95\n現金前後：77,147 -> 77,052\n總資產：99,210\n持有股數：233\n持有均價：92.86\n已實現損益：-719\n未實現損益：522\n目前累積損益：-197\n0050部位：0.222\n現金：0.778\n0050即時：+2.15% @ 2026-05-21T01:10:00\n承接來源：cache\\trade_execution\\2026-05-20\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 95 × 1 股（約 95）\n參考資產：USO:-5.71% / GLD:+1.43% / TLT:+1.06% / QQQ:+1.65%\n目標曝險：0.222\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-21 13:20:06",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-21\\trade_state.json",
    "trade_state": {
      "date": "2026-05-21",
      "daily_capital": 100000,
      "starting_weight": 0.223563,
      "starting_notional": 22356.35,
      "starting_shares": 233,
      "starting_avg_cost": 92.859655,
      "current_weight": 0.221644,
      "current_notional": 22164.45,
      "shares_held": 231,
      "avg_cost": 92.859655,
      "cost_basis_total": 21450.58,
      "market_value": 22164.45,
      "used_capital": 22164.45,
      "remaining_capital": 77243.55,
      "cash_balance_before": 77051.65,
      "cash_balance_after": 77243.55,
      "equity": 99408,
      "realized_pnl_cum": -712.57,
      "unrealized_pnl": 713.87,
      "last_trade_price": 95.949997,
      "last_mark_price": 95.949997,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-21 09:30:12",
          "target_weight": 0.221583,
          "current_weight_before": 0.220632,
          "delta_weight": 0.000951,
          "delta_notional": 95.1,
          "quote_fresh": true,
          "cash_before": 77146.75,
          "cash_after": 77051.65,
          "equity_after": 99209.95,
          "shares_before": 232,
          "shares_after": 233,
          "fill_shares": 1,
          "avg_cost_after": 92.859655,
          "realized_pnl_cum": -718.75,
          "unrealized_pnl": 522,
          "cumulative_pnl": -196.75
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-21 13:20:06",
          "target_weight": 0.221644,
          "current_weight_before": 0.223563,
          "delta_weight": -0.001919,
          "delta_notional": 191.9,
          "quote_fresh": true,
          "cash_before": 77051.65,
          "cash_after": 77243.55,
          "equity_after": 99408,
          "shares_before": 233,
          "shares_after": 231,
          "fill_shares": -2,
          "avg_cost_after": 92.859655,
          "realized_pnl_cum": -712.57,
          "unrealized_pnl": 713.87,
          "cumulative_pnl": 1.3
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-20\\trade_state.json",
      "order_notional": 191.9,
      "order_weight": -0.001919,
      "cumulative_pnl": 1.3
    },
    "base_decision": {
      "date": "2026-05-21",
      "final_positions": {
        "0050.TW": 0.221739,
        "2891.TW": 0.073913,
        "2892.TW": 0.064674,
        "2880.TW": 0.064674,
        "STRATEGYB_PAIR": 0,
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
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0372,
        "current_month_drawdown": -0.016,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-21",
      "final_positions": {
        "0050.TW": 0.221644,
        "2891.TW": 0.073913,
        "2892.TW": 0.064674,
        "2880.TW": 0.064674,
        "STRATEGYB_PAIR": 0,
        "CASH": 0.778356
      },
      "exposure": 0.221644,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.221644,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0372,
        "current_month_drawdown": -0.016,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": 3.7297,
        "focus_positive_count": 5,
        "focus_positive": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW",
          "2382.TW"
        ],
        "action": "EXECUTE",
        "reason": "MIDDAY_CONFIRM_OK",
        "target_exposure": 0.35
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 95.94999694824219,
          "prev_close": 92.5,
          "change_pct": 3.7297,
          "as_of": "2026-05-21T05:00:00"
        },
        "2308.TW": {
          "last_price": 2055,
          "prev_close": 1915,
          "change_pct": 7.3107,
          "as_of": "2026-05-21T04:59:00"
        },
        "2317.TW": {
          "last_price": 247.5,
          "prev_close": 240,
          "change_pct": 3.125,
          "as_of": "2026-05-21T05:00:00"
        },
        "2330.TW": {
          "last_price": 2245,
          "prev_close": 2185,
          "change_pct": 2.746,
          "as_of": "2026-05-21T04:59:00"
        },
        "2345.TW": {
          "last_price": 2490,
          "prev_close": 2355,
          "change_pct": 5.7325,
          "as_of": "2026-05-21T05:00:00"
        },
        "2382.TW": {
          "last_price": 310.5,
          "prev_close": 290,
          "change_pct": 7.069,
          "as_of": "2026-05-21T05:00:00"
        },
        "USO": {
          "last_price": 144.22999572753906,
          "prev_close": 152.9600067138672,
          "change_pct": -5.7074,
          "as_of": "2026-05-20T19:59:00"
        },
        "GLD": {
          "last_price": 417.3800048828125,
          "prev_close": 411.5,
          "change_pct": 1.4289,
          "as_of": "2026-05-20T19:59:00"
        },
        "TLT": {
          "last_price": 83.9000015258789,
          "prev_close": 83.0199966430664,
          "change_pct": 1.06,
          "as_of": "2026-05-20T19:59:00"
        },
        "QQQ": {
          "last_price": 713.0700073242188,
          "prev_close": 701.530029296875,
          "change_pct": 1.645,
          "as_of": "2026-05-20T19:59:00"
        },
        "SPY": {
          "last_price": 741.25,
          "prev_close": 733.72998046875,
          "change_pct": 1.0249,
          "as_of": "2026-05-20T19:59:00"
        },
        "UUP": {
          "last_price": 27.719999313354492,
          "prev_close": 27.790000915527344,
          "change_pct": -0.2519,
          "as_of": "2026-05-20T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 95.94999694824219,
        "prev_close": 92.5,
        "change_pct": 3.7297,
        "as_of": "2026-05-21T05:00:00"
      },
      "2308.TW": {
        "last_price": 2055,
        "prev_close": 1915,
        "change_pct": 7.3107,
        "as_of": "2026-05-21T04:59:00"
      },
      "2317.TW": {
        "last_price": 247.5,
        "prev_close": 240,
        "change_pct": 3.125,
        "as_of": "2026-05-21T05:00:00"
      },
      "2330.TW": {
        "last_price": 2245,
        "prev_close": 2185,
        "change_pct": 2.746,
        "as_of": "2026-05-21T04:59:00"
      },
      "2345.TW": {
        "last_price": 2490,
        "prev_close": 2355,
        "change_pct": 5.7325,
        "as_of": "2026-05-21T05:00:00"
      },
      "2382.TW": {
        "last_price": 310.5,
        "prev_close": 290,
        "change_pct": 7.069,
        "as_of": "2026-05-21T05:00:00"
      },
      "USO": {
        "last_price": 144.22999572753906,
        "prev_close": 152.9600067138672,
        "change_pct": -5.7074,
        "as_of": "2026-05-20T19:59:00"
      },
      "GLD": {
        "last_price": 417.3800048828125,
        "prev_close": 411.5,
        "change_pct": 1.4289,
        "as_of": "2026-05-20T19:59:00"
      },
      "TLT": {
        "last_price": 83.9000015258789,
        "prev_close": 83.0199966430664,
        "change_pct": 1.06,
        "as_of": "2026-05-20T19:59:00"
      },
      "QQQ": {
        "last_price": 713.0700073242188,
        "prev_close": 701.530029296875,
        "change_pct": 1.645,
        "as_of": "2026-05-20T19:59:00"
      },
      "SPY": {
        "last_price": 741.25,
        "prev_close": 733.72998046875,
        "change_pct": 1.0249,
        "as_of": "2026-05-20T19:59:00"
      },
      "UUP": {
        "last_price": 27.719999313354492,
        "prev_close": 27.790000915527344,
        "change_pct": -0.2519,
        "as_of": "2026-05-20T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 95.95,
        "shares": 2,
        "notional": 191.9,
        "weight": -0.001919,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1.3,
    "equity": 99408,
    "telegram_message": "[1320 執行結果]\n策略：Strategy A primary + Strategy C rotation + conditional Strategy B\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.224\n起始股數：233\n今日已用：22,164\n今日剩餘：77,244\n下單金額：192\n現金前後：77,052 -> 77,244\n總資產：99,408\n持有股數：231\n持有均價：92.86\n已實現損益：-713\n未實現損益：714\n目前累積損益：1\n0050部位：0.222\n現金：0.778\n0050即時：+3.73% @ 2026-05-21T05:00:00\n承接來源：cache\\trade_execution\\2026-05-20\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 96 × 2 股（約 192）\n參考資產：USO:-5.71% / GLD:+1.43% / TLT:+1.06% / QQQ:+1.65%\n目標曝險：0.222\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-21",
    "generated_at": "2026-05-21T05:30:02.442Z",
    "categories": {
      "technology": [
        {
          "title": "Grab 收購 foodpanda 台灣業務 深度在地化 自研地圖與 AI 技術全面布局",
          "summary": "Grab宣布收購foodpanda台灣業務，將以在地化、AI與自研地圖技術深耕市場，並強調個資保護；交易仍待公平會審核。",
          "source": "01-grab-foodpanda-ai.md",
          "link": "https://www.cool3c.com/article/248747",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "SpaceX files for IPO that could make Elon Musk a trillionaire",
          "summary": "SpaceX 已申請首次公開募股，若順利上市，可能使馬斯克身價大幅攀升；公司股票代號將為 SPCX。",
          "source": "02-spacex-files-for-ipo-that-could-make-elon-musk-a-t.md",
          "link": "https://www.bbc.com/news/articles/cg4pe2953q1o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Google Introduces Gemini for Science to Accelerate AI-Driven Scientific Discovery",
          "summary": "Google在I/O 2026公布「Gemini for Science」系列工具，主打以生成式AI加速科學研究、創新與高階協作，推動AI成為科研主要動力。",
          "source": "03-google-introduces-gemini-for-science-to-accelerate.md",
          "link": "https://itdigest.com/business-technology/digital-transformation/google-introduces-gemini-for-science-to-accelerate-ai-driven-scientific-discovery/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "HUMAIN and McKinsey Announce Collaboration to Accelerate AI Transformations Across Saudi Arabia",
          "summary": "HUMAIN與麥肯錫宣布合作，將透過生態系策略加速沙烏地阿拉伯企業導入人工智慧轉型。",
          "source": "04-humain-and-mckinsey-announce-collaboration-to-acce.md",
          "link": "https://www.prnewswire.co.uk/news-releases/humain-and-mckinsey-announce-collaboration-to-accelerate-ai-transformations-across-saudi-arabia-302777665.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Tribal AI lands $10M in seed funding to bring metadata-native agents to the enterprise",
          "summary": "Tribal AI 完成 1000 萬美元種子輪融資，計畫將「原生元資料」AI 代理導入企業，改善示範與實際生產環境落差。",
          "source": "05-tribal-ai-lands-10m-in-seed-funding-to-bring-metad.md",
          "link": "https://siliconangle.com/2026/05/20/tribal-ai-lands-10m-seed-funding-bring-metadata-native-agents-enterprise/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Promevo Unveils New Gemini AI Services to Accelerate Enterprise Adoption",
          "summary": "Promevo推出三項聚焦Gemini的Google Cloud AI服務，包含企業加速方案、Marketplace代理建置與上架支援，以及客製AI應用開發，盼加速企業導入Gemini平台。",
          "source": "06-promevo-unveils-new-gemini-ai-services-to-accelera.md",
          "link": "https://itdigest.com/quick-byte/promevo-unveils-new-gemini-ai-services-to-accelerate-enterprise-adoption/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Zendesk Unveils Autonomous Service Workforce to Transform Customer and Employee Support",
          "summary": "Zendesk在年度Relate大會宣布「自主服務團隊」願景，將以AI代理取代傳統聊天機器人，處理跨渠道客戶與員工支援。",
          "source": "07-zendesk-unveils-autonomous-service-workforce-to-tr.md",
          "link": "https://itdigest.com/information-communications-technology/enterprise-software/zendesk-unveils-autonomous-service-workforce-to-transform-customer-and-employee-support/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Parle Products Says 'Thank You' After PM Modi Gifts Its Toffees To Meloni",
          "summary": "Parle Products 感謝印度總理莫迪在贈送義大利總理梅洛尼禮物時，帶動旗下糖果登上國際舞台，提升品牌曝光。",
          "source": "08-parle-products-says-thank-you-after-pm-modi-gifts-.md",
          "link": "https://menafn.com/1111145430/Parle-Products-Says-Thank-You-After-PM-Modi-Gifts-Its-Toffees-To-Meloni",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "C1Secure Introduces SmartReady to Strengthen Governance for Rapid ServiceNow Releases",
          "summary": "C1Secure推出SmartReady，協助企業在ServiceNow快速更新前進行驗證、治理與認證，強化生產環境變更控管，並擴充其治理與AI安全產品線。",
          "source": "09-c1secure-introduces-smartready-to-strengthen-gover.md",
          "link": "https://itdigest.com/information-communications-technology/cybersecurity/c1secure-introduces-smartready-to-strengthen-governance-for-rapid-servicenow-releases/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "US groups urge investigation into child safety and spending on Roblox",
          "summary": "美國多個團體呼籲調查 Roblox 的兒童安全與支出問題；Roblox 回應稱已制定明確政策，禁止真實與模擬賭博，並規範付費隨機道具。",
          "source": "10-us-groups-urge-investigation-into-child-safety-and.md",
          "link": "https://www.bbc.com/news/articles/cgqpz809e7lo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "Ge-Shen's Q1 net profit drops 34.6pct to RM3.36mil",
          "summary": "Ge-Shen Corp截至2026年3月31日首季淨利按年下滑34.6%至336萬令吉，儘管營收增加，獲利仍明顯減少。",
          "source": "01-ge-shen-s-q1-net-profit-drops-34-6pct-to-rm3-36mil.md",
          "link": "https://www.nst.com.my/business/corporate/2026/05/1444368/ge-shens-q1-net-profit-drops-346pct-rm336mil",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Ecopetrol advances acquisition of the Jemeiwaa Ka'I wind cluster in La Guajira with the purchase of a 49% interest in the JK1 and JK2 wind projects",
          "summary": "Ecopetrol宣布完成收購哥倫比亞拉瓜希拉Jemeiwaa Ka'I風電集群中JK1、JK2兩項目49%股權，交易金額約2550萬美元，裝置容量259MW。",
          "source": "02-ecopetrol-advances-acquisition-of-the-jemeiwaa-ka-.md",
          "link": "https://www.benzinga.com/pressreleases/26/05/n52687615/ecopetrol-advances-acquisition-of-the-jemeiwaa-kai-wind-cluster-in-la-guajira-with-the-purchase-of",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Newton Golf Appoints Seasoned Consumer Products and Golf Executive Gregg Hemphill to Board of Directors",
          "summary": "Newton Golf宣布任命資深高爾夫與消費品高管Gregg Hemphill加入董事會，自2026年5月19日起生效，董事會增至五人。",
          "source": "03-newton-golf-appoints-seasoned-consumer-products-an.md",
          "link": "https://www.financialcontent.com/article/bizwire-2026-5-20-newton-golf-appoints-seasoned-consumer-products-and-golf-executive-gregg-hemphill-to-board-of-directors",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Electric Fields Give Optical Tweezers a Sharper Grip for Nanowire Calligraphy",
          "summary": "研究人員結合全息光鑷與交流電場，先將奈米線預先對齊再捕捉，顯著提升操控穩定性與效率，為低成本、可擴展的奈米器件製造開啟新途徑。",
          "source": "04-electric-fields-give-optical-tweezers-a-sharper-gr.md",
          "link": "https://www.newswise.com/articles/electric-fields-give-optical-tweezers-a-sharper-grip-for-nanowire-calligraphy/?sc=rsla",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Angela Merkel could represent Europe in peace talks with Putin",
          "summary": "報導指梅克爾可能代表歐洲與普丁進行和平談判，但此人選具爭議，因其執政時曾被批評對普丁過於接近，並讓德國依賴俄羅斯油氣。",
          "source": "05-angela-merkel-could-represent-europe-in-peace-talk.md",
          "link": "https://www.stuff.co.nz/world-news/360981682/angela-merkel-could-represent-europe-peace-talks-put",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Canadian Solar (NASDAQ:CSIQ) Downgraded by Freedom Capital to “Hold”",
          "summary": "Freedom Capital將Canadian Solar評級由強力買入下調至持有；Oppenheimer亦下修目標價，反映分析師對其前景轉趨保守。",
          "source": "06-canadian-solar-nasdaq-csiq-downgraded-by-freedom-c.md",
          "link": "https://www.tickerreport.com/banking-finance/13448509/canadian-solar-nasdaqcsiq-downgraded-by-freedom-capital-to-hold.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "STANDEX TO PRESENT AT WILLIAM BLAIR ANNUAL GROWTH CONFERENCE",
          "summary": "Standex International宣布，總裁兼執行長David Dunbar將於6月3日在芝加哥舉行的William Blair年度成長股會議上發表簡報。",
          "source": "07-standex-to-present-at-william-blair-annual-growth-.md",
          "link": "https://www.eagletribune.com/region/standex-to-present-at-william-blair-annual-growth-conference/article_0df489d2-2af1-58e2-a144-5ae7cac48498.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Mad River Investors Acquires Shares of 2,656 Royal Gold, Inc. $RGLD",
          "summary": "Mad River Investors於第四季新買入Royal Gold 2,656股，市值約59.1萬美元，並已向美國證交會申報。",
          "source": "08-mad-river-investors-acquires-shares-of-2-656-royal.md",
          "link": "https://baseballnewssource.com/2026/05/20/mad-river-investors-acquires-shares-of-2656-royal-gold-inc-rgld/11129379.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "IFP Advisors Inc Buys 4,273 Shares of Johnson & Johnson $JNJ",
          "summary": "IFP Advisors Inc 第四季增持嬌生 4,273 股，持股增至 36,688 股，市值約 759.3 萬美元，持股比重增加 13.2%。",
          "source": "09-ifp-advisors-inc-buys-4-273-shares-of-johnson-john.md",
          "link": "https://www.dailypolitical.com/2026/05/20/ifp-advisors-inc-buys-4273-shares-of-johnson-johnson-jnj.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "CytomX Therapeutics (NASDAQ:CTMX) Rating Increased to Strong-Buy at Wolfe Research",
          "summary": "Wolfe Research將CytomX Therapeutics評級上調至強力買入；HC Wainwright則下調目標價至11美元，但維持買入評級。",
          "source": "10-cytomx-therapeutics-nasdaq-ctmx-rating-increased-t.md",
          "link": "https://www.watchlistnews.com/cytomx-therapeutics-nasdaqctmx-rating-increased-to-strong-buy-at-wolfe-research/11089237.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "UK waters down new Russian oil sanctions as fuel prices rise",
          "summary": "英國因擔憂燃料供應受限與油價上升，調整對俄羅斯新石油制裁，放寬原先更嚴格的限制。",
          "source": "01-uk-waters-down-new-russian-oil-sanctions-as-fuel-p.md",
          "link": "https://www.bbc.com/news/articles/cy42x3g7r89o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Fuel duty freeze extended until the end of the year",
          "summary": "英國燃油稅原先於2022年3月在保守黨政府下調5便士，現延長凍結至今年年底。",
          "source": "02-fuel-duty-freeze-extended-until-the-end-of-the-yea.md",
          "link": "https://www.bbc.com/news/articles/c3021md6jq6o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Politicising Zubeen Garg's death backfired on Congress-led Opposition in Assam polls: CM Himanta Biswa Sarma",
          "summary": "阿薩姆邦首席部長薩爾瑪批評國大黨將祖賓·加爾之死政治化，稱此舉在選舉中反而適得其反，衝擊反對派表現。",
          "source": "03-politicising-zubeen-garg-s-death-backfired-on-cong.md",
          "link": "https://www.thehindu.com/news/national/assam/politicising-zubeen-gargs-death-backfired-on-congress-led-opposition-in-assam-polls-cm-himanta-biswa-sarma/article71002017.ece",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Gujarat Cabinet Expands 'Vatan Prem Yojana', Opens More Village Projects To Public Funding",
          "summary": "古吉拉特邦內閣擴大「Vatan Prem Yojana」適用範圍，新增逾20類鄉村建設項目可接受公眾資金支持，推動更多地方發展。",
          "source": "04-gujarat-cabinet-expands-vatan-prem-yojana-opens-mo.md",
          "link": "https://menafn.com/1111145432/Gujarat-Cabinet-Expands-Vatan-Prem-Yojana-Opens-More-Village-Projects-To-Public-Funding",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Gujarat To Seek Advance Forest Diversion Approvals For Future Road Widening Projects",
          "summary": "古吉拉特邦政府決定，針對未來道路拓寬所需的保護林地，提前向中央提交集中申請，以加快後續工程推進。",
          "source": "05-gujarat-to-seek-advance-forest-diversion-approvals.md",
          "link": "https://menafn.com/1111145435/Gujarat-To-Seek-Advance-Forest-Diversion-Approvals-For-Future-Road-Widening-Projects",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Tripura To Offer Rooftop Solar Panels For Rs 1,000 Under PM Surya Ghar Scheme",
          "summary": "特里普拉邦宣布配合印度PM Surya Ghar計畫，將以每戶1,000盧比提供屋頂太陽能板，並由州政府與電力公司共同推動。",
          "source": "06-tripura-to-offer-rooftop-solar-panels-for-rs-1-000.md",
          "link": "https://menafn.com/1111145431/Tripura-To-Offer-Rooftop-Solar-Panels-For-Rs-1000-Under-PM-Surya-Ghar-Scheme",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Quote Of The Day: Ruth Bader Ginsburg On Inclusivity- 'Fight For The Things That You Care About, But Do It In A Way...'",
          "summary": "報導回顧美國最高法院前大法官金斯伯格的名言，強調她倡導包容、平等與以理性方式為重視的事物奮鬥。",
          "source": "07-quote-of-the-day-ruth-bader-ginsburg-on-inclusivit.md",
          "link": "https://menafn.com/1111145434/Quote-Of-The-Day-Ruth-Bader-Ginsburg-On-Inclusivity-Fight-For-The-Things-That-You-Care-About-But-Do-It-In-A-Way",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "28 Summer Marketing, Promotion, & Advertising Ideas for 2026",
          "summary": "文章整理 2026 年夏季行銷、促銷與廣告點子，提供企業規劃季節性活動與提升曝光的靈感。",
          "source": "08-28-summer-marketing-promotion-advertising-ideas-fo.md",
          "link": "https://localiq.com/blog/summer-marketing-ideas/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "PM Modi’s fuel-saving call sparks ground action in Varanasi: No fuel days, e-bikes and carpools begin",
          "summary": "莫迪呼籲節約燃料後，瓦拉納西多個機構迅速響應：市政廳推行每週「無燃料日」，BLW推共享通勤，VDA訂購100輛電動機車。",
          "source": "09-pm-modi-s-fuel-saving-call-sparks-ground-action-in.md",
          "link": "https://organiser.org/2026/05/20/354317/bharat/pm-modi-fuel-saving-call-finds-feet-in-varanasi-walks-e-bikes-and-carpools-replace-the-commute/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Where Trump falters with Republicans — and where he holds steady, according to a new AP-NORC poll",
          "summary": "最新 AP-NORC 民調顯示，川普在共和黨以外仍不受歡迎，多數美國人不認同他對伊朗及整體外交政策的處理。",
          "source": "10-where-trump-falters-with-republicans-and-where-he-.md",
          "link": "https://sentinelcolorado.com/nation-world/nation/where-trump-falters-with-republicans-and-where-he-holds-steady-according-to-a-new-ap-norc-poll/",
          "strength": 1,
          "sentiment": "neutral",
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
      "portfolioValue": 109605.83683149202
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
    }
  ]
};
