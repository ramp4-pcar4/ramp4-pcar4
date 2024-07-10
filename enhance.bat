git checkout main
git pull --ff-only upstream main
git push origin main
git checkout jamesparty
git rebase main
git status -s
echo ""
echo "ENHANCE!"
