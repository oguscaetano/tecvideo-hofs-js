const data = require('./database');

//1 - Crie uma função que mostre a quantidade de personagens

function countCharacters() {
  return data.characters.length;
}

console.log(countCharacters());