let coins = 0;
document.getElementById("spin").onclick = function() {
  const result = Math.random();
  let message = "";
  if (result < 0.1) {
    message = "🎉 NFT герой! Вітаємо!";
  } else if (result < 0.5) {
    coins++;
    message = "💰 Ви отримали 1 гопКоін!";
  } else {
    message = "😢 Нічого не випало...";
  }
  document.getElementById("result").innerText = message;
  document.getElementById("coins").innerText = coins;
};