rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Fanrongrong-123/wheel-vue3-ui-website.git &&
git push -f -u origin master &&
cd ..
