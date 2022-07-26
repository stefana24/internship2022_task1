import { mockData } from "./mockData.js";
import { countries } from "./utils/countries.js";

const cards = document.querySelector(".cards");

mockData.sort((a, b) =>
  a.points > b.points
    ? -1
    : a.points === b.points
    ? a.firstName > b.firstName
      ? 1
      : -1
    : 1
);

mockData.forEach((driver, index) => {
  const card = document.createElement("div");
  let currentPoints = driver.points;
  card.style.setProperty(`--text`, `${driver.hex}`);
  card.innerHTML = `
  <div class="card">
    <div class="driver_number_points">
      <h3 class="number">${index + 1}</h3>
      <button class="increaseScoreBtn">+</button>
      <div class="driver_points">
        <p class="number_point">${driver.points}</p>
        <p class="label">PTS</p>
      </div>
    </div>

    <div class="driver_name_country">
      <div class="driver_name color">
        <span>${driver.firstName}</span>
        <span class="lastName">${driver.lastName}</span>
      </div>

      <div class="country_img_container">
        <img src="" class="countryImage">
      </div>

    </div>

    <div class="driver_team">${driver.team}</div>

    <div class="driver_image">
      <button class="driver_number">${driver.number}</button>
      <img src=${driver.image} class="driver_img">
    </div>

  </div>
  `;

  const increaseScoreBtn = card.querySelector(".increaseScoreBtn");
  const number_point = card.querySelector(".number_point");
  increaseScoreBtn.addEventListener("click", () => {
    currentPoints++;
    number_point.textContent = `${currentPoints}`;
  });

  const countryImage = card.querySelector(".countryImage");
  countries.forEach((country) => {
    if (country.id === driver.country) {
      countryImage.src = country.flag;
      countryImage.alt = driver.country;
    }
  });

  cards.appendChild(card);
});
