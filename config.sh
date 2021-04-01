#!/bin/sh
if [ $1 = "nodejs" ]; then
    # remove unused files
    rm .babelrc
    rm .browserlistrc
    rm .stylelintrc
    rm .stylelintignore
    # update .eslintrc
    sed -i -e "3d;6d;8d" .eslintrc
    sed -i 's/react/base/' .eslintrc
    # update .lintstagedrc
    sed -i -e "5,7d" .lintstagedrc
    sed -i 's/],/]/' .lintstagedrc
    # update package.json
    sed -i -e "10d;17d;18d" package.json
fi

if [ $1 = "react" ]; then
    # update .eslintrc
    sed -i -e "8d" .eslintrc
    # update package.json
    sed -i -e "16d" package.json
fi
