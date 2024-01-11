const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';

const objetoB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
/*
Record é um tipo que recebe dois parametros o primeiro é a chave(chaveA) e o segundo é o valor (ValorA).
Nesse estamos tipificando o objeto e não mais deichando o typescripte inferir o tipo. Como no ObjetoA.
Entretanto o quando tipamos o objeto, não conseduiremos mais acessar as propriedades do objeto como no objetoA. ex: objetoA.chaveA;

unknown é o tipo mais generico do typescript ele é mais generico que o any
*/

const objeto3: {
  readonly chaveA: string; // readonly = quer dizer que o valor da chave não pode ser alterado
  chaveB: string;
  chaveC?: string; // ? = quer dize que o adulto é opcional
  [key: string]: unknown; // [key: string]: unknown; = quer dizer que pode ter qualquer chave e o valor é unknown (index signature)
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
/*
Nesse caso typificamos os valores à serem recebidos nas chaves
o index signature vai receber qualquer valor e so pode ser usado se antes, atribuirmos os valores das outras chaves como no exemplo acima.

(index signature)
Esse exemplo é muito usado quando não sabemos o nome das chaves que vamos receber.
quando vamos recever um objeto de uma api por exemplo que não sabemos os tipos de valores que vamos receber.

*/

objeto3.chaveC = 'Valor C';
//objeto3.chaveA = 'Outro valor'; // não é possivel atribuir um novo valor a chaveA por que ela é readonly

console.log(objeto3);
