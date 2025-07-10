// main.js handles UI interactions
document.getElementById('spinBtn').addEventListener('click', () => {
  const outcome = GameLogic.spin();
  document.getElementById('slot1').innerText = outcome.slots[0];
  document.getElementById('slot2').innerText = outcome.slots[1];
  document.getElementById('slot3').innerText = outcome.slots[2];
  document.getElementById('result').innerText = outcome.message;
});