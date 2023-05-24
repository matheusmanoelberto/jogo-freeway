//codigo do ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;
      }
    }
}

function verificaConlisao(){
  for (let i = 0; i < imagemCarros.length; i = i +1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicapInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }      
    }
  }
}

function voltaAtorParaPosicapInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(100,158,180));
  text(meusPontos, width / 5, 20);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicapInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0 
}

function podeSeMover(){
  return yAtor  < 370; 
}