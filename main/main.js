const burguer = document.querySelector(".menu-bar");
const menu = document.querySelector(".container-menu");

burguer.addEventListener("click", function () {
  menu.classList.toggle("activado");
});
