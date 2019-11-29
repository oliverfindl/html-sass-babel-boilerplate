"use strict";

(() => {

	const input = document.getElementById("input");

	document.getElementById("button").addEventListener("click", event => {
		event.preventDefault();

		const message = `Hello ${input.value ? input.value : "world"}!`;
		alert(message);
		console.log(message); // eslint-disable-line no-console
	}, false);

})();
