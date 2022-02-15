// let Usuario2 = function (nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// const gabriel = new Usuario2('Gabriel', 28);
// const novoGabriel = Object.create(gabriel);

// console.log(novoGabriel instanceof Usuario2);
// console.log(novoGabriel.nome);



function Carro(cor) {
    this.cor = cor;
    this.descricao = descricao;
}
Carro.prototype.pegaInformacoes = function () {
    return this.descricao + ' e a cor ' + this.cor;
}

let meuCarro = Object.create(Carro.prototype);
meuCarro.cor = 'azul';
// console.log(meuCarro.pegaInformacoes());

const novoCarro = Object.create(Carro, {
cor:{
    writable: false, configurable: true, value: 'vermelho'
},
descricaoPadrao: {
    writable: false, configurable: true, value: 'Meu carro'
},
descricao: {
    configurable: true,
    get: function () {
        return this.descricaoPadrao.toUpperCase();
    },
    set: function (valor) {
        this.descricaoPadrao = valor.toLowerCase();
    }
}
});

console.log(novoCarro.descricao);