const escola = [{
    nome: 'Turma M1',
    alunos: [{nome: 'Gustavo', nota: 50}, {nome: 'Anna', nota: 60}]
},{
    nome: 'Turma M2',
    alunos: [{nome: 'Matheus', nota: 55}, {nome: 'Aline', nota: 45}]
}
];


const getNotaAluno = a => a.nota;
const getNotasTurmas = t => t.alunos.map(getNotaAluno);

const nota1 = escola.map(getNotasTurmas);
console.log(nota1);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));
};
const nota2 = escola.flatMap(getNotasTurmas);
console.log(nota2);