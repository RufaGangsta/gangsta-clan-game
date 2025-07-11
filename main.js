// main.js handles UI interactions
document.getElementById('spinBtn').addEventListener('click', () => {
  const outcome = GameLogic.spin();

  document.getElementById('slot1').innerHTML = `<img src="${outcome.slots[0]}" class="slot-icon">`;
  document.getElementById('slot2').innerHTML = `<img src="${outcome.slots[1]}" class="slot-icon">`;
  document.getElementById('slot3').innerHTML = `<img src="${outcome.slots[2]}" class="slot-icon">`;

  document.getElementById('result').innerText = outcome.message;
});
