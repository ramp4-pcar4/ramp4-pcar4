# see the following for 'github pages git@github.com: Permission denied (publickey)': 
# https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key

# delete the common/docs/.vuepress/dist folder after deploying

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd ../docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:ramp4-pcar4/ramp4-pcar4.git master:gh-pages

cd -
