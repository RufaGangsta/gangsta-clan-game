// game.js contains the core slot logic
const GameLogic = (function () {
  // Іконки для слотів (зображення)
  const slotIcons = [
    'assets/images/slot1.png',
    'assets/images/slot2.png',
    'assets/images/slot3.png',
    'assets/images/slot4.png'
  ];

  const NFT_CHANCE = 0.0000001; // 0.001%
  const COIN_WIN_CHANCE = 0.3;

  function getRandomSymbol() {
    return slotIcons[Math.floor(Math.random() * slotIcons.length)];
  }

  function spin() {
    const slots = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    let message = '';

    const isSame = slots[0] === slots[1] && slots[1] === slots[2];
    const isPair = slots[0] === slots[1] || slots[1] === slots[2] || slots[0] === slots[2];

    if (Math.random() < NFT_CHANCE) {
      message = '🎉 Хароош! NFT, неху*вий подгон!';
    } else if (isSame) {
      message = '🎉 Та ну н@х ти фартовий, NFT!';
    } else if (isPair) {
      message = 'Харош! Лови подгон монети!';
    } else {
      message = 'Давай ще, ща полюбасу буде!';
    }

    return { slots, message };
  }

  return { spin };
})();
