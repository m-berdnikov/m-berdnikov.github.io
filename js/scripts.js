var button = document.querySelector(".form-title-button");
var form = document.querySelector(".map-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("modal-inactive");
})