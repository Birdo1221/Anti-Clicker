const toggle = document.getElementById("toggle");
const status = document.getElementById("status");
const infoButton = document.getElementById("infoButton");
const modal = document.getElementById("infoModal");
const closeModal = document.getElementsByClassName("close")[0];

chrome.storage.sync.get("isActive", ({ isActive }) => {
  toggle.checked = isActive;
  status.textContent = isActive ? "Enabled" : "Disabled";
});

toggle.addEventListener("change", () => {
  const newState = toggle.checked;
  chrome.storage.sync.set({ isActive: newState });
  status.textContent = newState ? "Enabled" : "Disabled";
});

infoButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
