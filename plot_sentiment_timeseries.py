import csv
import base64
import os
import sys
from datetime import datetime
from pathlib import Path


SERIES = [
    ("global_score", "Global", "#1f3a5f"),
    ("technology_score", "Technology", "#2a9d8f"),
    ("finance_score", "Finance", "#e76f51"),
    ("politics_score", "Politics", "#6c757d"),
]

RANKING_COLORS = ["#1f3a5f", "#2a9d8f", "#e76f51", "#6c757d", "#c77d3f", "#6b4f9b"]


def _read_rows(csv_path: str):
    rows = []
    with open(csv_path, "r", encoding="utf-8", newline="") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            item = {"timestamp": row.get("timestamp") or ""}
            for key, _, _ in SERIES:
                try:
                    item[key] = float(row.get(key) or 0.0)
                except Exception:
                    item[key] = 0.0
            rows.append(item)
    return rows


def _fmt_ts(value: str) -> str:
    try:
        return datetime.fromisoformat(value).strftime("%m-%d %H:%M")
    except Exception:
        return value[:16]


def _points(values, width: int, height: int, left: int, top: int, plot_w: int, plot_h: int) -> str:
    if not values:
        return ""
    if len(values) == 1:
        x = left + plot_w / 2
        y = top + ((2 - values[0]) / 4.0) * plot_h
        return f"{x:.1f},{y:.1f}"
    pts = []
    for idx, value in enumerate(values):
        x = left + (idx / (len(values) - 1)) * plot_w
        y = top + ((2 - value) / 4.0) * plot_h
        pts.append(f"{x:.1f},{y:.1f}")
    return " ".join(pts)


def build_svg(rows):
    width = 1100
    height = 560
    left = 90
    right = 30
    top = 60
    bottom = 90
    plot_w = width - left - right
    plot_h = height - top - bottom

    y_ticks = [2, 1, 0, -1, -2]
    x_labels = []
    if rows:
        step = max(1, len(rows) // 6)
        x_labels = [(idx, _fmt_ts(rows[idx]["timestamp"])) for idx in range(0, len(rows), step)]
        if x_labels[-1][0] != len(rows) - 1:
            x_labels.append((len(rows) - 1, _fmt_ts(rows[-1]["timestamp"])))

    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="#f7f5ef"/>',
        '<text x="90" y="35" font-size="24" font-family="Arial" fill="#1f2933">Market Sentiment Timeseries</text>',
        '<text x="90" y="52" font-size="12" font-family="Arial" fill="#52606d">Score range: -2 to 2</text>',
    ]

    for tick in y_ticks:
        y = top + ((2 - tick) / 4.0) * plot_h
        parts.append(f'<line x1="{left}" y1="{y:.1f}" x2="{left + plot_w}" y2="{y:.1f}" stroke="#d9e2ec" stroke-width="1"/>')
        parts.append(f'<text x="55" y="{y + 4:.1f}" font-size="12" font-family="Arial" fill="#52606d">{tick}</text>')

    parts.append(f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top + plot_h}" stroke="#7b8794" stroke-width="1.5"/>')
    parts.append(f'<line x1="{left}" y1="{top + plot_h}" x2="{left + plot_w}" y2="{top + plot_h}" stroke="#7b8794" stroke-width="1.5"/>')

    if rows:
        for idx, label in x_labels:
            x = left + ((idx / max(len(rows) - 1, 1)) * plot_w if len(rows) > 1 else plot_w / 2)
            parts.append(f'<line x1="{x:.1f}" y1="{top + plot_h}" x2="{x:.1f}" y2="{top + plot_h + 6}" stroke="#7b8794" stroke-width="1"/>')
            parts.append(f'<text x="{x:.1f}" y="{top + plot_h + 24}" font-size="11" text-anchor="middle" font-family="Arial" fill="#52606d">{label}</text>')

        for key, label, color in SERIES:
            values = [row[key] for row in rows]
            polyline = _points(values, width, height, left, top, plot_w, plot_h)
            if not polyline:
                continue
            parts.append(f'<polyline fill="none" stroke="{color}" stroke-width="3" points="{polyline}"/>')
            for idx, value in enumerate(values):
                x = left + ((idx / max(len(values) - 1, 1)) * plot_w if len(values) > 1 else plot_w / 2)
                y = top + ((2 - value) / 4.0) * plot_h
                parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="3.5" fill="{color}"/>')

    legend_x = left
    legend_y = height - 28
    for _, label, color in SERIES:
        parts.append(f'<rect x="{legend_x}" y="{legend_y - 10}" width="18" height="4" fill="{color}"/>')
        parts.append(f'<text x="{legend_x + 24}" y="{legend_y}" font-size="12" font-family="Arial" fill="#1f2933">{label}</text>')
        legend_x += 160

    parts.append('</svg>')
    return "\n".join(parts)


def _read_ranking_rows(csv_path: str, value_key: str):
    rows = []
    with open(csv_path, "r", encoding="utf-8", newline="") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            timestamp = row.get("timestamp") or ""
            name = row.get(value_key) or ""
            try:
                score = float(row.get("score") or 0.0)
            except Exception:
                score = 0.0
            if not timestamp or not name:
                continue
            rows.append({"timestamp": timestamp, value_key: name, "score": score})
    return rows


def _ranking_series(rows, value_key: str, top_n: int = 5):
    totals = {}
    timestamps = []
    per_ts = {}
    for row in rows:
        timestamp = row["timestamp"]
        name = row[value_key]
        score = row["score"]
        totals[name] = totals.get(name, 0.0) + score
        if timestamp not in per_ts:
            per_ts[timestamp] = {}
            timestamps.append(timestamp)
        per_ts[timestamp][name] = score
    names = [name for name, _ in sorted(totals.items(), key=lambda x: x[1], reverse=True)[:top_n]]
    series = []
    for idx, name in enumerate(names):
        values = [per_ts.get(ts, {}).get(name, 0.0) for ts in timestamps]
        series.append((name, values, RANKING_COLORS[idx % len(RANKING_COLORS)]))
    return timestamps, series


def build_ranking_svg(rows, title: str, subtitle: str, value_key: str):
    width = 1100
    height = 560
    left = 90
    right = 30
    top = 60
    bottom = 90
    plot_w = width - left - right
    plot_h = height - top - bottom
    timestamps, series = _ranking_series(rows, value_key)
    max_val = 1.0
    for _, values, _ in series:
        for value in values:
            max_val = max(max_val, value)
    y_ticks = [max_val * ratio for ratio in (1.0, 0.75, 0.5, 0.25, 0.0)]
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="#f7f5ef"/>',
        f'<text x="90" y="35" font-size="24" font-family="Arial" fill="#1f2933">{title}</text>',
        f'<text x="90" y="52" font-size="12" font-family="Arial" fill="#52606d">{subtitle}</text>',
    ]
    for tick in y_ticks:
        y = top + (1.0 - (tick / max_val if max_val else 0.0)) * plot_h
        parts.append(f'<line x1="{left}" y1="{y:.1f}" x2="{left + plot_w}" y2="{y:.1f}" stroke="#d9e2ec" stroke-width="1"/>')
        parts.append(f'<text x="50" y="{y + 4:.1f}" font-size="12" font-family="Arial" fill="#52606d">{tick:.0f}</text>')
    parts.append(f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top + plot_h}" stroke="#7b8794" stroke-width="1.5"/>')
    parts.append(f'<line x1="{left}" y1="{top + plot_h}" x2="{left + plot_w}" y2="{top + plot_h}" stroke="#7b8794" stroke-width="1.5"/>')
    if timestamps:
        step = max(1, len(timestamps) // 6)
        x_labels = [(idx, _fmt_ts(timestamps[idx])) for idx in range(0, len(timestamps), step)]
        if x_labels[-1][0] != len(timestamps) - 1:
            x_labels.append((len(timestamps) - 1, _fmt_ts(timestamps[-1])))
        for idx, label in x_labels:
            x = left + ((idx / max(len(timestamps) - 1, 1)) * plot_w if len(timestamps) > 1 else plot_w / 2)
            parts.append(f'<line x1="{x:.1f}" y1="{top + plot_h}" x2="{x:.1f}" y2="{top + plot_h + 6}" stroke="#7b8794" stroke-width="1"/>')
            parts.append(f'<text x="{x:.1f}" y="{top + plot_h + 24}" font-size="11" text-anchor="middle" font-family="Arial" fill="#52606d">{label}</text>')
    for name, values, color in series:
        pts = []
        for idx, value in enumerate(values):
            x = left + ((idx / max(len(values) - 1, 1)) * plot_w if len(values) > 1 else plot_w / 2)
            y = top + (1.0 - (value / max_val if max_val else 0.0)) * plot_h
            pts.append(f"{x:.1f},{y:.1f}")
        if pts:
            parts.append(f'<polyline fill="none" stroke="{color}" stroke-width="3" points="{" ".join(pts)}"/>')
        for idx, value in enumerate(values):
            x = left + ((idx / max(len(values) - 1, 1)) * plot_w if len(values) > 1 else plot_w / 2)
            y = top + (1.0 - (value / max_val if max_val else 0.0)) * plot_h
            parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="3.5" fill="{color}"/>')
    legend_x = left
    legend_y = height - 28
    for name, _, color in series:
        parts.append(f'<rect x="{legend_x}" y="{legend_y - 10}" width="18" height="4" fill="{color}"/>')
        parts.append(f'<text x="{legend_x + 24}" y="{legend_y}" font-size="12" font-family="Arial" fill="#1f2933">{name[:24]}</text>')
        legend_x += 170
    parts.append('</svg>')
    return "\n".join(parts)


def generate_svg_file(csv_path: str, output_path: str) -> str:
    rows = _read_rows(csv_path)
    if not rows:
        raise ValueError(f"No rows found in {csv_path}")
    svg = build_svg(rows)
    with open(output_path, "w", encoding="utf-8") as fh:
        fh.write(svg)
    return output_path


def generate_png_file(svg_path: str, output_path: str) -> str:
    try:
        from playwright.sync_api import sync_playwright
    except Exception as e:
        raise RuntimeError(f"Playwright unavailable: {e}")

    svg_text = Path(svg_path).read_text(encoding="utf-8")
    html = (
        "<html><body style=\"margin:0;background:#f7f5ef;display:flex;align-items:flex-start;justify-content:flex-start;\">"
        f"{svg_text}"
        "</body></html>"
    )
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1100, "height": 560}, device_scale_factor=2)
        page.set_content(html, wait_until="load")
        page.screenshot(path=output_path)
        browser.close()
    return output_path


def generate_chart_files(csv_path: str, svg_path: str, png_path: str | None = None) -> tuple[str, str | None]:
    svg_out = generate_svg_file(csv_path, svg_path)
    png_out = None
    if png_path:
        try:
            png_out = generate_png_file(svg_out, png_path)
        except Exception:
            png_out = None
    return svg_out, png_out


def generate_ranking_chart_files(csv_path: str, svg_path: str, png_path: str | None, title: str, subtitle: str, value_key: str) -> tuple[str, str | None]:
    rows = _read_ranking_rows(csv_path, value_key)
    if not rows:
        raise ValueError(f"No rows found in {csv_path}")
    svg = build_ranking_svg(rows, title, subtitle, value_key)
    with open(svg_path, "w", encoding="utf-8") as fh:
        fh.write(svg)
    png_out = None
    if png_path:
        try:
            png_out = generate_png_file(svg_path, png_path)
        except Exception:
            png_out = None
    return svg_path, png_out


def generate_dashboard_png(image_specs: list[dict], output_path: str, title: str = "Macro Dashboard", subtitle: str = "Sentiment and structured focus overview") -> str:
    try:
        from playwright.sync_api import sync_playwright
    except Exception as e:
        raise RuntimeError(f"Playwright unavailable: {e}")
    cards = []
    for spec in image_specs:
        path = str(spec.get("path") or "")
        if not path or not os.path.exists(path):
            continue
        ext = os.path.splitext(path)[1].lower()
        mime = "image/png" if ext == ".png" else "image/svg+xml"
        encoded = base64.b64encode(Path(path).read_bytes()).decode("ascii")
        src = f"data:{mime};base64,{encoded}"
        caption = str(spec.get("caption") or os.path.basename(path))
        cards.append(
            f'<section class="card"><div class="card-title">{caption}</div><img src="{src}" alt="{caption}"/></section>'
        )
    if not cards:
        raise ValueError("No chart images available for dashboard")
    html = """
    <html>
    <head>
      <style>
        body { margin: 0; background: #efe9df; font-family: Arial, sans-serif; color: #1f2933; }
        .wrap { padding: 28px 28px 22px; }
        .hero { margin-bottom: 18px; }
        .title { font-size: 34px; font-weight: 700; letter-spacing: 0.2px; }
        .subtitle { font-size: 14px; color: #52606d; margin-top: 4px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .card { background: #fbfaf7; border: 1px solid #d9d3c7; border-radius: 18px; padding: 14px 14px 10px; box-shadow: 0 6px 24px rgba(31, 41, 51, 0.08); }
        .card-title { font-size: 16px; font-weight: 700; margin-bottom: 10px; }
        .card img { width: 100%; border-radius: 12px; display: block; background: #f7f5ef; }
      </style>
    </head>
    <body>
      <div class="wrap">
        <div class="hero">
          <div class="title">__TITLE__</div>
          <div class="subtitle">__SUBTITLE__</div>
        </div>
        <div class="grid">__CARDS__</div>
      </div>
    </body>
    </html>
    """.replace("__TITLE__", title).replace("__SUBTITLE__", subtitle).replace("__CARDS__", "".join(cards))
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 2260, "height": 1700}, device_scale_factor=1)
        page.set_content(html, wait_until="load")
        page.screenshot(path=output_path, full_page=True)
        browser.close()
    return output_path


def main():
    base = os.getcwd()
    csv_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(base, "cache", "sentiment_timeseries.csv")
    output_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join(base, "cache", "sentiment_timeseries.svg")
    png_path = sys.argv[3] if len(sys.argv) > 3 else os.path.splitext(output_path)[0] + ".png"
    try:
        svg_out, png_out = generate_chart_files(csv_path, output_path, png_path)
        print(png_out or svg_out)
    except ValueError as e:
        raise SystemExit(str(e))


if __name__ == "__main__":
    main()
