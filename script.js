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


//booking form with event listener//
function submitBooking(){
  const firstName = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;

  //form validation//
  if(!firstName || !email || !service){
    alert('Please fill in your name, email, and select a service.');
    return;
  }

  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
}

