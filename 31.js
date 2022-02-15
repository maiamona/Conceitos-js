class Utilitarios{
    constructor(){
        this.texto = '';
    }

    getTexto = () => this.texto;
    setTexto = (texto) =>{
        this.texto = texto;
        return this;
    }

    maiusculo = () =>{
        this.texto = this.texto.toUpperCase();
        return this;
    }

    reverter = () =>{
        this.texto = this.texto.split('').reverse().join('');
        return this;
    }
}

const _utilitarios = new Utilitarios();
let texto = _utilitarios.setTexto('Gabriel').reverter().maiusculo().getTexto();

console.log(texto);