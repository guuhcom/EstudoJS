let dobro = function(a){
    return 2 * a;
};

dobro = (a) => {
    return 2 * a;
};

dobro = a => 2 * a; //return etá implícito
console.log(dobro(Math.PI));

let ola = function(){
    return 'Olá!';
};

ola = () => 'Olá';
ola = _ => 'Olá'; // posui um parametro
console.log(ola());