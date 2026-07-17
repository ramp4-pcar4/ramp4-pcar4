# Slack Bot

## Steps to Re-Enable

1. Move `slack-bot-redux.yml` to `.github/workflows` folder
2. Rename `slack-bot.txt` to `slack-bot.py`
3. Move `slack-bot.py` and `requirements.txt` to `.github` folder
4. Update the version of the `transformers` to something >= 5.5.0 to avoid security issues
5. Maybe test it out.
