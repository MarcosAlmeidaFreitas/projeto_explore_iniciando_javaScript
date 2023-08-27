/* 

  Strings

  Podemos utilizar 3 tipos de caracteristicas para string

  aspas simples (´´)
  nesse caso podemos usar os aspas duplas dentro da string como texto
  console.log('testando "esse texto vai aparecer com aspas"');


  aspas duplas("")
  nesse caso poderemos usar as aspas simples como texto na frase.
  console.log("testando 'esse texto vai aparecer com aspas simples'");


  crase(``)
  nesse caso podemos utilizar tanto as aspas simples como as aspas compostas dentro do texto, alem de poder
  utilizar a string como bloco (multilinha). Podemos tambem usar expressoes como o segundo exemplo.
  
  console.log(`Os textos apareceram com aspas simples e aspas duplas alem do multilinha\n
    'esse texto vai aparecer com aspas simples' "esse texto vai aparecer com aspas duplas"
    `);

  console.log(`testando a expressão ${1+1}`) 
  Nesse caso vai aparecer no console testando a expressao 2.
*/


/*
  number 

  os numeros você pode comparar como o infinito 
  ele vai voltar que é falso 12.5 é um float e não infinito.
  console.log(12.5 ===Infinity);
  Ele vai retornar true pois 10/0 é infinito.
  console.log(10/0 ===Infinity);
*/


/*
  tipos de contudo das variáveis
  undefined o conteudo dela não é definido no javaScript.
  null o valor do objeto é nulo, vazio, sem contudo.

 */

/*
  objeto
  você cria uma clase especificando, dando caracteristicas e funcionalidades a alguma coisa 

  console.log({
  name: "Marcos Antonio",
  age: 26, 
  treinar: function(){
    console.log("Vai malhar seu frango");
  }
});

*/ 

/*
  Arrays você pode criar de varios tipos de variaveis e atribuilo a um array
  ["leite", "ovos", 2, 3]

*/


/*
  Qual é a diferença entre var e let e const 
    var é uma variavel global, ela é definida mesmo antes de ser declarada pois mesmo que ela não tenha sido declarada no escopo global
    o javaScrpit entende que ela é uma variavel global e define ela acima de tudo. 
        console.log("o que está atribuido em x é: ", x);

        {
           var x = 0; //mesmo que tenha sido criado aqui nessa linha, o javaScript inicia a variavel como undefined antes mesmo do console.log
                      //Se fize-se o mesmo processo a declaração com let daria erro dizendo que o x não foi definido no primeiro console.log.
        }

      console.log("O que está atruido em x agora é: ", x);

  const ou constante é um tipo de variavel que você atribui um valor e não pode ser mudado pois é uma constante se mudar vai dar erro. 
  alem disso é uma variavel local e so existem no escopo aonde foram criadas
    const x = 0;      
*/

/*
  Escopo:
    O que é escopo?
     Determina a visibilidade de alguma variavel no JavaScript   
        Exemplo:
          let x=0;
          {
            let y=2
          }

     Dentro do JavaScript o x e o y estão em escopos diferentes pois o x é uma variavel que está no escopo globla da aplicação
     e o y está num escopo local da aplicação.

*/

// let y=1;
// {
//   let y=0;
// }
// console.log("Qual é o valor de y? ", y);  



// //Variáveis ou tipos de dados.
// //declaração or declaration
// var name;

// //assignment or atribuição de valores.
// name= "Mike";

// //Imprimindo o tipo de dado.
// console.log(typeof name);



// let name = "Marcos Antonio";
// let age = 26;
// let isHuman = true;


// console.log("O ", name, "tem", age, "anos");

// console.log("O " + name + " tem " + age + " anos.");

// console.log(`O ${name} tem ${age} anos!`);


//Criando um objeto e acessando tributos desse objeto

// const person = {
//   name: "Jhon",
//   age: 34, 
//   weight: 60.2
// }

// console.log(`O ${person.name} pesa ${person.weight} kilos.`);



const animals = [
  "Lion",
  "Cat",
  "Dog",
  "Monkey",
  {
    name: "Mouse",
    age: 3
  }
]

console.log(animals[4].age);