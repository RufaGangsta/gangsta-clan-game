// main.js handles UI interactions
document.getElementById('spinBtn').addEventListener('click', () => {
  const outcome = GameLogic.spin();

  // Зміна src картинки
  document.getElementById('slot1').querySelector('img').src = outcome.slots[0];
  document.getElementById('slot2').querySelector('img').src = outcome.slots[1];
  document.getElementById('slot3').querySelector('img').src = outcome.slots[2];

  document.getElementById('result').innerText = outcome.message;
});
