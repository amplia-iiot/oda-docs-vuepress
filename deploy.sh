#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Deploy ODA documentation'

git push -f git@github.com:amplia-iiot/oda-docs.git master

cd -
