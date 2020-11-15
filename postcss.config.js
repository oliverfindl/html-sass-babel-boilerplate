"use strict";

const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
	plugins: [
		autoprefixer(),
		purgecss({
			content: [ "index.html" ],
			keyframes: true,
			fontFace: true,
			variables: true
		})
	]
};
