# html-sass-babel-boilerplate

![license](https://img.shields.io/github/license/oliverfindl/html-sass-babel-boilerplate.svg?style=flat)
[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg?colorB=0070ba&style=flat)](https://paypal.me/oliverfindl)

Simple boilerplate for building your web app with [node-sass](https://github.com/sass/node-sass) and [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli).

---

## Install

```bash
# Clone repository from GitHub to <folder-name>
$ git clone https://github.com/oliverfindl/html-sass-babel-boilerplate <folder-name>

# Switch to <folder-name>
$ cd <folder-name>

# Install all dependencies
$ npm install

# [optional] Update all dependencies
$ npm update
```

## Usage

```bash
# Build and minify both resources
$ npm run build

# Build and minify main.scss file
$ npm run build:css

# Watch for changes in main.scss file
$ npm run watch:css

# Build and minify main.js file
$ npm run build:js

# Watch for changes in main.js file
$ npm run watch:js
```

## Structure

```
.                       # root
├── dist                # folder for distributables 
│   ├── css             # folder for minified css
│   └── js              # folder for minified js
├── src                 # folder for source code
│   ├── js              # folder for js files
│   │   └── main.js     # main js file
│   └── scss            # folder for scss files
│       └── main.scss   # main scss file
├── index.html          # sample html index
└── package.json        # configuration file for npm
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
