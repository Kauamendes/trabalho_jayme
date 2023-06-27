const reprodutor = document.getElementById("reprodutor");
const imagemMusica = document.getElementById("imagemMusica");
const nomeMusica = document.getElementById("nomeMusica");
const nomeArtista = document.getElementById("nomeArtista");
const tempoAtual = document.getElementById("tempoAtual");
const duracaoTotal = document.getElementById("duracaoTotal");
const barraProgresso = document.getElementById("barra-progresso");
const progresso = document.getElementById("progresso");

const textoBotaoPlay = "<i class='fa-solid fa-circle-play' id='botaoPlayPausa'></i>";
const textoBotaoPause = "<i class='fa-solid fa-circle-pause' id='botaoPlayPausa'></i>";

let indice = 0;

const musicas = [
    {
        src: "./music/[YT2mp3.info] - Costa Gold -  N.A.D.A.B.O.M PT 3 (320kbps).mp3",
        img: "./images/nadabom3.jpeg",
        nome: "Costa Gold - N.A.D.A.B.O.M PT 3",
        nomeArtista: "Costa Gold"
      },
      {
        src: "./music/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3",
        img: "./images/numb.jpeg",
        nome: "Numb - Linkin Park",
        nomeArtista: "Linkin Park"
      },
      {
        src: "./music/SnapInsta.io - Avicii - The Nights (128 kbps).mp3",
        img: "./images/the_nights.jpg",
        nome: "The Nights - Avicii",
        nomeArtista: "Avicii"
      },
      {
        src: "./music/SnapInsta.io - Edi Rock - That's My Way ft. Seu Jorge [Video Oficial] (192 kbps).mp3",
        img: "./images/thats_my_way.jpg",
        nome: "That's My Way ft. Seu Jorge",
        nomeArtista: "Edi Rock"
      },
      {
        src: "./music/SnapInsta.io - Imprevisto - Yago Oproprio ft. Rô Rosa (Clipe Oficial) (128 kbps).mp3",
        img: "./images/imprevisto.jpg",
        nome: "Imprevisto - Yago Oproprio ft. Rô Rosa - Yago Oproprio",
        nomeArtista: "Yago Oproprio"
      },
      {
        src: "./music/SnapInsta.io - Lagum, L7NNON, Mart'nália - EITA MENINA (128 kbps).mp3",
        img: "./images/eita_menina.jpg",
        nome: "EITA MENINA",
        nomeArtista: "Lagum, L7NNON, Mart'nália"
      },
      {
          src: "./music/SnapInsta.io - Lil Nas X - Old Town Road (Official Movie) ft. Billy Ray Cyrus (128 kbps).mp3",
          img: "./images/old_town_road.jpg",
          nome: "Old Town Road",
          nomeArtista: "Lil Nas X"
        },
        {
          src: "./music/SnapInsta.io - MC CABELINHO - X1 (prod. DALLASS) (256 kbps).mp3",
          img: "./images/x1.jpg",
          nome: "X1 (prod. DALLASS)",
          nomeArtista: "MC CABELINHO"
        },
        {
          src: "./music/SnapInsta.io - Travis Scott - goosebumps ft. Kendrick Lamar (128 kbps).mp3",
          img: "./images/goosebumps.jpg",
          nome: "goosebumps ft. Kendrick Lamar",
          nomeArtista: "Travis Scott"
        },
  ];

function playPause() {
    console.log(reprodutor.paused);
    if (reprodutor.paused) {
      reprodutor.play();
      botaoPlayPausa.innerHTML = textoBotaoPause;
    } else {
      reprodutor.pause();
      botaoPlayPausa.innerHTML = textoBotaoPlay;
    }
  }

  function tocarProximaOuAnterior(tipo) {
    console.log(tipo)
    if (tipo === "proxima") {
      indice = (indice + 1) % musicas.length;
    } else if (tipo === "anterior") {
      indice = (indice - 1 + musicas.length) % musicas.length;
    } else if (tipo === "iniciar") {
      indice = 0;
    }

  reprodutor.src = musicas[indice].src;
  nomeMusica.innerHTML = musicas[indice].nome;
  nomeArtista.innerHTML = musicas[indice].nomeArtista;
  imagemMusica.src = musicas[indice].img;
  if (tipo !== "iniciar") playPause();

  atualizarTempo();
}

function atualizarTempoDoReprodutor(event) {
    const barraProgresso = event.target;
    const reprodutor = document.getElementById("reprodutor");

    const novoTempo = (event.offsetX / barraProgresso.offsetWidth) * reprodutor.duration;
    reprodutor.currentTime = novoTempo;
}


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

function formatarZero(n) {
  return n < 10 ? "0" + n : n;
}

tocarProximaOuAnterior("iniciar");
