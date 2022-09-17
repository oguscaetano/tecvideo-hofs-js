const data = require('./database');

//2 - Contar a quantidade de personagens através do sexo

function countGender(gender) {
  if(gender === 'M' || gender === 'F'){
    return data.characters.filter((character) => character.gender === gender);
  } else {
    return 'Valor inválido.';
  }
}

console.log(countGender('F'));