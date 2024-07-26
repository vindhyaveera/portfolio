const menuicon = document.querySelector(".fa-bars");
const menuitems = document.querySelector(".mainmenu");
const menuIconclose = document.querySelector(".fa-xmark");
const headmenuicon = document.querySelector(".menuicon");
const mainmenusmall = document.querySelector(".mainmenusmall");
const profilecontent = document.querySelector(".profilecontent");



// Toggle main menu on large screens
menuicon.addEventListener("click", function () {
  if (window.innerWidth > 600) {
    menuitems.classList.add("menuitemsclick");
    headmenuicon.style.display = "none"; // Hide the menu icon
  }
});
// menuicon.addEventListener("click", function () {
//   mainmenusmall.classList.toggle("show");
//   headmenuicon.style.display = "none"; // Hide the menu icon
// });

// menuIconclose.addEventListener("click", function () {
//   mainmenusmall.classList.remove("show");
//   headmenuicon.style.display = "flex"; // Show the menu icon again
// });


// Toggle main menu on small screens
menuicon.addEventListener("click", function () {
  if (window.innerWidth <= 600) {
    mainmenusmall.classList.toggle("show");
    profilecontent.classList.toggle("hide-profilecontent");
    headmenuicon.style.display = "none"; // Hide the menu icon
  }
});

menuIconclose.addEventListener("click", function () {
  mainmenusmall.classList.remove("show");
  profilecontent.classList.remove("hide-profilecontent");
  headmenuicon.style.display = "flex"; // Show the menu icon again
});
