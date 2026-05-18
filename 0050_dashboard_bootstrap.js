window.ETFDashboardBootstrap = {
  "date": "2026-05-18",
  "generated_at": "2026-05-18T14:18:24.187Z",
  "sourceDates": {
    "newsDate": "2026-05-18",
    "tradeDate": "2026-05-18",
    "strategyDate": "2026-05-18",
    "shortTermDate": "2026-05-18"
  },
  "dataManifest": {
    "latest_date": "2026-05-18",
    "latest_updated_at": "2026-05-18T14:18:24.086Z",
    "signature": "1779113904086.8562",
    "source_dates": {
      "newsDate": "2026-05-18",
      "tradeDate": "2026-05-18",
      "strategyDate": "2026-05-18",
      "shortTermDate": "2026-05-18"
    },
    "generated_at": "2026-05-18T14:18:24.187Z"
  },
  "state": {
    "date": "2026-05-18",
    "daily_capital": 100000,
    "starting_weight": 0,
    "starting_notional": 0,
    "starting_shares": 0,
    "starting_avg_cost": 0,
    "current_weight": 0.424203,
    "current_notional": 42420.3,
    "shares_held": 447,
    "avg_cost": 94.900002,
    "cost_basis_total": 42420.3,
    "market_value": 42420.3,
    "used_capital": 42420.3,
    "remaining_capital": 56735.25,
    "cash_balance_before": 99155.55,
    "cash_balance_after": 56735.25,
    "equity": 99155.55,
    "realized_pnl_cum": -251.15,
    "unrealized_pnl": 0,
    "last_trade_price": 94.900002,
    "last_mark_price": 94.900002,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-18 09:30:08",
        "target_weight": 0,
        "current_weight_before": 0.414918,
        "delta_weight": -0.414918,
        "delta_notional": 41491.8,
        "quote_fresh": true,
        "cash_before": 57663.75,
        "cash_after": 99155.55,
        "equity_after": 99155.55,
        "shares_before": 444,
        "shares_after": 0,
        "fill_shares": -444,
        "avg_cost_after": 0,
        "realized_pnl_cum": -251.15,
        "unrealized_pnl": 0,
        "cumulative_pnl": -251.15
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-18 13:20:13",
        "target_weight": 0.424203,
        "current_weight_before": 0,
        "delta_weight": 0.424203,
        "delta_notional": 42420.3,
        "quote_fresh": true,
        "cash_before": 99155.55,
        "cash_after": 56735.25,
        "equity_after": 99155.55,
        "shares_before": 0,
        "shares_after": 447,
        "fill_shares": 447,
        "avg_cost_after": 94.900002,
        "realized_pnl_cum": -251.15,
        "unrealized_pnl": 0,
        "cumulative_pnl": -251.15
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-15\\trade_state.json",
    "order_notional": 42420.3,
    "order_weight": 0.424203,
    "cumulative_pnl": -251.15
  },
  "strategy": {
    "decision": "",
    "strategy": "",
    "instrument": "",
    "window": "",
    "confidence": "",
    "execution_points": [
      "1. **不做滿倉進場**",
      "2. **若 9:00 開盤出現跳空下跌，先用小部位試單**",
      "3. **T+1 ~ T+5 只做兩種情境**"
    ],
    "data_needs": [
      "台指期夜盤 / 早盤報價",
      "台積電現貨與 ADR 價差",
      "開盤前三大法人籌碼",
      "台指期未平倉與外資淨多空",
      "0050 盤前委買委賣與前 15 分鐘量價",
      "台積電、聯發科、鴻海、台達電的短線 5 分鐘 K 線與量能"
    ],
    "risk_points": [
      "目前最大風險是：**美股回檔 + ADR 下跌 + VIX 上升** 造成台股開盤補跌。",
      "原油強、美元強、債券弱，代表市場定價偏向 **高利率更久 + 通膨黏性**，對高估值科技股不友善。",
      "若你今天只能做一次部署，**不要在 9:00 前重押追多**；最合理是 **小部位試單、等開盤確認後再決定是否加碼**。"
    ],
    "raw_text": "9點前決策\n- **決策：降槓桿小部位試單**\n- **策略：偏防守、等開盤確認再加碼，不追多也不直接重押避險**\n- **操作標的：0050 / 台積電權值鏈為主，搭配現金保留**\n- **觀察窗：T+1 ~ T+5**\n- **信心：中等偏低**\n\n執行重點\n1. **不做滿倉進場**\n- 目前宏觀是 **Risk-on 但高波動震盪**，不是單邊趨勢。\n- 美元走強、VIX 上升、QQQ/SPY 回檔、TSM ADR -3.2%，代表台股開盤偏弱機率高。\n- 0050 breadth 也偏弱：**bullish 11 / bearish 16**，且 **near low 14**，不適合開盤追價。\n\n2. **若 9:00 開盤出現跳空下跌，先用小部位試單**\n- 以 **0050 或台積電相關權值股籃子** 做分批，不建議單押高波動中小型題材股。\n- 進場邏輯：\n- 若開盤跌幅不深、且 5 分鐘內不再破低，可先試 20%~30% 部位。\n- 若開盤直接大跌且量增、台積電/0050 無止穩跡象，先觀察，不急著接刀。\n- 核心是：**等台股自己確認是否消化 ADR 與美股回檔壓力**。\n\n3. **T+1 ~ T+5 只做兩種情境**\n- **情境 A：台積電與 0050 開低走穩**\n- 可逐步加碼到正常部位。\n- 代表市場把美股回檔視為短線整理，而非風險轉折。\n- **情境 B：開低後持續破底**\n- 轉為防守，降低持股，保留現金。\n- 若台積電、聯發科、台達電等權值同步弱，代表台股風險偏向擴散，不宜硬接。\n\n補充資料需求\n- **台指期夜盤 / 早盤報價**\n- **台積電現貨與 ADR 價差**\n- **開盤前三大法人籌碼**\n- **台指期未平倉與外資淨多空**\n- **0050 盤前委買委賣與前 15 分鐘量價**\n- **台積電、聯發科、鴻海、台達電的短線 5 分鐘 K 線與量能**\n\n風險提醒\n- 目前最大風險是：**美股回檔 + ADR 下跌 + VIX 上升** 造成台股開盤補跌。\n- 原油強、美元強、債券弱，代表市場定價偏向 **高利率更久 + 通膨黏性**，對高估值科技股不友善。\n- 若你今天只能做一次部署，**不要在 9:00 前重押追多**；最合理是 **小部位試單、等開盤確認後再決定是否加碼**。"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔再分批；權值股以台積電、聯電、鴻海為主，避開近期弱勢高權重如聯發科、台達電；若要操作避險，短線以現金比重提高、降低電子槓桿曝險為主",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電(2330.TW)",
      "聯發科(2454.TW) / 台達電(2308.TW)",
      "聯電(2303.TW) / 鴻海(2317.TW)"
    ],
    "risk_points": [
      "若台積電續弱、聯發科與台達電無法止跌，0050 會進入權值拖累型回檔。",
      "若美元續強、VIX 再升、QQQ 續跌，台股電子權值容易被動修正，短線偏多判斷會失效。",
      "若原油續漲但美股科技再度下殺，市場會從 risk-on 轉成高波動防守，0050 不宜追高。",
      "只有在台積電止穩、聯電/鴻海延續量價、且聯發科或台達電止跌時，才算技術面與宏觀開始共振。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔再分批；權值股以台積電、聯電、鴻海為主，避開近期弱勢高權重如聯發科、台達電；若要操作避險，短線以現金比重提高、降低電子槓桿曝險為主**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 信心：**中**\n\n權值股焦點\n1. **台積電(2330.TW)**\n0050 權重最高，且 5D 仍是 **-1.09%**，屬於「核心未壞但短線偏震盪」。它決定 0050 的方向，但目前更像是高位整理，不適合追價。\n\n2. **聯發科(2454.TW) / 台達電(2308.TW)**\n兩檔都是高權重，但 5D 分別 **-10.19% / -5.68%**，代表權值內部並非全面轉強。這是目前 0050 不能直接偏多追價的關鍵，顯示技術面還沒和宏觀 AI 多頭完全共振。\n\n3. **聯電(2303.TW) / 鴻海(2317.TW)**\n聯電 5D **+20.48%**、鴻海量能放大，屬於短線資金有進駐的權值支撐。若 0050 要止穩，這類次核心權值要能接棒，但目前仍不足以單獨帶動全面攻勢。\n\n風險提醒\n- **若台積電續弱、聯發科與台達電無法止跌，0050 會進入權值拖累型回檔。**\n- **若美元續強、VIX 再升、QQQ 續跌，台股電子權值容易被動修正，短線偏多判斷會失效。**\n- **若原油續漲但美股科技再度下殺，市場會從 risk-on 轉成高波動防守，0050 不宜追高。**\n- **只有在台積電止穩、聯電/鴻海延續量價、且聯發科或台達電止跌時，才算技術面與宏觀開始共振。**"
  },
  "morning": {
    "generated_at": "2026-05-18 09:30:08",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-18\\trade_state.json",
    "trade_state": {
      "date": "2026-05-18",
      "daily_capital": 100000,
      "starting_weight": 0.414918,
      "starting_notional": 41491.8,
      "starting_shares": 444,
      "starting_avg_cost": 95.459342,
      "current_weight": 0,
      "current_notional": 0,
      "shares_held": 0,
      "avg_cost": 0,
      "cost_basis_total": 0,
      "market_value": 0,
      "used_capital": 0,
      "remaining_capital": 99155.55,
      "cash_balance_before": 57663.75,
      "cash_balance_after": 99155.55,
      "equity": 99155.55,
      "realized_pnl_cum": -251.15,
      "unrealized_pnl": 0,
      "last_trade_price": 93.449997,
      "last_mark_price": 93.449997,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-18 09:30:08",
          "target_weight": 0,
          "current_weight_before": 0.414918,
          "delta_weight": -0.414918,
          "delta_notional": 41491.8,
          "quote_fresh": true,
          "cash_before": 57663.75,
          "cash_after": 99155.55,
          "equity_after": 99155.55,
          "shares_before": 444,
          "shares_after": 0,
          "fill_shares": -444,
          "avg_cost_after": 0,
          "realized_pnl_cum": -251.15,
          "unrealized_pnl": 0,
          "cumulative_pnl": -251.15
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-15\\trade_state.json",
      "order_notional": 41491.8,
      "order_weight": -0.414918,
      "cumulative_pnl": -251.15
    },
    "base_decision": {
      "date": "2026-05-18",
      "final_positions": {
        "0050.TW": 0.425,
        "CASH": 0.575,
        "TLT": 0,
        "USO": 0
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
        "current_month_return": 0.0466,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-18",
      "final_positions": {
        "0050.TW": 0,
        "CASH": 1,
        "TLT": 0,
        "USO": 0
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
        "current_month_return": 0.0466,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": -2.044,
        "focus_positive_count": 0,
        "focus_positive": [],
        "action": "CANCEL",
        "reason": "MORNING_CORE_BREAKDOWN",
        "target_exposure": 0
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 93.44999694824219,
          "prev_close": 95.4000015258789,
          "change_pct": -2.044,
          "as_of": "2026-05-18T01:10:00"
        },
        "2308.TW": {
          "last_price": 1995,
          "prev_close": 2075,
          "change_pct": -3.8554,
          "as_of": "2026-05-18T01:10:00"
        },
        "2317.TW": {
          "last_price": 243.5,
          "prev_close": 248.5,
          "change_pct": -2.0121,
          "as_of": "2026-05-18T01:10:00"
        },
        "2330.TW": {
          "last_price": 2215,
          "prev_close": 2265,
          "change_pct": -2.2075,
          "as_of": "2026-05-18T01:10:00"
        },
        "2345.TW": {
          "last_price": 2485,
          "prev_close": 2505,
          "change_pct": -0.7984,
          "as_of": "2026-05-18T01:10:00"
        },
        "2382.TW": {
          "last_price": 299,
          "prev_close": 306,
          "change_pct": -2.2876,
          "as_of": "2026-05-18T01:10:00"
        },
        "USO": {
          "last_price": 148.1999969482422,
          "prev_close": 143,
          "change_pct": 3.6364,
          "as_of": "2026-05-15T19:59:00"
        },
        "GLD": {
          "last_price": 417.30999755859375,
          "prev_close": 427.2099914550781,
          "change_pct": -2.3174,
          "as_of": "2026-05-15T19:59:00"
        },
        "TLT": {
          "last_price": 83.69000244140625,
          "prev_close": 84.91999816894531,
          "change_pct": -1.4484,
          "as_of": "2026-05-15T19:59:00"
        },
        "QQQ": {
          "last_price": 708.8800048828125,
          "prev_close": 719.7899780273438,
          "change_pct": -1.5157,
          "as_of": "2026-05-15T19:59:00"
        },
        "SPY": {
          "last_price": 739.0800170898438,
          "prev_close": 748.1699829101562,
          "change_pct": -1.215,
          "as_of": "2026-05-15T19:59:00"
        },
        "UUP": {
          "last_price": 27.770000457763672,
          "prev_close": 27.6200008392334,
          "change_pct": 0.5431,
          "as_of": "2026-05-15T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 93.44999694824219,
        "prev_close": 95.4000015258789,
        "change_pct": -2.044,
        "as_of": "2026-05-18T01:10:00"
      },
      "2308.TW": {
        "last_price": 1995,
        "prev_close": 2075,
        "change_pct": -3.8554,
        "as_of": "2026-05-18T01:10:00"
      },
      "2317.TW": {
        "last_price": 243.5,
        "prev_close": 248.5,
        "change_pct": -2.0121,
        "as_of": "2026-05-18T01:10:00"
      },
      "2330.TW": {
        "last_price": 2215,
        "prev_close": 2265,
        "change_pct": -2.2075,
        "as_of": "2026-05-18T01:10:00"
      },
      "2345.TW": {
        "last_price": 2485,
        "prev_close": 2505,
        "change_pct": -0.7984,
        "as_of": "2026-05-18T01:10:00"
      },
      "2382.TW": {
        "last_price": 299,
        "prev_close": 306,
        "change_pct": -2.2876,
        "as_of": "2026-05-18T01:10:00"
      },
      "USO": {
        "last_price": 148.1999969482422,
        "prev_close": 143,
        "change_pct": 3.6364,
        "as_of": "2026-05-15T19:59:00"
      },
      "GLD": {
        "last_price": 417.30999755859375,
        "prev_close": 427.2099914550781,
        "change_pct": -2.3174,
        "as_of": "2026-05-15T19:59:00"
      },
      "TLT": {
        "last_price": 83.69000244140625,
        "prev_close": 84.91999816894531,
        "change_pct": -1.4484,
        "as_of": "2026-05-15T19:59:00"
      },
      "QQQ": {
        "last_price": 708.8800048828125,
        "prev_close": 719.7899780273438,
        "change_pct": -1.5157,
        "as_of": "2026-05-15T19:59:00"
      },
      "SPY": {
        "last_price": 739.0800170898438,
        "prev_close": 748.1699829101562,
        "change_pct": -1.215,
        "as_of": "2026-05-15T19:59:00"
      },
      "UUP": {
        "last_price": 27.770000457763672,
        "prev_close": 27.6200008392334,
        "change_pct": 0.5431,
        "as_of": "2026-05-15T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 93.45,
        "shares": 444,
        "notional": 41491.8,
        "weight": -0.414918,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -251.15,
    "equity": 99155.55,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：NO_TRADE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.415\n起始股數：444\n今日已用：0\n今日剩餘：99,156\n下單金額：41,492\n現金前後：57,664 -> 99,156\n總資產：99,156\n持有股數：0\n持有均價：0.00\n已實現損益：-251\n未實現損益：0\n目前累積損益：-251\n0050部位：0.000\n現金：1.000\n0050即時：-2.04% @ 2026-05-18T01:10:00\n承接來源：cache\\trade_execution\\2026-05-15\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 93 × 444 股（約 41,492）\n參考資產：USO:+3.64% / GLD:-2.32% / TLT:-1.45% / QQQ:-1.52%\n目標曝險：0.000\nquote判斷：CANCEL | MORNING_CORE_BREAKDOWN",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-18 13:20:13",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-18\\trade_state.json",
    "trade_state": {
      "date": "2026-05-18",
      "daily_capital": 100000,
      "starting_weight": 0,
      "starting_notional": 0,
      "starting_shares": 0,
      "starting_avg_cost": 0,
      "current_weight": 0.424203,
      "current_notional": 42420.3,
      "shares_held": 447,
      "avg_cost": 94.900002,
      "cost_basis_total": 42420.3,
      "market_value": 42420.3,
      "used_capital": 42420.3,
      "remaining_capital": 56735.25,
      "cash_balance_before": 99155.55,
      "cash_balance_after": 56735.25,
      "equity": 99155.55,
      "realized_pnl_cum": -251.15,
      "unrealized_pnl": 0,
      "last_trade_price": 94.900002,
      "last_mark_price": 94.900002,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-18 09:30:08",
          "target_weight": 0,
          "current_weight_before": 0.414918,
          "delta_weight": -0.414918,
          "delta_notional": 41491.8,
          "quote_fresh": true,
          "cash_before": 57663.75,
          "cash_after": 99155.55,
          "equity_after": 99155.55,
          "shares_before": 444,
          "shares_after": 0,
          "fill_shares": -444,
          "avg_cost_after": 0,
          "realized_pnl_cum": -251.15,
          "unrealized_pnl": 0,
          "cumulative_pnl": -251.15
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-18 13:20:13",
          "target_weight": 0.424203,
          "current_weight_before": 0,
          "delta_weight": 0.424203,
          "delta_notional": 42420.3,
          "quote_fresh": true,
          "cash_before": 99155.55,
          "cash_after": 56735.25,
          "equity_after": 99155.55,
          "shares_before": 0,
          "shares_after": 447,
          "fill_shares": 447,
          "avg_cost_after": 94.900002,
          "realized_pnl_cum": -251.15,
          "unrealized_pnl": 0,
          "cumulative_pnl": -251.15
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-15\\trade_state.json",
      "order_notional": 42420.3,
      "order_weight": 0.424203,
      "cumulative_pnl": -251.15
    },
    "base_decision": {
      "date": "2026-05-18",
      "final_positions": {
        "0050.TW": 0.425,
        "CASH": 0.575,
        "TLT": 0,
        "USO": 0
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
        "current_month_return": 0.0466,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      }
    },
    "final_decision": {
      "date": "2026-05-18",
      "final_positions": {
        "0050.TW": 0.424203,
        "CASH": 0.575797,
        "TLT": 0,
        "USO": 0
      },
      "exposure": 0.424203,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.425,
        "short": 0
      },
      "leverage_ratio": 0.424203,
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
        "current_month_return": 0.0466,
        "current_month_drawdown": -0.0096,
        "monthly_mode": "WATCH"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": -0.5241,
        "focus_positive_count": 0,
        "focus_positive": [],
        "action": "EXECUTE",
        "reason": "MIDDAY_CONFIRM_OK",
        "target_exposure": 0.35
      },
      "quote_snapshot": {
        "0050.TW": {
          "last_price": 94.9000015258789,
          "prev_close": 95.4000015258789,
          "change_pct": -0.5241,
          "as_of": "2026-05-18T05:00:00"
        },
        "2308.TW": {
          "last_price": 2025,
          "prev_close": 2075,
          "change_pct": -2.4096,
          "as_of": "2026-05-18T04:59:00"
        },
        "2317.TW": {
          "last_price": 248,
          "prev_close": 248.5,
          "change_pct": -0.2012,
          "as_of": "2026-05-18T05:00:00"
        },
        "2330.TW": {
          "last_price": 2245,
          "prev_close": 2265,
          "change_pct": -0.883,
          "as_of": "2026-05-18T05:00:00"
        },
        "2345.TW": {
          "last_price": 2500,
          "prev_close": 2505,
          "change_pct": -0.1996,
          "as_of": "2026-05-18T04:59:00"
        },
        "2382.TW": {
          "last_price": 300.5,
          "prev_close": 306,
          "change_pct": -1.7974,
          "as_of": "2026-05-18T05:00:00"
        },
        "USO": {
          "last_price": 148.1999969482422,
          "prev_close": 143,
          "change_pct": 3.6364,
          "as_of": "2026-05-15T19:59:00"
        },
        "GLD": {
          "last_price": 417.30999755859375,
          "prev_close": 427.2099914550781,
          "change_pct": -2.3174,
          "as_of": "2026-05-15T19:59:00"
        },
        "TLT": {
          "last_price": 83.69000244140625,
          "prev_close": 84.91999816894531,
          "change_pct": -1.4484,
          "as_of": "2026-05-15T19:59:00"
        },
        "QQQ": {
          "last_price": 708.8800048828125,
          "prev_close": 719.7899780273438,
          "change_pct": -1.5157,
          "as_of": "2026-05-15T19:59:00"
        },
        "SPY": {
          "last_price": 739.0800170898438,
          "prev_close": 748.1699829101562,
          "change_pct": -1.215,
          "as_of": "2026-05-15T19:59:00"
        },
        "UUP": {
          "last_price": 27.770000457763672,
          "prev_close": 27.6200008392334,
          "change_pct": 0.5431,
          "as_of": "2026-05-15T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 94.9000015258789,
        "prev_close": 95.4000015258789,
        "change_pct": -0.5241,
        "as_of": "2026-05-18T05:00:00"
      },
      "2308.TW": {
        "last_price": 2025,
        "prev_close": 2075,
        "change_pct": -2.4096,
        "as_of": "2026-05-18T04:59:00"
      },
      "2317.TW": {
        "last_price": 248,
        "prev_close": 248.5,
        "change_pct": -0.2012,
        "as_of": "2026-05-18T05:00:00"
      },
      "2330.TW": {
        "last_price": 2245,
        "prev_close": 2265,
        "change_pct": -0.883,
        "as_of": "2026-05-18T05:00:00"
      },
      "2345.TW": {
        "last_price": 2500,
        "prev_close": 2505,
        "change_pct": -0.1996,
        "as_of": "2026-05-18T04:59:00"
      },
      "2382.TW": {
        "last_price": 300.5,
        "prev_close": 306,
        "change_pct": -1.7974,
        "as_of": "2026-05-18T05:00:00"
      },
      "USO": {
        "last_price": 148.1999969482422,
        "prev_close": 143,
        "change_pct": 3.6364,
        "as_of": "2026-05-15T19:59:00"
      },
      "GLD": {
        "last_price": 417.30999755859375,
        "prev_close": 427.2099914550781,
        "change_pct": -2.3174,
        "as_of": "2026-05-15T19:59:00"
      },
      "TLT": {
        "last_price": 83.69000244140625,
        "prev_close": 84.91999816894531,
        "change_pct": -1.4484,
        "as_of": "2026-05-15T19:59:00"
      },
      "QQQ": {
        "last_price": 708.8800048828125,
        "prev_close": 719.7899780273438,
        "change_pct": -1.5157,
        "as_of": "2026-05-15T19:59:00"
      },
      "SPY": {
        "last_price": 739.0800170898438,
        "prev_close": 748.1699829101562,
        "change_pct": -1.215,
        "as_of": "2026-05-15T19:59:00"
      },
      "UUP": {
        "last_price": 27.770000457763672,
        "prev_close": 27.6200008392334,
        "change_pct": 0.5431,
        "as_of": "2026-05-15T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 94.9,
        "shares": 447,
        "notional": 42420.3,
        "weight": 0.424203,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": -251.15,
    "equity": 99155.55,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.000\n起始股數：0\n今日已用：42,420\n今日剩餘：56,735\n下單金額：42,420\n現金前後：99,156 -> 56,735\n總資產：99,156\n持有股數：447\n持有均價：94.90\n已實現損益：-251\n未實現損益：0\n目前累積損益：-251\n0050部位：0.424\n現金：0.576\n0050即時：-0.52% @ 2026-05-18T05:00:00\n承接來源：cache\\trade_execution\\2026-05-15\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 95 × 447 股（約 42,420）\n參考資產：USO:+3.64% / GLD:-2.32% / TLT:-1.45% / QQQ:-1.52%\n目標曝險：0.424\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-18",
    "generated_at": "2026-05-18T14:18:24.190Z",
    "categories": {
      "technology": [
        {
          "title": "Why does Amazon have no Western rivals?",
          "summary": "文章指出，亞馬遜在美歐電商市場規模遠超其他線上零售商，幾乎沒有西方同業能與之抗衡。",
          "source": "01-why-does-amazon-have-no-western-rivals.md",
          "link": "https://www.bbc.com/news/articles/cg7p5nr307mo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "I'm an exorcist... Here's the chilling encounter that made me believe UFOs are the work of Satan",
          "summary": "一名天主教神父兼驅魔師稱，親身遭遇惡魔後，因一次詭異經歷而相信 UFO 可能是魔鬼作祟。",
          "source": "02-i-m-an-exorcist-here-s-the-chilling-encounter-that.md",
          "link": "https://www.dailymail.com/sciencetech/article-15820559/exorcist-carlos-martins-ontario-ufos-satan.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Scientists are baffled by mysterious blue flashes coming from deep space that are 'unlike anything we have observed before'",
          "summary": "科學家近十年來持續觀測到來自深空的神祕藍色閃光，來源與成因仍不明，且其特徵被認為前所未見。",
          "source": "03-scientists-are-baffled-by-mysterious-blue-flashes-.md",
          "link": "https://www.dailymail.com/sciencetech/article-15811619/Scientists-baffled-mysterious-blue-flashes.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Three near-death experiences that convinced doctors the soul may exist",
          "summary": "文中提到三起著名瀕死經驗，讓醫師與科學家開始質疑人類靈魂是否可能獨立於身體存在。",
          "source": "04-three-near-death-experiences-that-convinced-doctor.md",
          "link": "https://www.dailymail.com/sciencetech/article-15794823/near-death-experience-doctors-soul-existence.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "「這檔」記憶體大廠今年暴漲494% 董事開始悄悄賣股了",
          "summary": "受AI需求帶動，記憶體大廠晟碟今年股價暴漲494%，但公司董事已開始在高檔悄悄賣股，顯示內部人士趁漲勢獲利了結。",
          "source": "05-494.md",
          "link": "https://ec.ltn.com.tw/article/breakingnews/5440293",
          "strength": 3,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Google's underrated AI app unlocked 3 amazing on-device AI tools on my Android phone - Android Authority",
          "summary": "文章指出 Google 一款較少被注意的 AI 應用，讓作者在 Android 手機上啟用三項令人驚豔的裝置端 AI 工具，強調其實用性與本機運算優勢。",
          "source": "06-google-s-underrated-ai-app-unlocked-3-amazing-on-d.md",
          "link": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOb3drSWZ6RmtRN2kyTFRGaTJid05VaDEtSm9ubGpQYkl5NkNOWW1tSDJ6bnltTk5zR0lLUWhfaE83YWZkdkVrSVExWVozbzM0QlZHZC00VkJhVDZQVXJEZzFvc1NIckNOVjJ3OHJLMU1Sb1JPSkxRWUt6OVh2QWtrZUpac0tSUWtUZUpMTG9mSEg3c0Jpc0Jza1NfTGM?oc=5",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "China ramps up building a national computing power network as AI token demand surges",
          "summary": "中國加速建設全國算力網，欲將AI基礎設施公共化，以因應token需求暴增，並為電信業者尋找行動數據與話費之外的新成長動能。",
          "source": "07-china-ramps-up-building-a-national-computing-power.md",
          "link": "https://www.scmp.com/tech/big-tech/article/3353891/china-ramps-building-national-computing-power-network-ai-token-demand-surges",
          "strength": 3,
          "sentiment": "risk_on",
          "category": "technology"
        },
        {
          "title": "Houseplants are the NASA-approved hack for keeping your home cool naturally this summer - here are the best ones to shop before temperatures rise",
          "summary": "報導指出，添購室內植物可能有助於在夏季自然降溫，減少對風扇或冷氣的依賴，並推薦在氣溫升高前先選購適合的品種。",
          "source": "08-houseplants-are-the-nasa-approved-hack-for-keeping.md",
          "link": "https://www.dailymail.com/sciencetech/article-15779291/Houseplants-NASA-hack-keeping-home-cool.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "You're making your sandwiches WRONG! Expert reveals the best way to cut the bread - and why you should never leave a 'hinge'",
          "summary": "專家指出，三明治若常在午餐時散開，可能是切麵包方式不對；並提醒不要保留「鉸鏈」式切法。",
          "source": "09-you-re-making-your-sandwiches-wrong-expert-reveals.md",
          "link": "https://www.dailymail.com/sciencetech/article-15811387/making-sandwiches-WRONG-best-bread-hinge.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "😱 அவரசபட்டுட்டியே  Kumaru.. 🤣 AI Camera Attrocities 🔥 #shorts",
          "summary": "班加羅爾一名工程師利用家中監視器與 AI，意外發現廚師在屋內的偷竊行為，從偷水果等細節揭露異常活動。",
          "source": "10-kumaru-ai-camera-attrocities-shorts.md",
          "link": "https://www.youtube.com/watch?v=XPOSbEoXRmc",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "iA Global Asset Management Inc. Increases Stock Position in Lam Research Corporation $LRCX",
          "summary": "iA Global Asset Management Inc. 第四季增持 Lam Research 13.4%，持股增至 222,560 股，顯示機構投資人對該半導體公司持續看好。",
          "source": "01-ia-global-asset-management-inc-increases-stock-pos.md",
          "link": "https://www.dailypolitical.com/2026/05/17/ia-global-asset-management-inc-increases-stock-position-in-lam-research-corporation-lrcx.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Evergreen Wealth Partners LLC Purchases New Shares in JPMorgan Ultra-Short Income ETF $JPST",
          "summary": "Evergreen Wealth Partners LLC於第四季新買進JPMorgan Ultra-Short Income ETF（JPST）48,923股，持股市值約247.5萬美元，並已向美國證交會申報。",
          "source": "02-evergreen-wealth-partners-llc-purchases-new-shares.md",
          "link": "https://www.watchlistnews.com/evergreen-wealth-partners-llc-purchases-new-shares-in-jpmorgan-ultra-short-income-etf-jpst/11086075.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Guardian Capital LLC Invests $1.81 Million in Mastercard Incorporated $MA",
          "summary": "Guardian Capital LLC於第四季新買入Mastercard 3,171股，市值約181萬美元，約占其投資組合1.6%，為第24大持股。",
          "source": "03-guardian-capital-llc-invests-1-81-million-in-maste.md",
          "link": "https://www.dailypolitical.com/2026/05/17/guardian-capital-llc-invests-1-81-million-in-mastercard-incorporated-ma.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "He built it -- they kept it running",
          "summary": "報導一名機車愛好者 Tony Reise 的故事，他對機油外漏與機車維修有獨特執著，並持續維護相關機車文化。",
          "source": "04-he-built-it-they-kept-it-running.md",
          "link": "https://www.eastbayri.com/////////////stories/he-built-it-they-kept-it-running,139945",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "iA Global Asset Management Inc. Increases Stock Position in Taiwan Semiconductor Manufacturing Company Ltd. $TSM",
          "summary": "iA Global Asset Management Inc.於第四季增持台積電22.5%，持股增至227,501股，顯示機構投資人對該半導體公司持續看好。",
          "source": "05-ia-global-asset-management-inc-increases-stock-pos.md",
          "link": "https://www.thelincolnianonline.com/2026/05/17/ia-global-asset-management-inc-increases-stock-position-in-taiwan-semiconductor-manufacturing-company-ltd-tsm.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "iA Global Asset Management Inc. Decreases Stock Holdings in Costco Wholesale Corporation $COST",
          "summary": "iA Global Asset Management Inc. 在第四季減持 Costco 股票 18.6%，賣出 12,684 股後持有 55,529 股。",
          "source": "06-ia-global-asset-management-inc-decreases-stock-hol.md",
          "link": "https://www.thelincolnianonline.com/2026/05/17/ia-global-asset-management-inc-decreases-stock-holdings-in-costco-wholesale-corporation-cost.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Guardian Capital LLC Buys New Stake in Costco Wholesale Corporation $COST",
          "summary": "Guardian Capital LLC於第四季新買進Costco Wholesale 2,944股，持股市值約253.9萬美元，約占其投資組合2.3%。",
          "source": "07-guardian-capital-llc-buys-new-stake-in-costco-whol.md",
          "link": "https://www.thelincolnianonline.com/2026/05/17/guardian-capital-llc-buys-new-stake-in-costco-wholesale-corporation-cost.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Evergreen Wealth Partners LLC Purchases Shares of 2,076 Costco Wholesale Corporation $COST",
          "summary": "Evergreen Wealth Partners LLC於第四季新買入Costco Wholesale 2,076股，市值約179萬美元，約占其投資組合1.5%。",
          "source": "08-evergreen-wealth-partners-llc-purchases-shares-of-.md",
          "link": "https://www.thelincolnianonline.com/2026/05/17/evergreen-wealth-partners-llc-purchases-shares-of-2076-costco-wholesale-corporation-cost.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Stephens Inc. AR Has $13.91 Million Stake in Costco Wholesale Corporation $COST",
          "summary": "Stephens Inc. AR於第四季將好市多持股增加6.8%，增持1,012股後共持有15,933股，市值約1,391.1萬美元。",
          "source": "09-stephens-inc-ar-has-13-91-million-stake-in-costco-.md",
          "link": "https://baseballnewssource.com/2026/05/17/stephens-inc-ar-has-13-91-million-stake-in-costco-wholesale-corporation-cost/11126218.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Guardian Capital LLC Takes Position in Howmet Aerospace Inc. $HWM",
          "summary": "Guardian Capital LLC於第四季新買進Howmet Aerospace 2,369股，市值約48.6萬美元；多家對沖基金同期也調整持股。",
          "source": "10-guardian-capital-llc-takes-position-in-howmet-aero.md",
          "link": "https://www.dailypolitical.com/2026/05/17/guardian-capital-llc-takes-position-in-howmet-aerospace-inc-hwm.html",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "HS2 failings blamed on high-speed focus and political pressure",
          "summary": "新檢討指出，HS2 問題源於過度追求高速、技術設計缺陷、政治優先順序變動與成本暴增，導致計畫長期受挫。",
          "source": "01-hs2-failings-blamed-on-high-speed-focus-and-politi.md",
          "link": "https://www.bbc.com/news/articles/c936xeeye41o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "London mayor warning over northern Olympic bid",
          "summary": "英國政府委託 UK Sport 進行初步戰略評估，研議由英格蘭北部申辦 2040 年代奧運與帕運的可能性。",
          "source": "02-london-mayor-warning-over-northern-olympic-bid.md",
          "link": "https://www.bbc.com/sport/olympics/articles/clypl9pzy6jo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "'I saw things I can never unsee': Man who sneaked into the Air India crash morgue reveals what he saw... and why it could blow apart the pilot suicide theory. Read DAVID JONES' report... and what happened when he visited lone survivor",
          "summary": "報導稱，一名闖入空難停屍間的人目睹多具遺體與現場細節，質疑外界對機師自殺說的推論；另提到空難唯一生還者的後續情況。",
          "source": "03-i-saw-things-i-can-never-unsee-man-who-sneaked-int.md",
          "link": "https://www.dailymail.com/news/air-india/article-15823763/I-saw-things-never-unsee-Man-snuck-Air-India-crash-morgue-reveals-saw-blow-apart-pilot-suicide-theory-Read-DAVID-JONES-report-happened-visited-lone-survivor.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Demi Moore makes sure all eyes are on her in dramatic pink bow dress as she joins pregnant Barbara Palvin at star-studded Paper Tiger premiere during Cannes Film Festival",
          "summary": "黛咪摩爾在坎城影展《Paper Tiger》首映穿上戲劇感粉紅蝴蝶結禮服亮相，與懷孕的芭芭拉·帕爾文同場，成為紅毯焦點。",
          "source": "04-demi-moore-makes-sure-all-eyes-are-on-her-in-drama.md",
          "link": "https://www.dailymail.com/tvshowbiz/article-15824167/Demi-Moore-dramatic-pink-bow-dress-pregnant-Barbara-Palvin-Paper-Tiger-premiere-Cannes-Film-Festival.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Richmond-upon-Thames: The borough with no opposition",
          "summary": "里士滿泰晤士區地方選舉中，自由民主黨包辦全部席次，成為沒有反對黨的地方議會，引發外界對民主制衡與代表性的討論。",
          "source": "05-richmond-upon-thames-the-borough-with-no-oppositio.md",
          "link": "https://www.bbc.com/news/articles/cy4207kp51po?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Amit Shah opens NID innovation hub, urges robust design careers",
          "summary": "印度內政部長沙阿在甘地納加爾國家設計學院啟用創新孵化中心，呼籲為青年打造更具職涯導向的設計發展機會。",
          "source": "06-amit-shah-opens-nid-innovation-hub-urges-robust-de.md",
          "link": "https://newsable.asianetnews.com/india/amit-shah-opens-nid-innovation-hub-urges-robust-design-careers-articleshow-btquiz6",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Crucial Meeting on Punjab's Water Dispute Scheduled Today",
          "summary": "旁遮普首席部長曼恩今日會見拉維-比亞斯法庭，商討州內水權與分配爭議，並關注持續下降的地下水位，外界期待能促成突破。",
          "source": "07-crucial-meeting-on-punjab-s-water-dispute-schedule.md",
          "link": "https://gyanhigyan.com/national/crucial-meeting-on-punjabs-water-dispute-scheduled-today/cid18694231.htm",
          "strength": 2,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Xi-Trump summit: what ‘strategic stability’ means for US-China ties",
          "summary": "習近平與川普北京會晤後，中方提出「具建設性的中美戰略穩定關係」，意在為未來三年及更長期的雙邊關係定調，顯示雙方尋求穩定管控分歧。",
          "source": "08-xi-trump-summit-what-strategic-stability-means-for.md",
          "link": "https://www.scmp.com/opinion/china-opinion/article/3353699/xi-trump-summit-what-strategic-stability-means-us-china-ties",
          "strength": 3,
          "sentiment": "risk_on",
          "category": "politics"
        },
        {
          "title": "Personal decision for Starmer on whether to fight leadership contest, minister says",
          "summary": "英國文化大臣納迪表示，首相施凱爾是否參與黨魁競選屬個人決定，並稱他過去已展現迎戰能力，不應低估。",
          "source": "09-personal-decision-for-starmer-on-whether-to-fight-.md",
          "link": "https://www.bbc.com/news/articles/clypg60k25ro?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Labour leadership jostling puts Brexit back under political spotlight",
          "summary": "英國工黨可能出現領導權之爭，與歐盟關係及脫歐議題再度成為政治焦點，也影響即將到來的Makerfield補選。",
          "source": "10-labour-leadership-jostling-puts-brexit-back-under-.md",
          "link": "https://www.bbc.com/news/articles/c5y7l265pe8o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
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
      "portfolioValue": 109224.9333525528
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
    }
  ]
};
