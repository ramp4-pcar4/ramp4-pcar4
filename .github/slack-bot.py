import os
from transformers import pipeline

# Get the PR body from environment variable
pr_body = os.environ['PR_BODY']

# Step 1: Summarize with a neutral tone
summarizer = pipeline('summarization')
neutral_summary = summarizer(pr_body, max_length=200, min_length=25, do_sample=False)[0]['summary_text']

# Step 2: Rephrase with a cheerful tone using text generation
rephrase_prompt = f'Rephrase this in a joking but still professional tone: {neutral_summary}'
generator = pipeline('text-generation', model='gpt2')
cheerful_summary = generator(rephrase_prompt, max_length=200, num_return_sequences=1)[0]['generated_text']

# Output cheerful summary to environment
with open(os.environ['GITHUB_ENV'], 'a') as env_file:
    env_file.write(f'CHEERFUL_SUMMARY={cheerful_summary}')