console.log(typeof Object); //Chamando uma função
console.log(typeof new Object); //Chamando um Objeto

const Cliente = function(){}; // declarando que uma constante irá receber uma função
console.log(typeof Cliente); // chamando a Função.
console.log(typeof new Cliente); // chamando o Objeto

class Produto{}; //ES 2015(ES6) //Declarando uma class, mas na linguagem js é uma sitax chugar(na verdade é uma função)
console.log(typeof Produto);
console.log(typeof new Produto);