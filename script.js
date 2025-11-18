// year
document.getElementById('year').textContent = new Date().getFullYear();

// Titles list used on cards
const TEAM_TITLES = [
  { title: "Esports World Cup 2024", place: "1st" },
  { title: "OCS 2024 Major", place: "1st" },
  { title: "OCS 2025 Champions Clash", place: "1st" }
];

// Roster (placeholder images kept)
const roster = [
  { name: "LIP", role: "DPS", img: "https://i.namu.wiki/i/ZsGFNthHueWAHCxRonkDFA84oYaCc8c4cMZfyWNTvl3w8RzAxw_T7Doi01ZVOgfu7HR9ZAXv02l8JJuP2KgfFw.webp", earnings: 555293.12, titles: [
      { title: "OWCS 2024 World Finals", place: "Asia Region MVP" },
      { title: "OWCS 2024 World Finals", place: "Hitscan DPS MVP" },
      { title: "Overwatch League 2023", place: "Role Star Damage" },
      { title: "Overwatch League 2022", place: "Role Star Damage" },
      { title: "Overwatch League 2021", place: "Grand Finals MVP" },
      { title: "Overwatch League 2021", place: "Role Star Damage" },
      { title: "Overwatch League 2020", place: "Role Star Damage" }
    ]
  },
  { name: "HeeSang", role: "DPS", img: "https://i.namu.wiki/i/cGhreNOSmOh2muXK5U5fekfRJltYuWqsqcqcDFqBLxb3GwQtfvT9pbTm-FwGc8A8Eh7gYbTPnds8puX8NwaXWA.webp", earnings: 181509, titles: TEAM_TITLES },
  { name: "JunBin", role: "Tank", img: "https://i.namu.wiki/i/gAmLuSkYsasUciRpuJaeYNN6bpLyElEAdyea-gBl7uG7XrKRbqczoTyjEEU1CdmscwPFpT_miRh3acEDajMkLA.webp", earnings: 176519, titles: [
      { title: "OWCS 2024 World Finals", place: "2024 Tank MVP" },
      { title: "OWCS 2024 Major", place: "Porsche MVP" }
    ]
  },
  { name: "MAX", role: "Tank", img: "https://i.namu.wiki/i/ngCTbgRMzsw92Ek9-NbfWe1wjWcadU4wDMOd9pbKOpaPKK8Kbg5SZ8gWd3k9n45iPsVorVG1131dA3ZfUPewUQ.webp", earnings: 138211.66, titles: TEAM_TITLES },
  { name: "CH0R0NG", role: "Support", img: "https://i.namu.wiki/i/h-ZLlMt3OzMxKfIvfJwX2JfiJk6aaIa7nSocwlYA492BZEh5hj0GGGVUGZTzjTQsPih4GOAQkdHI6flpZ8lWuA.webp", earnings: 401562, titles: [
      { title: "OWCS 2024 World Finals", place: "2024 Main Support MVP" }
    ]
  },
  { name: "Shu", role: "Support", img: "https://i.namu.wiki/i/vzHNjDU-PVuxnUvLGaWFFG7xYFbr4qsmxFoyh7sQ4qPqzDfy8722-MN_M11ovoJFbJcV8w5LFw66AEliBUug4A.webp", earnings: 425024, titles: [
      { title: "OWCS 2025 Champions Clash", place: "Tournament MVP" },
      { title: "OWCS Champions Series 2024 World Finals", place: "2024 Flex Support MVP" },
      { title: "Esports World Cup 2024", place: "MVP" },
      { title: "Overwatch League - 2022", place: "Role Star - Support" },
      { title: "Overwatch League - 2021", place: "Role Star - Support" }
    ]
  }
];

// Inject roster cards
const grid = document.getElementById('rosterGrid');
if (grid) {
  grid.innerHTML = roster.map(p => `
    <article class="card" data-name="${p.name}">
      <div class="media" style="background-image:url('${p.img}');"></div>
      <div class="body">
        <div class="role">${p.role}</div>
        <div class="name">${p.name}</div>
        <div class="earn">Career Earnings: <strong>$${p.earnings.toLocaleString("en-US")}</strong></div>
        <ul class="trophy">
          ${p.titles.slice(0,4).map(t => `<li>${t.title} — <b>${t.place}</b></li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");

  // Make each card navigate to the player detail page
  const cards = grid.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      if (name) {
        const url = `player.html?name=${encodeURIComponent(name)}`;
        window.location.href = url;
      }
    });
  });
}

// Compute team winnings (same numbers you had; adjust if you update)
const teamPrizes = [
  // 2024
  25000, 100000, 400000, 6000, 10000, 100000, 10370.43,
  // 2025
  9000, 6300, 104000, 15000, 35000, 15000
];
const total = teamPrizes.reduce((a,b)=>a+b,0);
document.getElementById('totalWinnings').textContent = `$${total.toLocaleString('en-US',{maximumFractionDigits:2})}`;
