window.addEventListener("load", function () {
	document.body.classList.remove("off");
})
window.particlesJS.load('particles', 'assets/particles.json', function () {
	console.log('callback - particles.js config loaded');
});