//services array//

const services = [
  {
    name: "Aromatherapy",
    desc: "",
    price: "",
    per: "per person",
    badge: "Popular",
    img:'aromatherapy.jpg',
  },
  {
    name: "Wood Therapy",
    desc: "",
    price: "",
    per: "per person",
    badge:'',
    img:'woodtherapy.jpg',
  },
  {
    name: "Nature's Kiss",
    desc: "",
    price: "",
    per: "per person",
    badge: "Premium",
    img:'outdoornaturespa.jpg',
  },
  {
    name: "Swedish Massage",
    desc: "",
    price: "",
    per: "per person",
    badge: "Popular",
    img:'swedishcare.jpg',
  },
  {
    name: "Deep Tissue",
    desc: "",
    price: "",
    per: "per person",
    badge: "Popular",
    img:'deeptissue.jpg',
  },
  {
    name: "Yoga-Release",
    desc: "",
    price: "",
    per: "per person",
    badge:'',
    img:'yogarelease.jpg',
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
  card.innerHTML = `
    <img src="${s.img}"/>       
    <h3>${s.name}</h3>          
    <p>${s.desc}</p>            
    <div>${s.price}</div>       
  `;
  
  grid.appendChild(card);
} );


