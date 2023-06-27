const reprodutor = document.querySelector("#reprodutor");
const imagemMusica = document.querySelector("#imagemMusica");
const nomeMusica = document.querySelector("#nomeMusica");
const botaoPlayPausa = document.querySelector("#botaoPlayPausa");
const botaoAnterior = document.querySelector("#botaoAnterior");
const botaoProximo = document.querySelector("#botaoProximo");
const tempoAtual = document.querySelector("#tempoAtual");
const duracaoTotal = document.querySelector("#duracaoTotal");
const barraProgresso = document.querySelector(".barra-progresso");
const progresso = document.querySelector(".progresso");

import musicas from "./musicas.js";

const textoBotaoPlay = "<i class='bx bx-caret-right'></i>";
const textoBotaoPause = "<i class='bx bx-pause'></i>";

let indice = 0;

botaoAnterior.onclick = () => tocarProximaOuAnterior("prev");
botaoProximo.onclick = () => tocarProximaOuAnterior();

botaoPlayPausa.onclick = () => {
  if (reprodutor.paused) {
    reprodutor.play();
    botaoPlayPausa.innerHTML = textoBotaoPause;
  } else {
    reprodutor.pause();
    botaoPlayPausa.innerHTML = textoBotaoPlay;
  }
};

function atualizarTempo() {
    const minutosAtuais = Math.floor(reprodutor.currentTime / 60);
    const segundosAtuais = Math.floor(reprodutor.currentTime % 60);
    tempoAtual.textContent = `${minutosAtuais}:${formatarZero(segundosAtuais)}`;
  
    const duracaoFormatada = isNaN(reprodutor.duration) ? 0 : reprodutor.duration;
    const minutosDuracao = Math.floor(duracaoFormatada / 60);
    const segundosDuracao = Math.floor(duracaoFormatada % 60);
    duracaoTotal.textContent = `${minutosDuracao}:${formatarZero(segundosDuracao)}`;
  
    const larguraProgresso = duracaoFormatada ? (reprodutor.currentTime / duracaoFormatada) * 100 : 0;
  
    progresso.style.width = `${larguraProgresso}%`;
}

barraProgresso.onclick = (e) => {
  const novoTempo = (e.offsetX / barraProgresso.offsetWidth) * reprodutor.duration;
  reprodutor.currentTime = novoTempo;
};

function tocarProximaOuAnterior(tipo) {
    if (tipo === "proxima") {
      indice = (indice + 1) % musicas.length;
    } else if (tipo === "anterior") {
      indice = (indice - 1 + musicas.length) % musicas.length;
    } else if (tipo === "iniciar") {
      indice = 0;
    }

  reprodutor.src = musicas[indice].src;
  nomeMusica.innerHTML = musicas[indice].name;
  imagemMusica.innerHTML = musicas[indice].img;
  if (tipo !== "iniciar") playPause();

  atualizarTempo();
}

function formatarZero(n) {
  return n < 10 ? "0" + n : n;
}

tocarProximaOuAnterior("iniciar");
