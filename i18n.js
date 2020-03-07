const dictionary = {
	"en": {
		"about": "About",
		"contact": "Contact",
		"portfolio": "Portfolio",
		"submit": "Submit",
		"business-request": "Business Request"
	},
	"zh-CN": {
		"about": "关于我们",
		"contact": "联系我们",
		"portfolio": "往期作品",
		"submit": "提交",
		"business-request": "商务请求"
	}
};
let currentLang = navigator.language;
const LIST_TEXTCONTENT = document.querySelectorAll("[data-i18n-textContent]");
const LIST_ATTRIBUTE = document.querySelectorAll("[data-i18n-attribute]");
window.addEventListener("LANGUAGE", function (e) {
	currentLang = e.detail.lang;
	for (let e of LIST_TEXTCONTENT) {
		e.textContent = dictionary[currentLang][e.getAttribute("data-i18n-textContent")];
	}
	for (let e of LIST_ATTRIBUTE) {
		let attr = e.getAttribute("data-i18n-attribute").split("/");
		e.setAttribute(attr[0], dictionary[currentLang][attr[1]]);
	}
});