
const dragao = (nome) => (tamanho) => (elemento) => `${nome} é um dragão de ${tamanho} metros de comprimento e cospe ${elemento}`;

const incrementar = x => x + 1;
const dobrar = x => x * 2;
// const valor = incrementar(3);
// const resultado = dobrar(valor);
// console.log(resultado);

const valor = 3;
// const resultado = dobrar(incrementar(valor))
// console.log(resultado);

// PIPE

const pipe = (inc, dob) => (args) => dob(inc(args));
const incrementaEDobra = pipe(incrementar, dobrar);
const resultado = incrementaEDobra(3);
console.log(resultado);