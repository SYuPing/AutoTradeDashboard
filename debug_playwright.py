from playwright.sync_api import sync_playwright

url = 'https://www.nytimes.com/2026/03/20/technology/tokenmaxxing-ai-agents.html'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    page = ctx.new_page()
    try:
        page.goto(url, timeout=30000)
        page.wait_for_load_state('networkidle', timeout=5000)
    except Exception as e:
        print('NAV ERROR', e)
    html = page.content()
    print('HTML LEN', len(html))
    # try to select article
    try:
        article = page.query_selector('section[name="articleBody"]') or page.query_selector('article')
        if article:
            print('Found article selector; text len=', len(article.inner_text()))
        else:
            print('No article selector found')
    except Exception as e:
        print('SELECT ERROR', e)
    browser.close()
