const data = require('./database');

//3 - Mostre o primeiro personagem de acordo com o id da espécie

function getCharacterBySpecie(id) {
  return data.characters.find((specie) => specie.speciesId === id)
}

console.log(getCharacterBySpecie(5));
