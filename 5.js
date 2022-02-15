// const mostrarAlerta = (nome)=>{
//     alert('set timeout - ' + nome)
//     };
    
//     setTimeout(mostrarAlerta, 200, 'mona');

// const timeOut = setTimeout(mostrarAlerta, 3500, 'mona');

// setTimeout(() =>{
// clearTimeout(timeOut)
// }, 1500);


// const interval = setInterval(() =>{
// console.log('teste');
// }, 1000);

// setTimeout(() =>{
//     clearInterval(interval);
// }, 5000);



let contador = 0;

function animation() {
    contador ++;
    console.log(contador);
    loop = requestAnimationFrame(animation);
}

var loop = requestAnimationFrame(animation);

setTimeout(() =>{
    cancelAnimationFrame(loop);
}, 5000);

