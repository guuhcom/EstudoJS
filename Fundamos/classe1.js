class Lnacamento{
    constructor(nome ='Genérico', valor = 0){
       this.nome = nome;
       this.valor = valor;
    };
};

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    };

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    };

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        });
        return valorConsolidado;
    };
};

const salario = new Lnacamento('Salario', 45000);
const contaDeLuz = new Lnacamento('Luz', -220);

const contas = new CicloFinanceiro(6,2021);
contas.addLancamentos(salario, contaDeLuz);

console.log(contas.sumario());
