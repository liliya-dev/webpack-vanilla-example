git add -f ./build
git commit -m "build"
git push --delete origin gh-pages
git subtree --prefix build push origin gh-pages
git reset HEAD^ --soft
rm -rf ./build
git reset -- ./build
