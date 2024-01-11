type Idade = number; //criando um tipo alias ou seja, sempre que usar Idade, vai ser um number
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; //criando um tipo alias ou seja, sempre que usar Idade, vai ser um number
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'; //criando um tipo alias ou seja, sempre que usar Idade, vai ser um number

type CorPreferida = CorRGB | CorCMYK; // criando um tipo com a uniao de outros tipos

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000, //200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Amarelo'));
