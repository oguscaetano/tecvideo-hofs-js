const data = require('./database');

//6 - Imprima todos os nomes das espécies

function speciesNames() {
  return data.species.reduce((prev, curr) => {
    return [...prev, curr.name];
  }, []);
}


console.log(speciesNames());