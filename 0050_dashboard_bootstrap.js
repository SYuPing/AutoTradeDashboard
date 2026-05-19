window.ETFDashboardBootstrap = {
  "date": "2026-05-19",
  "generated_at": "2026-05-19T14:03:39.266Z",
  "sourceDates": {
    "newsDate": "2026-05-19",
    "tradeDate": "2026-05-19",
    "strategyDate": "2026-05-19",
    "shortTermDate": "2026-05-19"
  },
  "dataManifest": {
    "latest_date": "2026-05-19",
    "latest_updated_at": "2026-05-19T14:03:39.176Z",
    "signature": "1779199419176.0793",
    "source_dates": {
      "newsDate": "2026-05-19",
      "tradeDate": "2026-05-19",
      "strategyDate": "2026-05-19",
      "shortTermDate": "2026-05-19"
    },
    "generated_at": "2026-05-19T14:03:39.266Z"
  },
  "state": {
    "date": "2026-05-19",
    "daily_capital": 100000,
    "starting_weight": 0.228707,
    "starting_notional": 22870.75,
    "starting_shares": 245,
    "starting_avg_cost": 94.900002,
    "current_weight": 0,
    "current_notional": 0,
    "shares_held": 0,
    "avg_cost": 0,
    "cost_basis_total": 0,
    "market_value": 0,
    "used_capital": 0,
    "remaining_capital": 98705.1,
    "cash_balance_before": 75834.35,
    "cash_balance_after": 98705.1,
    "equity": 98705.1,
    "realized_pnl_cum": -701.6,
    "unrealized_pnl": 0,
    "last_trade_price": 93.349998,
    "last_mark_price": 93.349998,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-19 09:30:10",
        "target_weight": 0.231648,
        "current_weight_before": 0.422639,
        "delta_weight": -0.190991,
        "delta_notional": 19099.1,
        "quote_fresh": true,
        "cash_before": 56735.25,
        "cash_after": 75834.35,
        "equity_after": 98999.1,
        "shares_before": 447,
        "shares_after": 245,
        "fill_shares": -202,
        "avg_cost_after": 94.900002,
        "realized_pnl_cum": -321.85,
        "unrealized_pnl": -85.75,
        "cumulative_pnl": -407.6
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-19 13:20:13",
        "target_weight": 0,
        "current_weight_before": 0.228707,
        "delta_weight": -0.228707,
        "delta_notional": 22870.75,
        "quote_fresh": true,
        "cash_before": 75834.35,
        "cash_after": 98705.1,
        "equity_after": 98705.1,
        "shares_before": 245,
        "shares_after": 0,
        "fill_shares": -245,
        "avg_cost_after": 0,
        "realized_pnl_cum": -701.6,
        "unrealized_pnl": 0,
        "cumulative_pnl": -701.6
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-18\\trade_state.json",
    "order_notional": 22870.75,
    "order_weight": -0.228707,
    "cumulative_pnl": -701.6
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏空/避險，但不追空，先用小部位確認市場是否把地緣風險反映到台股權值",
    "instrument": "0050 反向避開重倉；若要部署，優先用現金保留彈性，或小部位做空/避險台指期、0050 相關避險部位",
    "window": "T+1 ~ T+5",
    "confidence": "中低",
    "execution_points": [
      "1. **今天不適合直接重倉偏多**",
      "2. **但也不建議滿倉追空**",
      "3. **若一定要在 9 點前部署，優先選擇防守而非進攻**"
    ],
    "data_needs": [
      "台指期夜盤 / 早盤報價",
      "台積電現貨開盤前委買委賣與 ADR 價差",
      "外資期貨未平倉與開盤前籌碼",
      "0050 成分股盤前量價與開盤 5~15 分鐘強弱",
      "美股期貨（尤其 NQ / ES）最新變化",
      "原油是否續漲、是否有突發地緣升級新聞"
    ],
    "risk_points": [
      "目前最主要風險是：**地緣升溫若進一步擴大，台股權值會先跌；但若消息快速緩和，空單/避險會被軋。",
      "0050 內部結構偏弱，**不適合早盤直接重倉抄底**。",
      "今天更像是 **先防守、後確認** 的交易日，不是高勝率追價日。"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏空/避險，但不追空，先用小部位確認市場是否把地緣風險反映到台股權值**\n- 操作標的：**0050 反向避開重倉；若要部署，優先用現金保留彈性，或小部位做空/避險台指期、0050 相關避險部位**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中低**\n\n執行重點\n1. **今天不適合直接重倉偏多**\n- 中東衝突、油價上行、美元偏強，整體是 **stagflation / 風險趨避** 環境。\n- 台積電 ADR **-2.08%**、QQQ **-0.43%**，對台股權值尤其是 0050 形成壓力。\n- 0050 breadth 只有 **bullish 7 / bearish 21**，結構偏弱，不支持開盤直接追多。\n\n2. **但也不建議滿倉追空**\n- 市場對新聞的反應有部分「未完全確認」：原油雖強，但黃金、美債沒有同步強勢，代表市場仍在消化敘事。\n- VIX **17.82** 並不算極端恐慌，若早盤出現利空鈍化，台股可能有技術性反彈。\n- 所以策略是：**先小部位試單，確認開盤是否延續弱勢，再決定是否加碼避險。**\n\n3. **若一定要在 9 點前部署，優先選擇防守而非進攻**\n- 以 **現金為主、少量避險為輔**。\n- 若盤前/開盤後台指期明顯弱、台積電開低不回、0050 成分股廣泛翻黑，才考慮加碼避險。\n- 若開盤 15~30 分鐘內跌不下去，代表市場可能先交易「風險鈍化」，此時不要追空。\n\n補充資料需求\n- **台指期夜盤 / 早盤報價**\n- **台積電現貨開盤前委買委賣與 ADR 價差**\n- **外資期貨未平倉與開盤前籌碼**\n- **0050 成分股盤前量價與開盤 5~15 分鐘強弱**\n- **美股期貨（尤其 NQ / ES）最新變化**\n- **原油是否續漲、是否有突發地緣升級新聞**\n\n風險提醒\n- 目前最主要風險是：**地緣升溫若進一步擴大，台股權值會先跌；但若消息快速緩和，空單/避險會被軋。**\n- 0050 內部結構偏弱，**不適合早盤直接重倉抄底**。\n- 今天更像是 **先防守、後確認** 的交易日，不是高勝率追價日。"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等反彈失敗再分批偏空；權值股以防守型/相對強勢者為主，避免追聯發科、台達電這類短線轉弱股",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330.TW)",
      "聯發科(2454.TW) / 台達電(2308.TW)",
      "聯電(2303.TW) / 國巨(2327.TW)"
    ],
    "risk_points": [
      "若油價續漲但台股權值無法同步止穩，0050 會先反映風險偏好下降。",
      "若台積電 ADR 再跌、聯發科/台達電續弱，短線偏空會快速成立。",
      "若中東風險降溫、油價回吐，宏觀偏空邏輯會失效，0050 可能出現急彈。",
      "目前宏觀偏空，但 0050 技術面只有局部強勢，屬於「尚未共振」，不適合追價。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等反彈失敗再分批偏空；權值股以防守型/相對強勢者為主，避免追聯發科、台達電這類短線轉弱股**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330.TW)**\n- 0050 最大權重，決定指數方向。\n- 目前 5D +0.22% 近乎持平，搭配 TSM ADR 1D -2.08%，代表外部科技風險仍在，短線不適合追多。\n- 若台積電失守，0050 很難獨強。\n\n2. **聯發科(2454.TW) / 台達電(2308.TW)**\n- 兩檔都是高權重，但 5D 分別 -12.37%、-10.02%，屬於明顯拖累。\n- 代表 0050 內部不是全面轉強，而是權值輪動偏弱。\n- 短線若它們無法止跌，0050 反彈高度有限。\n\n3. **聯電(2303.TW) / 國巨(2327.TW)**\n- 聯電 5D +16.84%，國巨 5D +53.45%，是目前少數明顯強勢股。\n- 但這種強勢較偏族群輪動，不足以扭轉 0050 整體結構。\n- 可視為短線資金避風港，但不代表大盤已轉多。\n\n風險提醒\n- **若油價續漲但台股權值無法同步止穩，0050 會先反映風險偏好下降。**\n- **若台積電 ADR 再跌、聯發科/台達電續弱，短線偏空會快速成立。**\n- **若中東風險降溫、油價回吐，宏觀偏空邏輯會失效，0050 可能出現急彈。**\n- **目前宏觀偏空，但 0050 技術面只有局部強勢，屬於「尚未共振」，不適合追價。**"
  },
  "morning": {
    "generated_at": "2026-05-19 09:30:10",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-19\\trade_state.json",
    "trade_state": {
      "date": "2026-05-19",
      "daily_capital": 100000,
      "starting_weight": 0.422639,
      "starting_notional": 42263.85,
      "starting_shares": 447,
      "starting_avg_cost": 94.900002,
      "current_weight": 0.231648,
      "current_notional": 23164.75,
      "shares_held": 245,
      "avg_cost": 94.900002,
      "cost_basis_total": 23250.5,
      "market_value": 23164.75,
      "used_capital": 23164.75,
      "remaining_capital": 75834.35,
      "cash_balance_before": 56735.25,
      "cash_balance_after": 75834.35,
      "equity": 98999.1,
      "realized_pnl_cum": -321.85,
      "unrealized_pnl": -85.75,
      "last_trade_price": 94.550003,
      "last_mark_price": 94.550003,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-19 09:30:10",
          "target_weight": 0.231648,
          "current_weight_before": 0.422639,
          "delta_weight": -0.190991,
          "delta_notional": 19099.1,
          "quote_fresh": true,
          "cash_before": 56735.25,
          "cash_after": 75834.35,
          "equity_after": 98999.1,
          "shares_before": 447,
          "shares_after": 245,
          "fill_shares": -202,
          "avg_cost_after": 94.900002,
          "realized_pnl_cum": -321.85,
          "unrealized_pnl": -85.75,
          "cumulative_pnl": -407.6
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-18\\trade_state.json",
      "order_notional": 19099.1,
      "order_weight": -0.190991,
      "cumulative_pnl": -407.6
    },
    "base_decision": {
      "date": "2026-05-19",
      "final_positions": {
        "0050.TW": 0.231818,
        "2303.TW": 0.193182,
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
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0441,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-19",
      "final_positions": {
        "0050.TW": 0.231648,
        "2303.TW": 0.193182,
        "CASH": 0.768352
      },
      "exposure": 0.231648,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.231648,
      "estimated_transaction_cost": 0.000425,
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0441,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": -0.3688,
        "focus_positive_count": 1,
        "focus_positive": [
          "2317.TW"
        ],
        "action": "EXECUTE",
        "reason": "MORNING_CONFIRM_OK",
        "target_exposure": 0.45
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 94.55000305175781,
          "prev_close": 94.9000015258789,
          "change_pct": -0.3688,
          "as_of": "2026-05-19T01:10:00"
        },
        "2308.TW": {
          "last_price": 2015,
          "prev_close": 2020,
          "change_pct": -0.2475,
          "as_of": "2026-05-19T01:09:00"
        },
        "2317.TW": {
          "last_price": 250.5,
          "prev_close": 248.5,
          "change_pct": 0.8048,
          "as_of": "2026-05-19T01:10:00"
        },
        "2330.TW": {
          "last_price": 2225,
          "prev_close": 2240,
          "change_pct": -0.6696,
          "as_of": "2026-05-19T01:10:00"
        },
        "2345.TW": {
          "last_price": 2490,
          "prev_close": 2495,
          "change_pct": -0.2004,
          "as_of": "2026-05-19T01:10:00"
        },
        "2382.TW": {
          "last_price": 299.5,
          "prev_close": 300,
          "change_pct": -0.1667,
          "as_of": "2026-05-19T01:09:00"
        },
        "USO": {
          "last_price": 149.3300018310547,
          "prev_close": 148.22999572753906,
          "change_pct": 0.7421,
          "as_of": "2026-05-18T19:59:00"
        },
        "GLD": {
          "last_price": 418.44000244140625,
          "prev_close": 417.2900085449219,
          "change_pct": 0.2756,
          "as_of": "2026-05-18T19:59:00"
        },
        "TLT": {
          "last_price": 83.54499816894531,
          "prev_close": 83.66000366210938,
          "change_pct": -0.1375,
          "as_of": "2026-05-18T19:59:00"
        },
        "QQQ": {
          "last_price": 705.7000122070312,
          "prev_close": 708.9299926757812,
          "change_pct": -0.4556,
          "as_of": "2026-05-18T19:59:00"
        },
        "SPY": {
          "last_price": 738.5599975585938,
          "prev_close": 739.1699829101562,
          "change_pct": -0.0825,
          "as_of": "2026-05-18T19:59:00"
        },
        "UUP": {
          "last_price": 27.700000762939453,
          "prev_close": 27.770000457763672,
          "change_pct": -0.2521,
          "as_of": "2026-05-18T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 94.55000305175781,
        "prev_close": 94.9000015258789,
        "change_pct": -0.3688,
        "as_of": "2026-05-19T01:10:00"
      },
      "2308.TW": {
        "last_price": 2015,
        "prev_close": 2020,
        "change_pct": -0.2475,
        "as_of": "2026-05-19T01:09:00"
      },
      "2317.TW": {
        "last_price": 250.5,
        "prev_close": 248.5,
        "change_pct": 0.8048,
        "as_of": "2026-05-19T01:10:00"
      },
      "2330.TW": {
        "last_price": 2225,
        "prev_close": 2240,
        "change_pct": -0.6696,
        "as_of": "2026-05-19T01:10:00"
      },
      "2345.TW": {
        "last_price": 2490,
        "prev_close": 2495,
        "change_pct": -0.2004,
        "as_of": "2026-05-19T01:10:00"
      },
      "2382.TW": {
        "last_price": 299.5,
        "prev_close": 300,
        "change_pct": -0.1667,
        "as_of": "2026-05-19T01:09:00"
      },
      "USO": {
        "last_price": 149.3300018310547,
        "prev_close": 148.22999572753906,
        "change_pct": 0.7421,
        "as_of": "2026-05-18T19:59:00"
      },
      "GLD": {
        "last_price": 418.44000244140625,
        "prev_close": 417.2900085449219,
        "change_pct": 0.2756,
        "as_of": "2026-05-18T19:59:00"
      },
      "TLT": {
        "last_price": 83.54499816894531,
        "prev_close": 83.66000366210938,
        "change_pct": -0.1375,
        "as_of": "2026-05-18T19:59:00"
      },
      "QQQ": {
        "last_price": 705.7000122070312,
        "prev_close": 708.9299926757812,
        "change_pct": -0.4556,
        "as_of": "2026-05-18T19:59:00"
      },
      "SPY": {
        "last_price": 738.5599975585938,
        "prev_close": 739.1699829101562,
        "change_pct": -0.0825,
        "as_of": "2026-05-18T19:59:00"
      },
      "UUP": {
        "last_price": 27.700000762939453,
        "prev_close": 27.770000457763672,
        "change_pct": -0.2521,
        "as_of": "2026-05-18T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 94.55,
        "shares": 202,
        "notional": 19099.1,
        "weight": -0.190991,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -407.6,
    "equity": 98999.1,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.423\n起始股數：447\n今日已用：23,165\n今日剩餘：75,834\n下單金額：19,099\n現金前後：56,735 -> 75,834\n總資產：98,999\n持有股數：245\n持有均價：94.90\n已實現損益：-322\n未實現損益：-86\n目前累積損益：-408\n0050部位：0.232\n現金：0.768\n0050即時：-0.37% @ 2026-05-19T01:10:00\n承接來源：cache\\trade_execution\\2026-05-18\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 95 × 202 股（約 19,099）\n參考資產：USO:+0.74% / GLD:+0.28% / TLT:-0.14% / QQQ:-0.46%\n目標曝險：0.232\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-19 13:20:13",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-19\\trade_state.json",
    "trade_state": {
      "date": "2026-05-19",
      "daily_capital": 100000,
      "starting_weight": 0.228707,
      "starting_notional": 22870.75,
      "starting_shares": 245,
      "starting_avg_cost": 94.900002,
      "current_weight": 0,
      "current_notional": 0,
      "shares_held": 0,
      "avg_cost": 0,
      "cost_basis_total": 0,
      "market_value": 0,
      "used_capital": 0,
      "remaining_capital": 98705.1,
      "cash_balance_before": 75834.35,
      "cash_balance_after": 98705.1,
      "equity": 98705.1,
      "realized_pnl_cum": -701.6,
      "unrealized_pnl": 0,
      "last_trade_price": 93.349998,
      "last_mark_price": 93.349998,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-19 09:30:10",
          "target_weight": 0.231648,
          "current_weight_before": 0.422639,
          "delta_weight": -0.190991,
          "delta_notional": 19099.1,
          "quote_fresh": true,
          "cash_before": 56735.25,
          "cash_after": 75834.35,
          "equity_after": 98999.1,
          "shares_before": 447,
          "shares_after": 245,
          "fill_shares": -202,
          "avg_cost_after": 94.900002,
          "realized_pnl_cum": -321.85,
          "unrealized_pnl": -85.75,
          "cumulative_pnl": -407.6
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-19 13:20:13",
          "target_weight": 0,
          "current_weight_before": 0.228707,
          "delta_weight": -0.228707,
          "delta_notional": 22870.75,
          "quote_fresh": true,
          "cash_before": 75834.35,
          "cash_after": 98705.1,
          "equity_after": 98705.1,
          "shares_before": 245,
          "shares_after": 0,
          "fill_shares": -245,
          "avg_cost_after": 0,
          "realized_pnl_cum": -701.6,
          "unrealized_pnl": 0,
          "cumulative_pnl": -701.6
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-18\\trade_state.json",
      "order_notional": 22870.75,
      "order_weight": -0.228707,
      "cumulative_pnl": -701.6
    },
    "base_decision": {
      "date": "2026-05-19",
      "final_positions": {
        "0050.TW": 0.231818,
        "2303.TW": 0.193182,
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
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0441,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-19",
      "final_positions": {
        "0050.TW": 0,
        "2303.TW": 0,
        "CASH": 1
      },
      "exposure": 0,
      "status": "NO_TRADE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0,
      "estimated_transaction_cost": 0.000425,
      "strategy": "A",
      "regime": "UNKNOWN",
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
        "current_month_return": 0.0441,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": -1.6333,
        "focus_positive_count": 0,
        "focus_positive": [],
        "action": "CANCEL",
        "reason": "MIDDAY_CORE_BREAKDOWN",
        "target_exposure": 0
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 93.3499984741211,
          "prev_close": 94.9000015258789,
          "change_pct": -1.6333,
          "as_of": "2026-05-19T05:00:00"
        },
        "2308.TW": {
          "last_price": 1915,
          "prev_close": 2020,
          "change_pct": -5.198,
          "as_of": "2026-05-19T05:00:00"
        },
        "2317.TW": {
          "last_price": 245.5,
          "prev_close": 248.5,
          "change_pct": -1.2072,
          "as_of": "2026-05-19T05:00:00"
        },
        "2330.TW": {
          "last_price": 2210,
          "prev_close": 2240,
          "change_pct": -1.3393,
          "as_of": "2026-05-19T05:00:00"
        },
        "2345.TW": {
          "last_price": 2410,
          "prev_close": 2495,
          "change_pct": -3.4068,
          "as_of": "2026-05-19T05:00:00"
        },
        "2382.TW": {
          "last_price": 291.5,
          "prev_close": 300,
          "change_pct": -2.8333,
          "as_of": "2026-05-19T05:00:00"
        },
        "USO": {
          "last_price": 149.3300018310547,
          "prev_close": 148.22999572753906,
          "change_pct": 0.7421,
          "as_of": "2026-05-18T19:59:00"
        },
        "GLD": {
          "last_price": 418.44000244140625,
          "prev_close": 417.2900085449219,
          "change_pct": 0.2756,
          "as_of": "2026-05-18T19:59:00"
        },
        "TLT": {
          "last_price": 83.54499816894531,
          "prev_close": 83.66000366210938,
          "change_pct": -0.1375,
          "as_of": "2026-05-18T19:59:00"
        },
        "QQQ": {
          "last_price": 705.7000122070312,
          "prev_close": 708.9299926757812,
          "change_pct": -0.4556,
          "as_of": "2026-05-18T19:59:00"
        },
        "SPY": {
          "last_price": 738.5599975585938,
          "prev_close": 739.1699829101562,
          "change_pct": -0.0825,
          "as_of": "2026-05-18T19:59:00"
        },
        "UUP": {
          "last_price": 27.700000762939453,
          "prev_close": 27.770000457763672,
          "change_pct": -0.2521,
          "as_of": "2026-05-18T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 93.3499984741211,
        "prev_close": 94.9000015258789,
        "change_pct": -1.6333,
        "as_of": "2026-05-19T05:00:00"
      },
      "2308.TW": {
        "last_price": 1915,
        "prev_close": 2020,
        "change_pct": -5.198,
        "as_of": "2026-05-19T05:00:00"
      },
      "2317.TW": {
        "last_price": 245.5,
        "prev_close": 248.5,
        "change_pct": -1.2072,
        "as_of": "2026-05-19T05:00:00"
      },
      "2330.TW": {
        "last_price": 2210,
        "prev_close": 2240,
        "change_pct": -1.3393,
        "as_of": "2026-05-19T05:00:00"
      },
      "2345.TW": {
        "last_price": 2410,
        "prev_close": 2495,
        "change_pct": -3.4068,
        "as_of": "2026-05-19T05:00:00"
      },
      "2382.TW": {
        "last_price": 291.5,
        "prev_close": 300,
        "change_pct": -2.8333,
        "as_of": "2026-05-19T05:00:00"
      },
      "USO": {
        "last_price": 149.3300018310547,
        "prev_close": 148.22999572753906,
        "change_pct": 0.7421,
        "as_of": "2026-05-18T19:59:00"
      },
      "GLD": {
        "last_price": 418.44000244140625,
        "prev_close": 417.2900085449219,
        "change_pct": 0.2756,
        "as_of": "2026-05-18T19:59:00"
      },
      "TLT": {
        "last_price": 83.54499816894531,
        "prev_close": 83.66000366210938,
        "change_pct": -0.1375,
        "as_of": "2026-05-18T19:59:00"
      },
      "QQQ": {
        "last_price": 705.7000122070312,
        "prev_close": 708.9299926757812,
        "change_pct": -0.4556,
        "as_of": "2026-05-18T19:59:00"
      },
      "SPY": {
        "last_price": 738.5599975585938,
        "prev_close": 739.1699829101562,
        "change_pct": -0.0825,
        "as_of": "2026-05-18T19:59:00"
      },
      "UUP": {
        "last_price": 27.700000762939453,
        "prev_close": 27.770000457763672,
        "change_pct": -0.2521,
        "as_of": "2026-05-18T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 93.35,
        "shares": 245,
        "notional": 22870.75,
        "weight": -0.228707,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -701.6,
    "equity": 98705.1,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：NO_TRADE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.229\n起始股數：245\n今日已用：0\n今日剩餘：98,705\n下單金額：22,871\n現金前後：75,834 -> 98,705\n總資產：98,705\n持有股數：0\n持有均價：0.00\n已實現損益：-702\n未實現損益：0\n目前累積損益：-702\n0050部位：0.000\n現金：1.000\n0050即時：-1.63% @ 2026-05-19T05:00:00\n承接來源：cache\\trade_execution\\2026-05-18\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 93 × 245 股（約 22,871）\n參考資產：USO:+0.74% / GLD:+0.28% / TLT:-0.14% / QQQ:-0.46%\n目標曝險：0.000\nquote判斷：CANCEL | MIDDAY_CORE_BREAKDOWN",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-19",
    "generated_at": "2026-05-19T14:03:39.269Z",
    "categories": {
      "technology": [
        {
          "title": "Deadly tornadoes and floods threaten millions across 13 US states: Shelter in place NOW",
          "summary": "美國13州遭致命龍捲風與洪水威脅，數千萬人面臨生命危險，當局呼籲立即就地避難。",
          "source": "01-deadly-tornadoes-and-floods-threaten-millions-acro.md",
          "link": "https://www.dailymail.com/sciencetech/article-15828577/tornado-flood-midwest-oklahoma-kansas-nebraska.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "technology"
        },
        {
          "title": "Robo-top: The machines that could make your next t-shirt",
          "summary": "新型機器可能讓部分服裝製造從亞洲回流西方，改變全球成衣生產分工。",
          "source": "02-robo-top-the-machines-that-could-make-your-next-t-.md",
          "link": "https://www.bbc.com/news/articles/c0q2gkj97eko?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Satellites and AI used to track UK hedgehogs in bid to slow decline",
          "summary": "英國研究團隊結合衛星與人工智慧追蹤刺蝟，盼找出牠們覓食與交配受阻的原因，進而減緩族群下降。",
          "source": "03-satellites-and-ai-used-to-track-uk-hedgehogs-in-bi.md",
          "link": "https://www.bbc.com/news/articles/c202g60qrlpo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Musk loses OpenAI court battle after jury finds he waited too long to sue",
          "summary": "陪審團審理馬斯克指控奧特曼「偷走慈善」一案後，認定他提告過晚，馬斯克在 OpenAI 官司中敗訴。",
          "source": "04-musk-loses-openai-court-battle-after-jury-finds-he.md",
          "link": "https://www.bbc.com/news/articles/cewpyv79pw1o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Elon Musk just lost another lawsuit. Will he keep fighting?",
          "summary": "馬斯克在與 OpenAI 的訴訟中再度敗訴，這是他近期連串法院失利之一，外界關注他是否會繼續上訴或再度提告。",
          "source": "05-elon-musk-just-lost-another-lawsuit-will-he-keep-f.md",
          "link": "https://www.bbc.com/news/articles/cqlpz4w6v13o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "College Essay Advisors Introduces a More Personalized AI Platform to Help Students Go from a Blank Page to a Standout Essay",
          "summary": "College Essay Advisors推出升級版AI平台College EssAI 2.0，主打更個人化的升學作文輔助，協助學生從空白頁寫出具特色的申請文章。",
          "source": "06-college-essay-advisors-introduces-a-more-personali.md",
          "link": "https://www.prnewswire.com/news-releases/college-essay-advisors-introduces-a-more-personalized-ai-platform-to-help-students-go-from-a-blank-page-to-a-standout-essay-302773771.html",
          "strength": 1,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "SmartBear expands ReadyAPI with AI-powered API testing capabilities",
          "summary": "SmartBear宣布為ReadyAPI加入AI測試生成能力，可將API測試效率提升最高80%，並保留啟用或停用AI的控制權，強調兼顧品質與規模化驗證。",
          "source": "07-smartbear-expands-readyapi-with-ai-powered-api-tes.md",
          "link": "https://www.helpnetsecurity.com/2026/05/18/smartbear-readyapi/",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Kazakhstan ready to share expertise in AI and digitalization, PM says",
          "summary": "哈薩克總理表示，哈薩克已準備好與他國分享人工智慧與數位化發展經驗，展現其在相關領域的合作意願。",
          "source": "08-kazakhstan-ready-to-share-expertise-in-ai-and-digi.md",
          "link": "https://www.trend.az/business/4187593.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Verizon 'first' telecom partner in Anthropic AI security venture",
          "summary": "Verizon成為Anthropic AI安全合作計畫的首家電信夥伴，顯示電信業者開始參與AI安全與企業應用布局。",
          "source": "09-verizon-first-telecom-partner-in-anthropic-ai-secu.md",
          "link": "https://www.sdxcentral.com/news/verizon-first-telecom-partner-in-anthropic-ai-security-venture/",
          "strength": 2,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Instant AI answers can trivialise human intelligence, warns Royal Observatory",
          "summary": "皇家天文台負責人警告，AI 即時答案可能讓人類智慧被輕視；他強調天文台悠久歷史顯示人類知識的重要，並提醒避免過度依賴 AI。",
          "source": "10-instant-ai-answers-can-trivialise-human-intelligen.md",
          "link": "https://www.bbc.com/news/articles/c2023l60370o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "NEE Stock Alert: Halper Sadeh LLC is Investigating Whether NextEra Energy, Inc. is Obtaining a Fair Price for its Shareholders",
          "summary": "Halper Sadeh LLC 正調查 NextEra Energy 是否在交易中為股東取得公平價格，屬於投資人權益相關警訊。",
          "source": "01-nee-stock-alert-halper-sadeh-llc-is-investigating-.md",
          "link": "https://www.financialcontent.com/article/bizwire-2026-5-18-nee-stock-alert-halper-sadeh-llc-is-investigating-whether-nextera-energy-inc-is-obtaining-a-fair-price-for-its-shareholders",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "North Dakota State Investment Board Takes $4.06 Million Position in Prologis, Inc. $PLD",
          "summary": "北達科他州州投資委員會於第四季新買入 Prologis 31,812 股，持股市值約 406 萬美元，顯示機構資金對該物流地產股的配置增加。",
          "source": "02-north-dakota-state-investment-board-takes-4-06-mil.md",
          "link": "https://www.watchlistnews.com/north-dakota-state-investment-board-takes-4-06-million-position-in-prologis-inc-pld/11086913.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "North Dakota State Investment Board Invests $9.10 Million in Merck & Co., Inc. $MRK",
          "summary": "北達科他州州投資委員會於第四季新買進默克公司86,432股，持股市值約910萬美元，反映機構資金對該股的配置動向。",
          "source": "03-north-dakota-state-investment-board-invests-9-10-m.md",
          "link": "https://www.tickerreport.com/banking-finance/13446167/north-dakota-state-investment-board-invests-9-10-million-in-merck-co-inc-mrk.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "EGH Acquisition Corp. (NASDAQ:EGHA) Short Interest Update",
          "summary": "EGH Acquisition Corp. 4月底空頭部位降至1,014股，較4月15日減少34%，約占流通股比例近乎為零。",
          "source": "04-egh-acquisition-corp-nasdaq-egha-short-interest-up.md",
          "link": "https://www.watchlistnews.com/egh-acquisition-corp-nasdaqegha-short-interest-update/11086911.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Short Interest in Innovative Eyewear, Inc. (NASDAQ:LUCY) Drops By 34.0%",
          "summary": "Innovative Eyewear（NASDAQ:LUCY）4月底空頭持股降至26,889股，較4月中減少34%，約占流通股0.4%。",
          "source": "05-short-interest-in-innovative-eyewear-inc-nasdaq-lu.md",
          "link": "https://www.watchlistnews.com/short-interest-in-innovative-eyewear-inc-nasdaqlucy-drops-by-34-0/11086912.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "SPDR Gold Shares $GLD Shares Purchased by Rossmore Private Capital",
          "summary": "Rossmore Private Capital 在第四季增持 SPDR Gold Shares（GLD）61.5%，持股增至 6,657 股，顯示其對黃金 ETF 的配置明顯提高。",
          "source": "06-spdr-gold-shares-gld-shares-purchased-by-rossmore-.md",
          "link": "https://www.thelincolnianonline.com/2026/05/18/spdr-gold-shares-gld-shares-purchased-by-rossmore-private-capital.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "North Dakota State Investment Board Acquires Shares of 45,884 RTX Corporation $RTX",
          "summary": "北達科他州州投資委員會於第四季新買進RTX公司45,884股，持股市值約841.5萬美元，顯示機構資金持續布局該股。",
          "source": "07-north-dakota-state-investment-board-acquires-share.md",
          "link": "https://www.tickerreport.com/banking-finance/13446164/north-dakota-state-investment-board-acquires-shares-of-45884-rtx-corporation-rtx.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Vanguard Extended Duration Treasury ETF (NYSEARCA:EDV) Short Interest Down 33.9% in April",
          "summary": "Vanguard Extended Duration Treasury ETF 4月底空頭部位降至61.5萬股，較4月中減少33.9%，約占流通股1%。",
          "source": "08-vanguard-extended-duration-treasury-etf-nysearca-e.md",
          "link": "https://www.thelincolnianonline.com/2026/05/18/vanguard-extended-duration-treasury-etf-nysearcaedv-short-interest-down-33-9-in-april.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "SS Innovations International, Inc. (NASDAQ:SSII) Short Interest Update",
          "summary": "SS Innovations International 4月底空頭持股降至49,199股，較4月15日減少34%，顯示市場做空壓力明顯下降。",
          "source": "09-ss-innovations-international-inc-nasdaq-ssii-short.md",
          "link": "https://baseballnewssource.com/2026/05/18/ss-innovations-international-inc-nasdaqssii-short-interest-update/11127053.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "First Trust Nasdaq Transportation ETF (NASDAQ:FTXR) Sees Significant Decrease in Short Interest",
          "summary": "First Trust Nasdaq Transportation ETF 4月底空頭部位降至39,155股，較4月中減少33.9%，約占流通股0.2%。",
          "source": "10-first-trust-nasdaq-transportation-etf-nasdaq-ftxr-.md",
          "link": "https://baseballnewssource.com/2026/05/18/first-trust-nasdaq-transportation-etf-nasdaqftxr-sees-significant-decrease-in-short-interest/11127050.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "The Latest: World shares and oil prices react to Trump's warning to Tehran over stalled negotiations",
          "summary": "美國總統川普警告德黑蘭談判時限逼近，市場隨即反應，全球股市多數回落，油價則明顯上漲。",
          "source": "01-the-latest-world-shares-and-oil-prices-react-to-tr.md",
          "link": "https://www.westplainsdailyquill.net/stories/the-latest-world-shares-and-oil-prices-react-to-trumps-warning-to-tehran-over-stalled,225379",
          "strength": 3,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "New High Street crime unit to target gangs fronting shops after BBC investigation",
          "summary": "BBC調查揭露多家店面疑涉毒品、洗錢、移民犯罪與幽靈董事，促使當局成立新的高街犯罪單位，鎖定以商店作掩護的幫派。",
          "source": "02-new-high-street-crime-unit-to-target-gangs-frontin.md",
          "link": "https://www.bbc.com/news/articles/ce3pzwx449no?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Farage facing new questions over home purchase funding",
          "summary": "Reform UK表示，黨魁奈傑爾·法拉奇於2024年4月自加密貨幣富豪Christopher Harborne收到的500萬英鎊，是一筆贈與，引發外界對其購屋資金來源的新質疑。",
          "source": "03-farage-facing-new-questions-over-home-purchase-fun.md",
          "link": "https://www.bbc.com/news/articles/c936nqy00rwo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Burnham pledges not to 're-run' Brexit arguments",
          "summary": "潛在領導挑戰者伯納姆表示，自己並未主張英國重新加入歐盟，也不打算重提脫歐爭論。",
          "source": "04-burnham-pledges-not-to-re-run-brexit-arguments.md",
          "link": "https://www.bbc.com/news/articles/cx21en4807wo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Parents could face bigger fines for child's crimes under youth justice shake-up",
          "summary": "英國擬改革青少年司法制度，若父母未及時介入矯正子女行為，最嚴重情況下可能面臨更高罰款，甚至入獄。",
          "source": "05-parents-could-face-bigger-fines-for-child-s-crimes.md",
          "link": "https://www.bbc.com/news/articles/cx21p5qp23xo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "UK growth forecast upgraded by IMF but risks remain",
          "summary": "IMF將英國2026年經濟成長預測由0.8%上調至1%，但同時指出相關風險仍然存在。",
          "source": "06-uk-growth-forecast-upgraded-by-imf-but-risks-remai.md",
          "link": "https://www.bbc.com/news/articles/cm2p72mmddyo?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "politics"
        },
        {
          "title": "Should the government tax ‘wealth instead of work’? Readers discuss",
          "summary": "讀者討論英國政府是否應改以課徵財富而非勞動所得，並延伸談論特拉斯迷你預算、經濟成長及與歐盟的貿易逆差。",
          "source": "07-should-the-government-tax-wealth-instead-of-work-r.md",
          "link": "https://metro.co.uk/2026/05/18/unhappy-fiscal-legacy-leaves-labour-just-three-options-economy-good-deed-summer-28383532/",
          "strength": 2,
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
      "portfolioValue": 109031.60559689165
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
    }
  ]
};
