//services array//

const services = [
  {
    name: "Aromatherapy",
    desc: "Reset your brain stimulus with aromatherapy using the most organic and natures produce.",
    price: "ksh3000",
    per: "per person",
    badge: "Popular",
    img:'aromatherapy.jpg',
  },
  {
    name: "Wood Therapy",
    desc: "Sculpt and tone your body through our wood therapy session and release tught muscle points.",
    price: "ksh3500",
    per: "per person",
    badge:'New',
    img:'woodtherapy.jpg',
  },
  {
    name: "Nature's touch",
    desc: "Dive into a wholesome experience with nature as you exhale the pressure out you inhale fresh air embracing nature's love wholeheartedly.",
    price: "ksh4000",
    per: "per person",
    badge: "Premium",
    img:'outdoorfresh.jpg',
  },
  {
    name: "Swedish Massage",
    desc: "Relax and enjoy  our calm and therapeutic session to enhance blood flow and reduce cortisol. ",
    price: "ksh3500",
    per: "per person",
    badge: "Popular",
    img:'swedishcare.jpg',
  },
  {
    name: "Deep Tissue",
    desc: "Through this session you will release deep tension in your muscle and eave you feeling whole again. ",
    price: "ksh4000",
    per: "per person",
    badge: "Popular",
    img:'deeptissue.jpg',
  },
  {
    name: "Yoga",
    desc: "Move your body and practice breathe control in this session as you mobilise your bosy to move swifly",
    price: "ksh1000",
    per: "per person",
    badge:'',
    img:'yogarelease.jpg',
  },
  {
    name: "Mat Pilates",
    desc: "Scult your body and tone it using it's own strength.",
    price: "ksh2000",
    per: "per person,per session",
    badge:'',
    img:'pilatesstudio.jpg',
  },

];

console.log("script loaded!");
const grid = document.getElementById('servicesGrid');

//"for each service in the list, do this..."
// s = the current service being processed

services.forEach((s) => {
  const card = document.createElement("a"); //create a card element
  card.href = "booking.html"; //link to booking page
  card.className = "services-card";
  // Fill the card with HTML using the service data
  card.innerHTML =
    '<div class="services-img-wrap">' +
    '<img src"' +
    s.img +
    '" alt="' +
    s.name +
    '" loading="lazy"/>' +
    '<div class="services-img-overlay"></div>' +
    (s.badge ? '<div class="services-badge">' + s.badge + "</div>" : "") +
    "</div>" +
    '<div class="services-body">' +
    '<h3 class="services-name">' +
    s.name +
    '</h3>' +
    '<p class="services-desc">' +
    s.desc +
    '</p>' +
    '<p class="services-price">' +
    s.price +
    '<span>' +
    s.per +
    '</span></p>' +
    '<button class="services-btn">Book now </button>' +
    '</div>';

  grid.appendChild(card);
} );


