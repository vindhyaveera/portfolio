const menuicon = document.querySelector(".fa-bars");
const menuitems = document.querySelector(".mainmenu");
const menuIconclose = document.querySelector(".fa-xmark");

menuicon.addEventListener("click", function (pa) {
  menuitems.classList.add("menuitemsclick");
});

