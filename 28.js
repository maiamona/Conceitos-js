// CURRYING

// const dragao = (nome, tamanho, elemento) => `${nome} é um dragão de ${tamanho} metros de comprimento e cospe ${elemento}`;

// console.log(dragao('Charmander', 30, 'fogo'));

const dragao = (nome) => (tamanho) => (elemento) => `${nome} é um dragão de ${tamanho} metros de comprimento e cospe ${elemento}`;

// console.log(dragao('Charmander') (30) ('fogo'));

const shazam = dragao('Charmander');
console.log(shazam(30) ('gelo'));
console.log(shazam(76) ('fogo'));

const shazamPequeno = shazam(30);
console.log(shazamPequeno ('eletricidade'));