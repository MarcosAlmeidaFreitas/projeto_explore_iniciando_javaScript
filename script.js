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

*/ 

console.log({
  name: "Marcos Antonio",
  age: 26, 
  treinar: function(){
    console.log("Vai malhar seu frango");
  }
});
