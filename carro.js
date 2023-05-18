//codigo dos carros

let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5 ,3];

function mostraCarro(){
    image(imagemDoCarro, xCarros[0], yCarros[0], 50, 30);
    image(imagemDoCarro2, xCarros[1], yCarros[1], 50, 30);
    image(imagemDoCarro3, xCarros[2],yCarros[2],50, 30);  
}

function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1]-= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}
function voltaPosicaoInicialDoCarro(){
    if(xCarros[0] < -40){
        xCarros[0] = 600;
    }
    if (xCarros[1] < -40){
        xCarros[1] = 600;
    } if(xCarros[2] < -40){
        xCarros[2] = 600
    }
}
  