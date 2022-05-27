const mobMenu = document.createElement('div');
mobMenu.className = 'overlay-container';
mobMenu.id = 'mobMenu';

function addItem(item, itemId, iTarget, iText) {
  if (item === 'div') {
    item = document.createElement('div');
    item.textContent = '\u2715';
    item.id = 'close';
    item.className = 'dyn';
  } else {
    item = document.createElement('a');
    item.id = itemId;
    item.href = iTarget;
    item.textContent = iText;
    item.classList.add('overlay', 'dyn');
  }
  return item;
}

function hideMobMenu() {
  mobMenu.innerHTML = '';
  document.body.removeChild(mobMenu);
  document.body.classList.toggle('no-scroll');
}

document.getElementById('mobile-menu').addEventListener('click', () => {
  mobMenu.appendChild(addItem('div'));
  mobMenu.appendChild(addItem('a', 'link1', '#', 'About'));
  mobMenu.appendChild(addItem('a', 'link2', '#', 'Program'));
  mobMenu.appendChild(addItem('a', 'link3', '#', 'Join'));
  mobMenu.appendChild(addItem('a', 'link4', '#', 'Sponsor'));
  mobMenu.appendChild(addItem('a', 'link5', '#', 'News'));
  mobMenu.appendChild(addItem('a', 'link6', '#', 'VD Campaign'));
  document.body.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');
  const linkss = Array.from(document.getElementsByClassName('dyn'));
  linkss.forEach((btn) => {
    btn.addEventListener('click', hideMobMenu);
  });
});

// || =========== Menu Ends ==============|| */

document.getElementById('more').addEventListener('click', (event) => {
  const cards = Array.from(document.getElementsByClassName('dtp-card'));
  cards.forEach((card) => {
    card.classList.toggle('col-f');
  });
  document.getElementById('more').classList.toggle('btn-less');
  event.stopPropagation();
});