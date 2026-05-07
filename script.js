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



// SAVE form data as user types//


// Get all the input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const services = document.getElementById('services');
const date = document.getElementById('date');
const guests = document.getElementById('guests');
const message = document.getElementById('message');

// as a user types  it save it automatically//
firstName.addEventListener('input', function() {
  localStorage.setItem('firstName', firstName.value);
});

lastName.addEventListener('input', function() {
  localStorage.setItem('lastName', lastName.value);
});

email.addEventListener('input', function() {
  localStorage.setItem('email', email.value);
});

phone.addEventListener('input', function() {
  localStorage.setItem('phone', phone.value);
});

services.addEventListener('change', function() {
  localStorage.setItem('services', services.value);
});

date.addEventListener('input', function() {
  localStorage.setItem('date', date.value);
});

guests.addEventListener('input', function() {
  localStorage.setItem('guests', guests.value);
});

message.addEventListener('input', function() {
  localStorage.setItem('message', message.value);
});


// LOAD saved data when page opens in arrays//

function loadSavedData() {
  if (localStorage.getItem('firstName')) {
    firstName.value = localStorage.getItem('firstName');
  }
  if (localStorage.getItem('lastName')) {
    lastName.value = localStorage.getItem('lastName');
  }
  if (localStorage.getItem('email')) {
    email.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('phone')) {
    phone.value = localStorage.getItem('phone');
  }
  if (localStorage.getItem('services')) {
    services.value = localStorage.getItem('services');
  }
  if (localStorage.getItem('date')) {
    date.value = localStorage.getItem('date');
  }
  if (localStorage.getItem('guests')) {
    guests.value = localStorage.getItem('guests');
  }
  if (localStorage.getItem('message')) {
    message.value = localStorage.getItem('message');
  }
}

// Run when page loads
loadSavedData();

// this clears saved data after booking

function submitBooking() {
  const firstNameVal = document.getElementById('firstName').value.trim();
  const emailVal = document.getElementById('email').value.trim();
  const servicesVal = document.getElementById('services').value;

  if (!firstNameVal || !emailVal || !servicesVal) {
    alert('Please fill in your name, email and select a service.');
    return;
  }
 }
function getDayOfWeek(day, month, year) {
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }


  // Clear all saved data after successful booking
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('phone');
  localStorage.removeItem('services');
  localStorage.removeItem('date');
  localStorage.removeItem('guests');
  localStorage.removeItem('message');

  // Show success message
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
}


