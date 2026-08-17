// ===============================
// VRFS INDEX ITEM DATA
// ===============================

const items = [
  // ===== UVSA LEAGUE =====
  {
    name: "UVSA balls",
    type: "Ball",
    league: "UVSA",
    rarity: "COMMON",
    existing: 999,
    image: "balls.png"
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
    name: "UVSA cat mask",
    type: "Mask",
    league: "UVSA",
    rarity: "RARE",
    existing: 150,
    image: "UVSA cat mask.png"
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
    name: "UVSA misnight hat",
    type: "Hat",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "Suvsa misnight hat.png"
  },
  {
    name: "UVSA Purple Injury Mask",
    type: "Mask",
    league: "UVSA",
    rarity: "RARE",
    existing: 150,
    image: "UVSA Purple Injury Mask.png"
  },

  // ===== VDL LEAGUE =====
  {
    name: "VDL Balon Dor Boot",
    type: "Boots",
    league: "VDL",
    rarity: "SECRET",
    existing: 15,
    image: "VDL Balon Dor Boot.webp"
  },
  {
    name: "VDL Beer Hat",
    type: "Hat",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 20,
    image: "VDL Beer Hat.webp"
  },
  {
    name: "VDL BLACK GLOVES",
    type: "Gloves",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 20,
    image: "VDL BLACK GLOVES.png"
  },
  {
    name: "VDL Black Hat",
    type: "Hat",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 20,
    image: "VDL Black Hat png"
  },
  {
    name: "VDL Gas Mask",
    type: "Mask",
    league: "VDL",
    rarity: "RARE",
    existing: 100,
    image: "VDL Gas Mask.webp"
  },
  {
    name: "VDL Pink Boot",
    type: "Boots",
    league: "VDL",
    rarity: "RARE",
    existing: 150,
    image: "VDL Pink Boot.webp"
  },
  {
    name: "VDL RED BOOT",
    type: "Boots",
    league: "VDL",
    rarity: "COMMON",
    existing: 1000,
    image: "VDL RED BOOT.webp"
  },
  {
    name: "VDL RED BOOT",
    type: "Boots",
    league: "VDL",
    rarity: "COMMON",
    existing: 1000,
    image: "VOL RED BOOT.png"
  },
  {
    name: "VDL RED GOOGLES",
    type: "Goggles",
    league: "VDL",
    rarity: "SECRET",
    existing: 10,
    image: "VDL RED GOOGLES.png"
  },
  {
    name: "VDL RED HAT",
    type: "Hat",
    league: "VDL",
    rarity: "COMMON",
    existing: 900,
    image: "VDL RED HAT. jPg"
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
    name: "VDL UCL Boot",
    type: "Boots",
    league: "VDL",
    rarity: "LEGENDARY",
    existing: 60,
    image: "VDL UCL Boot.webp"
  },
  {
    name: "VDL Visor",
    type: "Goggles",
    league: "VDL",
    rarity: "RARE",
    existing: 150,
    image: "VDL Visor.webp"
  },

  // ===== VFA LEAGUE =====
  {
    name: "VFA Balon dor Boot",
    type: "Boots",
    league: "VFA",
    rarity: "SECRET",
    existing: 15,
    image: "VFA Balon dor Boot.png"
  },
  {
    name: "VFA Black Boot",
    type: "Boots",
    league: "VFA",
    rarity: "LEGENDARY",
    existing: 80,
    image: "VFA Black Boot.webp"
  },
  {
    name: "VFA Bobble Hat",
    type: "Hat",
    league: "VFA",
    rarity: "LEGENDARY",
    existing: 80,
    image: "VFA Bobble Hat.png"
  },
  {
    name: "VFA Bucket Hat",
    type: "Hat",
    league: "VFA",
    rarity: "RARE",
    existing: 150,
    image: "VA Bucket Hat.webp"
  },
  {
    name: "VFA Glasses",
    type: "Goggles",
    league: "VFA",
    rarity: "LEGENDARY",
    existing: 70,
    image: "VFA Glasses.webp"
  },
  {
    name: "VFA glove",
    type: "Gloves",
    league: "VFA",
    rarity: "SECRET",
    existing: 6,
    image: "via glove.png"
  },
  {
    name: "VFA Half Mask",
    type: "Mask",
    league: "VFA",
    rarity: "RARE",
    existing: 100,
    image: "VFA Half Mask.webp"
  },
  {
    name: "VFA Poc Item !",
    type: "Misc",
    league: "VFA",
    rarity: "SECRET",
    existing: 1,
    image: "VEA Poc Item !.png"
  },
  {
    name: "VFA Rising stars",
    type: "Boots",
    league: "VFA",
    rarity: "RARE",
    existing: 210,
    image: "VFA Rising stars.webp"
  },
  {
    name: "VFA UCL Boot",
    type: "Boots",
    league: "VFA",
    rarity: "LEGENDARY",
    existing: 60,
    image: "VFA UCL Boot.png"
  },
  {
    name: "VFA Yellow Full Mask",
    type: "Mask",
    league: "VFA",
    rarity: "LEGENDARY",
    existing: 70,
    image: "VFA Yellow Full Mask.webp"
  },
  {
    name: "VFA vfsalistars",
    type: "Boots",
    league: "VFA",
    rarity: "RARE",
    existing: 150,
    image: "vfsalistars.png"
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
