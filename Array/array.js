console.log(typeof Array, typeof new Array, typeof []); ////Indicando o tipo do array
//No js o array é tratado como um objeto ordenado por indice.

let aprovados = new Array('Bia', 'Anna', 'Kaio');
console.log(aprovados);

aprovados = ['Bia', 'Anna', 'Kaio']; ///outra forma de se instaciar um array.
console.log(aprovados[0], aprovados[1], aprovados[2], aprovados[3]);

//modos de add um elemento no array
aprovados[3] = 'Paulo';
aprovados.push('Andre');
console.log(aprovados, aprovados.length);

//Add um elemento fora na lista de insdice
aprovados[9] = 'Rafael';
console.log('Tamanho do arry: ' + aprovados.length);
console.log(aprovados[8] === undefined);


//Organizar o array, colocando os elementos undefinend no final
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

//Deletar elementos de um array
delete aprovados[1];
console.log(aprovados);

//reorganizar selecionando o indice
aprovados.splice(1,3,'Tatu', 'Manga')
console.log(aprovados);