// tupla é um array com tipos de dados definidos
const dadosCliente1: [number, string] = [1, 'Luiz'];
// crio um array com o tipo de dados que eu quero porém, os dados não sao mutaveis
// o primeiro sempre vai ser um number e o segundo sempre vai ser uma string

dadosCliente1[0] = 100;
dadosCliente1[1] = 'maria';
console.log(dadosCliente1);

const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
console.log(dadosCliente2);

const dadosCliente3: [number, string, string?] = [1, 'Luiz', 'Miranda']; // ? = quer dize que o adulto é opcional, nesse caso eu não preciso passar o terceiro parametro
console.log(dadosCliente3);

const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda']; // ...string[] = quer dizer que pode ter qualquer quantidade de strings
console.log(dadosCliente4);

/*
DEntro da tupla podemos usar o pop() para remover o ultimo elemento do array
mas se a tupla for readonly não podemos usar o pop() nem o push() para adicionar um novo elemento
*/
dadosCliente1.pop();

// readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];

const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);

export default {};
