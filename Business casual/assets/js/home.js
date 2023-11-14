const menu = document.querySelector(".menu");
const openicon = document.querySelector(".menu .fa-bars");
const closeicon = document.querySelector(".fa-xmark");
const showmenu = document.querySelector(".showmenu");
const ulshow = document.querySelector(".ulshow");
const sec1 = document.querySelector(".sec1");
openicon.addEventListener("click", function () {
  showmenu.style.display = "block";
});

closeicon.addEventListener("click", function () {
  showmenu.style.display = "none";
});
