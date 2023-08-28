//function anonymous porque voce não coloca nome na função.

const sum = function(x , y){ // x e y são parametros da função e JS não é necessario declarar o tipo de variável
  return (x + y);
}

console.log("o resultado da soma é: " + sum(2, 3)); // 2 e 3 são os argumentos da função, vão ser passados para a função



//aprendendo sobre elevação buscando a variável

// let subject = "Create Video";
 
// function createThink(subject){
//   subject = "Study";
//   return subject;
//  }

//  console.log(createThink(subject));
//  console.log(subject);



// let subject = "Create Video";
 
// function createThink(){
//   subject = "Study";
//   return subject;
//  }

//  console.log(createThink(subject));
//  console.log(subject);



//hosting de função ou elevação de função.


// //vamos chamar a função
// sayMyName();

// //Quando se chama a função mesmo antes dela ser escrita funciona se estiver nomeada e não for atribuida a uma variavel
// function sayMyName(){
//   console.log("Marcos Antonio");
// }


// //dessa forma não funciona quando não é nomeada ou quando é atribuida a uma variavel como name.
// var name = function(){
//   console.log("Marcos Antonio");
// }

// //arrow function
// //maneira de escrever de forma simplificada para atribuir o resultado a uma variável.

// const sayMyName = (name) =>{ // a variavel recebe a função, name é o paramento que a função espera receber
//   console.log(name);        // => mostrando que é arrow function.
// }

// sayMyName("Test Arrow Function");


//CallBack Function
//Sua função é foder com a mente do programador. Brincadeira rs
//Sua principal funcionalidade é trabalhar com 

// function sayMyName(name){
//   console.log("Antes de executar a Função");
//   name();
//   console.log("Depois de executar a Função");
// }

// sayMyName(
//   ()=>{
//     console.log("Estou em uma CallBack!!!");
//   }
// );


// //Function Constructor ou Função Construtora.
// //É usada para criação de objetos. Chama a função como 'new nomedafuncao();' e atribui a uma variavel
// //tem o parametro this


// function Person(name,surname, age, height, weight, programmer){
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.height = height;
//   this.weight = weight;
//   if(programmer === true){
//     this.programmer = function(){
//       return (this.name + " é um programador JS");
//     }
//   }else{
//     this.programmer = function(){
//       return (this.name + " não é um programador.");
//     }
//   }
  
// }


// const marcos = new Person("Marcos Antonio","Almeida", 26, 1.70, 80, true);
// const teste = new Person("Gui","Carv", 22, 1.85, 85, false);
// console.log(marcos.programmer());



//como acessar o prototype de um numero?
//se for um numero inteiro você deve o ".0." para acessar o prototype.

// let x = 23.0.toString(); //vai aparecer como string em vez de numero.
// console.log(typeof x);



// Type Conversion (typecasting) e Type Coersion
// As duas são usadas para a conversão de dados.
// A Type Conversion é quando o programador pede para converter aquele tipo de dado.
// A Type Coersion é quando o próprio Js converte o dado para você.


// O JS vai concaternar os argumentos como se fosse duas strings em uma String.
// E obtemos como resultado uma string "95"
// Isso se chama Type Coersion pois como são tipos de dados diferentes ele concatena para não quebrar;
console.log('9' + 5); 

// Agora convertemos manualmente a string para numero. Para obtermos o resultado de 14 que é 9 + 5
// Isso se chama Type Conversion 
console.log(Number('9') + 5);