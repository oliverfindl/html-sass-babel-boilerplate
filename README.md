# html-sass-babel-boilerplate

![license](https://img.shields.io/github/license/oliverfindl/html-sass-babel-boilerplate.svg?style=flat)
[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg?colorB=0070ba&style=flat)](https://paypal.me/oliverfindl)

Simple boilerplate for building web app with [babel-cli](https://github.com/babel/babel/tree/master/packages/babel-cli) and [node-sass](https://github.com/sass/node-sass).

---

## Install

```bash
# Clone repository from GitHub to <directory>
$ git clone https://github.com/oliverfindl/html-sass-babel-boilerplate <directory>

# Switch to <directory>
$ cd <directory>

# Install all dependencies
$ npm install

# [optional] Update all dependencies
$ npm update
```

## Usage

```bash
# Build and minify both resources
$ npm run build

# Build and minify main.js file
$ npm run build:js

# Watch for changes in main.js file
$ npm run watch:js

# Build and minify main.scss file
$ npm run build:css

# Watch for changes in main.scss file
$ npm run watch:css
```

## Structure

```
.                       # root
├── dist                # directory for distributables 
│   ├── css             # directory for minified css
│   └── js              # directory for minified js
├── src                 # directory for source code
│   ├── js              # directory for js files
│   │   └── main.js     # main js file
│   └── scss            # directory for scss files
│       └── main.scss   # main scss file
├── index.html          # index file for web app
└── package.json        # configuration file for npm
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
