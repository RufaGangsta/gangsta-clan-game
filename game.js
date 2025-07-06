let coins = 0;
document.getElementById("spin").onclick = function() {
  const result = Math.random();
  let message = "";
  if (result < 0.0000001) {
    message = "🎉Ну ніхуя*сє NFT,Красава!";
  } else if (result < 0.3) {
    coins++;
    message = "💰 Подгончик 1 гопКоін!";
  } else {
    message = "😢 Піз*дос,крути ще...";
  }
  document.getElementById("result").innerText = message;
  document.getElementById("coins").innerText = coins;
  
};const slotSymbols = ['🍒', '💎', '🍋', '💰', '7️⃣'];

const nftList = [
  { name: "Gangsta NFT", image: "nft/gangsta1.png" },
  { name: "Boss NFT", image: "nft/mafia_boss.png" }
];
const nftChance = 0.0000001; // 0.00001%

function spinSlot() {
  const result = [];

  for (let i = 0; i < 3; i++) {
    const symbol = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
    result.push(symbol);
  }

  showSlotResult(result);

  const drop = Math.random();
  if (drop < nftChance) {
    const nft = nftList[Math.floor(Math.random() * nftList.length)];
    showNFT(nft);
  } else {
    hideNFT();
  }
}

function showSlotResult(res) {
  const resultDiv = document.getElementById('slot-result');
  resultDiv.textContent = res.join(' ');
}

function showNFT(nft) {
  document.getElementById('nft-drop').style.display = 'block';
  document.getElementById('nft-image').src = nft.image;
  document.getElementById('nft-name').textContent = nft.name;
}

function hideNFT() {
  document.getElementById('nft-drop').style.display = 'none';
      }
