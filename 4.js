// console.log(true + 1);
// console.log(true + true);
// console.log([] + {});
// console.log([] + []);

// IMPLICITO
// console.log(+ '5');
// console.log(5 + '');
// console.log(123 && 'oi');
// console.log(null || true);

// EXPLICITO
// console.log(Number('50'));
// console.log(String( 50));
// console.log(typeof 'mona' === 'string');

// !function teste(){
//     alert('ola mensage');
// }();

// var variavel = 20;
// !function teste(){
//     variavel = 30;
// }();

// console.log(variavel);

var dados = (function () {
   var contador = 0;
   return{
       incrementar: function () {
           contador ++;
           return contador
       }
   } 
}());

console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.incrementar());