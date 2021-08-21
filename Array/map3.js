Array.prototype.map2 = function(callback){
    const newArray = [];

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

const carrinho = [
    '{"nome":"Borracha","preco": 2.00}',
    '{"nome":"caderno","preco": 10.00}',
    '{"nome":"Mochila","preco": 50.00}',
    '{"nome":"Açaí","preco": 25.00}'
];

console.log(carrinho);

const toObject = json => JSON.parse(json);
const valueMoney = obj => obj.preco;
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;

let values = carrinho.map2(toObject).map2(valueMoney).map2(toMoney);

console.log(values);

