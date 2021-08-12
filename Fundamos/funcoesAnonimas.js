const _soma = function(x,y){
    return x + y;
}

const _imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
}

_imprimirResultado(3,4);
_imprimirResultado(3,4,soma);
_imprimirResultado(3,4, function(x,y){
    return x -y;
})
_imprimirResultado(3,4, (x,y) => x*y)