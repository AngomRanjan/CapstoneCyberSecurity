// || ========= Appending Speakers ========== ||

const arrCards = [
  {
    no: 1, name: 'Robert Hopkins', dsgn: 'Security Advisor, MIT', details: 'Robert Hopkins is a strategic information technology (IT) leader with extensive experience maintaining security',
  },
  {
    no: 2, name: 'Ritz Mitchelle', dsgn: 'Head of Cyber Cell, GIT USA', details: 'She has 10+ years of experience in the cyber forensics field with core knowledge of forensics',
  },
  {
    no: 3, name: 'Alex Murphy', dsgn: 'Regional Manager Cisco, Munich', details: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  },
  {
    no: 4, name: 'Robert Luis', dsgn: 'Lead Cyber & Data Scientist, Oxford', details: 'Robert Luis is a strategic information technology (IT) leader with extensive experience maintaining security',
  },
  {
    no: 5, name: 'Stephen Donvar', dsgn: 'PAT Professor of MITl', details: 'Stephen Donvar has published dozens of papers on log correlation, security data analysis',
  },
  {
    no: 6, name: 'Bill Sheehan', dsgn: 'BVP of InfoSec at SphereNY', details: 'American cryptographer, computer security professional, privacy specialist',
  },
];

function compileCards(card) {
  const divCard = document.createElement('div');
  divCard.className = 'cards';
  if (card.no > 2) divCard.classList.add('dtp-card', 'col-f');
  divCard.id = `card-${card.no}`;
  divCard.innerHTML = `<div class="img-ph">
  <img src="images/img-c${card.no}.png" alt="feature-speaker-1" class="card-img" id="img-c1">
</div>
<div class="card-details" id="card${card.no}">
  <h4 class="card-titles" id="title-c${card.no}">
  ${card.name}
  </h4>
  <p class="designation" id="dsgn-fs${card.no}">${card.dsgn}
  </p>
  <p class="fs-intro" id="intro-fs${card.no}">${card.details}
  </p>
</div>`;
  return divCard;
}

const cardsContainer = document.createElement('div'); // 3rd child of 'feature-speaker' and parent to cards
cardsContainer.id = 'cards-container';
cardsContainer.className = 'container-main';

for (let i = 0; i < arrCards.length; i += 1) {
  cardsContainer.appendChild(compileCards(arrCards[i]));
}

const speakers = document.createElement('section');
speakers.id = 'feature-speaker'; // parent section

const fsHeading = document.createElement('h3'); // first child 'feature-speaker'
fsHeading.id = 'FS-head';
fsHeading.className = 'head3';
fsHeading.textContent = 'Featured Speaker';

const hr = document.createElement('hr'); // 2nd child of 'feature-speaker'

const more = document.createElement('button'); // 4th child
more.id = 'more';
more.classList.add('btn', 'mob', 'mob-toggle', 'container-main');
more.type = 'button';

speakers.append(fsHeading, hr, cardsContainer, more);

const secPrograms = document.getElementById('programs');

secPrograms.parentNode.appendChild(speakers);

document.getElementById('more').addEventListener('click', (event) => {
  const cards = Array.from(document.getElementsByClassName('dtp-card'));
  cards.forEach((card) => {
    card.classList.toggle('col-f');
  });
  document.getElementById('more').classList.toggle('btn-less');
  event.stopPropagation();
});

// =====================================end of appending speakers
