const x = 10; // tipo literal
const a = 100 as const; // tipo literal

const pessoa = {
  nome: 'Luiz' as const, // as const = literal type indica que o valor da propriedade nao pode ser alterado
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  //funcao que recebe um literal type entao ao usar a funcao o parametro deve ser um dos valores definidos
  return cor;
}

escolhaCor('Vermelho');

export default 1;
