//codigo dos carros

let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5 ,3];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i +=1){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 30);
    }
}

function movimentaCarro(){
    for(i = 0; i < imagemCarros.length; i += 1){
        xCarros[i] -= velocidadeCarros[i];
    }
}
function voltaPosicaoInicialDoCarro(){
    for(i= 0; i < imagemCarros.length; i += 1){
        if(passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < -40;
}
  