// construction function
function Usuario(nome) {
    this.nome = nome;
    this.log = function () {
        console.log(this);
    }
}

const gabriel = new Usuario('Gabriel');
console.log(gabriel);
console.log(gabriel instanceof Usuario);