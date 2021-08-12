const nums = [1,2,3,4,5];

let result = nums.map(function(elementoDoArray){
    return elementoDoArray * 2;
});

console.log(result);

const sun10 = e => e + 10;
const mult3 = e => e * 3;
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

result = nums.map(sun10).map(mult3).map(toMoney);
console.log(result);