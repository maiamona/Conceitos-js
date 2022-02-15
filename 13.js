let dados2 = [{ nome: 'Caramelo', idade: 3, tipo: 'cachorro' },
{ nome: 'Rex', idade: 6, tipo: 'cachorro' },
{ nome: 'Caramelo', idade: 3, tipo: 'gato' },
{ nome: 'Thor', idade: 3, tipo: 'cachorro' }];

const cachorros = dados2.filter((dado, index) => dado.tipo === 'cachorro');
console.log(cachorros);

const idadeReal = cachorros.map((cao, index) => ({nome: cao.nome, idade: cao.idade * 7}));
console.log(idadeReal);

const totalIdades = idadeReal.reduce((soma = 0, dados2, index) =>{
    return soma + dados2.idade
}, 0);
console.log(totalIdades);

const idade = dados2.filter((dado, index) => dado.tipo === 'cachorro')
.map((cao, index) => ({nome: cao.nome, idade: cao.idade * 7}))
.reduce((soma = 0, dados2, index) =>{
    return soma + dados2.idade
}, 0);
console.log(idade);