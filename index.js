window.addEventListener("load", function () {
	document.body.classList.remove("off");
})
window.particlesJS.load('particles', 'assets/particles.json', function () {
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