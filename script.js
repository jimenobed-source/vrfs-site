// ===============================
// ITEM DATA
// ===============================

const items = [
  {
    name: "UVSA PURPLE INJURY MASK",
    type: "Mask",
    league: "UVSA",
    rarity: "RARE",
    existing: 12,
    image: "images/tg_image_960266664.png"
  },
  {
    name: "UVSA Boots",
    type: "Boots",
    league: "UVSA",
    rarity: "UNCOMMON",
    existing: 25,
    image: "images/UVSA BOOT.png"
  },
  {
    name: "UVSA Gloves",
    type: "Gloves",
    league: "UVSA",
    rarity: "Rare",
    existing: 8,
    image: "image.png"
  },
  {
    name: "UVSA Cat Mask",
    type: "Mask",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA Cat Mask.png"
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
    name: "UVSA Midnight Hat",
    type: "Hat",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "uvsa misnight hat.png"
  }
];

const container = document.getElementById("items");

// ===============================
// RENDER FUNCTION
// ===============================

function renderItems(list) {
  container.innerHTML = "";

  const categories = {};

  list.forEach(item => {
    const letter = item.name[0].toUpperCase();
    if (!categories[letter]) categories[letter] = [];
    categories[letter].push(item);
  });

  Object.keys(categories).sort().forEach(letter => {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${letter}</h2>`;

    const row = document.createElement("div");
    row.className = "item-row";

    categories[letter].forEach(item => {
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
