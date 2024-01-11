export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
/*
função tipificada com o tipagem generica Array<T> (que recebe um tipo generico T) Array<number>

*/

export function contatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
/*
Fynçoes tipificadas com array T[] (que recebe um tipo generico T)
*/

const result = multiplicaArgs(1, 2, 3);
console.log(result);

const concatenacao = contatenaStrings('a', 'b', 'c');
console.log(concatenacao);

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
