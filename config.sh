#!/bin/bash

echo ""
echo "-----------------------"
echo "$(tput setaf 3)DV project start helper$(tput sgr 0)"
echo "-----------------------"
echo ""

PS3='Choose your environment (number) and press Enter: '
options=("NodeJS" "React or HTML/CSS/JS" "Other")
select opt in "${options[@]}"
do
    case $opt in
        "NodeJS")
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
            sed -i -e "10d;18d;19d" package.json
            echo ""
            echo "$(tput setaf 2)Project was configured for NodeJS"
            break
            ;;
        "React or HTML/CSS/JS")
            # update .eslintrc
            sed -i -e "8d" .eslintrc
            # update package.json
            sed -i -e "17d" package.json
            echo ""
            echo "$(tput setaf 2)Project was configured for React or HTML/CSS/JS"
            break
            ;;
        "Other")
            echo ""
            echo "$(tput setaf 4)OK, no problem. Just configure your project manually."
            break
            ;;
        *)
            echo ""
            echo "$(tput setaf 7)$(tput setab 1)Wrong input: $REPLY$(tput sgr 0) $(tput setaf 4)But it's OK, just configure your project manually."
            break
            ;;
    esac
done

echo "$(tput sgr 0)"

jq '.scripts.postinstall = "npx husky install"' package.json > package.tmp && mv package.tmp package.json
