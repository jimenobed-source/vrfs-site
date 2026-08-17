// ===============================
// VRFS INDEX ITEM DATA
// ===============================

const items = [
  // ... your full items list stays the same ...
];

const container = document.getElementById("items");

// ===============================
// LOAD SAVED OWNERSHIP
// ===============================

function loadOwnedStatus() {
  const saved = JSON.parse(localStorage.getItem("ownedItems")) || {};
  return saved;
}

function saveOwnedStatus(status) {
  localStorage.setItem("ownedItems", JSON.stringify(status));
}

let ownedStatus = loadOwnedStatus();

// ===============================
// RENDER FUNCTION
// ===============================

function renderItems(list) {
  container.innerHTML = "";

  const leagues = {};

  list.forEach(item => {
    if (!leagues[item.league]) leagues[item.league] = [];
    leagues[item.league].push(item);
  });

  Object.keys(leagues).sort().forEach(league => {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${league}</h2>`;

    const row = document.createElement("div");
    row.className = "item-row";

    leagues[league].forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";

      const isOwned = ownedStatus[item.name] === true;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onclick="showDetails('${item.name}')">
        <p>${item.name}</p>
        <label class="owned-label">
          <input type="checkbox" class="owned-checkbox" ${isOwned ? "checked" : ""} 
            onchange="toggleOwned('${item.name}', this.checked)">
          Owned
        </label>
      `;

      row.appendChild(card);
    });

    section.appendChild(row);
    container.appendChild(section);
  });
}

// ===============================
// OWNED TOGGLE (SAVES FOREVER)
// ===============================

function toggleOwned(name, value) {
  ownedStatus[name] = value;
  saveOwnedStatus(ownedStatus);
}

// ===============================
// SORTING FUNCTIONS
// ===============================

function sortLeague() {
  const sorted = [...items].sort((a, b) => a.league.localeCompare(b.league));
  renderItems(sorted);
}

function sortRarity() {
  const sorted = [...items].sort((a, b) => a.rarity.localeCompare(b.rarity));
  renderItems(sorted);
}

// ===============================
// RARITY FILTER
// ===============================

function filterRarity(rarity) {
  const filtered = items.filter(item => item.rarity.toUpperCase() === rarity.toUpperCase());
  renderItems(filtered);
}

// ===============================
// ITEM DETAILS PAGE
// ===============================

function showDetails(name) {
  const item = items.find(i => i.name === name);
  const isOwned = ownedStatus[name] === true;

  container.innerHTML = `
    <div class="item-details">
      <img src="${item.image}" alt="${item.name}">
      <h1>${item.name}</h1>
      <p>Type: ${item.type}</p>
      <p>League: ${item.league}</p>
      <p>Rarity: ${item.rarity}</p>
      <p>Existing: ${item.existing}</p>

      <label class="owned-label">
        <input type="checkbox" ${isOwned ? "checked" : ""} 
          onchange="toggleOwned('${item.name}', this.checked)">
        Owned
      </label>

      <button onclick="location.reload()">Back</button>
    </div>
  `;
}

// ===============================
// INITIAL LOAD
// ===============================

renderItems(items);
