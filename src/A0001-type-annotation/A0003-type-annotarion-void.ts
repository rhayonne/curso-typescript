function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

/*
A função foi declarada sem retorno porem o argumento é um array de strings
*/

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otávio',

  exibirNome(): void {
    console.log(this.nome + '' + this.sobrenome);
  },
};

semRetorno('luiz', ' ', 'otávio');
pessoa.exibirNome();

export { pessoa };
/* O exporte deve ser utilizado por que estamos usando o scriptModule
Então uma vez que existe uma variavel ela se torna global.
No caso a variavel pessoa ja foi declarada e não foi exportada no arquivo A0001-type-annotation.ts e ela se tornou global por não ter sido exportada.
Então para evitar isso é necessário exportar a variavel pessoa.
*/
