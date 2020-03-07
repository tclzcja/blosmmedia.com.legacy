NodeList.prototype.addEventListener = function (eventName, eventHandler) {
	for (let node of this) {
		node.addEventListener(eventName, eventHandler);
	}
}
window.addEventListener("load", function () {
	document.body.classList.remove("off");
})
window.particlesJS.load('particles', 'config/particles.json', function () {
	console.log('callback - particles.js config loaded');
});
document.querySelector("body > main#portfolio > nav.right").addEventListener("click", function () {
	document.querySelector("body > main#portfolio > main").scrollBy({
		top: 0,
		left: window.innerWidth,
		behavior: "smooth"
	});
});
document.querySelector("body > main#portfolio > nav.left").addEventListener("click", function () {
	document.querySelector("body > main#portfolio > main").scrollBy({
		top: 0,
		left: 0 - window.innerWidth,
		behavior: "smooth"
	});
});
document.querySelectorAll("body > main#portfolio > main > section > a").addEventListener("mouseenter", function () {
	this.parentNode.parentNode.parentNode.classList.add("on");
});
document.querySelectorAll("body > main#portfolio > main > section > a").addEventListener("mouseleave", function () {
	this.parentNode.parentNode.parentNode.classList.remove("on");
})
document.querySelector("body > header > header > select").value = navigator.language;
document.querySelector("body > header > header > select").addEventListener("change", function () {
	window.dispatchEvent(new CustomEvent("LANGUAGE", {
		detail: {
			"lang": this.value
		}
	}));
});
document.querySelector("body > header > header > select").dispatchEvent(new Event("change"));