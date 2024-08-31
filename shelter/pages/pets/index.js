const body = document.body;
const burger = document.querySelector(".burger");
const popup = document.querySelector("nav");
const filter = document.querySelector(".body-filter");

burger.addEventListener("click", burgerActive);
function burgerActive() {
    burger.classList.toggle("active");
    popup.classList.toggle("open");
    body.classList.toggle("noscroll");
    filter.classList.toggle("active");
}

const links = Array.from(popup.children);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
    burger.classList.remove("active");
    popup.classList.remove("open");
    body.classList.remove("noscroll");
    filter.classList.remove("active");
}

body.addEventListener("click", (e) => {
	const popupActive = e.composedPath().includes(".popup");
 	if (!popupActive) {
	filter.addEventListener("click", closeOnClick);
	}
});



