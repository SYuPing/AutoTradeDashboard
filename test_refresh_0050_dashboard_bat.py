from pathlib import Path


def test_refresh_bat_exists_and_targets_today_snapshot_generation():
    bat_path = Path(__file__).resolve().parents[1] / "refresh_0050_dashboard.bat"
    text = bat_path.read_text(encoding="utf-8") if bat_path.exists() else ""

    assert bat_path.exists()
    assert "Get-Date -Format yyyy-MM-dd" in text
    assert 'set "TARGET_DIR=%~dp0cache\\%TODAY%"' in text
    assert 'node "%~dp0tools\\0050_dashboard_snapshot.js" "%TARGET_DIR%"' in text
    assert "where node" in text
