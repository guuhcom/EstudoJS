const alunos = [
    {nome: 'João Paulo', nota: 23.6},
    {nome: 'Bia Martins', nota: 24.4},
    {nome: 'Gabriel Vitor', nota: 27.8},
    {nome: 'Maria Paula', nota: 30.5},
    {nome: 'Anna Luiza', nota: 27.6},
    {nome: 'Heitor Pinto', nota: 30}
];

//ex utilizando o código para somar a media de notas da sala
//Imperativo 
let total1 = 0;
for(let i=0; i <alunos.length;i++){
    total1 += alunos[i].nota;
}
console.log("Media: ",total1/alunos.length);

//Declarativa
const getNota = aluno => alunos.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log("Media: ", total1/alunos.length );