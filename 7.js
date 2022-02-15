// factory function
const mamifero = function (nome, som) {
    return{nome, som};
}

const cachorro = mamifero('Cachorro', 'auau');
console.log(cachorro);