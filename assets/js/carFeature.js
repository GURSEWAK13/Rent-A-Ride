const carData = [
  {
    image: "./assets/images/car-1.jpg",
    title: "Toyota RAV4",
    year: 2021,
    capacity: "4 People",
    fuelType: "Hybrid",
    mileage: "6.1km / 1-litre",
    transmission: "Automatic",
    price: 440
  },
  {
    image: "./assets/images/car-2.jpg",
    title: "BMW 3 Series",
    year: 2019,
    capacity: "4 People",
    fuelType: "Gasoline",
    mileage: "8.2km / 1-litre",
    transmission: "Automatic",
    price: 350
  },
  {
    image: "./assets/images/car-3.jpg",
    title: "Volkswagen T-Cross",
    year: 2020,
    capacity: "4 People",
    fuelType: "Gasoline",
    mileage: "6.2km / 1-litre",
    transmission: "Automatic",
    price: 350
  },
  {
    image: "./assets/images/car-4.jpg",
    title: "BMW 4 Series GTI",
    year: 2021,
    capacity: "2 People",
    fuelType: "Gasoline",
    mileage: "10.2km / 1-litre",
    transmission: "Automatic",
    price: 350
  },
  {
    image: "./assets/images/car-5.jpg",
    title: "BMW 4 Series",
    year: 2018,
    capacity: "4 People",
    fuelType: "Gasoline",
    mileage: "8.2km / 1-litre",
    transmission: "Automatic",
    price: 250
  },
  {
    image: "./assets/images/car-6.jpg",
    title: "Cadillac Escalade",
    year: 2019,
    capacity: "4 People",
    fuelType: "Gasoline",
    mileage: "8.2km / 1-litre",
    transmission: "Automatic",
    price: 150
  },
];
const featuredCarList = document.querySelector(".featured-car-list");
function rent_car(image, title, year, capacity, fuelType, mileage, transmission, price) {
  const rentalData = {
    image,
    title,
    year,
    capacity,
    fuelType,
    mileage,
    transmission,
    price
  };

  console.log(car);
  localStorage.setItem('rentalData', JSON.stringify(rentalData));
}
function renderCarCard(car) {
  const card = document.createElement("li");
  card.innerHTML = `
    <div class="featured-car-card">
      <figure class="card-banner">
        <img src="${car.image}" alt="${car.title} ${car.year}" loading="lazy" width="440" height="300" class="w-100">
      </figure>
      <div class="card-content">
        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">${car.title}</a>
          </h3>
          <data class="year" value="${car.year}">${car.year}</data>
        </div>
        <ul class="card-list">
          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>
            <span class="card-item-text">${car.capacity}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>
            <span class="card-item-text">${car.fuelType}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>
            <span class="card-item-text">${car.mileage}</span>
          </li>
          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>
            <span class="card-item-text">${car.transmission}</span>
          </li>
        </ul>
        <div class="card-price-wrapper">
          <p class="card-price">
            <strong>₹${car.price}</strong> / hour
          </p>
          <button class="btn fav-btn" aria-label="Add to favourite list">
              <p><span style="font-size: 20px;">&hearts;</span></p>
          </button>
          <button class="btn" onclick="${localStorage.setItem('rentalData', JSON.stringify(car))};">Rent now</button>
        </div>
      </div>
    </div>
  `;
  featuredCarList.appendChild(card);
}

carData.forEach(renderCarCard);
const form = document.querySelector('.hero-form');
const searchButton = form.querySelector('button[type="submit"]');
const searchInput = form.querySelector('#input-1');
const maxPaymentInput = form.querySelector('#input-2');
const makeYearInput = form.querySelector('#input-3');
// const featuredCarList = document.querySelector('.featured-car-list');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  const maxPayment = parseInt(maxPaymentInput.value);
  const makeYear = parseInt(makeYearInput.value);

  const filteredCars = carData.filter((car) => {
    const titleMatch = car.title.toLowerCase().includes(searchTerm);
    const yearMatch = car.year >= makeYear;
    const priceMatch = car.price <= maxPayment;

    return titleMatch && yearMatch && priceMatch;
  });

  featuredCarList.innerHTML = '';
  filteredCars.forEach(renderCarCard);
});