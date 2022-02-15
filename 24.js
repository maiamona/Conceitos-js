const Carro5 = {
    tracao: '4x4',
    ligar(){
        return 'ligou'
    }
}

const meuCarro2 = Object.create(Carro5, {dono: {value: 'Gabriel'}});

Carro5.__proto__.desligar = function(){
    return 'desligou';
}

console.log(meuCarro2.ligar());
console.log(meuCarro2.desligar());