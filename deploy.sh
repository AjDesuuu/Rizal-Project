#!/bin/bash

# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize git and push to gh-pages branch
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/AjDesuuu/Rizal-Project.git
git push -u origin gh-pages --force

cd ..
