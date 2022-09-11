//FUNÇÃO NOMINADA
function exemplo (num1, num2){
  return num1 + num2;
}

console.log(exemplo(10, 20));

//========================================

//FUNÇÃO ANÔNIMA
const exemple = function (num1, num2){
  return num1 + num2;
};

console.log(exemple(5, 4));

//========================================

//ARROW FUNCTION
const arrowFunction = (num1, num2) => {
  return num1 + num2;
};

console.log(arrowFunction(10, 8));
