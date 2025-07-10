const symbols = ['🍒', '🍋', '🍇', '💰', '💎', '👑'];
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const result = document.getElementById("result");

function spin() {
  const s1 = symbols[Math.floor(Math.random() * symbols.length)];
  const s2 = symbols[Math.floor(Math.random() * symbols.length)];
  const s3 = symbols[Math.floor(Math.random() * symbols.length)];
  slot1.innerText = s1;
  slot2.innerText = s2;
  slot3.innerText = s3;

  if (s1 === s2 && s2 === s3) {
    result.innerText = "🎉 Вітаю! Ви виграли NFT!";
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    result.innerText = "Непогано! Ви виграли монети!";
  } else {
    result.innerText = "Спробуйте ще!";
  }
}