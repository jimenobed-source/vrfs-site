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
    type: "Glasses",
    league: "UVSA",
    rarity: "Rare",
    existing: 8,
    image: "images/image.png"
  }, 
  {
    name: "UVSA Cat Mask",
    type: "Glasses",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA Cat Mask.png"
  }, 
  {
    name: "UVSA MIDNIGHT MASK",
    type: "Glasses",
    league: "UVSA",
    rarity: "INSANE",
    existing: 2,
    image: "UVSA MIDNIGHT MASK.png"
  }, 
  {
    name: "UVSA Gloves",
    type: "Glasses",
    league: "UVSA",
    rarity: "Rare",
    existing: 8,
    image: "images/image.png"
  },
];

const container = document.getElementById("items");

items.sort((a, b) => a.name.localeCompare(b.name));

const categories = {};

items.forEach(item => {
  const letter = item.name[0].toUpperCase();

  if (!categories[letter]) {
    categories[letter] = [];
  }

  categories[letter].push(item);
});

Object.keys(categories).sort().forEach(letter => {
  const section = document.createElement("section");

  section.innerHTML = `<h2>${letter}</h2>`;

  const row = document.createElement("div");
  row.className = "item-row";

  categories[letter].forEach((item, index) => {
    const card = document.createElement("div");

    card.className = "item-card";

    card.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.name}"
        onclick="showDetails('${item.name}')"
      >
    `;

    row.appendChild(card);
  });

  section.appendChild(row);
  container.appendChild(section);
});

function showDetails(name) {
  const item = items.find(item => item.name === name);

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