const entrada = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r'];
function quicksort(entrada) {
    if (entrada.length < 2) {
        return entrada;
    }
    let pivo = entrada[0];
    let esquerda = [];
    let direita = [];
    console.log(pivo);
    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] < pivo) {
            esquerda.push(entrada[i]);
        } else{
            direita.push(entrada[i]);
        }
        
    }
    console.log(esquerda, direita);
    return [...quicksort(esquerda), pivo, ...quicksort(direita)];
}

console.log(quicksort(entrada));