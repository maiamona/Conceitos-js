class Forma{
    desenhar(){
        console.log('Eu sou uma forma');
    }
}

class Triangulo extends Forma{}

class Circulo extends Forma{
    desenhar(){
        console.log('Eu sou um circulo');
    } 
}

const formas = [new Forma(), new Triangulo(), new Circulo()];

formas.forEach(forma => forma.desenhar());