var button = document.querySelector(".page-header__toggle");
var cross = document.querySelector(".page-header__cross");
var nav = document.querySelector(".main-nav");
var altmap = document.querySelector(".search-hotels__map-alt");
var map = document.querySelector(".search-hotels__map-interactive");


document.addEventListener("DOMContentLoaded", function() {
  nav.classList.remove("main-nav--no-js");
  cross.classList.remove("page-header__cross--no-js");
  button.classList.remove("page-header__toggle--no-js");
})

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.remove("main-nav--inactive");
  nav.classList.add("main-nav--active");
  button.classList.add("page-header__toggle--no-js");
})

cross.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.remove("main-nav--active");
  nav.classList.add("main-nav--inactive");
  button.classList.remove("page-header__toggle--no-js");
})

if (map) {
  document.addEventListener("DOMContentLoaded", function() {
    altmap.classList.remove("search-hotels__map-alt--default");
    map.classList.remove("search-hotels__map-interactive--inactive");
  })
}
