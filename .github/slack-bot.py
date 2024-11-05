import os
import json
from transformers import pipeline

# Get the PR body and labels from environment variables
pr_body = os.environ.get('PR_BODY', '')
pr_labels_json = os.environ.get('PR_LABELS_JSON', '[]')
pr_labels = json.loads(pr_labels_json)

# Summarization (example model, could be adjusted)
summarizer = pipeline('summarization', model='tuner007/pegasus_summarizer')
neutral_summary = summarizer(pr_body, max_length=200, min_length=25, do_sample=False)[0]['summary_text']

# PR label types with associated metadata
pr_label_types = {
    'PR: Active': ['Active', 'https://github.com/search?q=org%3Aramp4-pcar4+state%3A%22open%22+type%3A%22pr%22+label%3A%22PR%3A+Active%22&type=pullrequests'],
    'PR: Build': ['Build', 'https://github.com/search?q=org%3Aramp4-pcar4+state%3A%22open%22+type%3A%22pr%22+label%3A%22PR%3A+Active%22%2C%22PR%3A+Build%22+&type=pullrequests'],
    'PR: Frontend': ['Frontend', 'https://github.com/search?q=org%3Aramp4-pcar4+state%3A%22open%22+type%3A%22pr%22+label%3A%22PR%3A+Active%22%2C%22PR%3A+Frontend%22+&type=pullrequests'],
    'PR: Geo': ['Geo', 'https://github.com/search?q=org%3Aramp4-pcar4+state%3A%22open%22+type%3A%22pr%22+label%3A%22PR%3A+Active%22%2C%22PR%3A+Geo%22+&type=pullrequests']
}

# Format PR label links as Slack mrkdwn links
pr_label_str = ", ".join(
    f"<{pr_label_types[label['name']][1]}|{pr_label_types[label['name']][0]}>"
    for label in pr_labels if pr_label_types.get(label['name'])
)
if (len(pr_label_str) == 0):
    pr_label_str = "None"

# Handle regular labels (not in pr_label_types)
reg_label_str = ", ".join(
    label['name'] for label in pr_labels if pr_label_types.get(label['name']) is None
)
if (len(reg_label_str) == 0):
    reg_label_str = "None"

# Write all results to environment 
with open(os.environ['GITHUB_ENV'], 'a') as env_file:
    env_file.write(f'NEUTRAL_SUMMARY={neutral_summary}\n')
    env_file.write(f'PR_LABEL_STR={pr_label_str}\n')
    env_file.write(f'REG_LABEL_STR={reg_label_str}\n')