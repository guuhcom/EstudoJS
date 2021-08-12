const quaseArray = {0:'Anna', 1:'Bruna',3:'Bia'};
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this); },
    enumerable: false
});

console.log(quaseArray[0]);

const array = ['Anna', 'Bruna', 'Bia'];
console.log(quaseArray.toString(),array);