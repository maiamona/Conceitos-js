const pedido = {titulo: 'meu pedido', status: false};
const copiaPedido = (pedido) =>{
    // pedido.status = true;
    // return pedido;
    const pedido1 = Object.assign({}, pedido);
    pedido1.status = true;
     return pedido1;
}

const novoPedido = copiaPedido(pedido);
novoPedido.titulo = 'Segundo pedido';
console.log(pedido);
console.log(novoPedido);

// document.getElementById('logo-default').addEventListener('click', function(){
//     alert('clicou no logo');
//     });