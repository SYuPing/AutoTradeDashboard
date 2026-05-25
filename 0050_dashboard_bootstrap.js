window.ETFDashboardBootstrap = {
  "date": "2026-05-25",
  "generated_at": "2026-05-25T05:30:03.581Z",
  "sourceDates": {
    "newsDate": "2026-05-25",
    "tradeDate": "2026-05-25",
    "strategyDate": "2026-05-25",
    "shortTermDate": "2026-05-25"
  },
  "dataManifest": {
    "latest_date": "2026-05-25",
    "latest_updated_at": "2026-05-25T05:30:02.046Z",
    "signature": "1779687002046.3894",
    "source_dates": {
      "newsDate": "2026-05-25",
      "tradeDate": "2026-05-25",
      "strategyDate": "2026-05-25",
      "shortTermDate": "2026-05-25"
    },
    "generated_at": "2026-05-25T05:30:03.581Z"
  },
  "state": {
    "date": "2026-05-25",
    "daily_capital": 100000,
    "starting_weight": 0.460427,
    "starting_notional": 46042.75,
    "starting_shares": 457,
    "starting_avg_cost": 96.466434,
    "current_weight": 0.457405,
    "current_notional": 45740.5,
    "shares_held": 454,
    "avg_cost": 96.466434,
    "cost_basis_total": 43795.76,
    "market_value": 45740.5,
    "used_capital": 45740.5,
    "remaining_capital": 54919.75,
    "cash_balance_before": 54617.5,
    "cash_balance_after": 54919.75,
    "equity": 100660.25,
    "realized_pnl_cum": -691.19,
    "unrealized_pnl": 1944.74,
    "last_trade_price": 100.75,
    "last_mark_price": 100.75,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-25 09:30:10",
        "target_weight": 0.458143,
        "current_weight_before": 0.238595,
        "delta_weight": 0.219548,
        "delta_notional": 21954.75,
        "quote_fresh": true,
        "cash_before": 76572.25,
        "cash_after": 54617.5,
        "equity_after": 100431.75,
        "shares_before": 238,
        "shares_after": 457,
        "fill_shares": 219,
        "avg_cost_after": 96.466434,
        "realized_pnl_cum": -704.04,
        "unrealized_pnl": 1729.09,
        "cumulative_pnl": 1025.05
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-25 13:20:07",
        "target_weight": 0.457405,
        "current_weight_before": 0.460427,
        "delta_weight": -0.003022,
        "delta_notional": 302.25,
        "quote_fresh": true,
        "cash_before": 54617.5,
        "cash_after": 54919.75,
        "equity_after": 100660.25,
        "shares_before": 457,
        "shares_after": 454,
        "fill_shares": -3,
        "avg_cost_after": 96.466434,
        "realized_pnl_cum": -691.19,
        "unrealized_pnl": 1944.74,
        "cumulative_pnl": 1253.55
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-22\\trade_state.json",
    "order_notional": 302.25,
    "order_weight": -0.003022,
    "cumulative_pnl": 1253.55
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "不追價、不重倉；以 0050 為主做小部位偏多試單，若開盤弱勢則改成觀察或分批等回檔",
    "instrument": "0050",
    "window": "T+1 ~ T+5",
    "confidence": "中低",
    "execution_points": [
      "1. **宏觀偏風險趨避，但市場價格尚未完全配合**",
      "2. **0050 結構偏中性略多，但台積電是關鍵風險點**",
      "3. **操作上以「小部位試單」而非全倉**"
    ],
    "data_needs": [
      "台指期夜盤 / 開盤前電子盤走勢",
      "台積電 ADR 對台積電現貨的價差",
      "外資期貨未平倉與開盤前籌碼",
      "0050 開盤前委買委賣與預估量",
      "台積電、聯發科、鴻海、聯電的 5 分鐘 K 線與開盤量價"
    ],
    "risk_points": [
      "若 **台指期夜盤明顯走弱**、或 **台積電 ADR 折價擴大**，今天不應直接加碼偏多。",
      "若開盤後 **VIX 續升、美元續強、美債續強**，代表 risk-off 可能開始被市場確認，0050 會有下修壓力。",
      "目前最適合的不是重押，而是**小部位試單 + 嚴格等確認**。"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**不追價、不重倉；以 0050 為主做小部位偏多試單，若開盤弱勢則改成觀察或分批等回檔**\n- 操作標的：**0050**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中低**\n\n執行重點\n1. **宏觀偏風險趨避，但市場價格尚未完全配合**\n- 新聞面是地緣風險升溫，理論上利多美元、美債、黃金，利空美股與風險資產。\n- 但實際市場快照裡，**SPY / QQQ / DIA 仍偏強，VIX 下降**，代表市場目前還沒完全進入避險模式。\n- 這種「新聞偏空、價格未確認」的狀態，不適合直接重倉偏空，也不適合追多。\n\n2. **0050 結構偏中性略多，但台積電是關鍵風險點**\n- 0050 breadth：**bullish 12 / bearish 9 / momentum+ 22**，結構不差。\n- 但權值核心 **台積電 ADR 1D -0.65%**，而 0050 權重中台積電影響最大，代表台股開盤仍可能受壓。\n- 其他權值如聯發科、聯電、鴻海、台達電相對不差，表示不是全面轉弱，而是**指數受單一權值牽動**。\n\n3. **操作上以「小部位試單」而非全倉**\n- 若 9 點開盤後 0050 **不破前低、量縮止穩**，可先進 **20%~30% 目標部位** 試單。\n- 若開盤直接跳空下跌且台積電/台指期同步轉弱，**先不進場**，等盤中確認支撐。\n- 這筆資金的核心不是賭方向，而是先卡位「市場尚未完全反映風險」的可能性，但要控制回撤。\n\n補充資料需求\n- **台指期夜盤 / 開盤前電子盤走勢**\n- **台積電 ADR 對台積電現貨的價差**\n- **外資期貨未平倉與開盤前籌碼**\n- **0050 開盤前委買委賣與預估量**\n- **台積電、聯發科、鴻海、聯電的 5 分鐘 K 線與開盤量價**\n\n風險提醒\n- 若 **台指期夜盤明顯走弱**、或 **台積電 ADR 折價擴大**，今天不應直接加碼偏多。\n- 若開盤後 **VIX 續升、美元續強、美債續強**，代表 risk-off 可能開始被市場確認，0050 會有下修壓力。\n- 目前最適合的不是重押，而是**小部位試單 + 嚴格等確認**。"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，改採回檔分批；權值股只做強勢回測，不追高。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330.TW)",
      "聯發科(2454.TW)",
      "聯電(2303.TW) / 欣興(3037.TW)"
    ],
    "risk_points": [
      "若 **台積電轉弱、聯發科爆量不續攻、0050 成分股 breadth 轉差**，這個「回檔分批」策略會失效。",
      "若地緣風險快速降溫，美元/美債/黃金避險需求回吐，宏觀 risk-off 會失真，盤面可能轉成追價行情。",
      "若油價急升帶動通膨預期上修，長債與高估值權值可能同步承壓，0050 會先進入震盪整理。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，改採回檔分批；權值股只做強勢回測，不追高。**\n目前宏觀是 risk-off，但 0050 成分股技術面仍有局部強勢，屬於**尚未共振**，不適合直接重押方向。\n- **0050**：若 T+1~T+5 出現拉回不破短均、量縮整理，可小量分批布局；若開高走弱，先等回測確認。\n- **權值股**：優先看 **聯發科、聯電、台積電** 的回檔承接，不追當日急漲。\n- **避險**：若你原本有台股多單，短線可降低槓桿、提高現金比重，等風險事件與盤面方向一致再加碼。\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330.TW)**\n0050 最大權重，雖然 5D -0.44% 不強，但它決定 0050 是否能真正續攻。現在屬於「指數核心未完全轉強」，所以不宜用追價方式做多 0050。\n\n2. **聯發科(2454.TW)**\n5D +18.40%，且出現 **2.038x volume spike**，是目前最明顯的權值強勢股。若它能續強，代表 0050 內部有資金輪動支撐；但因短線漲幅大，適合等回檔，不適合追高。\n\n3. **聯電(2303.TW) / 欣興(3037.TW)**\n聯電 5D +3.64% 且 bullish，欣興 5D +18.15% 且量能放大，代表半導體/PCB 族群有資金承接。這類中大型權值若能維持強勢，會支撐 0050 的短線結構，但目前仍屬局部強，不足以推翻宏觀 risk-off。\n\n風險提醒\n- 若 **台積電轉弱、聯發科爆量不續攻、0050 成分股 breadth 轉差**，這個「回檔分批」策略會失效。\n- 若地緣風險快速降溫，美元/美債/黃金避險需求回吐，宏觀 risk-off 會失真，盤面可能轉成追價行情。\n- 若油價急升帶動通膨預期上修，長債與高估值權值可能同步承壓，0050 會先進入震盪整理。"
  },
  "morning": {
    "generated_at": "2026-05-25 09:30:10",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-25\\trade_state.json",
    "trade_state": {
      "date": "2026-05-25",
      "daily_capital": 100000,
      "starting_weight": 0.238595,
      "starting_notional": 23859.5,
      "starting_shares": 238,
      "starting_avg_cost": 92.984918,
      "current_weight": 0.458143,
      "current_notional": 45814.25,
      "shares_held": 457,
      "avg_cost": 96.466434,
      "cost_basis_total": 44085.16,
      "market_value": 45814.25,
      "used_capital": 45814.25,
      "remaining_capital": 54617.5,
      "cash_balance_before": 76572.25,
      "cash_balance_after": 54617.5,
      "equity": 100431.75,
      "realized_pnl_cum": -704.04,
      "unrealized_pnl": 1729.09,
      "last_trade_price": 100.25,
      "last_mark_price": 100.25,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-25 09:30:10",
          "target_weight": 0.458143,
          "current_weight_before": 0.238595,
          "delta_weight": 0.219548,
          "delta_notional": 21954.75,
          "quote_fresh": true,
          "cash_before": 76572.25,
          "cash_after": 54617.5,
          "equity_after": 100431.75,
          "shares_before": 238,
          "shares_after": 457,
          "fill_shares": 219,
          "avg_cost_after": 96.466434,
          "realized_pnl_cum": -704.04,
          "unrealized_pnl": 1729.09,
          "cumulative_pnl": 1025.05
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-22\\trade_state.json",
      "order_notional": 21954.75,
      "order_weight": 0.219548,
      "cumulative_pnl": 1025.05
    },
    "base_decision": {
      "date": "2026-05-25",
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
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0568,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-25",
      "final_positions": {
        "0050.TW": 0.458143,
        "TLT": 0.091667,
        "CASH": 0.541857
      },
      "exposure": 0.458143,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.458143,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0568,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 3.0319,
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
          "last_price": 100.25,
          "prev_close": 97.30000305175781,
          "change_pct": 3.0319,
          "as_of": "2026-05-25T01:10:00"
        },
        "2308.TW": {
          "last_price": 2270,
          "prev_close": 2095,
          "change_pct": 8.3532,
          "as_of": "2026-05-25T01:10:00"
        },
        "2317.TW": {
          "last_price": 257,
          "prev_close": 250,
          "change_pct": 2.8,
          "as_of": "2026-05-25T01:10:00"
        },
        "2330.TW": {
          "last_price": 2300,
          "prev_close": 2255,
          "change_pct": 1.9956,
          "as_of": "2026-05-25T01:10:00"
        },
        "2345.TW": {
          "last_price": 2565,
          "prev_close": 2470,
          "change_pct": 3.8462,
          "as_of": "2026-05-25T01:10:00"
        },
        "2382.TW": {
          "last_price": 321.5,
          "prev_close": 316,
          "change_pct": 1.7405,
          "as_of": "2026-05-25T01:10:00"
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
        "last_price": 100.25,
        "prev_close": 97.30000305175781,
        "change_pct": 3.0319,
        "as_of": "2026-05-25T01:10:00"
      },
      "2308.TW": {
        "last_price": 2270,
        "prev_close": 2095,
        "change_pct": 8.3532,
        "as_of": "2026-05-25T01:10:00"
      },
      "2317.TW": {
        "last_price": 257,
        "prev_close": 250,
        "change_pct": 2.8,
        "as_of": "2026-05-25T01:10:00"
      },
      "2330.TW": {
        "last_price": 2300,
        "prev_close": 2255,
        "change_pct": 1.9956,
        "as_of": "2026-05-25T01:10:00"
      },
      "2345.TW": {
        "last_price": 2565,
        "prev_close": 2470,
        "change_pct": 3.8462,
        "as_of": "2026-05-25T01:10:00"
      },
      "2382.TW": {
        "last_price": 321.5,
        "prev_close": 316,
        "change_pct": 1.7405,
        "as_of": "2026-05-25T01:10:00"
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
        "price": 100.25,
        "shares": 219,
        "notional": 21954.75,
        "weight": 0.219548,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1025.05,
    "equity": 100431.75,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.239\n起始股數：238\n今日已用：45,814\n今日剩餘：54,618\n下單金額：21,955\n現金前後：76,572 -> 54,618\n總資產：100,432\n持有股數：457\n持有均價：96.47\n已實現損益：-704\n未實現損益：1,729\n目前累積損益：1,025\n0050部位：0.458\n現金：0.542\n0050即時：+3.03% @ 2026-05-25T01:10:00\n承接來源：cache\\trade_execution\\2026-05-22\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 100 × 219 股（約 21,955）\n參考資產：USO:-1.11% / GLD:-0.75% / TLT:+0.54% / QQQ:+0.41%\n目標曝險：0.458\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-25 13:20:07",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-25\\trade_state.json",
    "trade_state": {
      "date": "2026-05-25",
      "daily_capital": 100000,
      "starting_weight": 0.460427,
      "starting_notional": 46042.75,
      "starting_shares": 457,
      "starting_avg_cost": 96.466434,
      "current_weight": 0.457405,
      "current_notional": 45740.5,
      "shares_held": 454,
      "avg_cost": 96.466434,
      "cost_basis_total": 43795.76,
      "market_value": 45740.5,
      "used_capital": 45740.5,
      "remaining_capital": 54919.75,
      "cash_balance_before": 54617.5,
      "cash_balance_after": 54919.75,
      "equity": 100660.25,
      "realized_pnl_cum": -691.19,
      "unrealized_pnl": 1944.74,
      "last_trade_price": 100.75,
      "last_mark_price": 100.75,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-25 09:30:10",
          "target_weight": 0.458143,
          "current_weight_before": 0.238595,
          "delta_weight": 0.219548,
          "delta_notional": 21954.75,
          "quote_fresh": true,
          "cash_before": 76572.25,
          "cash_after": 54617.5,
          "equity_after": 100431.75,
          "shares_before": 238,
          "shares_after": 457,
          "fill_shares": 219,
          "avg_cost_after": 96.466434,
          "realized_pnl_cum": -704.04,
          "unrealized_pnl": 1729.09,
          "cumulative_pnl": 1025.05
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-25 13:20:07",
          "target_weight": 0.457405,
          "current_weight_before": 0.460427,
          "delta_weight": -0.003022,
          "delta_notional": 302.25,
          "quote_fresh": true,
          "cash_before": 54617.5,
          "cash_after": 54919.75,
          "equity_after": 100660.25,
          "shares_before": 457,
          "shares_after": 454,
          "fill_shares": -3,
          "avg_cost_after": 96.466434,
          "realized_pnl_cum": -691.19,
          "unrealized_pnl": 1944.74,
          "cumulative_pnl": 1253.55
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-22\\trade_state.json",
      "order_notional": 302.25,
      "order_weight": -0.003022,
      "cumulative_pnl": 1253.55
    },
    "base_decision": {
      "date": "2026-05-25",
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
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0568,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-25",
      "final_positions": {
        "0050.TW": 0.457405,
        "TLT": 0.091667,
        "CASH": 0.542595
      },
      "exposure": 0.457405,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.55,
        "short": 0
      },
      "leverage_ratio": 0.457405,
      "estimated_transaction_cost": 0.00055,
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0568,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": 3.5457,
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
          "last_price": 100.75,
          "prev_close": 97.30000305175781,
          "change_pct": 3.5457,
          "as_of": "2026-05-25T05:00:00"
        },
        "2308.TW": {
          "last_price": 2290,
          "prev_close": 2095,
          "change_pct": 9.3079,
          "as_of": "2026-05-25T05:00:00"
        },
        "2317.TW": {
          "last_price": 263,
          "prev_close": 250,
          "change_pct": 5.2,
          "as_of": "2026-05-25T05:00:00"
        },
        "2330.TW": {
          "last_price": 2300,
          "prev_close": 2255,
          "change_pct": 1.9956,
          "as_of": "2026-05-25T05:00:00"
        },
        "2345.TW": {
          "last_price": 2540,
          "prev_close": 2470,
          "change_pct": 2.834,
          "as_of": "2026-05-25T05:00:00"
        },
        "2382.TW": {
          "last_price": 323.5,
          "prev_close": 316,
          "change_pct": 2.3734,
          "as_of": "2026-05-25T05:00:00"
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
        "last_price": 100.75,
        "prev_close": 97.30000305175781,
        "change_pct": 3.5457,
        "as_of": "2026-05-25T05:00:00"
      },
      "2308.TW": {
        "last_price": 2290,
        "prev_close": 2095,
        "change_pct": 9.3079,
        "as_of": "2026-05-25T05:00:00"
      },
      "2317.TW": {
        "last_price": 263,
        "prev_close": 250,
        "change_pct": 5.2,
        "as_of": "2026-05-25T05:00:00"
      },
      "2330.TW": {
        "last_price": 2300,
        "prev_close": 2255,
        "change_pct": 1.9956,
        "as_of": "2026-05-25T05:00:00"
      },
      "2345.TW": {
        "last_price": 2540,
        "prev_close": 2470,
        "change_pct": 2.834,
        "as_of": "2026-05-25T05:00:00"
      },
      "2382.TW": {
        "last_price": 323.5,
        "prev_close": 316,
        "change_pct": 2.3734,
        "as_of": "2026-05-25T05:00:00"
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
        "price": 100.75,
        "shares": 3,
        "notional": 302.25,
        "weight": -0.003022,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1253.55,
    "equity": 100660.25,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.460\n起始股數：457\n今日已用：45,740\n今日剩餘：54,920\n下單金額：302\n現金前後：54,618 -> 54,920\n總資產：100,660\n持有股數：454\n持有均價：96.47\n已實現損益：-691\n未實現損益：1,945\n目前累積損益：1,254\n0050部位：0.457\n現金：0.543\n0050即時：+3.55% @ 2026-05-25T05:00:00\n承接來源：cache\\trade_execution\\2026-05-22\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 101 × 3 股（約 302）\n參考資產：USO:-1.11% / GLD:-0.75% / TLT:+0.54% / QQQ:+0.41%\n目標曝險：0.457\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-25",
    "generated_at": "2026-05-25T05:30:03.589Z",
    "categories": {
      "technology": [
        {
          "title": "隱形金礦在這?專家曝「這神祕市場」比美股便宜一半 內行已偷偷卡位",
          "summary": "在AI行情推升台美股之際，專家指出歐洲中小型企業估值較美股便宜約一半，受國防、能源與科技復甦帶動，成為資金避風港。",
          "source": "01.md",
          "link": "https://www.chinatimes.com/realtimenews/20260524000008-260410",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Army UFO whistleblower made wild claims he was telepathically linked to 'mantis alien' before his death",
          "summary": "一名前美國陸軍中士生前聲稱，自己一生大多時間都與一名外星同伴保持心靈感應聯繫，內容引發關注。",
          "source": "02-army-ufo-whistleblower-made-wild-claims-he-was-tel.md",
          "link": "https://www.dailymail.com/sciencetech/article-15817475/us-army-sergeant-aliens-demon.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "I'm a pastor who attended a secret UFO disclosure meeting. We saw images of 'translucent beings' that chilled me to the bone... the files could fulfil a dark biblical prophecy",
          "summary": "自稱參與秘密 UFO 揭露會議的宗教領袖警告，會中影像顯示「半透明生物」，令其感到不寒而慄，並稱相關文件可能應驗黑暗的聖經預言。",
          "source": "03-i-m-a-pastor-who-attended-a-secret-ufo-disclosure-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15801037/pastor-secret-UFO-meeting-images-translucent-beings-biblical-prophecy.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Scientist gave shocking alien 'confession' about Area 51 before his death",
          "summary": "一名洛克希德馬丁科學家在去世前受訪，聲稱展示外星人與幽浮被關押在高度機密的美國51區，引發關注。",
          "source": "04-scientist-gave-shocking-alien-confession-about-are.md",
          "link": "https://www.dailymail.com/sciencetech/article-15831937/boyd-bushman-area-51-alien-confession.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "I paid for Claude, ChatGPT, and Perplexity for a month but only one of them deserves my $20",
          "summary": "文章標題比較 Claude、ChatGPT 與 Perplexity 的付費方案，作者實際訂閱一個月後認為只有其中一款值得每月 20 美元。",
          "source": "05-i-paid-for-claude-chatgpt-and-perplexity-for-a-mon.md",
          "link": "https://www.xda-developers.com/paid-for-claude-chatgpt-perplexity-month-only-one-them-deserves-dollars/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Saudi Interior Ministry showcases AI, ‘No Hajj Without Permit’ campaign at media hub",
          "summary": "沙烏地阿拉伯內政部在朝覲媒體中心展出人工智慧、群眾管理與安保技術，並宣傳「無許可不得朝覲」活動，以支援1447年朝覲季。",
          "source": "06-saudi-interior-ministry-showcases-ai-no-hajj-witho.md",
          "link": "https://www.urdupoint.com/en/pakistan/saudi-interior-ministry-showcases-ai-no-h-2193266.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Nobody Actually Wants AI Anymore",
          "summary": "文章指出，將 AI 與網路類比並不恰當，因為網路是人們自然主動採用的技術，而 AI 並非如此。",
          "source": "07-nobody-actually-wants-ai-anymore.md",
          "link": "https://www.youtube.com/watch?v=FQpZdCKgc6w",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Revealed: The factors that have the biggest impact on female orgasm - with emotional connection topping the list",
          "summary": "文章指出，女性高潮受多種因素影響，其中情感連結最為關鍵，凸顯親密關係與心理層面在性滿意度中的重要性。",
          "source": "08-revealed-the-factors-that-have-the-biggest-impact-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15837861/factors-impact-female-orgasm-emotional-connection.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "아이폰 vs 갤럭시 - 슈퍼 마리오 갤럭시 ai로 지우기",
          "summary": "這則內容僅為標題重複，提到以 AI 在 iPhone 與 Galaxy 上進行《超級瑪利歐銀河》相關的刪除或去除操作，未提供具體新聞事件。",
          "source": "09-vs-ai.md",
          "link": "https://www.youtube.com/watch?v=fMYjl2qwkCM",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "How often should you wash your hair? Scientists finally settle the debate - so, are you doing it enough?",
          "summary": "文章探討洗頭頻率的爭議，指出科學家終於對「多久洗一次頭」給出較明確的建議，並提醒洗髮頻率會影響頭皮舒適與髮況。",
          "source": "10-how-often-should-you-wash-your-hair-scientists-fin.md",
          "link": "https://www.dailymail.com/sciencetech/article-15830853/How-wash-hair-scientists-reveal.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "Advanced Micro Devices, Inc. $AMD Shares Purchased by Jefferies Financial Group Inc.",
          "summary": "Jefferies Financial Group Inc. 在第四季大幅增持超微半導體 AMD 股票，持股增至 308,021 股，顯示機構投資人對其前景看法轉趨積極。",
          "source": "01-advanced-micro-devices-inc-amd-shares-purchased-by.md",
          "link": "https://www.tickerreport.com/banking-finance/13452758/advanced-micro-devices-inc-amd-shares-purchased-by-jefferies-financial-group-inc.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "North Star Asset Management Inc. Sells 2,931 Shares of Advanced Micro Devices, Inc. $AMD",
          "summary": "North Star Asset Management Inc. 在第四季減持超微半導體（AMD）3.2%，賣出2,931股，持股降至89,336股。",
          "source": "02-north-star-asset-management-inc-sells-2-931-shares.md",
          "link": "https://www.dailypolitical.com/2026/05/24/north-star-asset-management-inc-sells-2931-shares-of-advanced-micro-devices-inc-amd.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Prospera Financial Services Inc Increases Stock Position in Applied Materials, Inc. $AMAT",
          "summary": "Prospera Financial Services Inc於第四季將其持有的Applied Materials股票部位增加8%，增持後共持有53,189股，顯示機構投資人持股變動。",
          "source": "03-prospera-financial-services-inc-increases-stock-po.md",
          "link": "https://www.watchlistnews.com/prospera-financial-services-inc-increases-stock-position-in-applied-materials-inc-amat/11093485.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Prospera Financial Services Inc Has $30.07 Million Stake in Vanguard Total Stock Market ETF $VTI",
          "summary": "Prospera Financial Services Inc 於第四季增持 Vanguard Total Stock Market ETF（VTI）4.3%，持股增至 89,650 股，市值約 3,007 萬美元。",
          "source": "04-prospera-financial-services-inc-has-30-07-million-.md",
          "link": "https://www.watchlistnews.com/prospera-financial-services-inc-has-30-07-million-stake-in-vanguard-total-stock-market-etf-vti/11093486.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Advanced Micro Devices, Inc. $AMD Shares Bought by Prospera Financial Services Inc",
          "summary": "Prospera Financial Services Inc 在第四季增持超微半導體 AMD 3.9%，持股增至 102,187 股，反映機構投資人對該公司股票的持續配置。",
          "source": "05-advanced-micro-devices-inc-amd-shares-bought-by-pr.md",
          "link": "https://www.thelincolnianonline.com/2026/05/24/advanced-micro-devices-inc-amd-shares-bought-by-prospera-financial-services-inc.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "HP Congress to hold state-wide protest against fuel price hike on May 25",
          "summary": "喜馬偕爾邦國大黨將於5月25日在全邦各地抗議燃油漲價，批評莫迪政府放任油企抬價並推升通膨。",
          "source": "06-hp-congress-to-hold-state-wide-protest-against-fue.md",
          "link": "https://newsable.asianetnews.com/india/hp-congress-to-hold-statewide-protest-against-fuel-price-hike-on-may-25-articleshow-1y2gxgn",
          "strength": 3,
          "sentiment": "stagflation",
          "category": "finance"
        },
        {
          "title": "North Star Asset Management Inc. Sells 4,040 Shares of AbbVie Inc. $ABBV",
          "summary": "North Star Asset Management 第四季減持 AbbVie 4,040 股，持股降至 157,876 股，該股約占其投資組合 1.5%。",
          "source": "07-north-star-asset-management-inc-sells-4-040-shares.md",
          "link": "https://www.watchlistnews.com/north-star-asset-management-inc-sells-4040-shares-of-abbvie-inc-abbv/11093484.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Prospera Financial Services Inc Sells 5,441 Shares of Vanguard Value ETF $VTV",
          "summary": "Prospera Financial Services Inc 於第四季減持 Vanguard Value ETF 5,441 股，持股降至 130,554 股，較前季減少 4.0%。",
          "source": "08-prospera-financial-services-inc-sells-5-441-shares.md",
          "link": "https://www.thelincolnianonline.com/2026/05/24/prospera-financial-services-inc-sells-5441-shares-of-vanguard-value-etf-vtv.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Vanguard S&P 500 ETF $VOO Shares Purchased by Prospera Financial Services Inc",
          "summary": "Prospera Financial Services Inc. 在第四季增持 Vanguard S&P 500 ETF（VOO）11.6%，持股增至53,803股，新增5,605股。",
          "source": "09-vanguard-s-p-500-etf-voo-shares-purchased-by-prosp.md",
          "link": "https://www.dailypolitical.com/2026/05/24/vanguard-sp-500-etf-voo-shares-purchased-by-prospera-financial-services-inc.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Prospera Financial Services Inc Sells 3,489 Shares of AbbVie Inc. $ABBV",
          "summary": "Prospera Financial Services Inc. 在第四季減持 AbbVie 3,489 股，持股降至 89,935 股，期末市值約 2,056.6 萬美元。",
          "source": "10-prospera-financial-services-inc-sells-3-489-shares.md",
          "link": "https://www.dailypolitical.com/2026/05/24/prospera-financial-services-inc-sells-3489-shares-of-abbvie-inc-abbv.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "Hull City secure Premier League promotion as Oli McBurnie scores late winner in Championship play-off final - after Middlesbrough's reprieve proved temporary after Spygate drama",
          "summary": "赫爾城在溫布利的英冠附加賽決賽中，靠奧利·麥克伯尼的晚段致勝球擊敗對手，成功升上英超。",
          "source": "01-hull-city-secure-premier-league-promotion-as-oli-m.md",
          "link": "https://www.dailymail.com/sport/football/article-15840143/Hull-City-Premier-League-promotion-Oli-McBurnie-late-winner-Middlesbrough-Spygate-drama.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "'Here is your bride... please don't beat her': As Taliban recognises child marriage, Afghans 'marry off' girls and BABIES - and can only hope they are not raped before they even hit puberty",
          "summary": "阿富汗貧困加劇下，賣女兒給年長男子換取金錢的童婚現象日益常態化；塔利班承認此類婚姻，外界憂心女孩在青春期前即遭剝削與性暴力。",
          "source": "02-here-is-your-bride-please-don-t-beat-her-as-taliba.md",
          "link": "https://www.dailymail.com/news/article-15834585/Here-bride-dont-beat-Taliban-recognises-child-marriage-Afghans-marry-girls-BABIES-hope-not-raped-hit-puberty.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Alan Titchmarsh buys £2.6m luxury five-bed home from Omaze winner who got it for price of a £10 raffle ticket",
          "summary": "77歲英國園藝名人Alan Titchmarsh與妻子Alison去年11月搬入一棟價值260萬英鎊的五房豪宅，並從住了20多年的大宅縮小居住規模。",
          "source": "03-alan-titchmarsh-buys-2-6m-luxury-five-bed-home-fro.md",
          "link": "https://www.dailymail.com/news/article-15842741/Alan-Titchmarsh-luxury-home-Omaze-winner.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Girl raped by boys spared jail tells BBC judge's decision was like 'rock in my face'",
          "summary": "工黨領袖施凱爾·斯塔默回應一宗強姦案訪問，稱此案「令人震驚」，並表示應檢視相關刑期判決。",
          "source": "04-girl-raped-by-boys-spared-jail-tells-bbc-judge-s-d.md",
          "link": "https://www.bbc.com/news/articles/cjrp98285yvo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "How Marxist activists will flood schools with radical propaganda, even targeting dinner ladies",
          "summary": "布萊頓一場集會上，英國最大教師工會秘書長丹尼爾·凱貝德發表談話，引發外界關注其教育政治立場與工會動向。",
          "source": "05-how-marxist-activists-will-flood-schools-with-radi.md",
          "link": "https://www.dailymail.com/news/article-15843563/Marxist-activists-schools-radical-propaganda-dinner-ladies.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Niranjan Reddy alleges procurement irregularities, demands MSP for rain-damaged paddy",
          "summary": "前部長尼然詹·雷迪指控萬帕蒂稻穀收購與運輸合約存在大規模舞弊，要求對受雨損稻穀按最低支持價收購，並促查招標分配與斯里達爾·雷迪命案進展。",
          "source": "06-niranjan-reddy-alleges-procurement-irregularities-.md",
          "link": "https://telanganatoday.com/niranjan-reddy-alleges-procurement-irregularities-demands-msp-for-rain-damaged-paddy",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Report links Mangope throne to Transvaal colonial manipulation",
          "summary": "北西省調查委員會指出，Mangope王室登上Bahurutshe Boo Manyana王位，曾受殖民時期德蘭士瓦政府操控，打亂傳統世襲繼承，並偏袒較易操控的領袖，為王位爭議增添新證據。",
          "source": "07-report-links-mangope-throne-to-transvaal-colonial-.md",
          "link": "https://sundayworld.co.za/news/report-links-mangope-throne-to-transvaal-colonial-manipulation/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Woman gang-raped, confined for 3 days in Lucknow; acquaintance among 3 accused",
          "summary": "印度勒克瑙一名女子疑遭3人輪姦並被囚禁3天，案件由德里警方轉交零號報案後在當地立案，警方正調查中。",
          "source": "08-woman-gang-raped-confined-for-3-days-in-lucknow-ac.md",
          "link": "https://www.tribuneindia.com/news/uttar-pradesh/woman-gang-raped-confined-for-3-days-in-lucknow-acquaintance-among-3-accused",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "BJP accuses Congress of 'double standards' over ex-CEO's appointment",
          "summary": "BJP指控國大黨對前喀拉拉選委會首長Rathan Kelkar出任首席部長秘書一事採取雙重標準，並質疑此舉是否為UDF勝選後的回報。",
          "source": "09-bjp-accuses-congress-of-double-standards-over-ex-c.md",
          "link": "https://newsable.asianetnews.com/india/bjp-accuses-congress-of-double-standards-over-exceos-appointment-articleshow-6et7vmb",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "'Shameful' more spent on benefits than jobs for young people, says Milburn",
          "summary": "米爾本指出，福利支出多於青年就業投資，呼籲改革福利制度，以解決大量年輕人未就業也未受教育的問題。",
          "source": "10-shameful-more-spent-on-benefits-than-jobs-for-youn.md",
          "link": "https://www.bbc.com/news/articles/crrpx4p1z71o?at_medium=RSS&at_campaign=rss",
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
      "portfolioValue": 111625.1722396031
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
    }
  ]
};
