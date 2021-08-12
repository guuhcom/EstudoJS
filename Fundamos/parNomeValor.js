//par nome / valor
const saudacao = 'opa'; // contexto léxoco 1

function exec(){
    const saudacao = 'Colé'; // contexto léxoco 2
    return saudacao;
}

//Objetos são grupos aninhados de pares chave/valor

const Cliente = {
    nome: 'Gustavo',
    idade: 27,
    peso: 80,
    endereco:{
        logradouro: 'Rua urandi',
        bairro: 'concordia'
    }
};

console.log(saudacao);
console.log(exec());
console.log(Cliente)