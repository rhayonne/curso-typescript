//criando o tipo para indicar oque eu quero que seja retornado
type MapStringCallback = (item: string) => string;

//funcao com callback indefinido
function mapString(array: string[], callbackfn: CallableFunction): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

//funcao usando o callback definido no tipo
function mapString2(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];

//funcao para retornar o array em maiusculo
const abcMapped = mapString(abc, function (item: any) {
  return item.toUpperCase();
});

//fucao para retornar o array em maiusculo usando o tipo definido
const abcMapped2 = mapString2(abc, (item) => item.toUpperCase());

console.log(abcMapped);
console.log(abcMapped2);
