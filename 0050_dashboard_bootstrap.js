window.ETFDashboardBootstrap = {
  "date": "2026-05-22",
  "generated_at": "2026-05-22T05:30:02.377Z",
  "sourceDates": {
    "newsDate": "2026-05-22",
    "tradeDate": "2026-05-22",
    "strategyDate": "2026-05-22",
    "shortTermDate": "2026-05-22"
  },
  "dataManifest": {
    "latest_date": "2026-05-22",
    "latest_updated_at": "2026-05-22T05:30:02.153Z",
    "signature": "1779427802153.9497",
    "source_dates": {
      "newsDate": "2026-05-22",
      "tradeDate": "2026-05-22",
      "strategyDate": "2026-05-22",
      "shortTermDate": "2026-05-22"
    },
    "generated_at": "2026-05-22T05:30:02.377Z"
  },
  "state": {
    "date": "2026-05-22",
    "daily_capital": 100000,
    "starting_weight": 0.2334,
    "starting_notional": 23340,
    "starting_shares": 240,
    "starting_avg_cost": 92.984918,
    "current_weight": 0.231455,
    "current_notional": 23145.5,
    "shares_held": 238,
    "avg_cost": 92.984918,
    "cost_basis_total": 22130.41,
    "market_value": 23145.5,
    "used_capital": 23145.5,
    "remaining_capital": 76572.25,
    "cash_balance_before": 76377.75,
    "cash_balance_after": 76572.25,
    "equity": 99717.75,
    "realized_pnl_cum": -704.04,
    "unrealized_pnl": 1015.09,
    "last_trade_price": 97.25,
    "last_mark_price": 97.25,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-22 09:30:09",
        "target_weight": 0.23088,
        "current_weight_before": 0.222222,
        "delta_weight": 0.008658,
        "delta_notional": 865.8,
        "quote_fresh": true,
        "cash_before": 77243.55,
        "cash_after": 76377.75,
        "equity_after": 99465.75,
        "shares_before": 231,
        "shares_after": 240,
        "fill_shares": 9,
        "avg_cost_after": 92.984918,
        "realized_pnl_cum": -712.57,
        "unrealized_pnl": 771.62,
        "cumulative_pnl": 59.05
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-22 13:20:13",
        "target_weight": 0.231455,
        "current_weight_before": 0.2334,
        "delta_weight": -0.001945,
        "delta_notional": 194.5,
        "quote_fresh": true,
        "cash_before": 76377.75,
        "cash_after": 76572.25,
        "equity_after": 99717.75,
        "shares_before": 240,
        "shares_after": 238,
        "fill_shares": -2,
        "avg_cost_after": 92.984918,
        "realized_pnl_cum": -704.04,
        "unrealized_pnl": 1015.09,
        "cumulative_pnl": 311.05
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-21\\trade_state.json",
    "order_notional": 194.5,
    "order_weight": -0.001945,
    "cumulative_pnl": 311.05
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "不追價、不重倉，先用 20%~30% 目標部位試多台股權值籃子，核心偏向 0050 / 台積電相關權值股",
    "instrument": "0050 為主，搭配台積電、聯發科、鴻海、聯電的權值籃子",
    "window": "T+1 ~ T+5",
    "confidence": "中低偏中",
    "execution_points": [
      "1. **宏觀面偏空，但台股權值面沒有全面轉弱**",
      "2. **0050 技術面仍可做，但只能小部位**",
      "3. **進場邏輯**"
    ],
    "data_needs": [
      "台指期夜盤走勢",
      "台積電 ADR 對台股現貨溢價/折價",
      "開盤前外資期貨未平倉、選擇權 Put/Call",
      "台幣匯率早盤方向",
      "0050 與台積電 5 分鐘 K 線、開盤前 15 分鐘量價",
      "台積電、聯發科、鴻海、聯電的盤前委買委賣強弱"
    ],
    "risk_points": [
      "目前宏觀是**stagflation + 利率壓力**，若早盤出現風險資產同步轉弱，0050 會先受壓。",
      "不要在開高時追多**，尤其台積電若開高後無法守住，0050 容易回吐。",
      "若台指期夜盤轉弱、美元續強、原油反彈，則今天的試多單要立刻降到更小，甚至取消。",
      "開高 / 平開 / 開低 三種情境",
      "每種情境的進場價位與停損規則",
      "0050、台積電、聯發科、鴻海的優先順序"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**不追價、不重倉，先用 20%~30% 目標部位試多台股權值籃子，核心偏向 0050 / 台積電相關權值股**\n- 操作標的：**0050 為主，搭配台積電、聯發科、鴻海、聯電的權值籃子**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中低偏中**\n\n執行重點\n1. **宏觀面偏空，但台股權值面沒有全面轉弱**\n- 新聞主線是 stagflation、美元偏強、美債偏弱、原油風險升溫，這對全球風險資產不友善。\n- 但市場價格已出現**反向定價**：\n- UUP 沒有明顯追強\n- TLT 反而 1D 上漲\n- USO 反而下跌\n- 代表市場還沒完全把新聞風險打進去，**不適合直接重押偏空**，也不適合追多。\n\n2. **0050 技術面仍可做，但只能小部位**\n- 0050 breadth：**bullish 11 / bearish 8 / momentum+ 13**\n- 代表內部結構不是崩壞，而是**分歧偏多**\n- 台積電 ADR **+1.38%**，對台股開盤有支撐\n- 但台積電現貨 5D **-1.76%**，權值龍頭仍在修正，表示**上方壓力未解除**\n- 所以策略是：**開盤若不跳空過熱，才分批試多；若開高過多則放棄追價**\n\n3. **進場邏輯**\n- 若 9:00 前看到：\n- 台指期夜盤不弱\n- 台積電 ADR 溢價/走勢續強\n- 開盤前沒有明顯利空\n- 則可用**0050 小部位試單**\n- 若開盤直接大漲、權值股同步跳空，**不追高**\n- 若開盤弱於預期但未破關鍵支撐，可等 5~15 分鐘量縮止穩再進\n\n補充資料需求\n- **台指期夜盤走勢**\n- **台積電 ADR 對台股現貨溢價/折價**\n- **開盤前外資期貨未平倉、選擇權 Put/Call**\n- **台幣匯率早盤方向**\n- **0050 與台積電 5 分鐘 K 線、開盤前 15 分鐘量價**\n- **台積電、聯發科、鴻海、聯電的盤前委買委賣強弱**\n\n風險提醒\n- 目前宏觀是**stagflation + 利率壓力**，若早盤出現風險資產同步轉弱，0050 會先受壓。\n- **不要在開高時追多**，尤其台積電若開高後無法守住，0050 容易回吐。\n- 若台指期夜盤轉弱、美元續強、原油反彈，則今天的試多單要立刻降到更小，甚至取消。\n\n如果你要，我可以下一步直接幫你做成一份 **「9:00 開盤前的台股實戰下單劇本」**，包含：\n- 開高 / 平開 / 開低 三種情境\n- 每種情境的進場價位與停損規則\n- 0050、台積電、聯發科、鴻海的優先順序"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔再分批；權值股以台積電、聯發科、金融股做相對強弱配置，弱勢電子先避開；若要操作，偏向低接而非追高",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330.TW)",
      "聯發科(2454.TW) / 鴻海(2317.TW)",
      "聯電(2303.TW) / 金融股（中信金、第一金、華南金）"
    ],
    "risk_points": [
      "若台積電續跌、0050 breadth 轉弱，或聯發科/聯電的強勢無法擴散到更多權值股，今天的降槓桿判斷就會失效。",
      "若美債反彈、美元轉弱，宏觀上的 stagflation 壓力減輕，則可把策略從觀望轉為偏多。",
      "若 0050 出現放量上攻但台積電仍不跟，代表是假突破，仍不宜追價。",
      "若原油風險升溫但台股電子權值同步轉弱，短線會偏向防禦盤，不適合重押成長權值。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔再分批；權值股以台積電、聯發科、金融股做相對強弱配置，弱勢電子先避開；若要操作，偏向低接而非追高**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330.TW)**\n- 0050 權重接近 6 成，是大盤與 0050 方向核心。\n- 近 5D -1.76%，代表指數雖有反彈背景，但真正的核心權值還沒完全轉強。\n- 這種情況下，0050 比較適合等台積電止跌後再布局，不適合追價。\n\n2. **聯發科(2454.TW) / 鴻海(2317.TW)**\n- 聯發科近 5D +4.26%，鴻海近 5D +1.23%，屬於相對抗跌的權值。\n- 但整體市場是 stagflation，成長股估值仍受壓，這兩檔比較適合當作「強勢觀察名單」，不是全面追多訊號。\n- 若台積電續弱，這兩檔只能支撐局部結構，難以單獨帶動 0050 大幅上攻。\n\n3. **聯電(2303.TW) / 金融股（中信金、第一金、華南金）**\n- 聯電近 5D +7.41%，且 breadth 中也屬 bullish，短線動能明顯。\n- 金融股有量能放大，屬於防禦型資金承接，符合目前美元強、利率壓力未退的環境。\n- 這代表盤面有「防禦 + 部分半導體輪動」特徵，但還不是全面風險偏好回升。\n\n風險提醒\n- **若台積電續跌、0050 breadth 轉弱，或聯發科/聯電的強勢無法擴散到更多權值股，今天的降槓桿判斷就會失效。**\n- **若美債反彈、美元轉弱，宏觀上的 stagflation 壓力減輕，則可把策略從觀望轉為偏多。**\n- **若 0050 出現放量上攻但台積電仍不跟，代表是假突破，仍不宜追價。**\n- **若原油風險升溫但台股電子權值同步轉弱，短線會偏向防禦盤，不適合重押成長權值。**"
  },
  "morning": {
    "generated_at": "2026-05-22 09:30:09",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-22\\trade_state.json",
    "trade_state": {
      "date": "2026-05-22",
      "daily_capital": 100000,
      "starting_weight": 0.222222,
      "starting_notional": 22222.2,
      "starting_shares": 231,
      "starting_avg_cost": 92.859655,
      "current_weight": 0.23088,
      "current_notional": 23088,
      "shares_held": 240,
      "avg_cost": 92.984918,
      "cost_basis_total": 22316.38,
      "market_value": 23088,
      "used_capital": 23088,
      "remaining_capital": 76377.75,
      "cash_balance_before": 77243.55,
      "cash_balance_after": 76377.75,
      "equity": 99465.75,
      "realized_pnl_cum": -712.57,
      "unrealized_pnl": 771.62,
      "last_trade_price": 96.199997,
      "last_mark_price": 96.199997,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-22 09:30:09",
          "target_weight": 0.23088,
          "current_weight_before": 0.222222,
          "delta_weight": 0.008658,
          "delta_notional": 865.8,
          "quote_fresh": true,
          "cash_before": 77243.55,
          "cash_after": 76377.75,
          "equity_after": 99465.75,
          "shares_before": 231,
          "shares_after": 240,
          "fill_shares": 9,
          "avg_cost_after": 92.984918,
          "realized_pnl_cum": -712.57,
          "unrealized_pnl": 771.62,
          "cumulative_pnl": 59.05
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-21\\trade_state.json",
      "order_notional": 865.8,
      "order_weight": 0.008658,
      "cumulative_pnl": 59.05
    },
    "base_decision": {
      "date": "2026-05-22",
      "final_positions": {
        "0050.TW": 0.231818,
        "2330.TW": 0.048295,
        "2454.TW": 0.057955,
        "2891.TW_2892.TW_2880.TW": 0.086932,
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
      "regime": "STAGFLATION",
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
        "current_month_return": 0.0478,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-22",
      "final_positions": {
        "0050.TW": 0.23088,
        "2330.TW": 0.048295,
        "2454.TW": 0.057955,
        "2891.TW_2892.TW_2880.TW": 0.086932,
        "CASH": 0.76912
      },
      "exposure": 0.23088,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.23088,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "STAGFLATION",
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
        "current_month_return": 0.0478,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 4,
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
          "last_price": 96.19999694824219,
          "prev_close": 92.5,
          "change_pct": 4,
          "as_of": "2026-05-22T01:10:00"
        },
        "2308.TW": {
          "last_price": 2115,
          "prev_close": 2030,
          "change_pct": 4.1872,
          "as_of": "2026-05-22T01:10:00"
        },
        "2317.TW": {
          "last_price": 248.5,
          "prev_close": 247.5,
          "change_pct": 0.404,
          "as_of": "2026-05-22T01:10:00"
        },
        "2330.TW": {
          "last_price": 2235,
          "prev_close": 2230,
          "change_pct": 0.2242,
          "as_of": "2026-05-22T01:09:00"
        },
        "2345.TW": {
          "last_price": 2515,
          "prev_close": 2480,
          "change_pct": 1.4113,
          "as_of": "2026-05-22T01:10:00"
        },
        "2382.TW": {
          "last_price": 312.5,
          "prev_close": 308,
          "change_pct": 1.461,
          "as_of": "2026-05-22T01:10:00"
        },
        "USO": {
          "last_price": 142.5800018310547,
          "prev_close": 144.27000427246094,
          "change_pct": -1.1714,
          "as_of": "2026-05-21T19:59:00"
        },
        "GLD": {
          "last_price": 416.9700012207031,
          "prev_close": 417.3999938964844,
          "change_pct": -0.103,
          "as_of": "2026-05-21T19:59:00"
        },
        "TLT": {
          "last_price": 84.2300033569336,
          "prev_close": 83.91000366210938,
          "change_pct": 0.3814,
          "as_of": "2026-05-21T19:59:00"
        },
        "QQQ": {
          "last_price": 714.4400024414062,
          "prev_close": 713.1500244140625,
          "change_pct": 0.1809,
          "as_of": "2026-05-21T19:59:00"
        },
        "SPY": {
          "last_price": 742.75,
          "prev_close": 741.25,
          "change_pct": 0.2024,
          "as_of": "2026-05-21T19:59:00"
        },
        "UUP": {
          "last_price": 27.739999771118164,
          "prev_close": 27.729999542236328,
          "change_pct": 0.0361,
          "as_of": "2026-05-21T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 96.19999694824219,
        "prev_close": 92.5,
        "change_pct": 4,
        "as_of": "2026-05-22T01:10:00"
      },
      "2308.TW": {
        "last_price": 2115,
        "prev_close": 2030,
        "change_pct": 4.1872,
        "as_of": "2026-05-22T01:10:00"
      },
      "2317.TW": {
        "last_price": 248.5,
        "prev_close": 247.5,
        "change_pct": 0.404,
        "as_of": "2026-05-22T01:10:00"
      },
      "2330.TW": {
        "last_price": 2235,
        "prev_close": 2230,
        "change_pct": 0.2242,
        "as_of": "2026-05-22T01:09:00"
      },
      "2345.TW": {
        "last_price": 2515,
        "prev_close": 2480,
        "change_pct": 1.4113,
        "as_of": "2026-05-22T01:10:00"
      },
      "2382.TW": {
        "last_price": 312.5,
        "prev_close": 308,
        "change_pct": 1.461,
        "as_of": "2026-05-22T01:10:00"
      },
      "USO": {
        "last_price": 142.5800018310547,
        "prev_close": 144.27000427246094,
        "change_pct": -1.1714,
        "as_of": "2026-05-21T19:59:00"
      },
      "GLD": {
        "last_price": 416.9700012207031,
        "prev_close": 417.3999938964844,
        "change_pct": -0.103,
        "as_of": "2026-05-21T19:59:00"
      },
      "TLT": {
        "last_price": 84.2300033569336,
        "prev_close": 83.91000366210938,
        "change_pct": 0.3814,
        "as_of": "2026-05-21T19:59:00"
      },
      "QQQ": {
        "last_price": 714.4400024414062,
        "prev_close": 713.1500244140625,
        "change_pct": 0.1809,
        "as_of": "2026-05-21T19:59:00"
      },
      "SPY": {
        "last_price": 742.75,
        "prev_close": 741.25,
        "change_pct": 0.2024,
        "as_of": "2026-05-21T19:59:00"
      },
      "UUP": {
        "last_price": 27.739999771118164,
        "prev_close": 27.729999542236328,
        "change_pct": 0.0361,
        "as_of": "2026-05-21T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 96.2,
        "shares": 9,
        "notional": 865.8,
        "weight": 0.008658,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 59.05,
    "equity": 99465.75,
    "telegram_message": "[0930 執行結果]\n策略：Strategy A primary + Strategy C rotation + conditional Strategy B\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.222\n起始股數：231\n今日已用：23,088\n今日剩餘：76,378\n下單金額：866\n現金前後：77,244 -> 76,378\n總資產：99,466\n持有股數：240\n持有均價：92.98\n已實現損益：-713\n未實現損益：772\n目前累積損益：59\n0050部位：0.231\n現金：0.769\n0050即時：+4.00% @ 2026-05-22T01:10:00\n承接來源：cache\\trade_execution\\2026-05-21\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 96 × 9 股（約 866）\n參考資產：USO:-1.17% / GLD:-0.10% / TLT:+0.38% / QQQ:+0.18%\n目標曝險：0.231\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-22 13:20:13",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-22\\trade_state.json",
    "trade_state": {
      "date": "2026-05-22",
      "daily_capital": 100000,
      "starting_weight": 0.2334,
      "starting_notional": 23340,
      "starting_shares": 240,
      "starting_avg_cost": 92.984918,
      "current_weight": 0.231455,
      "current_notional": 23145.5,
      "shares_held": 238,
      "avg_cost": 92.984918,
      "cost_basis_total": 22130.41,
      "market_value": 23145.5,
      "used_capital": 23145.5,
      "remaining_capital": 76572.25,
      "cash_balance_before": 76377.75,
      "cash_balance_after": 76572.25,
      "equity": 99717.75,
      "realized_pnl_cum": -704.04,
      "unrealized_pnl": 1015.09,
      "last_trade_price": 97.25,
      "last_mark_price": 97.25,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-22 09:30:09",
          "target_weight": 0.23088,
          "current_weight_before": 0.222222,
          "delta_weight": 0.008658,
          "delta_notional": 865.8,
          "quote_fresh": true,
          "cash_before": 77243.55,
          "cash_after": 76377.75,
          "equity_after": 99465.75,
          "shares_before": 231,
          "shares_after": 240,
          "fill_shares": 9,
          "avg_cost_after": 92.984918,
          "realized_pnl_cum": -712.57,
          "unrealized_pnl": 771.62,
          "cumulative_pnl": 59.05
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-22 13:20:13",
          "target_weight": 0.231455,
          "current_weight_before": 0.2334,
          "delta_weight": -0.001945,
          "delta_notional": 194.5,
          "quote_fresh": true,
          "cash_before": 76377.75,
          "cash_after": 76572.25,
          "equity_after": 99717.75,
          "shares_before": 240,
          "shares_after": 238,
          "fill_shares": -2,
          "avg_cost_after": 92.984918,
          "realized_pnl_cum": -704.04,
          "unrealized_pnl": 1015.09,
          "cumulative_pnl": 311.05
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-21\\trade_state.json",
      "order_notional": 194.5,
      "order_weight": -0.001945,
      "cumulative_pnl": 311.05
    },
    "base_decision": {
      "date": "2026-05-22",
      "final_positions": {
        "0050.TW": 0.231818,
        "2330.TW": 0.048295,
        "2454.TW": 0.057955,
        "2891.TW_2892.TW_2880.TW": 0.086932,
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
      "regime": "STAGFLATION",
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
        "current_month_return": 0.0478,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-22",
      "final_positions": {
        "0050.TW": 0.231455,
        "2330.TW": 0.048295,
        "2454.TW": 0.057955,
        "2891.TW_2892.TW_2880.TW": 0.086932,
        "CASH": 0.768545
      },
      "exposure": 0.231455,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.231455,
      "estimated_transaction_cost": 0.000425,
      "strategy": "Strategy A primary + Strategy C rotation + conditional Strategy B",
      "regime": "STAGFLATION",
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
        "current_month_return": 0.0478,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": 1.4606,
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
          "last_price": 97.25,
          "prev_close": 95.8499984741211,
          "change_pct": 1.4606,
          "as_of": "2026-05-22T05:00:00"
        },
        "2308.TW": {
          "last_price": 2100,
          "prev_close": 2030,
          "change_pct": 3.4483,
          "as_of": "2026-05-22T05:00:00"
        },
        "2317.TW": {
          "last_price": 250.5,
          "prev_close": 247.5,
          "change_pct": 1.2121,
          "as_of": "2026-05-22T05:00:00"
        },
        "2330.TW": {
          "last_price": 2260,
          "prev_close": 2230,
          "change_pct": 1.3453,
          "as_of": "2026-05-22T05:00:00"
        },
        "2345.TW": {
          "last_price": 2490,
          "prev_close": 2480,
          "change_pct": 0.4032,
          "as_of": "2026-05-22T05:00:00"
        },
        "2382.TW": {
          "last_price": 316,
          "prev_close": 308,
          "change_pct": 2.5974,
          "as_of": "2026-05-22T05:00:00"
        },
        "USO": {
          "last_price": 142.5800018310547,
          "prev_close": 144.27000427246094,
          "change_pct": -1.1714,
          "as_of": "2026-05-21T19:59:00"
        },
        "GLD": {
          "last_price": 416.9700012207031,
          "prev_close": 417.3999938964844,
          "change_pct": -0.103,
          "as_of": "2026-05-21T19:59:00"
        },
        "TLT": {
          "last_price": 84.2300033569336,
          "prev_close": 83.91000366210938,
          "change_pct": 0.3814,
          "as_of": "2026-05-21T19:59:00"
        },
        "QQQ": {
          "last_price": 714.4400024414062,
          "prev_close": 713.1500244140625,
          "change_pct": 0.1809,
          "as_of": "2026-05-21T19:59:00"
        },
        "SPY": {
          "last_price": 742.75,
          "prev_close": 741.25,
          "change_pct": 0.2024,
          "as_of": "2026-05-21T19:59:00"
        },
        "UUP": {
          "last_price": 27.739999771118164,
          "prev_close": 27.729999542236328,
          "change_pct": 0.0361,
          "as_of": "2026-05-21T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 97.25,
        "prev_close": 95.8499984741211,
        "change_pct": 1.4606,
        "as_of": "2026-05-22T05:00:00"
      },
      "2308.TW": {
        "last_price": 2100,
        "prev_close": 2030,
        "change_pct": 3.4483,
        "as_of": "2026-05-22T05:00:00"
      },
      "2317.TW": {
        "last_price": 250.5,
        "prev_close": 247.5,
        "change_pct": 1.2121,
        "as_of": "2026-05-22T05:00:00"
      },
      "2330.TW": {
        "last_price": 2260,
        "prev_close": 2230,
        "change_pct": 1.3453,
        "as_of": "2026-05-22T05:00:00"
      },
      "2345.TW": {
        "last_price": 2490,
        "prev_close": 2480,
        "change_pct": 0.4032,
        "as_of": "2026-05-22T05:00:00"
      },
      "2382.TW": {
        "last_price": 316,
        "prev_close": 308,
        "change_pct": 2.5974,
        "as_of": "2026-05-22T05:00:00"
      },
      "USO": {
        "last_price": 142.5800018310547,
        "prev_close": 144.27000427246094,
        "change_pct": -1.1714,
        "as_of": "2026-05-21T19:59:00"
      },
      "GLD": {
        "last_price": 416.9700012207031,
        "prev_close": 417.3999938964844,
        "change_pct": -0.103,
        "as_of": "2026-05-21T19:59:00"
      },
      "TLT": {
        "last_price": 84.2300033569336,
        "prev_close": 83.91000366210938,
        "change_pct": 0.3814,
        "as_of": "2026-05-21T19:59:00"
      },
      "QQQ": {
        "last_price": 714.4400024414062,
        "prev_close": 713.1500244140625,
        "change_pct": 0.1809,
        "as_of": "2026-05-21T19:59:00"
      },
      "SPY": {
        "last_price": 742.75,
        "prev_close": 741.25,
        "change_pct": 0.2024,
        "as_of": "2026-05-21T19:59:00"
      },
      "UUP": {
        "last_price": 27.739999771118164,
        "prev_close": 27.729999542236328,
        "change_pct": 0.0361,
        "as_of": "2026-05-21T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 97.25,
        "shares": 2,
        "notional": 194.5,
        "weight": -0.001945,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 311.05,
    "equity": 99717.75,
    "telegram_message": "[1320 執行結果]\n策略：Strategy A primary + Strategy C rotation + conditional Strategy B\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.233\n起始股數：240\n今日已用：23,146\n今日剩餘：76,572\n下單金額：194\n現金前後：76,378 -> 76,572\n總資產：99,718\n持有股數：238\n持有均價：92.98\n已實現損益：-704\n未實現損益：1,015\n目前累積損益：311\n0050部位：0.231\n現金：0.769\n0050即時：+1.46% @ 2026-05-22T05:00:00\n承接來源：cache\\trade_execution\\2026-05-21\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 97 × 2 股（約 194）\n參考資產：USO:-1.17% / GLD:-0.10% / TLT:+0.38% / QQQ:+0.18%\n目標曝險：0.231\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-22",
    "generated_at": "2026-05-22T05:30:02.381Z",
    "categories": {
      "technology": [
        {
          "title": "BlockchAIn Names Former Google Business Development Leader as Vice President of Sales",
          "summary": "BlockchAIn 宣布任命前 Google 業務發展主管 Heitz 為銷售副總裁，強化企業業務拓展與大型資料中心交易能力。",
          "source": "01-blockchain-names-former-google-business-developmen.md",
          "link": "https://www.financialcontent.com/article/gnwcq-2026-5-21-blockchain-names-former-google-business-development-leader-as-vice-president-of-sales",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Google Reveals Plan to Dominate AI: Copy Apple",
          "summary": "Google 透露以自研晶片與軟硬整合策略布局 AI，試圖複製蘋果模式，掌握底層硬體以提升競爭力。",
          "source": "02-google-reveals-plan-to-dominate-ai-copy-apple.md",
          "link": "https://247wallst.com/investing/2026/05/21/google-reveals-plan-to-dominate-ai-copy-apple/",
          "strength": 3,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Love factually: Dating start-ups promise to cut the cheats",
          "summary": "假交友檔案問題引發不滿，促使多家新興交友服務推出不同機制，主打提升真實性並降低詐騙與作弊風險。",
          "source": "03-love-factually-dating-start-ups-promise-to-cut-the.md",
          "link": "https://www.bbc.com/news/articles/cnvpme6811do?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "UK police bosses urge unsafe platforms to be blocked for under-16s",
          "summary": "英國警方高層呼籲，對未能防止未滿16歲兒童看到裸露內容或遭陌生人聯繫的網路平台，應予以封鎖，以加強兒少網路安全。",
          "source": "04-uk-police-bosses-urge-unsafe-platforms-to-be-block.md",
          "link": "https://www.bbc.com/news/articles/c4gv0qg2levo?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "Meta settles social media addiction case with US school district",
          "summary": "Meta 與美國一學區就社群媒體成癮訴訟達成和解。此案原被視為 1200 多個提出類似指控學區的測試案件。",
          "source": "05-meta-settles-social-media-addiction-case-with-us-s.md",
          "link": "https://www.bbc.com/news/articles/cgepze483pqo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "TikTok and YouTube 'not safe enough' for kids, says Ofcom",
          "summary": "英國監管機構 Ofcom 指出，TikTok 與 YouTube 對兒童而言仍不夠安全；YouTube 強調已與專家合作，TikTok 則對未被承認安全功能表示失望。",
          "source": "06-tiktok-and-youtube-not-safe-enough-for-kids-says-o.md",
          "link": "https://www.bbc.com/news/articles/cn0pky4zpxxo?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "SpaceX files for stock market debut that could make Elon Musk a trillionaire",
          "summary": "SpaceX已申請股票市場上市，若成功，可能大幅推升馬斯克身價。這家火箭與衛星網路公司將以SPCX為代號交易。",
          "source": "07-spacex-files-for-stock-market-debut-that-could-mak.md",
          "link": "https://www.bbc.com/news/articles/cg4pe2953q1o?at_medium=RSS&at_campaign=rss",
          "strength": 4,
          "sentiment": "risk_on",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "BlockchAIn Names Former Google Business Development Leader as Vice President of Sales",
          "summary": "BlockchAIn任命前Google業務發展主管Gary Heitz出任銷售副總裁，負責客戶拓展與容量買方合作，以強化商業團隊並推進擴張。",
          "source": "01-blockchain-names-former-google-business-developmen.md",
          "link": "https://www.benzinga.com/pressreleases/26/05/g52714467/blockchain-names-former-google-business-development-leader-as-vice-president-of-sales",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "ACM Research (NASDAQ:ACMR) Shares Up 5.1% – Should You Buy?",
          "summary": "ACM Research 股價週二上漲 5.1%，盤中最高觸及 68.40 美元，成交量低於平均水準。報導提及分析師觀點，但內容未完整。",
          "source": "02-acm-research-nasdaq-acmr-shares-up-5-1-should-you-.md",
          "link": "https://www.dailypolitical.com/2026/05/21/acm-research-nasdaqacmr-shares-up-5-1-should-you-buy.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Laser Photonics and Fonon Technologies Highlight Compact Laser Marking Solution for Defense Logistics Support",
          "summary": "Laser Photonics與Fonon Technologies展示一款緊湊型雷射標記方案，主打軍事環境中零件與基礎設施的永久標記，強調支援國防後勤需求。",
          "source": "03-laser-photonics-and-fonon-technologies-highlight-c.md",
          "link": "https://www.financialcontent.com/article/accwirecq-2026-5-21-laser-photonics-and-fonon-technologies-highlight-compact-laser-marking-solution-for-defense-logistics-support",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Vanguard Long-Term Treasury ETF (NASDAQ:VGLT) Hits New 12-Month Low – Here’s What Happened",
          "summary": "Vanguard 長天期美債 ETF VGLT 盤中跌至 52 週新低 53.15 美元，成交量逾 51 萬股，顯示長債價格持續承壓。",
          "source": "04-vanguard-long-term-treasury-etf-nasdaq-vglt-hits-n.md",
          "link": "https://www.watchlistnews.com/vanguard-long-term-treasury-etf-nasdaqvglt-hits-new-12-month-low-heres-what-happened/11090517.html",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "finance"
        },
        {
          "title": "Gartner (NYSE:IT) Trading 4.7% Higher – Here’s Why",
          "summary": "Gartner 股價週二上漲 4.7%，盤中最高觸及 162.99 美元，成交量明顯低於平均水準。報導提及分析師評級變動可能是推升原因。",
          "source": "05-gartner-nyse-it-trading-4-7-higher-here-s-why.md",
          "link": "https://www.watchlistnews.com/gartner-nyseit-trading-4-7-higher-heres-why/11090518.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "iShares ESG Aware 1-5 Year USD Corporate Bond ETF (NASDAQ:SUSB) Sees Unusually-High Trading Volume – Here’s Why",
          "summary": "iShares ESG Aware 1-5 Year USD Corporate Bond ETF（SUSB）週二交易量異常放大，盤中約14.1萬股成交，較前一日略增，股價小幅下跌至24.87美元。",
          "source": "06-ishares-esg-aware-1-5-year-usd-corporate-bond-etf-.md",
          "link": "https://www.watchlistnews.com/ishares-esg-aware-1-5-year-usd-corporate-bond-etf-nasdaqsusb-sees-unusually-high-trading-volume-heres-why/11090519.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Fortis Group Advisors LLC Lowers Stock Holdings in iShares Russell 2000 ETF $IWM",
          "summary": "Fortis Group Advisors LLC 在第四季減持 iShares Russell 2000 ETF（IWM）45%，賣出 14,311 股後持有 17,468 股。",
          "source": "07-fortis-group-advisors-llc-lowers-stock-holdings-in.md",
          "link": "https://www.watchlistnews.com/fortis-group-advisors-llc-lowers-stock-holdings-in-ishares-russell-2000-etf-iwm/11090520.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Suzuki Motor (OTCMKTS:SZKMY) Sees Unusually-High Trading Volume – Here’s What Happened",
          "summary": "鈴木汽車美國存託憑證交易量周二異常放大，成交約15.4萬股，較前一日增加74%，股價小幅回落至45.22美元。",
          "source": "08-suzuki-motor-otcmkts-szkmy-sees-unusually-high-tra.md",
          "link": "https://www.tickerreport.com/banking-finance/13449785/suzuki-motor-otcmktsszkmy-sees-unusually-high-trading-volume-heres-what-happened.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Hesai Group (NASDAQ:HSAI) Shares Down 8.3% – Here’s What Happened",
          "summary": "禾賽集團美股周二下跌8.3%，盤中一度跌至19.80美元，成交量較均值明顯萎縮。報導未提及具體利空，僅反映股價波動。",
          "source": "09-hesai-group-nasdaq-hsai-shares-down-8-3-here-s-wha.md",
          "link": "https://baseballnewssource.com/2026/05/21/hesai-group-nasdaqhsai-shares-down-8-3-heres-what-happened/11130661.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Trump Faces Rising Voter Anger Over Inflation, Economy And Iran War: New Poll",
          "summary": "福斯最新民調顯示，多數美國選民認為生活成本是最大經濟問題，對通膨、經濟與伊朗戰事引發的川普施政不滿升高。",
          "source": "10-trump-faces-rising-voter-anger-over-inflation-econ.md",
          "link": "https://menafn.com/1111151677/Trump-Faces-Rising-Voter-Anger-Over-Inflation-Economy-And-Iran-War-New-Poll",
          "strength": 4,
          "sentiment": "stagflation",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "Toilets and changing rooms must be used on basis of biological sex, guidance confirms",
          "summary": "英國最新指引確認，廁所與更衣室應依生理性別使用，並指出此規範是在去年最高法院具里程碑意義的裁決後發布。",
          "source": "01-toilets-and-changing-rooms-must-be-used-on-basis-o.md",
          "link": "https://www.bbc.com/news/articles/c0e2rj3zj02o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Cheaper theme park tickets and children's meals as VAT to be cut for some attractions this summer",
          "summary": "英國財相里夫斯宣布，今夏部分景點將調降增值稅，帶動主題樂園門票與兒童餐價格下修，以紓解民眾生活成本壓力。",
          "source": "02-cheaper-theme-park-tickets-and-children-s-meals-as.md",
          "link": "https://www.bbc.com/news/articles/cd7pzr88de1o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Five held in Tameside election fraud investigation",
          "summary": "警方表示，英國泰姆賽德地區有四男一女、年齡介於23至47歲，因選舉舞弊調查在多處住址遭拘留。",
          "source": "03-five-held-in-tameside-election-fraud-investigation.md",
          "link": "https://www.bbc.com/news/articles/ckgpj5zpyyno?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Ministers want new voting system in place for possible Manchester mayor race",
          "summary": "英國部長希望在可能舉行的曼徹斯特市長選舉前，先行建立新的投票制度；原本預計於2027年5月改採補充投票制。",
          "source": "04-ministers-want-new-voting-system-in-place-for-poss.md",
          "link": "https://www.bbc.com/news/articles/czj2gry3zm9o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Starmer says he will campaign for Burnham in Makerfield",
          "summary": "英國首相史塔默表示，工黨在領導層遭遇反彈後，必須團結一致、共同奮戰，並稱自己將為伯恩漢在梅克菲爾德助選。",
          "source": "05-starmer-says-he-will-campaign-for-burnham-in-maker.md",
          "link": "https://www.bbc.com/news/articles/cze2j7875pdo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Green Party candidate pulls out of by-election",
          "summary": "綠黨候選人 Chris Kennedy 在被提名數小時後，宣布退出補選競選。",
          "source": "06-green-party-candidate-pulls-out-of-by-election.md",
          "link": "https://www.bbc.com/news/articles/cq6pver77gpo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "UK migration drops to 171,000 - almost half 2024's figure",
          "summary": "英國淨移民數降至17.1萬，接近2024年數字的一半。首相表示，政府正兌現承諾，恢復邊境管控。",
          "source": "07-uk-migration-drops-to-171-000-almost-half-2024-s-f.md",
          "link": "https://www.bbc.com/news/articles/clyp1ekd584o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "The Latest: US indictment of former President Raúl Castro raises pressure on Cuba",
          "summary": "美國川普政府起訴古巴前總統勞爾·卡斯楚，指其涉入1996年民航機遭擊落事件，進一步加大對古巴的政治壓力。",
          "source": "08-the-latest-us-indictment-of-former-president-rau-l.md",
          "link": "https://www.houstonchronicle.com/news/politics/article/the-latest-us-indictment-of-former-president-22270059.php",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Chris Mason: VAT cut on summer fun - the announcement that didn't leak",
          "summary": "財政大臣里夫斯宣布多項減輕家庭生活成本措施，其中包括夏季娛樂相關的增值稅減免，且消息未事先外洩；外界質疑其實際效果是否足夠。",
          "source": "09-chris-mason-vat-cut-on-summer-fun-the-announcement.md",
          "link": "https://www.bbc.com/news/articles/c4g9r92n3eqo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Sir Desmond Swayne tops private members bill ballot",
          "summary": "英國國會私人議員法案抽籤結果出爐，Sir Desmond Swayne拔得頭籌。上屆由工黨議員Kim Leadbeater勝出，並提出安樂死法案。",
          "source": "10-sir-desmond-swayne-tops-private-members-bill-ballo.md",
          "link": "https://www.bbc.com/news/articles/cx21y1jnpdwo?at_medium=RSS&at_campaign=rss",
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
      "portfolioValue": 110554.0394558058
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
    }
  ]
};
