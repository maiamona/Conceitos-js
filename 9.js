// const dados = {nome: 'Gabriel'};
// const saudacao = function (idade) {
//     console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudacao.call(dados, 28);

// const dados = {nome: 'Gabriel'};
// const argumentos = [26];
// const saudacao = function (idade) {
//     console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudacao.apply(dados, argumentos);



const dados = {nome: 'Gabriel'};
const saudacao = function (idade) {
    console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
const bound = saudacao.bind(dados);
bound(25);