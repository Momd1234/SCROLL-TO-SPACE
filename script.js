let swipes = 0;
let distance = 0;
let time = 0;

const swipeCountEl = document.getElementById("swipeCount");
const distanceEl = document.getElementById("distanceKm");
const timeEl = document.getElementById("timeSpent");
const milestoneEl = document.getElementById("milestone");

function updateStats() {
  swipeCountEl.textContent = swipes;
  distance = swipes * 0.00015; // km
  distanceEl.textContent = distance.toFixed(2);
  time = swipes * 5; // seconds
  timeEl.textContent = `${time}s`;

  // Milestones
  if (distance >= 384400 && distance < 384500) {
    milestoneEl.textContent = "🌕 You've reached the Moon!";
  } else if (distance >= 149600000 && distance < 149600100) {
    milestoneEl.textContent = "☀️ You've reached the Sun!";
  } else if (distance >= 5900000000 && distance < 5900000100) {
    milestoneEl.textContent = "🪐 You've passed Pluto!";
  } else if (distance >= 880000000000000000000000 && distance < 880000000000000000000100) {
    milestoneEl.textContent = "🌌 You've reached the edge of the observable universe!";
  } else {
    milestoneEl.textContent = "";
  }
}

document.getElementById("scrollArea").addEventListener("wheel", () => {
  swipes++;
  updateStats();
});
