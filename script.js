const dailyTips = [
  "Take a deep breath and focus on the present moment.",
  "Spend a few minutes meditating to calm your mind.",
  "Write down three things you're grateful for today.",
  "Pause and observe your surroundings for a mindful moment.",
  "Take a short walk and focus on your breathing.",
  "Drink a glass of water mindfully, paying attention to each sip.",
  "Stretch your body gently and release any tension.",
  "Close your eyes and listen to the sounds around you for a minute.",
  "Smile and think of a positive memory or person in your life.",
  "Limit your screen time and enjoy some quiet time instead."
];

function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * dailyTips.length);
  return dailyTips[randomIndex];
}

document.querySelector('.profile-menu').addEventListener('click', function() {
  alert(`Profile in progress but here is your daily mindful tip: "${getRandomTip()}"`);
});