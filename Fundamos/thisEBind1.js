const listIten = [
    {nome: "Notebook", preco: 4199, fragil: false},
    {nome: "Celular", preco: 2000, fragil: true},
    {nome: "Tablete", preco: 1590, fragil: true},
    {nome: "Relógio",preco: 3049, fragil:false}
];

//Metodo de instânciar o Filter com um parametro
console.log(listIten.filter(function(p){
    return p.preco > 2001;
}));
const precoMaiorQue = p => p.preco > 2001;
console.log(listIten.filter(precoMaiorQue));

//Com dois parametos 
console.log("--")
console.log(listIten.filter(function(p){
    return p.preco > 500 && p.fragil === true
}));
const precoMaiorQuee = p => p.preco > 500;
const fragilTipo = p => p.fragil === true;
console.log(listIten.filter(precoMaiorQuee).filter(fragilTipo))