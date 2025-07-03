document.getElementById('spinBtn').addEventListener('click', () => {
  const resultEl = document.getElementById('result');
  const nftEl = document.getElementById('nftDrop');
  const rand = Math.random();
  if (rand < 0.0001) { // 0.01% chance
    nftEl.textContent = '🎴 Випало NFT-герой!';
  } else if (rand < 0.3) {
    resultEl.textContent = '💰 Виграш: ' + (Math.floor(Math.random()*100) + 1) + ' монет';
  } else {
    resultEl.textContent = '😢 Програш';
  }
});
