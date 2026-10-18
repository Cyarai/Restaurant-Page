# Kopa Noodle Bar (Odin Project: Restaurant Page)

A restaurant site where JavaScript builds all the page content.

## Run it
```bash
npm install
npx webpack serve     
```

## Build it
```bash
npx webpack           
```

## Project structure
```
src/
  template.html   header, nav buttons, empty #content
  index.js        imports the tabs, handles tab switching
  dom.js          small el() helper for creating elements
  home.js         homepage tab
  menu.js         menu tab
  contact.js      contact tab
  styles.css      all styling
webpack.config.js
.gitignore        node_modules and dist
```

## Deploy to GitHub Pages
First time only:
```bash
git branch gh-pages
```

Every time you deploy:
```bash
git status                                   
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```
Then set the Pages source branch to `gh-pages` in the repo's Settings.
