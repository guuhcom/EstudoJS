const carrinho = [
    '{"nome":"Borracha","preco": 2.00}',
    '{"nome":"caderno","preco": 10.00}',
    '{"nome":"Mochila","preco": 50.00}',
    '{"nome":"Açaí","preco": 25.00}'
];

console.log(carrinho);

const toMoney = e => 
    `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;

let values = carrinho.map(function(e){
  let objeto = JSON.parse(e);
  return objeto.preco;  
}).map(toMoney);

console.log(values);