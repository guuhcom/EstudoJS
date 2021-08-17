const alunos = [
    {nome: 'João Paulo', nota: 23.6, bolsista: false},
    {nome: 'Bia Martins', nota: 24.4, bolsista: true},
    {nome: 'Gabriel Vitor', nota: 27.8, bolsista: true},
    {nome: 'Maria Paula', nota: 30.5, bolsista: false},
    {nome: 'Anna Luiza', nota: 27.6, bolsista: false},
    {nome: 'Heitor Pinto', nota: 30, bolsista: true},
]

console.log(alunos.map(a => a.nota),"\n");//retorna um novo array só com as notas.

//sem parametro de valor inicial
const resul1 = alunos.map(a => a.nota).reduce(function(acumulador, valueAtual){
    console.log(acumulador +" / "+valueAtual);//mostrar o passo a passo 
    return acumulador + valueAtual;
});

console.log("--\n")

//com parametro de valor inicial
const resul2 = alunos.map(a => a.nota).reduce(function(acumulador, valueAtual){
    return acumulador + valueAtual;
}, 10);
console.log(resul2)