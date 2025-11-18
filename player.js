// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Shared team titles
const TEAM_TITLES = [
  { title: "Esports World Cup 2024", place: "1st" },
  { title: "OCS 2024 Major", place: "1st" },
  { title: "OCS 2025 Champions Clash", place: "1st" }
];

// Roster with bios
const rosterWithBio = [
  {
    name: "LIP",
    role: "DPS",
    img: "https://i.namu.wiki/i/ZsGFNthHueWAHCxRonkDFA84oYaCc8c4cMZfyWNTvl3w8RzAxw_T7Doi01ZVOgfu7HR9ZAXv02l8JJuP2KgfFw.webp",
    earnings: 555293.12,
    titles: [
      { title: "OWCS 2024 World Finals", place: "Asia Region MVP" },
      { title: "OWCS 2024 World Finals", place: "Hitscan DPS MVP" },
      { title: "Overwatch League 2023", place: "Role Star Damage" },
      { title: "Overwatch League 2022", place: "Role Star Damage" },
      { title: "Overwatch League 2021", place: "Grand Finals MVP" },
      { title: "Overwatch League 2021", place: "Role Star Damage" },
      { title: "Overwatch League 2020", place: "Role Star Damage" }
    ],
    bio: "LIP is Crazy Raccoon’s star hitscan DPS Lee \"Lip\" Jae-won (born November 5, 2001) is a Korean player who is currently playing for Crazy Raccoon. He is commonly considered one of the greatest Overwatch players of all time. LIP is one of the most decorated players in Overwatch League history, being a Grand Finals MVP with 3 Regular Season MVP nominations and 6 Stage titles, as well as having 4 Role Star awards, the only player to be nominated for every year they played in the League. Known for razor-sharp mechanics and a deep hero pool, he consistently converts small timing windows into fight-winning picks.",
      gear: {
         mouse: "Logitech G PRO X SUPERLIGHT 2 White",
         edpi: 5920,
         dpi: 800,
         sens: 5.4,
         aimSens: 33,
         grip: "Finger grip",
         updated: "June 14, 2025"    
    },
    video: "https://www.youtube.com/embed/Im1mmxzFz-M",
  },
  {
    name: "HeeSang",
    role: "DPS",
    img: "https://i.namu.wiki/i/cGhreNOSmOh2muXK5U5fekfRJltYuWqsqcqcDFqBLxb3GwQtfvT9pbTm-FwGc8A8Eh7gYbTPnds8puX8NwaXWA.webp",
    earnings: 181509,
    titles: TEAM_TITLES,
    bio: "Chae \"HeeSang\" Hee-sang (born March 3, 2005) is a Korean player who is currently playing for Crazy Raccoon. He is one of the more flexible DPS players in Korea, and plays each hero to a staggering level given his depth as a player. His adaptability across metas makes the Crazy Raccoon offense extremely difficult to read or counter.",
          gear: {
         mouse: "Razer DeathAdder V3 Pro",
         edpi: 4320,
         dpi: 1600,
         sens: 3.70,
         aimSens: 36,
         grip: "Unknown",
         updated: "April 12, 2025"
    },
    video: "https://www.youtube.com/embed/klLQ_hA1wNU",
  },
  {
    name: "JunBin",
    role: "Tank",
    img: "https://i.namu.wiki/i/gAmLuSkYsasUciRpuJaeYNN6bpLyElEAdyea-gBl7uG7XrKRbqczoTyjEEU1CdmscwPFpT_miRh3acEDajMkLA.webp",
    earnings: 176519,
    titles: [
      { title: "OWCS 2024 World Finals", place: "2024 Tank MVP" },
      { title: "OWCS 2024 Major", place: "Porsche MVP" }
    ],
    bio: "Park \"JunBin\" Jun-bin (born October 5, 2005) is a Korean player who is currently playing for Crazy Raccoon. He is the spearhead of Crazy Raccoon’s aggression. Junbin has cemented himself as arguably the best Winston and Wrecking Ball player in the world, and he has the perfect teammates to complement that.",
          gear: {
            mouse: "Unknown",
         edpi: "Unknown",
         dpi: "Unknown",
         sens: "Unknown",
         aimSens: "Unknown",
         grip: "Unknown",
         updated: "June 14, 2025"
    },
  video: "https://www.youtube.com/embed/K7lmCJZ4c3E",
  },
  {
    name: "MAX",
    role: "Tank",
    img: "https://i.namu.wiki/i/ngCTbgRMzsw92Ek9-NbfWe1wjWcadU4wDMOd9pbKOpaPKK8Kbg5SZ8gWd3k9n45iPsVorVG1131dA3ZfUPewUQ.webp",
    earnings: 138211.66,
    titles: TEAM_TITLES,
    bio: " Choi \"MAX\" Su-min (born November 23, 2004) is a Korean player who is currently playing for Crazy Raccoon. MAX is the secondary tank in Crazy Raccoon, excelling in ground tanks. Crazy Raccoon have been able to adapt well to meta changes, new heroes and map pools thanks to Max.",
          gear: {
         mouse: "Unknown",
         edpi: "Unknown",
         dpi: "Unknown",
         sens: "Unknown",
         aimSens: "Unknown",
         grip: "Unknown",
         updated: "June 14, 2025"
    }
  },
  {
    name: "CH0R0NG",
    role: "Support",
    img: "https://i.namu.wiki/i/h-ZLlMt3OzMxKfIvfJwX2JfiJk6aaIa7nSocwlYA492BZEh5hj0GGGVUGZTzjTQsPih4GOAQkdHI6flpZ8lWuA.webp",
    earnings: 401562,
    titles: [
      { title: "OWCS 2024 World Finals", place: "2024 Main Support MVP" }
    ],
    bio: "Sung \"CH0R0NG\" Yoo-min (born December 8, 2003) is a Korean player who is currently playing for Crazy Raccoon. CH0R0NG is the team’s main support player. His mechanics on engage-heavy heroes pair with crisp communication to keep Crazy Raccoon coordinated in messy fights. Excelling on heroes such as Lucio, Brigette and Wuyang, Ch0rong has a strong synergy with Shu allow the team to play both aggressive dives and brawl style compositions.",
          gear: {
         mouse: "Logitech G PRO X SUPERLIGHT 2",
         edpi: 4800,
         dpi: 800,
         sens: 6.0,
         aimSens: 42,
         grip: "Claw",
         updated: "April 3, 2025"
    }
  },
  {
    name: "Shu",
    role: "Support",
    img: "https://i.namu.wiki/i/vzHNjDU-PVuxnUvLGaWFFG7xYFbr4qsmxFoyh7sQ4qPqzDfy8722-MN_M11ovoJFbJcV8w5LFw66AEliBUug4A.webp",
    earnings: 425024,
    titles: [
      { title: "OWCS 2025 Champions Clash", place: "Tournament MVP" },
      { title: "OWCS Champions Series 2024 World Finals", place: "2024 Flex Support MVP" },
      { title: "Esports World Cup 2024", place: "MVP" },
      { title: "Overwatch League - 2022", place: "Role Star - Support" },
      { title: "Overwatch League - 2021", place: "Role Star - Support" }
    ],
    bio: "Kim \"shu\" Jin-seo (born July 12, 2000) is a Korean player who is currently playing for Crazy Raccoon. He was ranked the 5th best Flex Support player of all time by Plat Chat and Won Best Flex Support of 2024 award on the podcast Uncoachable. His history of MVP-level performances and consistent high impact makes him a core pillar of Crazy Racoon.",
      gear: {
         mouse: "Razer DeathAdder V4 Pro",
         edpi: 4000,
         dpi: 800,
         sens: 5,
         aimSens: 33,
         grip: "Palm & Claw",
         updated: "June 14, 2025"
    },
  video: "https://www.youtube.com/embed/fhxb_8O75B8?si=vWe6wuWig2nRHE0i",
  },
];

// Utility: get player name from query param
function getPlayerNameFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name');
}

function renderPlayer(player) {
  const imgEl = document.getElementById('playerImage');
  const nameEl = document.getElementById('playerName');
  const roleEl = document.getElementById('playerRole');
  const earningsEl = document.getElementById('playerEarnings');
  const titlesEl = document.getElementById('playerTitles');
  const bioEl = document.getElementById('playerBio');
  const videoEl = document.getElementById('playerVideo');
    if (videoEl) {
    if (player.video) {
        videoEl.src = player.video;
    } else {
        videoEl.src = "https://www.youtube.com/embed/A01I1zJCvU0?si=hb-4xvEoJRbUfEhs"; // fallback
    }
    }


  // gear elements
  const gearBoxEl   = document.getElementById('gearBox');
  const gearMouseEl = document.getElementById('gearMouse');
  const gearEdpiEl  = document.getElementById('gearEdpi');
  const gearDpiEl   = document.getElementById('gearDpi');
  const gearSensEl  = document.getElementById('gearSens');
  const gearAimEl   = document.getElementById('gearAimSens');
  const gearGripEl  = document.getElementById('gearGrip');
  const gearUpdEl   = document.getElementById('gearUpdated');

  if (!player) {
    nameEl.textContent = "Player not found";
    roleEl.style.display = "none";
    earningsEl.textContent = "The requested player could not be found.";
    titlesEl.innerHTML = "";
    bioEl.textContent = "Check the roster page and try opening a player again.";
    imgEl.style.display = "none";

    if (gearBoxEl) gearBoxEl.style.display = "none";
    return;
  }

  document.title = `Crazy Raccoon — ${player.name}`;
  imgEl.src = player.img;
  imgEl.alt = player.name + " portrait";
  nameEl.textContent = player.name;
  roleEl.textContent = player.role;
  earningsEl.textContent = `Career Earnings: $${player.earnings.toLocaleString("en-US")}`;

  titlesEl.innerHTML = player.titles
    .map(t => `<li>${t.title} — <b>${t.place}</b></li>`)
    .join("");

  bioEl.textContent = player.bio;

  // ---- GEAR & SETTINGS ----
  if (player.gear && gearBoxEl) {
    if (gearMouseEl) gearMouseEl.textContent = player.gear.mouse;
    if (gearEdpiEl)  gearEdpiEl.textContent  = player.gear.edpi;
    if (gearDpiEl)   gearDpiEl.textContent   = player.gear.dpi;
    if (gearSensEl)  gearSensEl.textContent  = player.gear.sens;
    if (gearAimEl)   gearAimEl.textContent   = player.gear.aimSens;
    if (gearGripEl)  gearGripEl.textContent  = player.gear.grip;
    if (gearUpdEl)   gearUpdEl.textContent   = `Final Update ${player.gear.updated}`;
  } else if (gearBoxEl) {
    gearBoxEl.style.display = "none";
  }
}

// Init
const playerName = getPlayerNameFromQuery();
const player = rosterWithBio.find(p => p.name === playerName);
renderPlayer(player);
