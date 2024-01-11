/*
Quando selecionamos um elemento no DOM, o TS não sabe qual é o tipo de elemento que estamos selecionando.
e esse elemento pode ser null, por isso, precisamos fazer uma verificação para saber se o elemento existe.
e é aí que entra o type assertion, que é uma forma de dizer para o TS que o elemento existe e que ele é do tipo que queremos.
ou seja, que temos certeza que o elemento existe e que ele é do tipo que queremos.
*/
//condicional - RECOMENDADO
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion - RECOMENDADO
/*
Quando criamos uma variavel e dizemos que ela é do tipo HTMLBodyElement, o TS entende que ela é do tipo HTMLBodyElement
Esse exemplo é um type assertion, que é uma forma de dizer para o TS que o elemento existe e que ele é do tipo que queremos.
se utilizando do as HTMLBodyElement
*/
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//htmlelement - outro exemplo
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Non-null assertion (!) (forma nao recomendada)
/* Nesse caso, no final da tipificacao, colocamos o acento ! para indicar que esse elemento nao pode ser null */
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
