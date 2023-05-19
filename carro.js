//codigo dos carros

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5 , 3, 5, 3.5, 6];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i +=1){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
    for(i = 0; i < imagemCarros.length; i++){
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
  