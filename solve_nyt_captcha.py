"""
Run this script to open a NYT article in a visible browser, solve the CAPTCHA manually,
and save the storage state to tools/nyt_storage.json for future headless runs.

Usage:
  python tools/solve_nyt_captcha.py <article_url>

Set environment variable PLAYWRIGHT_INTERACTIVE=1 to allow interactive mode in extractor.
"""
import sys
from playwright.sync_api import sync_playwright
import os

if len(sys.argv) < 2:
    print("Usage: python tools/solve_nyt_captcha.py <article_url>")
    sys.exit(1)

url = sys.argv[1]
storage_path = os.path.join(os.getcwd(), 'tools', 'nyt_storage.json')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    ctx = browser.new_context()
    page = ctx.new_page()
    print("Opening page, please solve any CAPTCHA or sign-in if needed.")
    page.goto(url)
    try:
        page.wait_for_load_state('networkidle', timeout=0)
    except Exception:
        pass
    input('After you have solved the CAPTCHA and can see the article, press Enter to save storage state...')
    try:
        ctx.storage_state(path=storage_path)
        print('Saved storage state to', storage_path)
    except Exception as e:
        print('Failed to save storage state:', e)
    browser.close()
