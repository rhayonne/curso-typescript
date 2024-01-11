/* eslint-disable */
let nome: string = 'luiz';

let idade: number = 30;
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let ArrayDeNumeros2: number[] = [1, 2, 3];
let ArrayDeStrings2: string[] = ['a', 'b', 'c'];


// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = { // ? = quer dize que o adulto é opcional
  idade: 30,
  nome: 'Luiz'
}

console.log(pessoa.nome);

// Funções
function soma(x: number, y: number): number {
  return x + y;

}

const resultSoma = soma(2, 2);
console.log(resultSoma);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
/* a funcao doma e soma2 são a mesma coisa a diferença é que a soma2 tem o tipo de retorno declarado
e a soma não tem o tipo de retorno declarado mas o typescript infere que o tipo de retorno é number
 na soma2 foi usado o array function por que os : (dois pontos) sao usados antes.
Então depois da declaração dos parametros é usado o => (flecha) e depois o tipo de retorno.
*/

export default {};