import requests
import os

# WARNING: This script will exchange Channel ID and Channel Secret for a channel access token
# and write it to the repository .env file. Do not commit .env to public repos.

CHANNEL_ID = "2009576167"
CHANNEL_SECRET = "c9c0840503b9f3bcaf12d03aa5b17181"

def main():
    url = "https://api.line.me/v2/oauth/accessToken"
    data = {
        "grant_type": "client_credentials",
        "client_id": CHANNEL_ID,
        "client_secret": CHANNEL_SECRET,
    }
    try:
        resp = requests.post(url, data=data, timeout=10)
        resp.raise_for_status()
    except Exception as e:
        print("ERROR: token request failed:", e)
        return 2
    j = resp.json()
    token = j.get("access_token")
    if not token:
        print("ERROR: no access_token in response:", j)
        return 3

    # write to .env (append or replace LINE_CHANNEL_ACCESS_TOKEN)
    env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
    env_path = os.path.abspath(env_path)
    try:
        # read existing
        lines = []
        if os.path.exists(env_path):
            with open(env_path, "r", encoding="utf-8") as fh:
                lines = fh.readlines()
        # replace or append
        key = "LINE_CHANNEL_ACCESS_TOKEN"
        found = False
        for i, ln in enumerate(lines):
            if ln.strip().startswith(key + "="):
                lines[i] = f"{key}={token}\n"
                found = True
                break
        if not found:
            lines.append(f"{key}={token}\n")
        with open(env_path, "w", encoding="utf-8") as fh:
            fh.writelines(lines)
        print("OK: token written to .env")
        return 0
    except Exception as e:
        print("ERROR: failed to write .env:", e)
        return 4

if __name__ == '__main__':
    raise SystemExit(main())
