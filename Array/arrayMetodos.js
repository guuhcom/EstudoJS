const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop(); // remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // add um elemento no final do array
console.log(pilotos);

pilotos.shift(); // remove o  primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // add um elemento no inicio do array 
console.log(pilotos);

//splice pode adicionar e remover elementos
//add
pilotos.splice(2,0,'Bottas', 'Massa');
console.log(pilotos);
//remover
pilotos.splice(3,1);
console.log(pilotos);

//slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2); // inicia no indisse 2.
console.log(algunsPilotos1);;
const algunsPilotos2 = pilotos.slice(1,4); //indica o indice inicial e o tamanho.
console.log(algunsPilotos2);