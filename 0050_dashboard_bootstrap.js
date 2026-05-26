window.ETFDashboardBootstrap = {
  "date": "2026-05-26",
  "generated_at": "2026-05-26T05:30:02.811Z",
  "sourceDates": {
    "newsDate": "2026-05-26",
    "tradeDate": "2026-05-26",
    "strategyDate": "2026-05-26",
    "shortTermDate": "2026-05-26"
  },
  "dataManifest": {
    "latest_date": "2026-05-26",
    "latest_updated_at": "2026-05-26T05:30:02.393Z",
    "signature": "1779773402393.2341",
    "source_dates": {
      "newsDate": "2026-05-26",
      "tradeDate": "2026-05-26",
      "strategyDate": "2026-05-26",
      "shortTermDate": "2026-05-26"
    },
    "generated_at": "2026-05-26T05:30:02.811Z"
  },
  "state": {
    "date": "2026-05-26",
    "daily_capital": 100000,
    "starting_weight": 0.367555,
    "starting_notional": 36755.5,
    "starting_shares": 365,
    "starting_avg_cost": 96.466434,
    "current_weight": 0.368562,
    "current_notional": 36856.2,
    "shares_held": 366,
    "avg_cost": 96.478001,
    "cost_basis_total": 35310.95,
    "market_value": 36856.2,
    "used_capital": 36856.2,
    "remaining_capital": 63816.95,
    "cash_balance_before": 63917.65,
    "cash_balance_after": 63816.95,
    "equity": 100673.15,
    "realized_pnl_cum": -278.8,
    "unrealized_pnl": 1545.25,
    "last_trade_price": 100.699997,
    "last_mark_price": 100.699997,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-26 09:30:11",
        "target_weight": 0.369015,
        "current_weight_before": 0.458994,
        "delta_weight": -0.089979,
        "delta_notional": 8997.9,
        "quote_fresh": true,
        "cash_before": 54919.75,
        "cash_after": 63917.65,
        "equity_after": 100819.15,
        "shares_before": 454,
        "shares_after": 365,
        "fill_shares": -89,
        "avg_cost_after": 96.466434,
        "realized_pnl_cum": -278.8,
        "unrealized_pnl": 1691.25,
        "cumulative_pnl": 1412.45
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-26 13:20:11",
        "target_weight": 0.368562,
        "current_weight_before": 0.367555,
        "delta_weight": 0.001007,
        "delta_notional": 100.7,
        "quote_fresh": true,
        "cash_before": 63917.65,
        "cash_after": 63816.95,
        "equity_after": 100673.15,
        "shares_before": 365,
        "shares_after": 366,
        "fill_shares": 1,
        "avg_cost_after": 96.478001,
        "realized_pnl_cum": -278.8,
        "unrealized_pnl": 1545.25,
        "cumulative_pnl": 1266.45
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-25\\trade_state.json",
    "order_notional": 100.7,
    "order_weight": 0.001007,
    "cumulative_pnl": 1266.45
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏多，但不追價；以 0050 或權值股籃子做小部位試單，等開盤後確認台積電與大型權值股是否續強再加碼",
    "instrument": "0050",
    "window": "T+1 ~ T+5",
    "confidence": "中等偏低",
    "execution_points": [
      "1. **宏觀是 Risk-off，但台股權值結構沒有全面轉弱**",
      "2. **0050 結構偏多，但核心要看台積電能不能接住**",
      "3. **進場方式：開盤前後分批，不追第一根**"
    ],
    "data_needs": [
      "台指期夜盤 / 早盤走勢",
      "台積電現貨開盤前委買委賣與 ADR 價差",
      "外資期貨未平倉與開盤前籌碼",
      "0050 成分權值股的 5 分鐘 K 線與開盤量",
      "若能補：台積電、聯發科、鴻海、台達電的盤前掛單強弱"
    ],
    "risk_points": [
      "目前最大風險是：**宏觀 risk-off 與台積電 ADR 走弱，可能讓台股開高走低",
      "若 9:00 後出現以下任一情況，應立刻降風險：",
      "台積電跌破開盤低",
      "0050 跌破早盤支撐",
      "台指期同步轉弱",
      "這不是適合重倉追價的盤，**只能小部位試單，等市場自己證明方向"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏多，但不追價；以 0050 或權值股籃子做小部位試單，等開盤後確認台積電與大型權值股是否續強再加碼**\n- 操作標的：**0050**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中等偏低**\n\n執行重點\n1. **宏觀是 Risk-off，但台股權值結構沒有全面轉弱**\n- 美債、美元偏強，代表市場仍偏防禦。\n- 但美股指數仍漲、VIX回落，表示不是全面風險崩壞。\n- 這種環境下，台股不適合重倉追多，但也不支持直接大幅做空。\n\n2. **0050 結構偏多，但核心要看台積電能不能接住**\n- 0050 breadth：**bullish 16 / bearish 10 / momentum+ 27**，結構偏正向。\n- 聯發科、台光電、聯電、欣興、國巨等權值/次權值偏強，代表內部有輪動支撐。\n- 但台積電 ADR **-0.65%**，而 0050 最大權重就是台積電，這會壓抑台股開盤追價意願。\n- 所以我的判斷是：**可以偏多，但只能小部位先卡位，不宜直接滿倉。**\n\n3. **進場方式：開盤前後分批，不追第一根**\n- **9:00 開盤先下 20%~30% 目標部位**買 0050。\n- 若開盤 15~30 分鐘內：\n- 台積電、聯發科、鴻海、台達電不破開盤低，\n- 0050 站穩分時均線，\n- 台指期不明顯轉弱，\n則再補到 **50%~70% 部位**。\n- 若台積電開盤弱、0050 跌破早盤低點，則**停止加碼**，保留現金。\n\n補充資料需求\n- **台指期夜盤 / 早盤走勢**\n- **台積電現貨開盤前委買委賣與 ADR 價差**\n- **外資期貨未平倉與開盤前籌碼**\n- **0050 成分權值股的 5 分鐘 K 線與開盤量**\n- **若能補：台積電、聯發科、鴻海、台達電的盤前掛單強弱**\n\n風險提醒\n- 目前最大風險是：**宏觀 risk-off 與台積電 ADR 走弱，可能讓台股開高走低**\n- 若 9:00 後出現以下任一情況，應立刻降風險：\n- 台積電跌破開盤低\n- 0050 跌破早盤支撐\n- 台指期同步轉弱\n- 這不是適合重倉追價的盤，**只能小部位試單，等市場自己證明方向**"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 先不追價，等回檔到 5 日線/前波整理區再分批；權值股以台積電、聯發科、台達電的強弱作為進出依據，短線不追高。若已有部位，維持核心、降低槓桿，反彈先減碼高波動個股。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330.TW)",
      "聯發科(2454.TW)",
      "台達電(2308.TW) / 鴻海(2317.TW)"
    ],
    "risk_points": [
      "目前是**宏觀偏空（Risk-off）但 0050 技術面偏強**，屬於**尚未共振**，不是全面做多訊號。",
      "失效條件：",
      "台積電轉弱跌破短線支撐",
      "聯發科、台達電、鴻海同步回檔",
      "0050 成分股 breadth 明顯惡化，bullish 16 / bearish 10 轉差",
      "美債、美元避險延續但台股權值無法跟上",
      "一旦出現上述情況，短線應從「觀望」直接切到**減碼/防守**，不要硬接飛刀。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 先不追價，等回檔到 5 日線/前波整理區再分批；權值股以台積電、聯發科、台達電的強弱作為進出依據，短線不追高。若已有部位，維持核心、降低槓桿，反彈先減碼高波動個股。**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330.TW)**\n0050 權重最高，決定指數方向；目前 5D +3.12% 但標記 neutral，代表有撐但不是最強主升，適合當作大盤風向球，不適合追價。\n\n2. **聯發科(2454.TW)**\n5D +24.85%、權重 6.50%，是目前 0050 內最強的高權重動能股之一；若續強，能支撐 0050 短線表現，但也容易在風險偏好轉弱時快速回吐。\n\n3. **台達電(2308.TW) / 鴻海(2317.TW)**\n台達電 5D +13.37%，鴻海 5D +5.03%，屬於權值穩定器。若這兩檔能守住，0050 比較有機會維持偏強整理；若轉弱，代表指數支撐開始鬆動。\n\n風險提醒\n- 目前是**宏觀偏空（Risk-off）但 0050 技術面偏強**，屬於**尚未共振**，不是全面做多訊號。\n- 失效條件：\n- **台積電轉弱跌破短線支撐**\n- **聯發科、台達電、鴻海同步回檔**\n- **0050 成分股 breadth 明顯惡化，bullish 16 / bearish 10 轉差**\n- **美債、美元避險延續但台股權值無法跟上**\n- 一旦出現上述情況，短線應從「觀望」直接切到**減碼/防守**，不要硬接飛刀。"
  },
  "morning": {
    "generated_at": "2026-05-26 09:30:11",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-26\\trade_state.json",
    "trade_state": {
      "date": "2026-05-26",
      "daily_capital": 100000,
      "starting_weight": 0.458994,
      "starting_notional": 45899.4,
      "starting_shares": 454,
      "starting_avg_cost": 96.466434,
      "current_weight": 0.369015,
      "current_notional": 36901.5,
      "shares_held": 365,
      "avg_cost": 96.466434,
      "cost_basis_total": 35210.25,
      "market_value": 36901.5,
      "used_capital": 36901.5,
      "remaining_capital": 63917.65,
      "cash_balance_before": 54919.75,
      "cash_balance_after": 63917.65,
      "equity": 100819.15,
      "realized_pnl_cum": -278.8,
      "unrealized_pnl": 1691.25,
      "last_trade_price": 101.099998,
      "last_mark_price": 101.099998,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-26 09:30:11",
          "target_weight": 0.369015,
          "current_weight_before": 0.458994,
          "delta_weight": -0.089979,
          "delta_notional": 8997.9,
          "quote_fresh": true,
          "cash_before": 54919.75,
          "cash_after": 63917.65,
          "equity_after": 100819.15,
          "shares_before": 454,
          "shares_after": 365,
          "fill_shares": -89,
          "avg_cost_after": 96.466434,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 1691.25,
          "cumulative_pnl": 1412.45
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-25\\trade_state.json",
      "order_notional": 8997.9,
      "order_weight": -0.089979,
      "cumulative_pnl": 1412.45
    },
    "base_decision": {
      "date": "2026-05-26",
      "final_positions": {
        "0050.TW": 0.369565,
        "2330.TW": 0.043478,
        "2454.TW": 0.032609,
        "2308.TW": 0.021739,
        "2317.TW": 0.021739,
        "2303.TW": 0.01087,
        "TLT": 0,
        "QQQ_SHORT": 0,
        "CASH": 0.5
      },
      "exposure": 0.5,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.5,
      "estimated_transaction_cost": 0.0005,
      "strategy": "Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0671,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-26",
      "final_positions": {
        "0050.TW": 0.369015,
        "2330.TW": 0.043478,
        "2454.TW": 0.032609,
        "2308.TW": 0.021739,
        "2317.TW": 0.021739,
        "2303.TW": 0.01087,
        "TLT": 0,
        "QQQ_SHORT": 0,
        "CASH": 0.630985
      },
      "exposure": 0.369015,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.369015,
      "estimated_transaction_cost": 0.0005,
      "strategy": "Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0671,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 0.2976,
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
          "last_price": 101.0999984741211,
          "prev_close": 100.80000305175781,
          "change_pct": 0.2976,
          "as_of": "2026-05-26T01:10:00"
        },
        "2308.TW": {
          "last_price": 2365,
          "prev_close": 2290,
          "change_pct": 3.2751,
          "as_of": "2026-05-26T01:10:00"
        },
        "2317.TW": {
          "last_price": 259.5,
          "prev_close": 261,
          "change_pct": -0.5747,
          "as_of": "2026-05-26T01:10:00"
        },
        "2330.TW": {
          "last_price": 2305,
          "prev_close": 2310,
          "change_pct": -0.2165,
          "as_of": "2026-05-26T01:10:00"
        },
        "2345.TW": {
          "last_price": 2685,
          "prev_close": 2540,
          "change_pct": 5.7087,
          "as_of": "2026-05-26T01:10:00"
        },
        "2382.TW": {
          "last_price": 319.5,
          "prev_close": 316.5,
          "change_pct": 0.9479,
          "as_of": "2026-05-26T01:10:00"
        },
        "USO": {
          "last_price": 140.9600067138672,
          "prev_close": 142.5399932861328,
          "change_pct": -1.1085,
          "as_of": "2026-05-22T19:59:00"
        },
        "GLD": {
          "last_price": 413.8500061035156,
          "prev_close": 416.989990234375,
          "change_pct": -0.753,
          "as_of": "2026-05-22T19:59:00"
        },
        "TLT": {
          "last_price": 84.67500305175781,
          "prev_close": 84.22000122070312,
          "change_pct": 0.5403,
          "as_of": "2026-05-22T19:59:00"
        },
        "QQQ": {
          "last_price": 717.4299926757812,
          "prev_close": 714.510009765625,
          "change_pct": 0.4087,
          "as_of": "2026-05-22T19:59:00"
        },
        "SPY": {
          "last_price": 745.5900268554688,
          "prev_close": 742.719970703125,
          "change_pct": 0.3864,
          "as_of": "2026-05-22T19:59:00"
        },
        "UUP": {
          "last_price": 27.770000457763672,
          "prev_close": 27.729999542236328,
          "change_pct": 0.1443,
          "as_of": "2026-05-22T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 101.0999984741211,
        "prev_close": 100.80000305175781,
        "change_pct": 0.2976,
        "as_of": "2026-05-26T01:10:00"
      },
      "2308.TW": {
        "last_price": 2365,
        "prev_close": 2290,
        "change_pct": 3.2751,
        "as_of": "2026-05-26T01:10:00"
      },
      "2317.TW": {
        "last_price": 259.5,
        "prev_close": 261,
        "change_pct": -0.5747,
        "as_of": "2026-05-26T01:10:00"
      },
      "2330.TW": {
        "last_price": 2305,
        "prev_close": 2310,
        "change_pct": -0.2165,
        "as_of": "2026-05-26T01:10:00"
      },
      "2345.TW": {
        "last_price": 2685,
        "prev_close": 2540,
        "change_pct": 5.7087,
        "as_of": "2026-05-26T01:10:00"
      },
      "2382.TW": {
        "last_price": 319.5,
        "prev_close": 316.5,
        "change_pct": 0.9479,
        "as_of": "2026-05-26T01:10:00"
      },
      "USO": {
        "last_price": 140.9600067138672,
        "prev_close": 142.5399932861328,
        "change_pct": -1.1085,
        "as_of": "2026-05-22T19:59:00"
      },
      "GLD": {
        "last_price": 413.8500061035156,
        "prev_close": 416.989990234375,
        "change_pct": -0.753,
        "as_of": "2026-05-22T19:59:00"
      },
      "TLT": {
        "last_price": 84.67500305175781,
        "prev_close": 84.22000122070312,
        "change_pct": 0.5403,
        "as_of": "2026-05-22T19:59:00"
      },
      "QQQ": {
        "last_price": 717.4299926757812,
        "prev_close": 714.510009765625,
        "change_pct": 0.4087,
        "as_of": "2026-05-22T19:59:00"
      },
      "SPY": {
        "last_price": 745.5900268554688,
        "prev_close": 742.719970703125,
        "change_pct": 0.3864,
        "as_of": "2026-05-22T19:59:00"
      },
      "UUP": {
        "last_price": 27.770000457763672,
        "prev_close": 27.729999542236328,
        "change_pct": 0.1443,
        "as_of": "2026-05-22T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 101.1,
        "shares": 89,
        "notional": 8997.9,
        "weight": -0.089979,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1412.45,
    "equity": 100819.15,
    "telegram_message": "[0930 執行結果]\n策略：Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.459\n起始股數：454\n今日已用：36,902\n今日剩餘：63,918\n下單金額：8,998\n現金前後：54,920 -> 63,918\n總資產：100,819\n持有股數：365\n持有均價：96.47\n已實現損益：-279\n未實現損益：1,691\n目前累積損益：1,412\n0050部位：0.369\n現金：0.631\n0050即時：+0.30% @ 2026-05-26T01:10:00\n承接來源：cache\\trade_execution\\2026-05-25\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 101 × 89 股（約 8,998）\n參考資產：USO:-1.11% / GLD:-0.75% / TLT:+0.54% / QQQ:+0.41%\n目標曝險：0.369\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-26 13:20:11",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-26\\trade_state.json",
    "trade_state": {
      "date": "2026-05-26",
      "daily_capital": 100000,
      "starting_weight": 0.367555,
      "starting_notional": 36755.5,
      "starting_shares": 365,
      "starting_avg_cost": 96.466434,
      "current_weight": 0.368562,
      "current_notional": 36856.2,
      "shares_held": 366,
      "avg_cost": 96.478001,
      "cost_basis_total": 35310.95,
      "market_value": 36856.2,
      "used_capital": 36856.2,
      "remaining_capital": 63816.95,
      "cash_balance_before": 63917.65,
      "cash_balance_after": 63816.95,
      "equity": 100673.15,
      "realized_pnl_cum": -278.8,
      "unrealized_pnl": 1545.25,
      "last_trade_price": 100.699997,
      "last_mark_price": 100.699997,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-26 09:30:11",
          "target_weight": 0.369015,
          "current_weight_before": 0.458994,
          "delta_weight": -0.089979,
          "delta_notional": 8997.9,
          "quote_fresh": true,
          "cash_before": 54919.75,
          "cash_after": 63917.65,
          "equity_after": 100819.15,
          "shares_before": 454,
          "shares_after": 365,
          "fill_shares": -89,
          "avg_cost_after": 96.466434,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 1691.25,
          "cumulative_pnl": 1412.45
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-26 13:20:11",
          "target_weight": 0.368562,
          "current_weight_before": 0.367555,
          "delta_weight": 0.001007,
          "delta_notional": 100.7,
          "quote_fresh": true,
          "cash_before": 63917.65,
          "cash_after": 63816.95,
          "equity_after": 100673.15,
          "shares_before": 365,
          "shares_after": 366,
          "fill_shares": 1,
          "avg_cost_after": 96.478001,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 1545.25,
          "cumulative_pnl": 1266.45
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-25\\trade_state.json",
      "order_notional": 100.7,
      "order_weight": 0.001007,
      "cumulative_pnl": 1266.45
    },
    "base_decision": {
      "date": "2026-05-26",
      "final_positions": {
        "0050.TW": 0.369565,
        "2330.TW": 0.043478,
        "2454.TW": 0.032609,
        "2308.TW": 0.021739,
        "2317.TW": 0.021739,
        "2303.TW": 0.01087,
        "TLT": 0,
        "QQQ_SHORT": 0,
        "CASH": 0.5
      },
      "exposure": 0.5,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.5,
      "estimated_transaction_cost": 0.0005,
      "strategy": "Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0671,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-26",
      "final_positions": {
        "0050.TW": 0.368562,
        "2330.TW": 0.043478,
        "2454.TW": 0.032609,
        "2308.TW": 0.021739,
        "2317.TW": 0.021739,
        "2303.TW": 0.01087,
        "TLT": 0,
        "QQQ_SHORT": 0,
        "CASH": 0.631438
      },
      "exposure": 0.368562,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.368562,
      "estimated_transaction_cost": 0.0005,
      "strategy": "Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利",
      "regime": "MIXED / TRANSITION",
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
        "current_month_return": 0.0671,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": -0.0992,
        "focus_positive_count": 3,
        "focus_positive": [
          "2308.TW",
          "2345.TW",
          "2382.TW"
        ],
        "action": "EXECUTE",
        "reason": "MIDDAY_CONFIRM_OK",
        "target_exposure": 0.35
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 100.69999694824219,
          "prev_close": 100.80000305175781,
          "change_pct": -0.0992,
          "as_of": "2026-05-26T05:00:00"
        },
        "2308.TW": {
          "last_price": 2360,
          "prev_close": 2290,
          "change_pct": 3.0568,
          "as_of": "2026-05-26T05:00:00"
        },
        "2317.TW": {
          "last_price": 258,
          "prev_close": 261,
          "change_pct": -1.1494,
          "as_of": "2026-05-26T05:00:00"
        },
        "2330.TW": {
          "last_price": 2275,
          "prev_close": 2310,
          "change_pct": -1.5152,
          "as_of": "2026-05-26T05:00:00"
        },
        "2345.TW": {
          "last_price": 2625,
          "prev_close": 2540,
          "change_pct": 3.3465,
          "as_of": "2026-05-26T05:00:00"
        },
        "2382.TW": {
          "last_price": 320,
          "prev_close": 316.5,
          "change_pct": 1.1058,
          "as_of": "2026-05-26T05:00:00"
        },
        "USO": {
          "last_price": 140.9600067138672,
          "prev_close": 142.5399932861328,
          "change_pct": -1.1085,
          "as_of": "2026-05-22T19:59:00"
        },
        "GLD": {
          "last_price": 413.8500061035156,
          "prev_close": 416.989990234375,
          "change_pct": -0.753,
          "as_of": "2026-05-22T19:59:00"
        },
        "TLT": {
          "last_price": 84.67500305175781,
          "prev_close": 84.22000122070312,
          "change_pct": 0.5403,
          "as_of": "2026-05-22T19:59:00"
        },
        "QQQ": {
          "last_price": 717.4299926757812,
          "prev_close": 714.510009765625,
          "change_pct": 0.4087,
          "as_of": "2026-05-22T19:59:00"
        },
        "SPY": {
          "last_price": 745.5900268554688,
          "prev_close": 742.719970703125,
          "change_pct": 0.3864,
          "as_of": "2026-05-22T19:59:00"
        },
        "UUP": {
          "last_price": 27.770000457763672,
          "prev_close": 27.729999542236328,
          "change_pct": 0.1443,
          "as_of": "2026-05-22T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 100.69999694824219,
        "prev_close": 100.80000305175781,
        "change_pct": -0.0992,
        "as_of": "2026-05-26T05:00:00"
      },
      "2308.TW": {
        "last_price": 2360,
        "prev_close": 2290,
        "change_pct": 3.0568,
        "as_of": "2026-05-26T05:00:00"
      },
      "2317.TW": {
        "last_price": 258,
        "prev_close": 261,
        "change_pct": -1.1494,
        "as_of": "2026-05-26T05:00:00"
      },
      "2330.TW": {
        "last_price": 2275,
        "prev_close": 2310,
        "change_pct": -1.5152,
        "as_of": "2026-05-26T05:00:00"
      },
      "2345.TW": {
        "last_price": 2625,
        "prev_close": 2540,
        "change_pct": 3.3465,
        "as_of": "2026-05-26T05:00:00"
      },
      "2382.TW": {
        "last_price": 320,
        "prev_close": 316.5,
        "change_pct": 1.1058,
        "as_of": "2026-05-26T05:00:00"
      },
      "USO": {
        "last_price": 140.9600067138672,
        "prev_close": 142.5399932861328,
        "change_pct": -1.1085,
        "as_of": "2026-05-22T19:59:00"
      },
      "GLD": {
        "last_price": 413.8500061035156,
        "prev_close": 416.989990234375,
        "change_pct": -0.753,
        "as_of": "2026-05-22T19:59:00"
      },
      "TLT": {
        "last_price": 84.67500305175781,
        "prev_close": 84.22000122070312,
        "change_pct": 0.5403,
        "as_of": "2026-05-22T19:59:00"
      },
      "QQQ": {
        "last_price": 717.4299926757812,
        "prev_close": 714.510009765625,
        "change_pct": 0.4087,
        "as_of": "2026-05-22T19:59:00"
      },
      "SPY": {
        "last_price": 745.5900268554688,
        "prev_close": 742.719970703125,
        "change_pct": 0.3864,
        "as_of": "2026-05-22T19:59:00"
      },
      "UUP": {
        "last_price": 27.770000457763672,
        "prev_close": 27.729999542236328,
        "change_pct": 0.1443,
        "as_of": "2026-05-22T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 100.7,
        "shares": 1,
        "notional": 100.7,
        "weight": 0.001007,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1266.45,
    "equity": 100673.15,
    "telegram_message": "[1320 執行結果]\n策略：Strategy A 主策略 + Strategy C 台股輪動 + Strategy B 條件式低權重套利\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.368\n起始股數：365\n今日已用：36,856\n今日剩餘：63,817\n下單金額：101\n現金前後：63,918 -> 63,817\n總資產：100,673\n持有股數：366\n持有均價：96.48\n已實現損益：-279\n未實現損益：1,545\n目前累積損益：1,266\n0050部位：0.369\n現金：0.631\n0050即時：-0.10% @ 2026-05-26T05:00:00\n承接來源：cache\\trade_execution\\2026-05-25\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 101 × 1 股（約 101）\n參考資產：USO:-1.11% / GLD:-0.75% / TLT:+0.54% / QQQ:+0.41%\n目標曝險：0.369\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-26",
    "generated_at": "2026-05-26T05:30:02.816Z",
    "categories": {
      "technology": [
        {
          "title": "Government vows to bring in under-16 social media restrictions by end of year",
          "summary": "英國科技部長表示，政府承諾將在年底前推動16歲以下社群媒體限制，並預計於夏季公布諮詢回應。",
          "source": "01-government-vows-to-bring-in-under-16-social-media-.md",
          "link": "https://www.bbc.com/news/articles/c5y7r9gqp6jo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "The rise of the fruit that tastes like custard",
          "summary": "釋迦樹因耐旱耐熱而受重視，但果實嬌嫩、運輸與出口不易，限制其國際市場擴張。",
          "source": "02-the-rise-of-the-fruit-that-tastes-like-custard.md",
          "link": "https://www.bbc.com/news/articles/ce8pmrp0m47o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "CIA accused of using Ancestry and 23andMe to 'hunt down' alien bloodlines in millions of DNA tests",
          "summary": "報導指稱美國中央情報局被控搜尋數百萬筆 DNA 檢測資料，試圖找出地球上的外星生命或所謂外星血統，引發爭議。",
          "source": "03-cia-accused-of-using-ancestry-and-23andme-to-hunt-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15845349/cia-ancestry-23andme-alien-dna.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Scientists discover a third eye hidden in the human body and the reason it's there",
          "summary": "科學家指出，人類體內確實存在被稱為「第三眼」的結構，並已了解其形成原因，顛覆了超自然傳說的想像。",
          "source": "04-scientists-discover-a-third-eye-hidden-in-the-huma.md",
          "link": "https://www.dailymail.com/sciencetech/article-15846711/scientists-discover-human-eye.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Revealed: The LEAST healthy snacks... from Mini Cheddars to Pom-bears and even lentil chips",
          "summary": "最新排名指出多款常見零食熱量與營養表現不佳，其中 Mini Cheddars、Pom-Bears 等被列為較不健康選項，提醒消費者留意零食選擇。",
          "source": "05-revealed-the-least-healthy-snacks-from-mini-chedda.md",
          "link": "https://www.dailymail.com/health/article-15840015/snack-ranking-Mini-Cheddars-Pom-bears-lentil-chips-healthy-snack.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Spend a night in the past: Cruise line unveils '1896 Cabin' complete with a barrel bar, a Victorian bunk bed…and a vintage wooden toilet seat",
          "summary": "某郵輪推出「1896 Cabin」主題艙房，重現19世紀探險者木屋風格，內含桶形吧台、維多利亞式上下舖與復古木製馬桶座，主打懷舊體驗。",
          "source": "06-spend-a-night-in-the-past-cruise-line-unveils-1896.md",
          "link": "https://www.dailymail.com/sciencetech/article-15846539/Cruise-line-1896-Cabin-Victorian-HX.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "There's a new T. rex in town! New species of mosasaur measuring 43 FEET long terrorised the ancient seas",
          "summary": "研究指出，古海洋曾有一種新發現的滄龍，體長約43英尺，可能是當時海中頂級掠食者。",
          "source": "07-there-s-a-new-t-rex-in-town-new-species-of-mosasau.md",
          "link": "https://www.dailymail.com/sciencetech/article-15846721/New-mosasaur-dinosaur-terrorised-seas.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "The 5 foods you should NEVER cook in an air fryer, according to experts",
          "summary": "專家指出，雖然氣炸鍋幾乎能烹調各種食物，但仍有部分食材不適合放入，否則可能影響口感或安全。",
          "source": "08-the-5-foods-you-should-never-cook-in-an-air-fryer-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15846341/foods-NEVER-cook-air-fryer-experts.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "The dangerously overdue Northeast hurricane we can't ignore: Catastrophic damage and biggest New England danger zone revealed by top forecaster",
          "summary": "專家指出，隨著2026年颶風季逼近，美國東北部才是被忽視且已久未遭重大颶風侵襲的高風險區，可能面臨災難性損害。",
          "source": "09-the-dangerously-overdue-northeast-hurricane-we-can.md",
          "link": "https://www.dailymail.com/sciencetech/article-15799025/hurrican-zone-america-new-england-forecaster.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "ASSIST Software Clears One of the World's Newest AI Audits, Earning ISO/IEC 42001 Certification",
          "summary": "羅馬尼亞軟體公司ASSIST Software通過ISO/IEC 42001:2023 AI管理系統認證，成為歐洲少數獲證企業之一，強化其AI治理、風險控管與可追溯性。",
          "source": "10-assist-software-clears-one-of-the-world-s-newest-a.md",
          "link": "https://www.romania-insider.com/assist-software-clears-one-worlds-newest-ai-audits-earning-isoiec-42001-certification",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "Trap!? PFFA’s 9.6 Percent Preferred Yield Hides Up to 33 Percent Borrowed Leverage Most Income Investors Never See",
          "summary": "文章指出，Virtus InfraCap U.S. Preferred Stock ETF（PFFA）表面配息率達9.67%，高於PFF的5.6%，但其高收益部分來自最高可達資產33.3%的借款槓桿，投資人需留意風險。",
          "source": "01-trap-pffa-s-9-6-percent-preferred-yield-hides-up-t.md",
          "link": "https://247wallst.com/investing/2026/05/25/trap-pffas-9-6-percent-preferred-yield-hides-up-to-33-percent-borrowed-leverage-most-income-investors-never-see/",
          "strength": 2,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Todd Asset Management LLC Sells 64,002 Shares of The Progressive Corporation $PGR",
          "summary": "Todd Asset Management LLC 在第四季減持 Progressive 保險公司股票 64,002 股，持股降至 88,925 股，較前期減少 41.9%。",
          "source": "02-todd-asset-management-llc-sells-64-002-shares-of-t.md",
          "link": "https://www.watchlistnews.com/todd-asset-management-llc-sells-64002-shares-of-the-progressive-corporation-pgr/11094109.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Todd Asset Management LLC Purchases New Position in Citigroup Inc. $C",
          "summary": "Todd Asset Management LLC於第四季新買入花旗集團24.6萬股，持股市值約2,874萬美元，顯示機構投資人對該股持續布局。",
          "source": "03-todd-asset-management-llc-purchases-new-position-i.md",
          "link": "https://www.watchlistnews.com/todd-asset-management-llc-purchases-new-position-in-citigroup-inc-c/11094108.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Morningstar Investment Management LLC Sells 6,014 Shares of Vanguard Total Stock Market ETF $VTI",
          "summary": "Morningstar Investment Management LLC於第四季減持Vanguard Total Stock Market ETF 6,014股，持股降至213,319股，減幅約2.7%。",
          "source": "04-morningstar-investment-management-llc-sells-6-014-.md",
          "link": "https://www.tickerreport.com/banking-finance/13453372/morningstar-investment-management-llc-sells-6014-shares-of-vanguard-total-stock-market-etf-vti.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Todd Asset Management LLC Decreases Stock Position in Ralph Lauren Corporation $RL",
          "summary": "Todd Asset Management LLC 在第四季減持 Ralph Lauren 股票 7.9%，賣出 6,717 股後持有 78,247 股。",
          "source": "05-todd-asset-management-llc-decreases-stock-position.md",
          "link": "https://www.dailypolitical.com/2026/05/25/todd-asset-management-llc-decreases-stock-position-in-ralph-lauren-corporation-rl.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "AutoZone, Inc. $AZO Shares Sold by Todd Asset Management LLC",
          "summary": "Todd Asset Management LLC於第四季減持AutoZone 30.6%，賣出2,714股後持有6,148股，市值約2,085萬美元。",
          "source": "06-autozone-inc-azo-shares-sold-by-todd-asset-managem.md",
          "link": "https://www.dailypolitical.com/2026/05/25/autozone-inc-azo-shares-sold-by-todd-asset-management-llc.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Are Wall Street Analysts Bullish on Ralph Lauren Stock?",
          "summary": "Ralph Lauren 過去一年表現優於大盤，華爾街分析師對其未來股價前景普遍持樂觀態度。",
          "source": "07-are-wall-street-analysts-bullish-on-ralph-lauren-s.md",
          "link": "https://www.barchart.com/story/news/2115166/are-wall-street-analysts-bullish-on-ralph-lauren-stock",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Pension Funds Pile Billions Into This Treasury ETF Every Quarter. Retail Retirees Barely Know It Exists.",
          "summary": "報導指出，退休基金等機構投資人每季大量買進一檔美國公債ETF，但一般零售退休族對其認識仍有限。",
          "source": "08-pension-funds-pile-billions-into-this-treasury-etf.md",
          "link": "https://finance.yahoo.com/markets/options/articles/pension-funds-pile-billions-treasury-123053042.html",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "finance"
        },
        {
          "title": "FM asks lenders to go beyond standard loans, design credit repayments around biz cycles",
          "summary": "印度財長西塔拉曼呼籲銀行跳脫標準貸款，依不同企業收入週期設計還款機制，為中小微企業提供更貼合營運的信貸方案，以促進成長。",
          "source": "09-fm-asks-lenders-to-go-beyond-standard-loans-design.md",
          "link": "https://economictimes.indiatimes.com/news/economy/policy/finance-minister-nirmala-sitharaman-advocates-customized-loan-repayment-structures-for-small-businesses/articleshow/131309628.cms",
          "strength": 3,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Sun Life Financial Inc. $SLF Holdings Cut by Todd Asset Management LLC",
          "summary": "Todd Asset Management LLC 在第四季減持 Sun Life Financial 2.3%，賣出 15,394 股後持股降至 656,126 股。",
          "source": "10-sun-life-financial-inc-slf-holdings-cut-by-todd-as.md",
          "link": "https://baseballnewssource.com/2026/05/25/sun-life-financial-inc-slf-holdings-cut-by-todd-asset-management-llc/11134250.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "Democrats feud over stock trading as they sharpen anti-corruption case against Trump",
          "summary": "美國民主黨內部就議員股票交易規範出現分歧，同時強化對川普的反腐敗攻勢；前眾議員艾爾瑞德指出，選民長期懷疑政客在華府牟利。",
          "source": "01-democrats-feud-over-stock-trading-as-they-sharpen-.md",
          "link": "https://www.bnnbloomberg.ca/business/international/2026/05/25/democrats-feud-over-stock-trading-as-they-sharpen-anti-corruption-case-against-trump/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Education secretary to ask competition watchdog to review hidden childcare costs",
          "summary": "英國教育大臣布里吉特·菲利普森將要求競爭監管機構檢視政府資助托育中，家庭仍需負擔的隱藏費用。",
          "source": "02-education-secretary-to-ask-competition-watchdog-to.md",
          "link": "https://www.bbc.com/news/articles/c4g7d6ngjldo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Former SNP chief executive Peter Murrell in custody after admitting £400,000 embezzlement",
          "summary": "前蘇格蘭民族黨執行長彼得·穆雷爾承認侵吞40萬英鎊後，被法院裁定羈押候審；他也是前蘇格蘭首席部長尼古拉·史特金的分居丈夫。",
          "source": "03-former-snp-chief-executive-peter-murrell-in-custod.md",
          "link": "https://www.bbc.com/news/articles/c4g4q7yl3kno?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Mere Failure to Intervene in Marital Dispute Does Not Attract Criminal Liability Under 498A: Supreme Court Quashes Case Against In-Laws",
          "summary": "印度最高法院裁定，僅因未介入夫妻爭執，且缺乏具體事實依據的籠統指控，不足以依498A條追究丈夫親屬刑責，並撤銷相關刑事與家暴案件。",
          "source": "04-mere-failure-to-intervene-in-marital-dispute-does-.md",
          "link": "https://lawtrend.in/mere-failure-to-intervene-in-marital-dispute-does-not-attract-criminal-liability-under-498a-supreme-court-quashes-case-against-in-laws/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Rijiju on 'Cockroach' trend: Govt focused on serious work, not trends",
          "summary": "印度聯邦部長Rijiju表示，政府專注於實質工作，不必對每個社群媒體潮流回應；同時，針對諷刺性「Cockroach Janata Party」運動，已有人向最高法院提起公益訴訟。",
          "source": "05-rijiju-on-cockroach-trend-govt-focused-on-serious-.md",
          "link": "https://newsable.asianetnews.com/india/rijiju-on-cockroach-trend-govt-focused-on-serious-work-not-trends-articleshow-idzvzgw",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Padma Awards 2026: Prosenjit Chatterjee receives Padma Shri from President Droupadi Murmu in traditional bengali attire",
          "summary": "資深孟加拉影星普羅森吉特·查特吉在新德里舉行的2026年帕德瑪獎典禮上獲頒帕德瑪施里獎，由總統穆爾穆親自授予，表彰其逾40年影壇貢獻。",
          "source": "06-padma-awards-2026-prosenjit-chatterjee-receives-pa.md",
          "link": "https://timesofindia.indiatimes.com/entertainment/bengali/movies/news/padma-awards-2026-prosenjit-chatterjee-receives-padma-shri-from-president-droupadi-murmu-in-traditional-bengali-attire/articleshow/131309554.cms",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Owaisi Slams Assam UCC Bill As 'Backdoor Imposition Of Hindu Law'",
          "summary": "AIMIM主席奧瓦西批評阿薩姆邦提出的統一民法典法案，指其是以「後門」方式強加印度教法，並對該法案表達強烈反對。",
          "source": "07-owaisi-slams-assam-ucc-bill-as-backdoor-imposition.md",
          "link": "https://menafn.com/1111165101/Owaisi-Slams-Assam-UCC-Bill-As-Backdoor-Imposition-Of-Hindu-Law",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "The questions raised by the Peter Murrell embezzlement controversy",
          "summary": "彼得·穆雷爾挪用公款爭議持續發酵，警方調查已延續五年，長期籠罩蘇格蘭民族黨，成為黨內外關注的敏感政治事件。",
          "source": "08-the-questions-raised-by-the-peter-murrell-embezzle.md",
          "link": "https://www.bbc.com/news/articles/c74dd82w943o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Starmer 'appalled' by case of boys spared jail after raping teenage girls",
          "summary": "英國首相施凱爾對兩名男孩強姦少女卻未入獄的案件表示震驚，並稱相關刑期正被緊急檢討，認為此舉正確。",
          "source": "09-starmer-appalled-by-case-of-boys-spared-jail-after.md",
          "link": "https://www.bbc.com/news/articles/c332ljdkd81o?at_medium=RSS&at_campaign=rss",
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
      "portfolioValue": 111466.34067668735
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
    }
  ]
};
