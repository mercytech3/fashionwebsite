//const menu = document.querySelector('mobile-menu')
//const menuLinks = document.querySelector('.navbar__menu')

//menu.addEventListener('click', function() { 
  //menu.classList.toggle('is-active')
  //menuLinks.classList.toggle('active')
//})

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar__menu");

  mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
  });
});
