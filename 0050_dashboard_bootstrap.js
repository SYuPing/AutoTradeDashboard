window.ETFDashboardBootstrap = {
  "date": "2026-05-29",
  "generated_at": "2026-05-29T05:30:05.110Z",
  "sourceDates": {
    "newsDate": "2026-05-29",
    "tradeDate": "2026-05-29",
    "strategyDate": "2026-05-29",
    "shortTermDate": "2026-05-29"
  },
  "dataManifest": {
    "latest_date": "2026-05-29",
    "latest_updated_at": "2026-05-29T05:30:02.325Z",
    "signature": "1780032602325.6343",
    "source_dates": {
      "newsDate": "2026-05-29",
      "tradeDate": "2026-05-29",
      "strategyDate": "2026-05-29",
      "shortTermDate": "2026-05-29"
    },
    "generated_at": "2026-05-29T05:30:05.110Z"
  },
  "state": {
    "date": "2026-05-29",
    "daily_capital": 100000,
    "starting_weight": 0.391792,
    "starting_notional": 39179.2,
    "starting_shares": 376,
    "starting_avg_cost": 103.199997,
    "current_weight": 0.388666,
    "current_notional": 38866.6,
    "shares_held": 373,
    "avg_cost": 103.199997,
    "cost_basis_total": 38493.6,
    "market_value": 38866.6,
    "used_capital": 38866.6,
    "remaining_capital": 61903.9,
    "cash_balance_before": 61591.3,
    "cash_balance_after": 61903.9,
    "equity": 100770.5,
    "realized_pnl_cum": 990.8,
    "unrealized_pnl": 373,
    "last_trade_price": 104.199997,
    "last_mark_price": 104.199997,
    "last_slot": "1320",
    "slot_history": [
      {
        "slot": "0930",
        "timestamp": "2026-05-29 09:30:10",
        "target_weight": 0.388032,
        "current_weight_before": 0,
        "delta_weight": 0.388032,
        "delta_notional": 38803.2,
        "quote_fresh": true,
        "cash_before": 100394.5,
        "cash_after": 61591.3,
        "equity_after": 100394.5,
        "shares_before": 0,
        "shares_after": 376,
        "fill_shares": 376,
        "avg_cost_after": 103.199997,
        "realized_pnl_cum": 987.8,
        "unrealized_pnl": 0,
        "cumulative_pnl": 987.8
      },
      {
        "slot": "1320",
        "timestamp": "2026-05-29 13:20:07",
        "target_weight": 0.388666,
        "current_weight_before": 0.391792,
        "delta_weight": -0.003126,
        "delta_notional": 312.6,
        "quote_fresh": true,
        "cash_before": 61591.3,
        "cash_after": 61903.9,
        "equity_after": 100770.5,
        "shares_before": 376,
        "shares_after": 373,
        "fill_shares": -3,
        "avg_cost_after": 103.199997,
        "realized_pnl_cum": 990.8,
        "unrealized_pnl": 373,
        "cumulative_pnl": 1363.8
      }
    ],
    "carry_over_from": "cache\\trade_execution\\2026-05-28\\trade_state.json",
    "order_notional": 312.6,
    "order_weight": -0.003126,
    "cumulative_pnl": 1363.8
  },
  "strategy": {
    "decision": "降槓桿小部位試單",
    "strategy": "偏多，但不追價；以 0050 或台積電權值籃子做小部位試單，等開盤後確認量價再加碼",
    "instrument": "0050 優先，其次台積電/台積電權值籃子",
    "window": "T+1 ~ T+5",
    "confidence": "中等偏高",
    "execution_points": [
      "1. **宏觀面偏防禦，但台股權值面偏強**",
      "2. **0050 技術面與權值股結構偏多**",
      "3. **實際操作方式**"
    ],
    "data_needs": [
      "台指期夜盤走勢",
      "台指期/現貨價差",
      "外資期貨未平倉與開盤前籌碼",
      "台積電 ADR 對台積電現貨的溢價/折價",
      "開盤前 5 分鐘的委買委賣與成交量",
      "0050 成分股前一日收盤後的短線量價變化"
    ],
    "risk_points": [
      "目前是**宏觀偏弱、台股權值偏強**的矛盾盤，最容易出現**開高走低**或**盤中震盪洗價**。",
      "若開盤後 15~30 分鐘：",
      "0050 跌破開盤低點",
      "台積電轉弱",
      "台指期同步走低",
      "若美元突然轉強、TLT 回吐、QQQ 轉弱，代表 risk-off 可能重新主導，台股多頭延續性會下降。"
    ],
    "raw_text": "9點前決策\n- 決策：**降槓桿小部位試單**\n- 策略：**偏多，但不追價；以 0050 或台積電權值籃子做小部位試單，等開盤後確認量價再加碼**\n- 操作標的：**0050 優先，其次台積電/台積電權值籃子**\n- 觀察窗：**T+1 ~ T+5**\n- 信心：**中等偏高**\n\n執行重點\n1. **宏觀面偏防禦，但台股權值面偏強**\n- 新聞主線是 risk-off、成長放緩，理論上應偏保守。\n- 但市場定價已經出現分歧：**美債、黃金走強**符合防禦；同時 **SPY、QQQ、TSM 仍上漲**，代表風險資產不是全面轉弱，而是「宏觀偏弱、科技局部偏強」。\n- 對台股來說，這種環境不適合重倉追多，但也**不支持直接大幅做空**。\n\n2. **0050 技術面與權值股結構偏多**\n- 0050 breadth：**bullish 18 / bearish 13 / momentum+ 24**，結構不差。\n- 權值焦點中，**台積電、聯發科、台達電、鴻海、日月光、聯電**多數 5D 為正，代表台股核心權值仍有支撐。\n- 台積電 ADR +0.50%、QQQ +0.84%，對台股開盤偏正面。\n- 但同時有不少成分股 near low、且市場整體 risk-off 背景仍在，所以**適合小部位先卡位，不適合滿倉追價**。\n\n3. **實際操作方式**\n- 若你今天一定要部署資金：\n**先用 20%~30% 目標部位買進 0050**，或用 **台積電 + 聯發科 + 鴻海** 的權值籃子分批進場。\n- 進場邏輯：\n- 開盤 5~15 分鐘若 **0050 不跌破開盤區間低點**，可先試單。\n- 若台積電現貨/ADR 連動強、台指期不弱，才考慮加碼。\n- 不建議：\n- 直接重倉追高\n- 直接做空台股\n- 逆勢押防禦股太多，因為台股權值結構目前不是全面轉弱\n\n補充資料需求\n若要把「小部位試單」升級成「直接進場偏多」或「直接避險」，我還需要以下資料：\n- **台指期夜盤走勢**\n- **台指期/現貨價差**\n- **外資期貨未平倉與開盤前籌碼**\n- **台積電 ADR 對台積電現貨的溢價/折價**\n- **開盤前 5 分鐘的委買委賣與成交量**\n- **0050 成分股前一日收盤後的短線量價變化**\n\n風險提醒\n- 目前是**宏觀偏弱、台股權值偏強**的矛盾盤，最容易出現**開高走低**或**盤中震盪洗價**。\n- 若開盤後 15~30 分鐘：\n- 0050 跌破開盤低點\n- 台積電轉弱\n- 台指期同步走低\n則應停止加碼，甚至把試單降為觀察。\n- 若美元突然轉強、TLT 回吐、QQQ 轉弱，代表 risk-off 可能重新主導，台股多頭延續性會下降。"
  },
  "shortTerm": {
    "stance": "降槓桿觀望",
    "suggestion": "0050 不追價，等回檔再分批；權值股以台積電、聯發科、台達電為主，採「拉回承接」不追高；若要操作避險，短線偏向保留現金、降低電子曝險。",
    "window": "T+1 ~ T+5",
    "resonance": "尚未共振",
    "confidence": "中",
    "focus_names": [
      "台積電（2330）",
      "聯發科（2454）",
      "台達電（2308）／鴻海（2317）"
    ],
    "risk_points": [
      "若台積電、聯發科出現同步轉弱，或 0050 成分股 breadth 由目前偏多轉為明顯惡化，短線判斷會失效。",
      "若美國科技股續強但台股權值跟不上，容易變成外資拉美股、台股只做反彈，0050 不宜追價。",
      "若宏觀 risk-off 進一步升溫，台股電子權值可能先漲後跌，短線要以「減碼、等回檔」為主。"
    ],
    "raw_text": "台股短線結論\n- 立場：**降槓桿觀望**\n- 建議：**0050 不追價，等回檔再分批；權值股以台積電、聯發科、台達電為主，採「拉回承接」不追高；若要操作避險，短線偏向保留現金、降低電子曝險。**\n- 觀察窗：**T+1 ~ T+5**\n- 共振狀態：**尚未共振**\n- 宏觀是 **Risk-off**，偏防禦\n- 但 0050 權值股技術面仍偏強，屬 **技術面強、宏觀偏空** 的背離\n- 信心：**中**\n\n權值股焦點\n1. **台積電（2330）**\n- 0050 權重最高，決定指數方向\n- 5D +2.91% 偏多，ADR 也同步偏強\n- 但在 risk-off 宏觀下，台積電較像「抗跌核心」，不是全面追價訊號\n\n2. **聯發科（2454）**\n- 5D +24.23%，是目前最強的高權重動能股之一\n- 對 0050 短線推升效果明顯\n- 但漲幅已大，T+1~T+5 更適合等整理，不適合追高\n\n3. **台達電（2308）／鴻海（2317）**\n- 台達電 5D +17.73%，鴻海 5D +6.26%，都屬權值支撐\n- 代表電子權值仍有輪動，但不是全面擴散\n- 若這兩檔轉弱，0050 的短線支撐會明顯下降\n\n風險提醒\n- **若台積電、聯發科出現同步轉弱，或 0050 成分股 breadth 由目前偏多轉為明顯惡化，短線判斷會失效。**\n- **若美國科技股續強但台股權值跟不上，容易變成外資拉美股、台股只做反彈，0050 不宜追價。**\n- **若宏觀 risk-off 進一步升溫，台股電子權值可能先漲後跌，短線要以「減碼、等回檔」為主。**"
  },
  "morning": {
    "generated_at": "2026-05-29 09:30:10",
    "slot": "0930",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-29\\trade_state.json",
    "trade_state": {
      "date": "2026-05-29",
      "daily_capital": 100000,
      "starting_weight": 0,
      "starting_notional": 0,
      "starting_shares": 0,
      "starting_avg_cost": 0,
      "current_weight": 0.388032,
      "current_notional": 38803.2,
      "shares_held": 376,
      "avg_cost": 103.199997,
      "cost_basis_total": 38803.2,
      "market_value": 38803.2,
      "used_capital": 38803.2,
      "remaining_capital": 61591.3,
      "cash_balance_before": 100394.5,
      "cash_balance_after": 61591.3,
      "equity": 100394.5,
      "realized_pnl_cum": 987.8,
      "unrealized_pnl": 0,
      "last_trade_price": 103.199997,
      "last_mark_price": 103.199997,
      "last_slot": "0930",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-29 09:30:10",
          "target_weight": 0.388032,
          "current_weight_before": 0,
          "delta_weight": 0.388032,
          "delta_notional": 38803.2,
          "quote_fresh": true,
          "cash_before": 100394.5,
          "cash_after": 61591.3,
          "equity_after": 100394.5,
          "shares_before": 0,
          "shares_after": 376,
          "fill_shares": 376,
          "avg_cost_after": 103.199997,
          "realized_pnl_cum": 987.8,
          "unrealized_pnl": 0,
          "cumulative_pnl": 987.8
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-28\\trade_state.json",
      "order_notional": 38803.2,
      "order_weight": 0.388032,
      "cumulative_pnl": 987.8
    },
    "base_decision": {
      "date": "2026-05-29",
      "final_positions": {
        "0050.TW": 0.388889,
        "CASH": 0.5,
        "2330.TW": 0.111111
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
      "strategy": "A",
      "regime": "RISK_OFF",
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
        "current_month_return": 0.0624,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-29",
      "final_positions": {
        "0050.TW": 0.388032,
        "CASH": 0.611968,
        "2330.TW": 0.111111
      },
      "exposure": 0.388032,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.388032,
      "estimated_transaction_cost": 0.0005,
      "strategy": "A",
      "regime": "RISK_OFF",
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
        "current_month_return": 0.0624,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "0930",
        "core_change_pct": 0.6338,
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
          "last_price": 103.19999694824219,
          "prev_close": 102.55000305175781,
          "change_pct": 0.6338,
          "as_of": "2026-05-29T01:10:00"
        },
        "2308.TW": {
          "last_price": 2475,
          "prev_close": 2390,
          "change_pct": 3.5565,
          "as_of": "2026-05-29T01:10:00"
        },
        "2317.TW": {
          "last_price": 274,
          "prev_close": 263,
          "change_pct": 4.1825,
          "as_of": "2026-05-29T01:10:00"
        },
        "2330.TW": {
          "last_price": 2340,
          "prev_close": 2295,
          "change_pct": 1.9608,
          "as_of": "2026-05-29T01:10:00"
        },
        "2345.TW": {
          "last_price": 2470,
          "prev_close": 2435,
          "change_pct": 1.4374,
          "as_of": "2026-05-29T01:10:00"
        },
        "2382.TW": {
          "last_price": 323.5,
          "prev_close": 308.5,
          "change_pct": 4.8622,
          "as_of": "2026-05-29T01:10:00"
        },
        "USO": {
          "last_price": 131.11000061035156,
          "prev_close": 131.02999877929688,
          "change_pct": 0.0611,
          "as_of": "2026-05-28T19:59:00"
        },
        "GLD": {
          "last_price": 412.80279541015625,
          "prev_close": 408.489990234375,
          "change_pct": 1.0558,
          "as_of": "2026-05-28T19:59:00"
        },
        "TLT": {
          "last_price": 85.72000122070312,
          "prev_close": 85.30000305175781,
          "change_pct": 0.4924,
          "as_of": "2026-05-28T19:59:00"
        },
        "QQQ": {
          "last_price": 735.5700073242188,
          "prev_close": 729.4500122070312,
          "change_pct": 0.839,
          "as_of": "2026-05-28T19:59:00"
        },
        "SPY": {
          "last_price": 754.6400146484375,
          "prev_close": 750.4600219726562,
          "change_pct": 0.557,
          "as_of": "2026-05-28T19:59:00"
        },
        "UUP": {
          "last_price": 27.709999084472656,
          "prev_close": 27.75,
          "change_pct": -0.1441,
          "as_of": "2026-05-28T19:59:00"
        }
      },
      "slot": "0930"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 103.19999694824219,
        "prev_close": 102.55000305175781,
        "change_pct": 0.6338,
        "as_of": "2026-05-29T01:10:00"
      },
      "2308.TW": {
        "last_price": 2475,
        "prev_close": 2390,
        "change_pct": 3.5565,
        "as_of": "2026-05-29T01:10:00"
      },
      "2317.TW": {
        "last_price": 274,
        "prev_close": 263,
        "change_pct": 4.1825,
        "as_of": "2026-05-29T01:10:00"
      },
      "2330.TW": {
        "last_price": 2340,
        "prev_close": 2295,
        "change_pct": 1.9608,
        "as_of": "2026-05-29T01:10:00"
      },
      "2345.TW": {
        "last_price": 2470,
        "prev_close": 2435,
        "change_pct": 1.4374,
        "as_of": "2026-05-29T01:10:00"
      },
      "2382.TW": {
        "last_price": 323.5,
        "prev_close": 308.5,
        "change_pct": 4.8622,
        "as_of": "2026-05-29T01:10:00"
      },
      "USO": {
        "last_price": 131.11000061035156,
        "prev_close": 131.02999877929688,
        "change_pct": 0.0611,
        "as_of": "2026-05-28T19:59:00"
      },
      "GLD": {
        "last_price": 412.80279541015625,
        "prev_close": 408.489990234375,
        "change_pct": 1.0558,
        "as_of": "2026-05-28T19:59:00"
      },
      "TLT": {
        "last_price": 85.72000122070312,
        "prev_close": 85.30000305175781,
        "change_pct": 0.4924,
        "as_of": "2026-05-28T19:59:00"
      },
      "QQQ": {
        "last_price": 735.5700073242188,
        "prev_close": 729.4500122070312,
        "change_pct": 0.839,
        "as_of": "2026-05-28T19:59:00"
      },
      "SPY": {
        "last_price": 754.6400146484375,
        "prev_close": 750.4600219726562,
        "change_pct": 0.557,
        "as_of": "2026-05-28T19:59:00"
      },
      "UUP": {
        "last_price": 27.709999084472656,
        "prev_close": 27.75,
        "change_pct": -0.1441,
        "as_of": "2026-05-28T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "買進",
        "price": 103.2,
        "shares": 376,
        "notional": 38803.2,
        "weight": 0.388032,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 987.8,
    "equity": 100394.5,
    "telegram_message": "[0930 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.000\n起始股數：0\n今日已用：38,803\n今日剩餘：61,591\n下單金額：38,803\n現金前後：100,394 -> 61,591\n總資產：100,394\n持有股數：376\n持有均價：103.20\n已實現損益：988\n未實現損益：0\n目前累積損益：988\n0050部位：0.388\n現金：0.612\n0050即時：+0.63% @ 2026-05-29T01:10:00\n承接來源：cache\\trade_execution\\2026-05-28\\trade_state.json\n交易明細：\n- 買進 0050.TW @ 103 × 376 股（約 38,803）\n參考資產：USO:+0.06% / GLD:+1.06% / TLT:+0.49% / QQQ:+0.84%\n目標曝險：0.388\nquote判斷：EXECUTE | MORNING_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "midday": {
    "generated_at": "2026-05-29 13:20:07",
    "slot": "1320",
    "strategy_output_path": "strategy_output.json",
    "learning_output_path": "learning_output.json",
    "portfolio_value": 100000,
    "quote_fresh": true,
    "quote_attempts": 1,
    "trade_state_path": "cache\\trade_execution\\2026-05-29\\trade_state.json",
    "trade_state": {
      "date": "2026-05-29",
      "daily_capital": 100000,
      "starting_weight": 0.391792,
      "starting_notional": 39179.2,
      "starting_shares": 376,
      "starting_avg_cost": 103.199997,
      "current_weight": 0.388666,
      "current_notional": 38866.6,
      "shares_held": 373,
      "avg_cost": 103.199997,
      "cost_basis_total": 38493.6,
      "market_value": 38866.6,
      "used_capital": 38866.6,
      "remaining_capital": 61903.9,
      "cash_balance_before": 61591.3,
      "cash_balance_after": 61903.9,
      "equity": 100770.5,
      "realized_pnl_cum": 990.8,
      "unrealized_pnl": 373,
      "last_trade_price": 104.199997,
      "last_mark_price": 104.199997,
      "last_slot": "1320",
      "slot_history": [
        {
          "slot": "0930",
          "timestamp": "2026-05-29 09:30:10",
          "target_weight": 0.388032,
          "current_weight_before": 0,
          "delta_weight": 0.388032,
          "delta_notional": 38803.2,
          "quote_fresh": true,
          "cash_before": 100394.5,
          "cash_after": 61591.3,
          "equity_after": 100394.5,
          "shares_before": 0,
          "shares_after": 376,
          "fill_shares": 376,
          "avg_cost_after": 103.199997,
          "realized_pnl_cum": 987.8,
          "unrealized_pnl": 0,
          "cumulative_pnl": 987.8
        },
        {
          "slot": "1320",
          "timestamp": "2026-05-29 13:20:07",
          "target_weight": 0.388666,
          "current_weight_before": 0.391792,
          "delta_weight": -0.003126,
          "delta_notional": 312.6,
          "quote_fresh": true,
          "cash_before": 61591.3,
          "cash_after": 61903.9,
          "equity_after": 100770.5,
          "shares_before": 376,
          "shares_after": 373,
          "fill_shares": -3,
          "avg_cost_after": 103.199997,
          "realized_pnl_cum": 990.8,
          "unrealized_pnl": 373,
          "cumulative_pnl": 1363.8
        }
      ],
      "carry_over_from": "cache\\trade_execution\\2026-05-28\\trade_state.json",
      "order_notional": 312.6,
      "order_weight": -0.003126,
      "cumulative_pnl": 1363.8
    },
    "base_decision": {
      "date": "2026-05-29",
      "final_positions": {
        "0050.TW": 0.388889,
        "CASH": 0.5,
        "2330.TW": 0.111111
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
      "strategy": "A",
      "regime": "RISK_OFF",
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
        "current_month_return": 0.0624,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      }
    },
    "final_decision": {
      "date": "2026-05-29",
      "final_positions": {
        "0050.TW": 0.388666,
        "CASH": 0.611334,
        "2330.TW": 0.111111
      },
      "exposure": 0.388666,
      "status": "EXECUTE",
      "reason": "CONSTRAINED_BY_LEARNING_OUTPUT",
      "exposure_breakdown": {
        "long": 0.5,
        "short": 0
      },
      "leverage_ratio": 0.388666,
      "estimated_transaction_cost": 0.0005,
      "strategy": "A",
      "regime": "RISK_OFF",
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
        "current_month_return": 0.0624,
        "current_month_drawdown": -0.0158,
        "monthly_mode": "ON_TRACK"
      },
      "quote_guard": {
        "slot": "1320",
        "core_change_pct": 3.6816,
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
          "last_price": 104.19999694824219,
          "prev_close": 100.5,
          "change_pct": 3.6816,
          "as_of": "2026-05-29T05:00:00"
        },
        "2308.TW": {
          "last_price": 2490,
          "prev_close": 2390,
          "change_pct": 4.1841,
          "as_of": "2026-05-29T04:59:00"
        },
        "2317.TW": {
          "last_price": 289,
          "prev_close": 263,
          "change_pct": 9.8859,
          "as_of": "2026-05-29T05:00:00"
        },
        "2330.TW": {
          "last_price": 2365,
          "prev_close": 2295,
          "change_pct": 3.0501,
          "as_of": "2026-05-29T05:00:00"
        },
        "2345.TW": {
          "last_price": 2465,
          "prev_close": 2435,
          "change_pct": 1.232,
          "as_of": "2026-05-29T04:59:00"
        },
        "2382.TW": {
          "last_price": 339,
          "prev_close": 308.5,
          "change_pct": 9.8865,
          "as_of": "2026-05-29T05:00:00"
        },
        "USO": {
          "last_price": 131.11000061035156,
          "prev_close": 131.02999877929688,
          "change_pct": 0.0611,
          "as_of": "2026-05-28T19:59:00"
        },
        "GLD": {
          "last_price": 412.80279541015625,
          "prev_close": 408.489990234375,
          "change_pct": 1.0558,
          "as_of": "2026-05-28T19:59:00"
        },
        "TLT": {
          "last_price": 85.72000122070312,
          "prev_close": 85.30000305175781,
          "change_pct": 0.4924,
          "as_of": "2026-05-28T19:59:00"
        },
        "QQQ": {
          "last_price": 735.5700073242188,
          "prev_close": 729.4500122070312,
          "change_pct": 0.839,
          "as_of": "2026-05-28T19:59:00"
        },
        "SPY": {
          "last_price": 754.6400146484375,
          "prev_close": 750.4600219726562,
          "change_pct": 0.557,
          "as_of": "2026-05-28T19:59:00"
        },
        "UUP": {
          "last_price": 27.709999084472656,
          "prev_close": 27.75,
          "change_pct": -0.1441,
          "as_of": "2026-05-28T19:59:00"
        }
      },
      "slot": "1320"
    },
    "quotes": {
      "0050.TW": {
        "last_price": 104.19999694824219,
        "prev_close": 100.5,
        "change_pct": 3.6816,
        "as_of": "2026-05-29T05:00:00"
      },
      "2308.TW": {
        "last_price": 2490,
        "prev_close": 2390,
        "change_pct": 4.1841,
        "as_of": "2026-05-29T04:59:00"
      },
      "2317.TW": {
        "last_price": 289,
        "prev_close": 263,
        "change_pct": 9.8859,
        "as_of": "2026-05-29T05:00:00"
      },
      "2330.TW": {
        "last_price": 2365,
        "prev_close": 2295,
        "change_pct": 3.0501,
        "as_of": "2026-05-29T05:00:00"
      },
      "2345.TW": {
        "last_price": 2465,
        "prev_close": 2435,
        "change_pct": 1.232,
        "as_of": "2026-05-29T04:59:00"
      },
      "2382.TW": {
        "last_price": 339,
        "prev_close": 308.5,
        "change_pct": 9.8865,
        "as_of": "2026-05-29T05:00:00"
      },
      "USO": {
        "last_price": 131.11000061035156,
        "prev_close": 131.02999877929688,
        "change_pct": 0.0611,
        "as_of": "2026-05-28T19:59:00"
      },
      "GLD": {
        "last_price": 412.80279541015625,
        "prev_close": 408.489990234375,
        "change_pct": 1.0558,
        "as_of": "2026-05-28T19:59:00"
      },
      "TLT": {
        "last_price": 85.72000122070312,
        "prev_close": 85.30000305175781,
        "change_pct": 0.4924,
        "as_of": "2026-05-28T19:59:00"
      },
      "QQQ": {
        "last_price": 735.5700073242188,
        "prev_close": 729.4500122070312,
        "change_pct": 0.839,
        "as_of": "2026-05-28T19:59:00"
      },
      "SPY": {
        "last_price": 754.6400146484375,
        "prev_close": 750.4600219726562,
        "change_pct": 0.557,
        "as_of": "2026-05-28T19:59:00"
      },
      "UUP": {
        "last_price": 27.709999084472656,
        "prev_close": 27.75,
        "change_pct": -0.1441,
        "as_of": "2026-05-28T19:59:00"
      }
    },
    "trade_plan": [
      {
        "asset": "0050.TW",
        "parent_asset": "",
        "side": "賣出",
        "price": 104.2,
        "shares": 3,
        "notional": 312.6,
        "weight": -0.003126,
        "split_ratio": 0,
        "is_proxy_split": false
      }
    ],
    "trade_plan_mode": "core_only",
    "cumulative_pnl": 1363.8,
    "equity": 100770.5,
    "telegram_message": "[1320 執行結果]\n策略：A\n動作：EXECUTE\n原因：CONSTRAINED_BY_LEARNING_OUTPUT\n執行模式：0050直買\n執行本金：100,000\n今日起始：0.392\n起始股數：376\n今日已用：38,867\n今日剩餘：61,904\n下單金額：313\n現金前後：61,591 -> 61,904\n總資產：100,770\n持有股數：373\n持有均價：103.20\n已實現損益：991\n未實現損益：373\n目前累積損益：1,364\n0050部位：0.389\n現金：0.611\n0050即時：+3.68% @ 2026-05-29T05:00:00\n承接來源：cache\\trade_execution\\2026-05-28\\trade_state.json\n交易明細：\n- 賣出 0050.TW @ 104 × 3 股（約 313）\n參考資產：USO:+0.06% / GLD:+1.06% / TLT:+0.49% / QQQ:+0.84%\n目標曝險：0.389\nquote判斷：EXECUTE | MIDDAY_CONFIRM_OK",
    "telegram_sent": true,
    "telegram_error": ""
  },
  "parsedMacro": {
    "date": "2026-05-29",
    "generated_at": "2026-05-29T05:30:05.113Z",
    "categories": {
      "technology": [
        {
          "title": "Humanoid robots 'the future' of car making, says BMW",
          "summary": "BMW表示將在歐洲汽車工廠導入人形機器人，延續其在美國的類似計畫，凸顯人形機器人可能成為未來汽車製造的重要工具。",
          "source": "01-humanoid-robots-the-future-of-car-making-says-bmw.md",
          "link": "https://www.bbc.com/news/articles/cgmpwzzvxr2o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "California Attorney General sues 23andMe successor for 2023 data breach",
          "summary": "加州檢察長羅布·邦塔起訴 23andMe 繼任公司，指其未如實說明 2023 年資料外洩事件的嚴重性，涉嫌誤導外界。",
          "source": "02-california-attorney-general-sues-23andme-successor.md",
          "link": "https://www.bbc.com/news/articles/crepleq2zyvo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "AMD: Strong AI Sales, But the Win Is Already Priced In",
          "summary": "文章分析 AMD AI 業務銷售表現強勁，但市場已提前反映相關利多，股價上漲空間可能有限。",
          "source": "03-amd-strong-ai-sales-but-the-win-is-already-priced-.md",
          "link": "https://www.investing.com/analysis/amd-strong-ai-sales-but-the-win-is-already-priced-in-200681089",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "全新可插拔架構!合聖科技 COMPUTEX 2026 大秀次世代矽光子實力",
          "summary": "合聖科技將於 COMPUTEX 2026 展示矽光子與超穎光學解決方案，主打可插拔架構與 Detachable 2D FAU，鎖定次世代 AI GPU 與資料中心 CPO 高頻寬需求。",
          "source": "04-computex-2026.md",
          "link": "https://technews.tw/2026/05/28/authenx-computex-2026/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Elizabeth Warren wants to tax AI data centers as power bills climb",
          "summary": "麻州民主黨參議員華倫在《時代》投書主張，AI帶來的經濟利益未普遍共享，反而集中於少數企業與高層，並推動民眾電費上升，應對資料中心課稅。",
          "source": "05-elizabeth-warren-wants-to-tax-ai-data-centers-as-p.md",
          "link": "https://www.techspot.com/news/112549-elizabeth-warren-wants-tax-ai-data-centers-power.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Causaly Introduces Scientific Workflows to Turn Expert Scientific Methods into Repeatable, AI-Executed Processes in Life Sciences",
          "summary": "Causaly推出Scientific Workflows，將生技製藥研發中的專家方法編碼為可重複的端到端流程，並由AI代理一致執行，適用不同專案、團隊與治療領域。",
          "source": "06-causaly-introduces-scientific-workflows-to-turn-ex.md",
          "link": "https://www.citizentribune.com/news/business/causaly-introduces-scientific-workflows-to-turn-expert-scientific-methods-into-repeatable-ai-executed-processes-in/article_6dea0c9c-584e-5417-85e0-c5823be59c26.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Valve hikes Steam Deck prices by more than 40%, blaming rising costs",
          "summary": "Valve 宣布調漲 Steam Deck 售價，漲幅超過四成，並表示主因是零組件成本上升，產品本身並未改變。",
          "source": "07-valve-hikes-steam-deck-prices-by-more-than-40-blam.md",
          "link": "https://www.bbc.com/news/articles/cz725d5d1x7o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "King's College team wins access to cutting-edge Google quantum chip",
          "summary": "倫敦國王學院研究團隊獲得使用 Google 最新量子晶片的機會，盼藉此研究過去難以解答的自然過程問題。",
          "source": "08-king-s-college-team-wins-access-to-cutting-edge-go.md",
          "link": "https://www.bbc.com/news/articles/cd7pwezyze1o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Meta repeatedly snubs EU body over Facebook and Instagram user bans",
          "summary": "Meta 多次未回應歐盟機構對 Facebook 與 Instagram 用戶遭封禁爭議的詢問；BBC 也接獲數百名自稱遭錯誤停權的用戶投訴。",
          "source": "09-meta-repeatedly-snubs-eu-body-over-facebook-and-in.md",
          "link": "https://www.bbc.com/news/articles/c152yvwjwkko?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        },
        {
          "title": "Google worker charged with using internal data to make $1.2m on bets",
          "summary": "一名任職多年的 Google 員工在紐約遭起訴，涉嫌利用公司內部資料進行內線交易，從相關押注中獲利約120萬美元。",
          "source": "10-google-worker-charged-with-using-internal-data-to-.md",
          "link": "https://www.bbc.com/news/articles/c052yv259jvo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "technology"
        }
      ],
      "finance": [
        {
          "title": "EXCLUSIVE: Beeline Eyes 100% MagicBlocks Buyout To Expand AI And Digital Asset Push",
          "summary": "Beeline宣布擬以全股票方式收購MagicBlocks剩餘52%股權，若成局將於6月完成，以擴大AI與數位資產布局。",
          "source": "01-exclusive-beeline-eyes-100-magicblocks-buyout-to-e.md",
          "link": "https://www.benzinga.com/m-a/26/05/52835321/exclusive-beeline-eyes-100-magicblocks-buyout-to-expand-ai-and-digital-asset-push",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Newton Golf to Present at the Planet MicroCap Las Vegas Powered by MicroCapClub, June 17, 2026",
          "summary": "Newton Golf將於2026年6月17日在拉斯維加斯舉行的Planet MicroCap大會上發表簡報，展示其以物理驅動工程為核心的高爾夫設備業務。",
          "source": "02-newton-golf-to-present-at-the-planet-microcap-las-.md",
          "link": "https://www.financialcontent.com/article/bizwire-2026-5-28-newton-golf-to-present-at-the-planet-microcap-las-vegas-powered-by-microcapclub-june-17-2026",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "This AI Stock Is Crushing Microsoft And Adobe In 2026 — JPMorgan Still Sees 43% Upside",
          "summary": "Datadog 2026年股價年內大漲近66%，遠勝微軟、Adobe等AI概念股；摩根大通維持增持評級，目標價320美元，仍看約43%上行空間。",
          "source": "03-this-ai-stock-is-crushing-microsoft-and-adobe-in-2.md",
          "link": "https://www.benzinga.com/markets/tech/26/05/52835300/ai-stock-is-crushing-microsoft-adobe-in-2026-jpmorgan-sees-43-upside",
          "strength": 2,
          "sentiment": "risk_on",
          "category": "finance"
        },
        {
          "title": "Reborn Coffee Strengthens Executive Leadership Team with Appointment of Thomas Tran as Chief Operating Officer and Chief Technology Officer",
          "summary": "Reborn Coffee任命Thomas Tran為營運長兼技術長，強化管理團隊，推進營運紀律、科技整合與全球授權擴張。",
          "source": "04-reborn-coffee-strengthens-executive-leadership-tea.md",
          "link": "https://www.benzinga.com/pressreleases/26/05/g52835326/reborn-coffee-strengthens-executive-leadership-team-with-appointment-of-thomas-tran-as-chief-opera",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Dot Ai Announces Implementation of Previously Approved 1-for-25 Reverse Stock Split",
          "summary": "Dot Ai 宣布執行先前核准的 1 比 25 反向股票分割，普通股預計自 2026 年 6 月 1 日起以調整後價格交易。",
          "source": "05-dot-ai-announces-implementation-of-previously-appr.md",
          "link": "https://www.financialcontent.com/article/accwirecq-2026-5-28-dot-ai-announces-implementation-of-previously-approved-1-for-25-reverse-stock-split",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "finance"
        },
        {
          "title": "Ceeta Industries reports standalone net profit of Rs 0.16 crore in the March 2026 quarter",
          "summary": "Ceeta Industries 公布 2026 年 3 月季度單獨淨利為 0.16 億盧比。由於內容受限，未提供更多營運與財務細節。",
          "source": "06-ceeta-industries-reports-standalone-net-profit-of-.md",
          "link": "https://www.business-standard.com/markets/capital-market-news/ceeta-industries-reports-standalone-net-profit-of-rs-0-16-crore-in-the-march-2026-quarter-126052801286_1.html",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Stournaras: Triangular Transactions Between Banks and Servicers Are an Urban Myth",
          "summary": "希臘央行總裁斯圖納拉斯否認銀行與資產管理公司間存在三角形不良貸款交易，稱此說法是都市傳說。",
          "source": "07-stournaras-triangular-transactions-between-banks-a.md",
          "link": "https://athens-times.com/stournaras-triangular-transactions-between-banks-and-servicers-are-an-urban-myth/",
          "strength": 1,
          "sentiment": "neutral",
          "category": "finance"
        },
        {
          "title": "Earnings call transcript: Weibo Corp Q1 2026 misses EPS, stock dips 3%",
          "summary": "微博公布2026年第一季財報，獲利未達市場預期，導致股價下跌約3%。",
          "source": "08-earnings-call-transcript-weibo-corp-q1-2026-misses.md",
          "link": "https://uk.investing.com/news/stock-market-news/earnings-call-transcript-weibo-corp-q1-2026-misses-eps-stock-dips-3-93CH-4702406",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "finance"
        }
      ],
      "politics": [
        {
          "title": "Tyson Foods CEO Donnie King To Step Down; Jeff Schomburger Named Successor; Reaffirms FY26 Outlook",
          "summary": "泰森食品宣布執行長Donnie King將於10月4日卸任，由董事會資深成員Jeff Schomburger接任；公司同時重申2026財年展望不變。",
          "source": "01-tyson-foods-ceo-donnie-king-to-step-down-jeff-scho.md",
          "link": "https://www.finanzen.at/nachrichten/aktien/tyson-foods-ceo-donnie-king-to-step-down;-jeff-schomburger-named-successor;-reaffirms-fy26-outlook-1036202690",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Starmer defends policy decisions as he hits back at Blair",
          "summary": "前工黨首相布萊爾批評政府對國家缺乏一致規劃，施凱爾則為其政策決定辯護並反擊相關指控。",
          "source": "02-starmer-defends-policy-decisions-as-he-hits-back-a.md",
          "link": "https://www.bbc.com/news/articles/cvgzjg778jyo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Sturgeon says she was deceived and betrayed over Murrell embezzlement",
          "summary": "蘇格蘭前首席部長史特金表示，前夫穆雷爾承認侵占後，她感到遭到欺騙與背叛，並稱自己正接受「嫁給了不認識的人」的事實。",
          "source": "03-sturgeon-says-she-was-deceived-and-betrayed-over-m.md",
          "link": "https://www.bbc.com/news/articles/cpdp3d8792no?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Opportunities shrinking for too many young people, says major report on 'lost generation'",
          "summary": "報告警告，英國16至24歲未就業、未就學或未受訓青年人數恐在2031年升至125萬，顯示年輕人機會持續縮減。",
          "source": "04-opportunities-shrinking-for-too-many-young-people-.md",
          "link": "https://www.bbc.com/news/articles/cy026x9jpd0o?at_medium=RSS&at_campaign=rss",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Greens can bring 'hope and joy' says Makerfield by-election candidate",
          "summary": "Makerfield 補選綠黨候選人 Sarah Wakefield 表示，綠色政策可為地方帶來「希望與喜悅」，並承諾處理兩大類重要議題。",
          "source": "05-greens-can-bring-hope-and-joy-says-makerfield-by-e.md",
          "link": "https://www.bbc.com/news/articles/cvgzjr34372o?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Lib Dems can 'deliver actual savings' vows Makerfield by-election candidate",
          "summary": "自由民主黨在 Makerfield 補選的候選人 Jake Austin 表示，只有該黨能帶來正常政治，並承諾可實現實際節省。",
          "source": "06-lib-dems-can-deliver-actual-savings-vows-makerfiel.md",
          "link": "https://www.bbc.com/news/articles/c4g8yr2yzdxo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "‘Why a questionable firm was given the CBSE OSM contract’: Rahul Gandhi seeks answers from Education Minister",
          "summary": "拉胡爾·甘地就CBSE線上閱卷系統合約爭議追問教育部長，質疑政府為何將合約交給曾涉爭議的Coempt，並要求說明是否做過背景審查。",
          "source": "07-why-a-questionable-firm-was-given-the-cbse-osm-con.md",
          "link": "https://economictimes.indiatimes.com/news/india/why-a-questionablefirm-was-given-the-cbse-osm-contract-rahul-gandhi-seeks-answers-from-education-minister/articleshow/131376195.cms",
          "strength": 2,
          "sentiment": "risk_off",
          "category": "politics"
        },
        {
          "title": "Council pays £470k for own Clean Air Zone breaches",
          "summary": "該市議會為自身車隊違反清潔空氣區規定支付47萬英鎊，且仍有八分之一車輛持續違規。",
          "source": "08-council-pays-470k-for-own-clean-air-zone-breaches.md",
          "link": "https://www.bbc.com/news/articles/cgrp1yvxglgo?at_medium=RSS&at_campaign=rss",
          "strength": 1,
          "sentiment": "neutral",
          "category": "politics"
        },
        {
          "title": "Legal bid to block UK-backed French migrant detention centre",
          "summary": "英國與法國合作設置移民拘留中心，但英國內政部表示，若該設施未啟用，英方將不會付款，相關安排旨在抑制偷渡越境。",
          "source": "09-legal-bid-to-block-uk-backed-french-migrant-detent.md",
          "link": "https://www.bbc.com/news/articles/cdxpdqvdyz7o?at_medium=RSS&at_campaign=rss",
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
      "portfolioValue": 111595.15352726204
    },
    {
      "date": "2026-05-29",
      "portfolioValue": 112801.8189326585
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
    },
    {
      "date": "2026-05-29",
      "openValue": 100394.5,
      "closeValue": 100770.5,
      "deltaValue": 376,
      "points": [
        {
          "slot": "0930",
          "equity": 100394.5,
          "timestamp": "2026-05-29 09:30:10"
        },
        {
          "slot": "1320",
          "equity": 100770.5,
          "timestamp": "2026-05-29 13:20:07"
        }
      ]
    }
  ]
};
