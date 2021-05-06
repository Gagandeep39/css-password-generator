const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  // Generates a random number > than 97
  // Generate ASCII code for a lowercase letter
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // Generates a random number > than 65
  // Generate ASCII code for a uppecase letter
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // Generates a random number > than 48
  // Generate ASCII code for a uppecase letter
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(),/.<>[]{}';
  // Returns one of the ymbol from above string
  return symbols[Math.floor(Math.random() * symbols.length)];
}
