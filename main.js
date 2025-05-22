const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i < botoes.length; i++){

    botoes[i].onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoOjetivo1 = new Date("2026-02-01t00:00:00");
const tempoOjetivo2 = new Date("2025-07-01t00:00:00");
const tempoOjetivo3 = new Date("2025-10-10t00:00:00");
const tempoOjetivo4 = new Date("2025-01-05t00:00:00");


const tempos = [tempoOjetivo1, tempoOjetivo2, tempoOjetivo3, tempoOjetivo4];

function caculaTempo(tempoOjetivo){

    let tempoAtual = new Date();
    let tempoFinal = tempoOjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;
if(tempoFinal >0){

    return[dias,horas,minutos,segundos];
}  else{
     return[0,0,0,0];
   }
}

function atualizaCronometro(){

    for (let i=0; i < contadores.length; i++){
        document.getElementById("dias"+i).textContent = caculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = caculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = caculaTempo(tempos[i])[2];
        document.getElementById("sec"+i).textContent = caculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro

}