// const alfabeto = new Set(['a', 'b', 'c', 'd']);
// alfabeto;

// alfabeto.add('e');
// console.log(alfabeto);

// console.log(alfabeto.has('b'));

// alfabeto.delete('c');
// console.log(alfabeto);



// let dados = [1, 2, 3, 3, 4, 4, 5];
// const numeros = new Set(dados);

// console.log(numeros);

// let mona = Array.from(numeros);
// console.log(mona);


const dados6 = new Map([['nome', 'gabriel'], ['idade', 28]]);

console.log(dados6);
dados6.set('estado', 'São Paulo');
console.log(dados6);
console.log(dados6.get('nome'));
dados6.forEach((dado, chave) => console.log(dado, chave));
