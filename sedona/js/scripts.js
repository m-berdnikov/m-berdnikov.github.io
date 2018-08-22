var button = document.querySelector(".form-title-button");
var form = document.querySelector(".map-form");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (form.classList.contains("modal-inactive") != true ) {
		form.classList.toggle("modal-inactive");
	} else {
		form.classList.toggle("modal-active");
	}
})