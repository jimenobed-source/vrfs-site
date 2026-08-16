// ===============================
// VRFS INDEX ITEM DATA
// ===============================

const items = [
  // ===== UVSA LEAGUE =====
  {
    name: "UVSA PURPLE INJURY MASK",
    type: "Mask",
    league: "UVSA",
    rarity: "RARE",
    existing: 150,
    image: "UVSA PURPLE INJURY MASK.png"
  },
  {
    name: "UVSA BOOT",
    type: "Boots",
    league: "UVSA",
    rarity: "UNCOMMON",
    existing: 400,
    image: "UVSA BOOT.png"
  },
  {
    name: "UVSA GLOVES",
    type: "Gloves",
    league: "UVSA",
    rarity: "RARE",
    existing: 150,
    image: "UVSA GLOVES.png"
  },
  {
    name: "UVSA CAT MASK",
    type: "Mask",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA CAT MASK.png"
  },
  {
    name: "UVSA MIDNIGHT MASK",
    type: "Mask",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA MIDNIGHT MASK.png"
  },
  {
    name: "UVSA MIDNIGHT HAT",
    type: "Hat",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA MIDNIGHT HAT.png"
  },

  // ===== VDL LEAGUE =====
  {
    name: "VDL BLACK GLOVES",
    type: "Gloves",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 20,
    image: "VDL BLACK GLOVES.png"
  },
  {
    name: "VDL BLACK HAT",
    type: "Hat",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 20,
    image: "VDL BLACK HAT.png"
  },
  {
    name: "VDL RED BALL",
    type: "Ball",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 50,
    image: "VDL RED BALL.png"
  },
  {
    name: "VDL RED GOGGLES",
    type: "Goggles",
    league: "VDL",
    rarity: "SECRET",
    existing: 10,
    image: "VDL RED GOGGLES.png"
  },
  {
    name: "VDL RED BOOT",
    type: "Boots",
    league: "VDL",
    rarity: "COMMON",
    existing: 1000,
    image: "VDL RED BOOT.png"
  },
  {
    name: "VDL RED MASK",
    type: "Mask",
    league: "VDL",
    rarity: "COMMON",
    existing: 1000,
    image: "VDL RED MASK.png"
  },
  {
    name: "VDL RED HAT",
    type: "Hat",
    league: "VDL",
    rarity: "COMMON",
    existing: 900,
    image: "VDL RED HAT.png"
  }
];

const container = document.getElementById("items");

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

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onclick="showDetails('${item.name}')">
        <p>${item.name}</p>
        <label class="owned-label">
          <input type="checkbox" class="owned-checkbox">
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

  container.innerHTML = `
    <div class="item-details">
      <img src="${item.image}" alt="${item.name}">
      <h1>${item.name}</h1>
      <p>Type: ${item.type}</p>
      <p>League: ${item.league}</p>
      <p>Rarity: ${item.rarity}</p>
      <p>Existing: ${item.existing}</p>
      <button onclick="location.reload()">Back</button>
    </div>
  `;
}

// ===============================
// INITIAL LOAD
// ===============================

renderItems(items);
