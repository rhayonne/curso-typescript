type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // intersection - o objeto tem os 3 tipos --- ele deve ter todos os tipos

const pessoa: Pessoa = { nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }; //so vai funcionar se tiver os 3 tipos como nesse exemplo
console.log(pessoa);

//tipos como conjuntos
type AB = 'A' | 'B'; // esse tipo contem A ou B
type AC = 'A' | 'C'; // esse tipo contem A ou C
type AD = 'A' | 'D'; // esse tipo contem A ou D
type intersection = AB & AC & AD; // esse tipo vai conter o que tem em AB e AC e AD , ou seja, A

export { pessoa };
