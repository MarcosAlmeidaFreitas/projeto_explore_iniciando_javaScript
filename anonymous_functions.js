//function anonymous porque voce não coloca nome na função.

const sum = function(x , y){ // x e y são parametros da função e JS não é necessario declarar o tipo de variável
  return (x + y);
}

console.log("o resultado da soma é: " + sum(2, 3)); // 2 e 3 são os argumentos da função, vão ser passados para a função