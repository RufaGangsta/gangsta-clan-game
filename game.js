// game.js contains the core slot logic
const GameLogic = (function() {
  const symbols = ['🍒', '🍋', '🍇', '💰', '💎', '👑'];
  const NFT_CHANCE = 0.0001; // 0.01%
  const COIN_WIN_CHANCE = 0.3;

  function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function spin() {
    const slots = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    let message = '';
    // Check NFT
    if (Math.random() < NFT_CHANCE) {
      message = '🎉 Вітаю! Ви виграли унікальний NFT-герой!';
    } else if (slots[0] === slots[1] && slots[1] === slots[2]) {
      message = '🎉 Вітаю! Ви виграли NFT!';
    } else if (slots[0] === slots[1] || slots[1] === slots[2] || slots[0] === slots[2]) {
      message = 'Непогано! Ви виграли монети!';
    } else {
      message = 'Спробуйте ще!';
    }
    return { slots, message };
  }

  return { spin };
})();