// HAMBURGER MENU — toggle open/close

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("open");
  hamburger.classList.toggle("is-open");
}

// MOBILE MENU — close when a link is clicked

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("is-open");
  });
});

//local storage//




//booking form with event listener//

