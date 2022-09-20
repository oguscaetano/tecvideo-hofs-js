const data = require('./database');


//forEach, find, some, every, sort, filter, map e reduce

//1 - Contar a quantidade de personagens
function countCharacters() {
  return data.characters.length;
}
// console.log(countCharacters());

// ===============================================

//2 - Contar a quantidade de personagens através do sexo
function countMale(gender) {
  if(gender === "M" || gender === "F"){
    return data.characters.filter((character) => character.gender === gender);
  } else {
    return "Valor inválido."
  }
};

// console.log(countMale("T"));

// ===============================================

//3 - Mostre o primeiro personagem de acordo com o id da espécie
function getCharacterBySpecie(id) {
  return data.characters.find((specie) => {
    return specie.speciesId === id;
  });
}

console.log(getCharacterBySpecie(2));

// ===============================================

//4 - Imprimir todos os personagens de uma espécie através do ID da espécie
function getAllCharactersBySpecie(id) {
  return data.characters.filter((specie) => {
    return specie.speciesId === id;
  });
}

// console.log(getAllCharactersBySpecie(1));

// ===============================================

//5 - Ordenar os personagens através de um parâmetro
const ordered = data.characters.sort((a, b) => a.name.localeCompare(b.name));
// console.log(ordered);

// ===============================================

//6 - Imprimir se existe algum personagem de uma determinada espécie. True ou False
function isAndroide(specie) {
  return data.species.some((character) => character.name === specie);
}

// console.log(isAndroide("Saiyans"));

// ===============================================

//7 - Imprima os nomes das espécies

function speciesNames() {
  return data.species.reduce((prev, curr) => {
    return [...prev, curr.name];
  }, []);
}

// console.log(speciesNames());

// ===============================================

//8 - Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com o valor true ou false. Verifique todos os personagens.
function isFighter() {
  data.characters.forEach((character) => {
    if(character.powers.length === 0){
      character.isFighter = false;
    } else {
      character.isFighter = true;
    }
  })
}

// console.log(isFighter());

// ===============================================

//9 - [every] Todos os personagens são homens?

function allFinghters() {
  return data.characters.every((character) => character.gender === 'M');
};

// console.log(allFinghters());

// ===============================================

//10 - [map] Para cada personagem imprima uma frase da seguinte forma: NOME é da espécie ID ESPÉCIE.

function information() {
  return data.characters.map((character) => `${character.name} é da espécie ${character.speciesId}`)
};

// console.log(information());


// ===============================================

//11 - [map] Para cada personagem imprima uma frase da seguinte forma: NOME é da espécie NOME ESPÉCIE.

function fullInformation() {
  return data.characters.map((character) => {
    const specieName = data.species.find((specie) => specie.id === character.speciesId);
    return `${character.name} é da espécie ${specieName.name}`;
  })
}

// console.log(fullInformation());