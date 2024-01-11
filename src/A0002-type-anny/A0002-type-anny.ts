function showMessage(msg: any) {
  /* any é o tipo padrão do TS e é o mesmo que não declarar o tipo então não é recomendado usar any
  quando dentro do tsconfig o strict é true o any não é permitido e todas as flags embaixo do strict são ativadas como true
  por isso, quando você quer recever qualquer tipo de dado você pode usar o any ou o unknown explicitamente como nesse caso e não (showMessage(msg)){}

  */
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('olá'));
console.log(showMessage(1));
