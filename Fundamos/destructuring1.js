// novo recurso do ES2015
// Destruturação de um objeto 
const _pessoa ={
    nome: 'Anna',
    idade: 27,
    endereco:{
        logradouro: 'Rua urandi',
        bairro: 'Concordia'
    }
};

const{nome,idade} = _pessoa;
console.log(nome,idade);

const{nome: n, idade: i} =_pessoa;
console.log(n,i);

const{sobrenome, bemHumorada = true} = _pessoa;
console.log(sobrenome,bemHumorada);

const{endereco:{logradouro: l,bairro: b}} =_pessoa;
console.log(l,b);