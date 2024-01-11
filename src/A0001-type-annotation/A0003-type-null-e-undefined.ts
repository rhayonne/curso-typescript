// UNDEFINED
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);
/* checando se um objeto é undefined
as veezes é preciso checar quando não temos a tipificagem do paramentro como no caso do x:
então ele pode ter também o valor aferido (any) ou undefined
*/

export function createPerson(
  // abertura da funçao
  firstName: string,
  lastName?: string,
): {
  //type anotation
  firstName: string;
  lastName?: string; // como no inicio ela foi marcada como opcional, ela deve ser marcada na anotação também
} {
  return {
    //retorno da funcao
    firstName,
    lastName,
  };
}

// NULL
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
/*
a funçoao retorna um numero ou null, é por isso que nos verificamos abaixo para que não haja erros
serve para quando não sabemos o tipo de retorno da função, exemplo de quando alguém criou a função
*/

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

if (squareOfNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfNumber * 100);
}
/*
 eu verifico se ele é null, se for eu retorno uma mensagem de erro, se não eu multiplico por 100
 é para expecificar o retorno da função e tratar erros
*/

if (squareOfString === null) {
  //aqui estamos tratando o erro ou quando a variavel é null, para que não de erro no futuro da aplicação dessa variavel ou função
  console.log('Conta inválida');
} else {
  console.log(squareOfNumber);
}
