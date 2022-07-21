import { mockData } from "./mockData.js";

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

mockData.forEach((driver) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const driverIntro = document.createElement("div");
  driverIntro.classList.add("driver-intro");
  const driverName = document.createElement("h2");
  driverName.style = `border-bottom: 5px solid ${driver.hex};`;
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

  card.addEventListener("mouseover", () => {
    card.style = `
    border-width: 5px;
    border-top-style: solid;
    border-right-style: solid;
    border-color: ${driver.hex};
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style = `
    border-width: 1px;
    border-top-style: solid;
    border-right-style: solid;
    border-color: black;`;
  });

  const increaseScoreBtn = document.createElement("button");
  increaseScoreBtn.textContent = "Increase score";
  increaseScoreBtn.classList.add("scoreBtn");
  description.appendChild(increaseScoreBtn);
  increaseScoreBtn.style = `background-color: ${driver.hex}`;

  let modifiedPoints = driver.points;
  increaseScoreBtn.addEventListener("click", () => {
    modifiedPoints++;
    points.textContent = `${modifiedPoints} PTS`;
  });

  cards.appendChild(card);
});
