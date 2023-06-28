const reprodutor = document.getElementById("reprodutor");
const imagemMusica = document.getElementById("imagemMusica");
const nomeMusica = document.getElementById("nomeMusica");
const nomeArtista = document.getElementById("nomeArtista");
const tempoAtual = document.getElementById("tempoAtual");
const duracaoTotal = document.getElementById("duracaoTotal");
const barraProgresso = document.getElementById("barra-progresso");
const progresso = document.getElementById("barra-progresso");
const lista = document.getElementById("listaMusicas");
const playPauseButton = document.getElementById("playPause");

const textoBotaoPlay = "<i class='fa-solid fa-circle-play' id='botaoPlayPausa'></i>";
const textoBotaoPause = "<i class='fa-solid fa-circle-pause' id='botaoPlayPausa'></i>";

let indice = 0;

//Alguns arquivos de audio estão com erro, necessario baixar e colocar no projeto as seguintes musicas
//
// - Goosebumps
//
//
//
//
//
const musicas = [
    {
        src: "./music/[YT2mp3.info] - Costa Gold -  N.A.D.A.B.O.M PT 3 (320kbps).mp3",
        img: "https://akamai.sscdn.co/uploadfile/letras/albuns/3/3/8/0/1064351618577158.jpg",
        nome: "Costa Gold - N.A.D.A.B.O.M PT 3",
        nomeArtista: "Costa Gold"
      },
      {
        src: "./music/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3",
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b9/Linkin_Park_-_Numb_CD_cover.jpg/220px-Linkin_Park_-_Numb_CD_cover.jpg",
        nome: "Numb - Linkin Park",
        nomeArtista: "Linkin Park"
      },
      {
        src: "./music/SnapInsta.io - Avicii - The Nights (Lyrics) (320 kbps) (1).mp3",
        img: "https://upload.wikimedia.org/wikipedia/pt/3/39/The_Nights.jpg",
        nome: "The Nights",
        nomeArtista: "Avicii"
      },
      {
        src: "./music/SnapInsta.io - Edi Rock - That's My Way ft. Seu Jorge [Video Oficial] (192 kbps).mp3",
        img: "https://i.scdn.co/image/ab67616d0000b2733abf540c3d6d6b6d2f656114",
        nome: "That's My Way",
        nomeArtista: "Edi Rock, Seu Jorge"
      },
      {
        src: "./music/SnapInsta.io - Imprevisto - Yago Oproprio ft. Rô Rosa (Clipe Oficial) (128 kbps).mp3",
        img: "https://i1.sndcdn.com/artworks-tjziG5MoYfEzknxV-LRpAeg-t500x500.jpg",
        nome: "Imprevisto",
        nomeArtista: "Yago Oproprio, Rô Rosa"
      },
      {
        src: "./music/SnapInsta.io - Lagum, L7NNON, Mart'nália - EITA MENINA [Letra] (128 kbps).mp3",
        img: "https://versoseprosas.com.br/wp-content/uploads/2021/07/capa-do-single-eita-menina-lagum.jpg",
        nome: "EITA MENINA",
        nomeArtista: "Lagum, L7NNON, Mart'nália"
      },
      {
          src: "./music/SnapInsta.io - Lil Nas X - Old Town Road (Lyrics) ft. Billy Ray Cyrus (128 kbps).mp3",
          img: "https://jpimg.com.br/uploads/2019/07/Old-Town-Road-Video-GQ-2019-051719.jpg",
          nome: "Old Town Road",
          nomeArtista: "Lil Nas X"
        },
        {
          src: "./music/SnapInsta.io - MC CABELINHO - X1 (prod. DALLASS) (256 kbps).mp3",
          img: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/b/0/1/01655987029.jpg",
          nome: "X1 (prod. DALLASS)",
          nomeArtista: "MC CABELINHO"
        },
        {
          src: "./music/SnapInsta.io - Goosebumps (Lyrics) - Travis Scott, Kendrick Lamar _ RapTunes (128 kbps).mp3",
          img: "https://wallpapercave.com/wp/wp4566148.jpg",
          nome: "Goosebumps",
          nomeArtista: "Travis Scott,  Kendrick Lama"
        },
  ];

playPauseButton.onclick = () => playPause();

  const playPause = () => {
    if (reprodutor.paused) {
      reprodutor.play();
      playPauseButton.innerHTML = textoBotaoPlay;
    } else {
      reprodutor.pause();
      playPauseButton.innerHTML = textoBotaoPause;
    }
  };

  musicas.forEach((musica) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    const div = document.createElement("div");
    li.textContent = `${musica.nome} - ${musica.nomeArtista}`;
    i.className = "fa-solid fa-music";
    i.style = 'color: #ffffff;';
    lista.appendChild(div);
    div.appendChild(i);
    div.appendChild(li);
});


  function tocarProximaOuAnterior(tipo) {
    if(tipo === "aleatorio") {
        indice = Math.random(Range(0, musicas.length))
    }
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

progresso.onclick = (e) => {
  const newTime = (e.offsetX / barraProgresso.offsetWidth) * reprodutor.duration;
  reprodutor.currentTime = newTime;
};

reprodutor.addEventListener('loadedmetadata', () => {
  atualizarTempo();
});

function atualizarTempo() {
    const minutosAtuais = Math.floor(reprodutor.currentTime / 60);
    const segundosAtuais = Math.floor(reprodutor.currentTime % 60);
    tempoAtual.textContent = `${minutosAtuais}:${formatarZero(segundosAtuais)}`;

    const duracaoFormatada = isNaN(reprodutor.duration) ? 0 : reprodutor.duration || 0;
    const minutosDuracao = Math.floor(duracaoFormatada / 60);
    const segundosDuracao = Math.floor(duracaoFormatada % 60);
    duracaoTotal.textContent = `${minutosDuracao}:${formatarZero(segundosDuracao)}`;

    const larguraProgresso = duracaoFormatada ? (reprodutor.currentTime / duracaoFormatada) * 100 : 0;
    //progresso.style.width = `${larguraProgresso}%`;
}

function formatarZero(n) {
  return n < 10 ? "0" + n : n;
}

tocarProximaOuAnterior("iniciar");

function toggleMenu() {
  const listaMusicas = document.getElementById('listaMusicas');
  const toggleButton = document.getElementById('toggle-btn');
  listaMusicas.classList.toggle('show-menu');
  toggleButton.classList.toggle('toggle-btn-on');
}

