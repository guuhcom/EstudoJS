Array.prototype.filter2 = function(callback) {
    const newArray = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            newArray.push(this[i]);
        }
     }

     return newArray;
}

const listIten = [
    {nome: "Notebook", preco: 4199, fragil: false},
    {nome: "Celular", preco: 2000, fragil: true},
    {nome: "Tablete", preco: 1590, fragil: true},
    {nome: "Relógio",preco: 3049, fragil:false}
];

const caro = listIten => listIten.preco >= 500;
const fragil = listIten => listIten.fragil;

console.log(listIten.filter2(caro).filter2(fragil));
