const aprovados = ['Anna', 'Bia', 'Andre', 'João'];

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`);
})

console.log('--');

//Aplicando a sintaxe de aerofunction
aprovados.forEach((nome,indice) => console.log(`${indice +1}) ${nome}`));
aprovados.forEach(nome => console.log(`${nome}`));

console.log('--');

//Salvando a função em uma constante:
const funcao = aprovados => console.log(aprovados);
aprovados.forEach(funcao);
