window.ETFDashboardBootstrap = {
  "date": "2026-05-27",
  "generated_at": "2026-05-27T05:30:04.740Z",
  "sourceDates": {
    "newsDate": "2026-05-27",
    "tradeDate": "2026-05-27",
    "strategyDate": "2026-05-27",
    "shortTermDate": "2026-05-27"
  },
  "dataManifest": {
    "latest_date": "2026-05-27",
    "latest_updated_at": "2026-05-27T05:30:04.299Z",
    "signature": "1779859804299.5227",
    "source_dates": {
      "newsDate": "2026-05-27",
      "tradeDate": "2026-05-27",
      "strategyDate": "2026-05-27",
      "shortTermDate": "2026-05-27"
    },
    "generated_at": "2026-05-27T05:30:04.740Z"
  },
  "state": {
    "date": "2026-05-27",
    "daily_capital": 100000,
    "starting_weight": 0.454961,
    "starting_notional": 45496.1,
    "starting_shares": 443,
    "starting_avg_cost": 97.663767,
    "current_weight": 0.458042,
    "current_notional": 45804.2,
    "shares_held": 446,
    "avg_cost": 97.697643,
    "cost_basis_total": 43573.15,
    "market_value": 45804.2,
    "used_capital": 45804.2,
    "remaining_capital": 55554.75,
    "cash_balance_before": 55862.85,
    "cash_balance_after": 55554.75,
    "equity": 101358.95,
    "realized_pnl_cum": -278.8,
    "unrealized_pnl": 2231.05,
    "last_trade_price": 102.699997,
    "last_mark_price": 102.699997,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-27 09:30:10",
        "target_weight": 0.457619,
        "current_weight_before": 0.378078,
        "delta_weight": 0.079541,
        "delta_notional": 7954.1,
        "quote_fresh": true,
        "cash_before": 63816.95,
        "cash_after": 55862.85,
        "equity_after": 101624.75,
        "shares_before": 366,
        "shares_after": 443,
        "fill_shares": 77,
        "avg_cost_after": 97.663767,
        "realized_pnl_cum": -278.8,
        "unrealized_pnl": 2496.85,
        "cumulative_pnl": 2218.05
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-27 13:20:10",
        "target_weight": 0.458042,
        "current_weight_before": 0.454961,
        "delta_weight": 0.003081,
        "delta_notional": 308.1,
        "quote_fresh": true,
        "cash_before": 55862.85,
        "cash_after": 55554.75,
        "equity_after": 101358.95,
        "shares_before": 443,
        "shares_after": 446,
        "fill_shares": 3,
        "avg_cost_after": 97.697643,
        "realized_pnl_cum": -278.8,
        "unrealized_pnl": 2231.05,
        "cumulative_pnl": 1952.25
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-26\\trade_state.json",
    "order_notional": 308.1,
    "order_weight": 0.003081,
    "cumulative_pnl": 1952.25
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏多，但不追價；以 0050 或台積電為主，先用 20%~30% 目標部位試單",
    "instrument": "0050 優先，其次台積電（2330）",
    "window": "T+1 ~ T+5",
    "confidence": "中等偏高",
    "execution_points": [
      "1. **宏觀與市場定價不完全一致，但台股權值面偏多**",
      "2. **台股開盤策略：偏多但不重倉**",
      "3. **進場邏輯：不賭全面大漲，只吃權值延續**"
    ],
    "data_needs": [
      "台指期夜盤 / 開盤前報價",
      "台積電現貨與 ADR 價差",
      "開盤前三大法人籌碼、外資期貨未平倉",
      "台股早盤 5 分鐘 K 線與量能",
      "2330、2454、2317 的盤前委買委賣與開盤跳空幅度"
    ],
    "risk_points": [
      "若開盤後出現：",
      "台積電 ADR 利多不延續",
      "0050 開高走低",
      "台指期夜盤轉弱",
      "外資期貨空單增加",
      "目前最怕的是：**宏觀偏 stagflation，但市場短線先漲後殺**，所以一定要小部位、分批、設停損。",
      "若你今天只能做一次決策，我會選：**先部署，但只部署部分資金，不滿倉。"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏多，但不追價；以 0050 或台積電為主，先用 20%~30% 目標部位試單**\n- 操作標的：**0050 優先，其次台積電（2330）**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中等偏高**\n\n執行重點\n1. **宏觀與市場定價不完全一致，但台股權值面偏多**\n- 新聞主線是停滯性通膨、地緣政治、風險趨避，理論上利多黃金與美債、利空風險資產。\n- 但實際市場已出現**美股上漲、TSM ADR +1.93%、QQQ +1.78%**，代表科技權值股的風險偏好仍在。\n- 台股 0050 breadth 也偏正向：**bullish 21 / bearish 10 / momentum+ 26**，不是弱勢盤。\n\n2. **台股開盤策略：偏多但不重倉**\n- 目前最強的不是全面風險偏好，而是**權值股相對強、科技鏈續強**。\n- 0050 內部強勢股集中在：\n- **聯發科、鴻海、日月光、聯電、台光電、欣興、國巨**\n- 台積電 ADR 走強，對 0050 與台股開盤有正面帶動。\n- 因此我會選擇**開盤後分批小量切入 0050**，若台積電開盤不弱，再加碼到台積電或權值籃子。\n\n3. **進場邏輯：不賭全面大漲，只吃權值延續**\n- 這不是「新聞完全確認」的盤，而是**市場先行反映科技股強勢**。\n- 原油大跌、VIX 仍在 17，代表市場雖有波動，但尚未進入恐慌。\n- 所以策略不是空，也不是滿倉多，而是：\n- **開盤 5~15 分鐘觀察**\n- 若 0050 / 2330 **不破開盤低點、量能正常、台積電站穩**\n- 就做**小部位試單偏多**\n\n補充資料需求\n- **台指期夜盤 / 開盤前報價**\n- **台積電現貨與 ADR 價差**\n- **開盤前三大法人籌碼、外資期貨未平倉**\n- **台股早盤 5 分鐘 K 線與量能**\n- **2330、2454、2317 的盤前委買委賣與開盤跳空幅度**\n\n風險提醒\n- 若開盤後出現：\n- **台積電 ADR 利多不延續**\n- **0050 開高走低**\n- **台指期夜盤轉弱**\n- **外資期貨空單增加**\n則要把試單降為觀察，不追價。\n- 目前最怕的是：**宏觀偏 stagflation，但市場短線先漲後殺**，所以一定要小部位、分批、設停損。\n- 若你今天只能做一次決策，我會選：**先部署，但只部署部分資金，不滿倉。**"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔分批；權值股以台積電、聯發科、台達電的強勢回測承接為主，不追高；避險端可用 TLT/GLD 觀察性配置，台股部位先降到中性偏低",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電（2330）",
      "聯發科（2454）",
      "台達電（2308）／日月光投控（3711）"
    ],
    "risk_points": [
      "若原油突然止跌反彈、美元續強、TLT 回落**，代表宏觀避險邏輯失效，台股權值容易被壓回。",
      "若台積電轉弱且聯發科/台達電同步失速**，0050 會從「權值撐盤」變成「高檔整理」。",
      "若 0050 內部強勢股只剩少數、breadth 擴散不出來**，代表目前只是局部技術面強，不是全面共振，短線不宜追價。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔分批；權值股以台積電、聯發科、台達電的強勢回測承接為主，不追高；避險端可用 TLT/GLD 觀察性配置，台股部位先降到中性偏低**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電（2330）**\n- 0050 權重最高，決定指數方向。\n- 目前 5D +2.95%，屬於穩但不算爆發，代表指數有撐、但不是全面加速。\n- 若台積電續強，0050 才有機會維持高檔；若轉弱，整體短線會快速降溫。\n\n2. **聯發科（2454）**\n- 5D +35.18%，是目前最明顯的權值強勢股之一。\n- 代表電子權值內部有資金輪動，不只是台積電單點支撐。\n- 但漲幅已大，T+1~T+5 更適合等整理，不適合追價。\n\n3. **台達電（2308）／日月光投控（3711）**\n- 台達電 5D +22.72%，日月光投控 5D +29.45%，都屬於權值中強勢族群。\n- 這兩檔反映的是 AI 電源、封測/半導體供應鏈的資金延伸，對 0050 結構有支撐。\n- 但 breadth 雖偏多，仍有 10 檔 bearish、12 檔 near low，表示不是全面多頭。\n\n風險提醒\n- **若原油突然止跌反彈、美元續強、TLT 回落**，代表宏觀避險邏輯失效，台股權值容易被壓回。\n- **若台積電轉弱且聯發科/台達電同步失速**，0050 會從「權值撐盤」變成「高檔整理」。\n- **若 0050 內部強勢股只剩少數、breadth 擴散不出來**，代表目前只是局部技術面強，不是全面共振，短線不宜追價。"
  },
  "morning": {
    "generated_at": "2026-05-27 09:30:10",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-27\\trade_state.json",
    "trade_state": {
      "date": "2026-05-27",
      "daily_capital": 100000,
      "starting_weight": 0.378078,
      "starting_notional": 37807.8,
      "starting_shares": 366,
      "starting_avg_cost": 96.478001,
      "current_weight": 0.457619,
      "current_notional": 45761.9,
      "shares_held": 443,
      "avg_cost": 97.663767,
      "cost_basis_total": 43265.05,
      "market_value": 45761.9,
      "used_capital": 45761.9,
      "remaining_capital": 55862.85,
      "cash_balance_before": 63816.95,
      "cash_balance_after": 55862.85,
      "equity": 101624.75,
      "realized_pnl_cum": -278.8,
      "unrealized_pnl": 2496.85,
      "last_trade_price": 103.300003,
      "last_mark_price": 103.300003,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-27 09:30:10",
          "target_weight": 0.457619,
          "current_weight_before": 0.378078,
          "delta_weight": 0.079541,
          "delta_notional": 7954.1,
          "quote_fresh": true,
          "cash_before": 63816.95,
          "cash_after": 55862.85,
          "equity_after": 101624.75,
          "shares_before": 366,
          "shares_after": 443,
          "fill_shares": 77,
          "avg_cost_after": 97.663767,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 2496.85,
          "cumulative_pnl": 2218.05
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-26\\trade_state.json",
      "order_notional": 7954.1,
      "order_weight": 0.079541,
      "cumulative_pnl": 2218.05
    },
    "base_decision": {
      "date": "2026-05-27",
      "final_positions": {
        "0050.TW": 0.458333,
        "TLT": 0.091667,
        "CASH": 0.45
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
        "current_month_return": 0.0656,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-27",
      "final_positions": {
        "0050.TW": 0.457619,
        "TLT": 0.091667,
        "CASH": 0.542381
      },
      "exposure": 0.457619,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.457619,
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
        "current_month_return": 0.0656,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 2.4802,
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
          "last_price": 103.30000305175781,
          "prev_close": 100.80000305175781,
          "change_pct": 2.4802,
          "as_of": "2026-05-27T01:10:00"
        },
        "2308.TW": {
          "last_price": 2585,
          "prev_close": 2350,
          "change_pct": 10,
          "as_of": "2026-05-27T01:10:00"
        },
        "2317.TW": {
          "last_price": 266.5,
          "prev_close": 259,
          "change_pct": 2.8958,
          "as_of": "2026-05-27T01:10:00"
        },
        "2330.TW": {
          "last_price": 2310,
          "prev_close": 2270,
          "change_pct": 1.7621,
          "as_of": "2026-05-27T01:10:00"
        },
        "2345.TW": {
          "last_price": 2645,
          "prev_close": 2620,
          "change_pct": 0.9542,
          "as_of": "2026-05-27T01:09:00"
        },
        "2382.TW": {
          "last_price": 320,
          "prev_close": 316.5,
          "change_pct": 1.1058,
          "as_of": "2026-05-27T01:10:00"
        },
        "USO": {
          "last_price": 137.02000427246094,
          "prev_close": 140.9199981689453,
          "change_pct": -2.7675,
          "as_of": "2026-05-26T19:59:00"
        },
        "GLD": {
          "last_price": 413.9549865722656,
          "prev_close": 413.82000732421875,
          "change_pct": 0.0326,
          "as_of": "2026-05-26T19:59:00"
        },
        "TLT": {
          "last_price": 85.08000183105469,
          "prev_close": 84.68000030517578,
          "change_pct": 0.4724,
          "as_of": "2026-05-26T19:59:00"
        },
        "QQQ": {
          "last_price": 730.2150268554688,
          "prev_close": 717.5399780273438,
          "change_pct": 1.7665,
          "as_of": "2026-05-26T19:59:00"
        },
        "SPY": {
          "last_price": 750.469970703125,
          "prev_close": 745.6400146484375,
          "change_pct": 0.6478,
          "as_of": "2026-05-26T19:59:00"
        },
        "UUP": {
          "last_price": 27.7549991607666,
          "prev_close": 27.770000457763672,
          "change_pct": -0.054,
          "as_of": "2026-05-26T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 103.30000305175781,
        "prev_close": 100.80000305175781,
        "change_pct": 2.4802,
        "as_of": "2026-05-27T01:10:00"
      },
      "2308.TW": {
        "last_price": 2585,
        "prev_close": 2350,
        "change_pct": 10,
        "as_of": "2026-05-27T01:10:00"
      },
      "2317.TW": {
        "last_price": 266.5,
        "prev_close": 259,
        "change_pct": 2.8958,
        "as_of": "2026-05-27T01:10:00"
      },
      "2330.TW": {
        "last_price": 2310,
        "prev_close": 2270,
        "change_pct": 1.7621,
        "as_of": "2026-05-27T01:10:00"
      },
      "2345.TW": {
        "last_price": 2645,
        "prev_close": 2620,
        "change_pct": 0.9542,
        "as_of": "2026-05-27T01:09:00"
      },
      "2382.TW": {
        "last_price": 320,
        "prev_close": 316.5,
        "change_pct": 1.1058,
        "as_of": "2026-05-27T01:10:00"
      },
      "USO": {
        "last_price": 137.02000427246094,
        "prev_close": 140.9199981689453,
        "change_pct": -2.7675,
        "as_of": "2026-05-26T19:59:00"
      },
      "GLD": {
        "last_price": 413.9549865722656,
        "prev_close": 413.82000732421875,
        "change_pct": 0.0326,
        "as_of": "2026-05-26T19:59:00"
      },
      "TLT": {
        "last_price": 85.08000183105469,
        "prev_close": 84.68000030517578,
        "change_pct": 0.4724,
        "as_of": "2026-05-26T19:59:00"
      },
      "QQQ": {
        "last_price": 730.2150268554688,
        "prev_close": 717.5399780273438,
        "change_pct": 1.7665,
        "as_of": "2026-05-26T19:59:00"
      },
      "SPY": {
        "last_price": 750.469970703125,
        "prev_close": 745.6400146484375,
        "change_pct": 0.6478,
        "as_of": "2026-05-26T19:59:00"
      },
      "UUP": {
        "last_price": 27.7549991607666,
        "prev_close": 27.770000457763672,
        "change_pct": -0.054,
        "as_of": "2026-05-26T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 103.3,
        "shares": 77,
        "notional": 7954.1,
        "weight": 0.079541,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 2218.05,
    "equity": 101624.75,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.378\n起始股數：366\n今日已用：45,762\n今日剩餘：55,863\n下單金額：7,954\n現金前後：63,817 -> 55,863\n總資產：101,625\n持有股數：443\n持有均價：97.66\n已實現損益：-279\n未實現損益：2,497\n目前累積損益：2,218\n0050部位：0.458\n現金：0.542\n0050即時：+2.48% @ 2026-05-27T01:10:00\n承接來源：cache\\trade_execution\\2026-05-26\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 103 × 77 股（約 7,954）\n參考資產：USO:-2.77% / GLD:+0.03% / TLT:+0.47% / QQQ:+1.77%\n目標曝險：0.458\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-27 13:20:10",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-27\\trade_state.json",
    "trade_state": {
      "date": "2026-05-27",
      "daily_capital": 100000,
      "starting_weight": 0.454961,
      "starting_notional": 45496.1,
      "starting_shares": 443,
      "starting_avg_cost": 97.663767,
      "current_weight": 0.458042,
      "current_notional": 45804.2,
      "shares_held": 446,
      "avg_cost": 97.697643,
      "cost_basis_total": 43573.15,
      "market_value": 45804.2,
      "used_capital": 45804.2,
      "remaining_capital": 55554.75,
      "cash_balance_before": 55862.85,
      "cash_balance_after": 55554.75,
      "equity": 101358.95,
      "realized_pnl_cum": -278.8,
      "unrealized_pnl": 2231.05,
      "last_trade_price": 102.699997,
      "last_mark_price": 102.699997,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-27 09:30:10",
          "target_weight": 0.457619,
          "current_weight_before": 0.378078,
          "delta_weight": 0.079541,
          "delta_notional": 7954.1,
          "quote_fresh": true,
          "cash_before": 63816.95,
          "cash_after": 55862.85,
          "equity_after": 101624.75,
          "shares_before": 366,
          "shares_after": 443,
          "fill_shares": 77,
          "avg_cost_after": 97.663767,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 2496.85,
          "cumulative_pnl": 2218.05
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-27 13:20:10",
          "target_weight": 0.458042,
          "current_weight_before": 0.454961,
          "delta_weight": 0.003081,
          "delta_notional": 308.1,
          "quote_fresh": true,
          "cash_before": 55862.85,
          "cash_after": 55554.75,
          "equity_after": 101358.95,
          "shares_before": 443,
          "shares_after": 446,
          "fill_shares": 3,
          "avg_cost_after": 97.697643,
          "realized_pnl_cum": -278.8,
          "unrealized_pnl": 2231.05,
          "cumulative_pnl": 1952.25
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-26\\trade_state.json",
      "order_notional": 308.1,
      "order_weight": 0.003081,
      "cumulative_pnl": 1952.25
    },
    "base_decision": {
      "date": "2026-05-27",
      "final_positions": {
        "0050.TW": 0.458333,
        "TLT": 0.091667,
        "CASH": 0.45
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
        "current_month_return": 0.0656,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-27",
      "final_positions": {
        "0050.TW": 0.458042,
        "TLT": 0.091667,
        "CASH": 0.541958
      },
      "exposure": 0.458042,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.458042,
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
        "current_month_return": 0.0656,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": 2.5974,
        "focus_positive_count": 4,
        "focus_positive": [
          "2308.TW",
          "2317.TW",
          "2330.TW",
          "2345.TW"
        ],
        "action": "EXECUTE",
        "reason": "MIDDAY_CONFIRM_OK",
        "target_exposure": 0.35
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 102.69999694824219,
          "prev_close": 100.0999984741211,
          "change_pct": 2.5974,
          "as_of": "2026-05-27T05:00:00"
        },
        "2308.TW": {
          "last_price": 2535,
          "prev_close": 2350,
          "change_pct": 7.8723,
          "as_of": "2026-05-27T05:00:00"
        },
        "2317.TW": {
          "last_price": 264,
          "prev_close": 259,
          "change_pct": 1.9305,
          "as_of": "2026-05-27T05:00:00"
        },
        "2330.TW": {
          "last_price": 2310,
          "prev_close": 2270,
          "change_pct": 1.7621,
          "as_of": "2026-05-27T05:00:00"
        },
        "2345.TW": {
          "last_price": 2635,
          "prev_close": 2620,
          "change_pct": 0.5725,
          "as_of": "2026-05-27T04:59:00"
        },
        "2382.TW": {
          "last_price": 316,
          "prev_close": 316.5,
          "change_pct": -0.158,
          "as_of": "2026-05-27T05:00:00"
        },
        "USO": {
          "last_price": 137.02000427246094,
          "prev_close": 140.9199981689453,
          "change_pct": -2.7675,
          "as_of": "2026-05-26T19:59:00"
        },
        "GLD": {
          "last_price": 413.9549865722656,
          "prev_close": 413.82000732421875,
          "change_pct": 0.0326,
          "as_of": "2026-05-26T19:59:00"
        },
        "TLT": {
          "last_price": 85.08000183105469,
          "prev_close": 84.68000030517578,
          "change_pct": 0.4724,
          "as_of": "2026-05-26T19:59:00"
        },
        "QQQ": {
          "last_price": 730.2150268554688,
          "prev_close": 717.5399780273438,
          "change_pct": 1.7665,
          "as_of": "2026-05-26T19:59:00"
        },
        "SPY": {
          "last_price": 750.469970703125,
          "prev_close": 745.6400146484375,
          "change_pct": 0.6478,
          "as_of": "2026-05-26T19:59:00"
        },
        "UUP": {
          "last_price": 27.7549991607666,
          "prev_close": 27.770000457763672,
          "change_pct": -0.054,
          "as_of": "2026-05-26T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 102.69999694824219,
        "prev_close": 100.0999984741211,
        "change_pct": 2.5974,
        "as_of": "2026-05-27T05:00:00"
      },
      "2308.TW": {
        "last_price": 2535,
        "prev_close": 2350,
        "change_pct": 7.8723,
        "as_of": "2026-05-27T05:00:00"
      },
      "2317.TW": {
        "last_price": 264,
        "prev_close": 259,
        "change_pct": 1.9305,
        "as_of": "2026-05-27T05:00:00"
      },
      "2330.TW": {
        "last_price": 2310,
        "prev_close": 2270,
        "change_pct": 1.7621,
        "as_of": "2026-05-27T05:00:00"
      },
      "2345.TW": {
        "last_price": 2635,
        "prev_close": 2620,
        "change_pct": 0.5725,
        "as_of": "2026-05-27T04:59:00"
      },
      "2382.TW": {
        "last_price": 316,
        "prev_close": 316.5,
        "change_pct": -0.158,
        "as_of": "2026-05-27T05:00:00"
      },
      "USO": {
        "last_price": 137.02000427246094,
        "prev_close": 140.9199981689453,
        "change_pct": -2.7675,
        "as_of": "2026-05-26T19:59:00"
      },
      "GLD": {
        "last_price": 413.9549865722656,
        "prev_close": 413.82000732421875,
        "change_pct": 0.0326,
        "as_of": "2026-05-26T19:59:00"
      },
      "TLT": {
        "last_price": 85.08000183105469,
        "prev_close": 84.68000030517578,
        "change_pct": 0.4724,
        "as_of": "2026-05-26T19:59:00"
      },
      "QQQ": {
        "last_price": 730.2150268554688,
        "prev_close": 717.5399780273438,
        "change_pct": 1.7665,
        "as_of": "2026-05-26T19:59:00"
      },
      "SPY": {
        "last_price": 750.469970703125,
        "prev_close": 745.6400146484375,
        "change_pct": 0.6478,
        "as_of": "2026-05-26T19:59:00"
      },
      "UUP": {
        "last_price": 27.7549991607666,
        "prev_close": 27.770000457763672,
        "change_pct": -0.054,
        "as_of": "2026-05-26T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 102.7,
        "shares": 3,
        "notional": 308.1,
        "weight": 0.003081,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1952.25,
    "equity": 101358.95,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.455\n起始股數：443\n今日已用：45,804\n今日剩餘：55,555\n下單金額：308\n現金前後：55,863 -> 55,555\n總資產：101,359\n持有股數：446\n持有均價：97.70\n已實現損益：-279\n未實現損益：2,231\n目前累積損益：1,952\n0050部位：0.458\n現金：0.542\n0050即時：+2.60% @ 2026-05-27T05:00:00\n承接來源：cache\\trade_execution\\2026-05-26\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 103 × 3 股（約 308）\n參考資產：USO:-2.77% / GLD:+0.03% / TLT:+0.47% / QQQ:+1.77%\n目標曝險：0.458\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-27",
    "generated_at": "2026-05-27T05:30:04.745Z",
    "categories": {
      "technology": [
        {
          "title": "Instagram betting ads featuring Kane and Haaland banned",
          "summary": "英國廣告監管機構禁止含凱恩與哈蘭德的賭博廣告，認為這類廣告對未滿18歲青少年具有強烈吸引力。",
          "source": "01-instagram-betting-ads-featuring-kane-and-haaland-b.md",
          "link": "https://www.bbc.com/news/articles/c3w220y2l8xo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Tech Life",
          "summary": "文章探討 AI 進入校園後，教師在課堂中的角色如何轉變，重點在於教學功能與人類教師價值的重新定位。",
          "source": "02-tech-life.md",
          "link": "https://www.bbc.co.uk/sounds/play/w3ct8jxx?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Starmer vows to act on social media after meeting bereaved parents",
          "summary": "Starmer 與喪子家長會面後承諾將對社群媒體採取行動，但部分家長仍質疑政府是否會採取足夠強硬的措施。",
          "source": "03-starmer-vows-to-act-on-social-media-after-meeting-.md",
          "link": "https://www.bbc.com/news/articles/c5y7r9gqp6jo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Ever wish your dog could speak to you? AI collar can translate your pet's barks with 95% accuracy, experts claim",
          "summary": "一款新型 AI 項圈號稱可將狗叫聲翻譯成人類可理解的意思，專家稱準確率可達 95%，引發關注。",
          "source": "04-ever-wish-your-dog-could-speak-to-you-ai-collar-ca.md",
          "link": "https://www.dailymail.com/sciencetech/article-15848831/dog-speak-AI-collar-claims-translate.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Why does 30°C in the UK 'hit different'? Scientists blame high humidity and lack of air conditioning for the painful British heat",
          "summary": "科學家指出，英國30°C體感特別難受，主因是高濕度與空調普及不足，使悶熱感更強、散熱更差。",
          "source": "05-why-does-30-c-in-the-uk-hit-different-scientists-b.md",
          "link": "https://www.dailymail.com/sciencetech/article-15848443/UK-heat-scientists-blame-high-humidity.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "stagflation",
          "category": "technology"
        },
        {
          "title": "One step closer to space BABIES: China launches 'human artificial embryos' to find out if reproduction is possible in zero-gravity",
          "summary": "中國發射「人造胚胎」研究太空微重力下人類是否能繁殖，朝解答太空生育可行性邁出一步。",
          "source": "06-one-step-closer-to-space-babies-china-launches-hum.md",
          "link": "https://www.dailymail.com/sciencetech/article-15848779/China-launches-human-embryos-space.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "UFO files reveal new evidence of secret invasion by mysterious silver spheres",
          "summary": "五角大廈最新一批 UFO 檔案揭露，全球各地曾出現更多詭異球體的接觸紀錄，引發外界對其來源與性質的關注。",
          "source": "07-ufo-files-reveal-new-evidence-of-secret-invasion-b.md",
          "link": "https://www.dailymail.com/sciencetech/article-15841235/ufo-files-secret-invasion-silver-spheres.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Think this is bad? Scientists predict just how hot the UK could get this summer - and say the worst is yet to come",
          "summary": "英國五月高溫打破多地紀錄，氣候科學家警告，今夏可能更熱，最嚴峻的高溫情況尚未到來。",
          "source": "08-think-this-is-bad-scientists-predict-just-how-hot-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15848389/scientists-predict-UK-summer-temperature.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "stagflation",
          "category": "technology"
        },
        {
          "title": "Scientists predict a global population crash by 2064 - with humanity potentially HALVED",
          "summary": "專家警告，全球人口目前約83億，但可能在未來40年內急遽下滑，甚至到2064年減半。",
          "source": "09-scientists-predict-a-global-population-crash-by-20.md",
          "link": "https://www.dailymail.com/sciencetech/article-15848473/Scientists-predict-global-population-crash-2064.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "CIA accused of using Ancestry and 23andMe to 'hunt down' alien bloodlines in millions of DNA tests",
          "summary": "報導指稱美國中央情報局被控利用祖源與23andMe等數百萬筆DNA檢測資料，搜尋地球上外星生命或外星血統線索，引發爭議。",
          "source": "10-cia-accused-of-using-ancestry-and-23andme-to-hunt-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15845349/cia-ancestry-23andme-alien-dna.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "'Bullying' and 'overbearing' behaviour behind abrupt BP chairman removal",
          "summary": "BP未評論是否因霸凌行為而即刻撤換董事長，外界關注其突然去職背後原因。",
          "source": "01-bullying-and-overbearing-behaviour-behind-abrupt-b.md",
          "link": "https://www.bbc.com/news/articles/cjrppppwvwlo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Instagram betting ads featuring Kane and Haaland banned",
          "summary": "英國廣告監管機構禁止含凱恩與哈蘭德的 Instagram 博彩廣告，認為其對未滿18歲族群具有強烈吸引力。",
          "source": "02-instagram-betting-ads-featuring-kane-and-haaland-b.md",
          "link": "https://www.bbc.com/news/articles/c3w220y2l8xo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Cement industry projecting ‘at least flat’ growth in 2026",
          "summary": "菲律賓水泥製造商協會表示，受能源危機及去年基建貪腐醜聞後續影響，今年水泥銷售預期持平，盼市場至少維持零成長。",
          "source": "03-cement-industry-projecting-at-least-flat-growth-in.md",
          "link": "https://www.bworldonline.com/economy/2026/05/26/752327/cement-industry-projecting-at-least-flat-growth-in-2026/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Sales and Operations Planning (S&OP) Software Market Size Accelerates at 14.8% CAGR | By Key Players: SAP, Oracle, Kinaxis, Blue Yonder, Anaplan, Infor",
          "summary": "美伊戰事引發地緣政治衝擊，推升企業供應鏈風險管理、採購可視化與製造連續性需求，帶動S&OP軟體市場加速成長。",
          "source": "04-sales-and-operations-planning-s-op-software-market.md",
          "link": "https://www.openpr.com/news/4527370/sales-and-operations-planning-s-op-software-market-size",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "BoC's Vincent: Structural changes in labor markets make BoC's job more complicated",
          "summary": "加拿大央行副總裁Vincent表示，若經濟衝擊伴隨勞動市場結構性變化，貨幣政策判斷將更複雜、也更不明確。",
          "source": "05-boc-s-vincent-structural-changes-in-labor-markets-.md",
          "link": "https://www.fxstreet.com/news/bocs-vincent-structural-changes-in-labor-markets-make-bocs-job-more-complicated-202605261231",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Centre's finances not rosy, says Cong on RBI's dividend to govt",
          "summary": "國大黨議員賈伊拉姆·拉梅什稱，印度央行創紀錄上繳2.87兆盧比盈餘後，中央財政並非如外界所稱樂觀，並指央行下調風險緩衝以讓政府受惠。",
          "source": "06-centre-s-finances-not-rosy-says-cong-on-rbi-s-divi.md",
          "link": "https://newsable.asianetnews.com/india/centres-finances-not-rosy-says-cong-on-rbis-dividend-to-govt-articleshow-vb0kv98",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "The Oasis Group Publishes 2026 Peaks Report On Estate Planning Platforms, Highlighting Market Leaders And Industry Transformation",
          "summary": "Oasis Group發布2026 Peaks報告，指出遺產規劃平台已成為顧問成長、客戶互動與競爭差異化的重要工具，並點出市場領導者與產業轉型趨勢。",
          "source": "07-the-oasis-group-publishes-2026-peaks-report-on-est.md",
          "link": "https://menafn.com/1111170087/The-Oasis-Group-Publishes-2026-Peaks-Report-On-Estate-Planning-Platforms-Highlighting-Market-Leaders-And-Industry-Transformation",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Dreamsofa Disrupts Fast Furniture Market With 2026 Circular Design Mandate And PFAS-Free Standard",
          "summary": "DreamSofa宣布2026永續標準，要求產品採循環設計並全面採用無PFAS材料，主打重塑快速家具與高端家具製造模式。",
          "source": "08-dreamsofa-disrupts-fast-furniture-market-with-2026.md",
          "link": "https://menafn.com/1111170080/Dreamsofa-Disrupts-Fast-Furniture-Market-With-2026-Circular-Design-Mandate-And-PFAS-Free-Standard",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Weekly Report TEN Share Buyback From May 18 To May 22, 2026",
          "summary": "Technip Energies 公布 2026 年 5 月 18 日至 22 日期間的自家股票回購情況，屬例行性股權回購資訊揭露。",
          "source": "09-weekly-report-ten-share-buyback-from-may-18-to-may.md",
          "link": "https://menafn.com/1111170085/Weekly-Report-TEN-Share-Buyback-From-May-18-To-May-22-2026",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Ethiopia Allows Private Banks to Issue Export Trade Permits to Products Destined China",
          "summary": "衣索比亞國家銀行宣布，取消民營銀行不得為出口中國商品核發出口貿易許可的限制，盼促進出口、提升競爭力並改善銀行服務。",
          "source": "10-ethiopia-allows-private-banks-to-issue-export-trad.md",
          "link": "https://newbusinessethiopia.com/trade/ethiopia-allows-private-banks-to-issue-export-trade-permits-to-products-destined-china/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "RCB vs GT LIVE Updates, IPL 2026 Playoffs: Heavyweights Battle For Spot In The Final",
          "summary": "RCB與GT在IPL 2026資格賽1於達蘭薩拉交鋒，爭奪直接晉級決賽門票。RCB挾衛冕冠軍與主場適應優勢，GT則靠Gill領軍與穩定戰力迎戰。",
          "source": "01-rcb-vs-gt-live-updates-ipl-2026-playoffs-heavyweig.md",
          "link": "https://news.abplive.com/sports/ipl/rcb-vs-gt-live-updates-ipl-2026-playoffs-qualifier-1-virat-kohli-shubman-gill-bhuvneshwar-kumar-1846272",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Labour has 'no coherent plan' for country, says Blair",
          "summary": "前工黨首相布萊爾批評施凱爾·斯塔默領導的工黨政府在下次大選前處於「錯誤立場」，並指其對國家缺乏一致且明確的計畫。",
          "source": "02-labour-has-no-coherent-plan-for-country-says-blair.md",
          "link": "https://www.bbc.com/news/articles/cx211r9nm3lo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Starmer vows to act on social media after meeting bereaved parents",
          "summary": "Starmer 與失去子女的家長會面後承諾將對社群媒體採取行動，但部分家長仍懷疑政府是否會採取足夠強硬的措施。",
          "source": "03-starmer-vows-to-act-on-social-media-after-meeting-.md",
          "link": "https://www.bbc.com/news/articles/c5y7r9gqp6jo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "U.S. Fuel Travels Over 9,000 Miles to Reach Ukraine. How Gas Station Chain UPG Imports American Diesel",
          "summary": "烏克蘭燃料零售商UPG自2023年起從美國德州進口柴油，成為戰時供應鏈核心；三年內加油站數從不到100家增至650多家。",
          "source": "04-u-s-fuel-travels-over-9-000-miles-to-reach-ukraine.md",
          "link": "https://www.benzinga.com/pressreleases/26/05/n52774093/u-s-fuel-travels-over-9-000-miles-to-reach-ukraine-how-gas-station-chain-upg-imports-american-dies",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "politics"
        },
        {
          "title": "States raise Rs 11,625 crore via SGS auction, miss notified amount",
          "summary": "各州透過印度央行舉行的州政府證券拍賣，共籌得1.1625兆盧比，低於公告目標1.345兆盧比，顯示融資需求未完全達標。",
          "source": "05-states-raise-rs-11-625-crore-via-sgs-auction-miss-.md",
          "link": "https://newsable.asianetnews.com/business/states-raise-rs-11625-crore-via-sgs-auction-miss-notified-amount-articleshow-4a82ry7",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Texas Primary Runoff: Key races and what’s on the ballot in North Texas",
          "summary": "德州5月26日初選決選登場，北德州多個聯邦眾議員與參議員席位競逐激烈，選民可查樣本選票與各郡投票資訊。",
          "source": "06-texas-primary-runoff-key-races-and-what-s-on-the-b.md",
          "link": "https://www.fox4news.com/election/texas-primary-runoff-key-races",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Ghana’s extractive sector needs clearer, stronger policies — Ayi-Owoo",
          "summary": "德勤加納合夥人Ayi-Owoo呼籲加納制定更清晰、前瞻且有力的政策框架，以強化採掘業並確保各方共享利益。",
          "source": "07-ghana-s-extractive-sector-needs-clearer-stronger-p.md",
          "link": "https://www.myjoyonline.com/ghanas-extractive-sector-needs-clearer-stronger-policies-ayi-owoo/",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "UK to sanction crypto networks in bid to shut off 'Putin war machine'",
          "summary": "英國宣布新一輪制裁，將鎖定加密貨幣網絡，試圖切斷俄羅斯戰爭機器的資金來源，進一步壓縮其戰爭融資管道。",
          "source": "08-uk-to-sanction-crypto-networks-in-bid-to-shut-off-.md",
          "link": "https://www.thenational.scot/news/26139259.new-uk-sanctions-tackle-crypto-networks-used-russia/",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Texas runoff Election Day 2026 key races to know for El Paso voters",
          "summary": "德州選民參與初選決選投票，重點選戰包括美國參議院及地方法官職位，對埃爾帕索選民具參考意義。",
          "source": "09-texas-runoff-election-day-2026-key-races-to-know-f.md",
          "link": "https://www.elpasotimes.com/story/news/politics/elections/2026/05/26/texas-primary-runoff-election-2026-key-races-for-el-paso-voters/90197115007/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Where to vote in Travis County runoff election Tuesday, plus what’s on the ballot",
          "summary": "本文說明 Travis County 選民週二可前往投票的地點，並整理民主、共和兩黨初選決選選票上的競選項目。",
          "source": "10-where-to-vote-in-travis-county-runoff-election-tue.md",
          "link": "https://www.statesman.com/news/politics/elections/article/travis-county-runoff-election-ballot-guide-22274616.php",
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
      "portfolioValue": 111302.68236865028
    },
    {
      "date": "2026-05-27",
      "portfolioValue": 112208.66276485597
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
    }
  ]
};
