const alunos = [
    {nome: 'João Paulo', nota: 23.6, bolsista: true},
    {nome: 'Bia Martins', nota: 24.4, bolsista: false},
    {nome: 'Gabriel Vitor', nota: 27.8, bolsista: true},
    {nome: 'Maria Paula', nota: 30.5, bolsista: false},
    {nome: 'Anna Luiza', nota: 27.6, bolsista: false},
    {nome: 'Heitor Pinto', nota: 30, bolsista: false},
]

//Todos os alunos são bolsistas?
const allIsBolsistas = (result, bolsista) => result && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(allIsBolsistas),"\n");


//Algum aluno é bolsista?
const isBolsistas = (result, bolsista) => result || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(isBolsistas));