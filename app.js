import { mockData } from "./mockData.js";

const cards = document.querySelector(".cards");

mockData.forEach((driver) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const driverIntro = document.createElement("div");
  driverIntro.classList.add("driver-intro");
  const driverName = document.createElement("h2");
  driverName.classList.add("driver-name");
  driverName.textContent = `${driver.firstName} ${driver.lastName} `;
  driverIntro.appendChild(driverName);

  const country = document.createElement("h2");
  country.textContent = driver.country;
  driverIntro.appendChild(country);

  card.appendChild(driverIntro);

  const driverVisual = document.createElement("div");
  driverVisual.classList.add("driver-visual");
  const driverImg = document.createElement("img");
  driverImg.src = driver.image;
  driverImg.classList.add("driver-img");
  driverVisual.appendChild(driverImg);

  const points = document.createElement("span");
  points.textContent = `${driver.points} PTS`;
  driverVisual.appendChild(points);
  card.appendChild(driverVisual);

  const description = document.createElement("div");
  description.classList.add("description");
  const team = document.createElement("p");
  team.textContent = `Team: ${driver.team}`;
  description.appendChild(team);

  const number = document.createElement("p");
  number.textContent = `No: ${driver.number}`;
  description.appendChild(number);

  card.appendChild(description);

  cards.appendChild(card);
});
