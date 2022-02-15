const Usuario5 = {nome: 'Gabriel', pontos: 0};
// const alteraUsuario = (usuario) =>{
//     usuario.nome = usuario.nome.toUpperCase();
//     usuario.pontos++;
//     return usuario;
// }

// alteraUsuario(Usuario5);
// alteraUsuario(Usuario5);
// alteraUsuario(Usuario5);
// console.log(Usuario5);

const nomeMaiusculo = (nome) => nome.toUpperCase();
const incrementaPontos = (pontos) => pontos + 1;

Usuario5.nome = nomeMaiusculo(Usuario5.nome);
Usuario5.pontos = incrementaPontos(Usuario5.pontos);

console.log(Usuario5);