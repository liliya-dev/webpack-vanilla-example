sudo git add -f ./build
sudo git commit -m "build"
sudo git push --delete origin gh-pages
sudo git subtree --prefix build push origin gh-pages
sudo git reset HEAD^ --soft
sudo rm -rf ./build
sudo git reset -- ./build
