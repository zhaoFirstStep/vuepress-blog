# @Author: admin
# @Date:   2019-03-27 21:53:52
# @Last Modified by:   admin
# @Last Modified time: 2019-03-28 12:53:42

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
#echo 'www.magiczqblog.com' > CNAME

git init
git add -A
git commit -m 'blog'

git remote add origin https://github.com/zhaoFirstStep/blog.git

git push -f origin master:gh-pages

#git push -f https://github.com/zhaoFirstStep/blog.git marster:gh-pages
#
#zhaoFirstStep.github.io/blog

cd -
