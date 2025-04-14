function throwDice() {
   const diceNumber = Math.floor(Math.random() * 6) + 1;
   document.getElementById('result').textContent = diceNumber;
}