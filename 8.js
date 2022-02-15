class Animal{
    constructor(pes){
        this.pes = pes;
    }

    quantidadePes(){
        console.log(`Eu tenho ${this.pes} pes/patas`);
    }
}

class Mamifero extends Animal{
    constructor(nome, som, pes){
        super(pes);//o metodo 'super' chama o 'constructor' da sua 'class' pai que foi extendida (extends)
        this.nome = nome;
        this.som = som;
    }

    emitirSom(){
        console.log(`Este animal ${this.nome} faz ${this.som}`);
    }
}

const cachorro = new Mamifero('Galinha', 'cocorococo', 4);
cachorro.emitirSom();
cachorro.quantidadePes();