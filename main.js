// ==== Language loader ====
let currentLang = 'ua'; // 'en', 'ru' можна вибрати тут

async function loadLang() {
  const response = await fetch('lang.json');
  const langs = await response.json();
  const lang = langs[currentLang];

  document.getElementById('title').textContent = lang.title;
  document.getElementById('spin-btn').textContent = lang.spin;
  document.getElementById('nft-won-text').textContent = lang.nft_won;
}
window.onload = loadLang;

document.getElementById('spinBtn').addEventListener('click', () => {
  const resultEl = document.getElementById('result');
  const nftEl = document.getElementById('nftDrop');
  const rand = Math.random();
  if (rand < 0.0000001) { // 0.0001% chance
    nftEl.textContent = '🎴 Та ну н@х во подгон NFT-герой!';
  } else if (rand < 0.7) {
    resultEl.textContent = '💰 Сюда бLя,бабос: ' + (Math.floor(Math.random()*100) + 1) + ' монет';
  } else {
    resultEl.textContent = '😢 Голяк';
  }
});
