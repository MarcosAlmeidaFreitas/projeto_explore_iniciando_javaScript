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
//console.log('9' + 5); 

// Agora convertemos manualmente a string para numero. Para obtermos o resultado de 14 que é 9 + 5
// Isso se chama Type Conversion 
//console.log(Number('9') + 5);

// //Convertendo uma String em numero e Numero em uma String

// let string = "1234";
// let numero = Number(string);
// console.log(numero);


// let number = 1234;
// let text = String(number);
// console.log(text);


// // Contando a quantidade de caracteres de uma palavra. 
// let word = "Paralelepipedo";
// console.log(`A palavra ${word} tem ${word.length} letras.`);

// //Contando a quantidade de caracteres de um numero.
// //Como a propriedade length não funciona com numeros temos que converter ele primeiro para String 
// //para depois contar.

// let number = 12345;
// console.log(`O numero ${number} possui`, String(number).length, "caracteres");



//Transformar um numero quebrado com 2 casas decimais e trocar o ponto por virgula
//let number = 345.33452345;
//transformando o numero em duas casas decimais.
//console.log(Number(number.toFixed(2)));

//Convertendo o numero para duas casas decimais o numero vira uma String, Você poderia transformar,
//em number de novo porem quando você troca o ponto pela virgula não tem como converter mais. 
//Porque a virgula não existe na classe dos numeros.
//console.log(String(number.toFixed(2).replace(".", ",")));


// //Convertendo letra minuscula em maiuscula e vice versa.
// let text = "Programar é muito bom";
// text = text.toUpperCase();
// console.log(text);
// text = text.toLowerCase();
// console.log(text);


// // Transformando uma frase em itens de um arrayList e depois unindo as palavras através do "_"
// let text = "Eu serei um grande programador de JS";
// //Função Split tem o objetivo de separar as palavras
// let myArray = text.split(" ");
// console.log(myArray);
// //A função join tem o objetivo de juntar as palavras.
// textUnderScore = myArray.join("_");
// console.log(textUnderScore)



// //Buscando uma palavra dentro de uma String.
// let text = "Eu serei um grande programador de JS";
// let word = "Eu";
// let trueOrFalse = text.includes(word);
// if(trueOrFalse === true) console.log(`CONTEM a palavra ${word.toUpperCase()} na frase:\n`, '"'+text+'".');
// else console.log(`NÃO EXISTE a palavra ${word.toUpperCase()} na frase:\n`, '"'+text+'".');


//criando array com construtor
// let myArray = new Array(10); //criando um Array vazio com 10 posições.


//Transformando uma palavra em uma cadeia de caracteres em um arrayList.
// let word = "manipulação";
// console.log(Array.from(word));


//Adicionando um elemento no final do Array. 
let techs = new Array();
techs = ["HTML", "CSS", "JS"];
techs.push("Java");
console.log(techs);

//Adicionando um elemento no inicio do Array.
techs.unshift("C++");
console.log(techs);

//removendo um item do final do Array.
techs.pop();
console.log(techs);



