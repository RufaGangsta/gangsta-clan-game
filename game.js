// game.js contains the core slot logic
const GameLogic = (function() {
 const slotIcons = [
  'assets/images/slot1.png',
  'assets/images/slot2.png',
  'assets/images/slot3.png',
  'assets/images/slot4.png'
];
  const NFT_CHANCE = 0.0000001; // 0.0001%
  const COIN_WIN_CHANCE = 0.3;

  function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function spin() {
    const slots = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    let message = '';
    // Check NFT
    if (Math.random() < NFT_CHANCE) {
      message = '🎉 Хароош!NFT,нех*уйвий подгон';
    } else if (slots[0] === slots[1] && slots[1] === slots[2]) {
      message = '🎉 Та ну н@х ти фартовий,NFT';
    } else if (slots[0] === slots[1] || slots[1] === slots[2] || slots[0] === slots[2]) {
      message = 'Харош! Лови подгон монети!';
    } else {
      message = 'Давай ще,ща полюбасу буде!';
    }
    return { slots, message };
  }

  return { spin };
})();
