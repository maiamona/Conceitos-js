const impressora = (function(){
    let instanciaImpressora;

    function criar() {
        function imprimir() {
            console.log('Imprimindo documento');
        }

        function ligar() {
            console.log('Ligando impressora');
        }
        return {imprimir, ligar};
    }

    return{
        pegarInstancia: function(){
            if (!instanciaImpressora) {
                instanciaImpressora = criar();
            }
            return instanciaImpressora;
        }
    }
})();

const impressoraDaEmpressa1 = impressora.pegarInstancia();
const impressoraDaEmpressa2 = impressora.pegarInstancia();

impressoraDaEmpressa1.ligar();
console.log(impressoraDaEmpressa1);
console.log(impressoraDaEmpressa1 === impressoraDaEmpressa2);