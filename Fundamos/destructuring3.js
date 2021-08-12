function rand({min=0,max=100}){
    const valor = Math.random()*(max - min) + min; // gerar valoer entre o max e minimo
    return Math.floor(valor);// truncamento do valor
}
console.log(rand({max: 50, min:40}));

const obj = {max:50,min:40};
console.log(rand(obj));

console.log(rand({})) // pasando com o parametro vazio 