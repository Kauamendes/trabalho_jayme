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

const textoBotaoPlay = "<i class='fas fa-circle-play' id='botaoPlayPausa'></i>";
const textoBotaoPause = "<i class='fas fa-circle-pause' id='botaoPlayPausa'></i>";

let indice = 0;
let aleatorio = false;
let repetir = false;

const musicas = [
    {
        id: 1,
        src: "./music/[YT2mp3.info] - Costa Gold -  N.A.D.A.B.O.M PT 3 (320kbps).mp3",
        img: "https://akamai.sscdn.co/uploadfile/letras/albuns/3/3/8/0/1064351618577158.jpg",
        nome: "N.A.D.A.B.O.M PT 3",
        nomeArtista: "Costa Gold",
        duracao: "3:47"
      },
      {
        id: 2,
        src: "./music/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3",
        img: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b9/Linkin_Park_-_Numb_CD_cover.jpg/220px-Linkin_Park_-_Numb_CD_cover.jpg",
        nome: "Numb",
        nomeArtista: "Linkin Park",
        duracao: "3:07"
      },
      {
        id: 3,
        src: "./music/SnapInsta.io - Avicii - The Nights (Lyrics) (320 kbps) (1).mp3",
        img: "https://upload.wikimedia.org/wikipedia/pt/3/39/The_Nights.jpg",
        nome: "The Nights",
        nomeArtista: "Avicii",
        duracao: "1:38"
      },
      {
        id: 4,
        src: "./music/SnapInsta.io - Edi Rock - That's My Way ft. Seu Jorge [Video Oficial] (192 kbps).mp3",
        img: "https://i.scdn.co/image/ab67616d0000b2733abf540c3d6d6b6d2f656114",
        nome: "That's My Way",
        nomeArtista: "Edi Rock, Seu Jorge",
        duracao: "6:48"
      },
      {
        id: 5,
        src: "./music/SnapInsta.io - Imprevisto - Yago Oproprio ft. Rô Rosa (Clipe Oficial) (128 kbps).mp3",
        img: "https://i1.sndcdn.com/artworks-tjziG5MoYfEzknxV-LRpAeg-t500x500.jpg",
        nome: "Imprevisto",
        nomeArtista: "Yago Oproprio, Rô Rosa",
        duracao: "2:19"
      },
      {
        id: 6,
        src: "./music/SnapInsta.io - Lagum, L7NNON, Mart'nália - EITA MENINA [Letra] (128 kbps).mp3",
        img: "./img/eitamenina.jpg",
        nome: "EITA MENINA",
        nomeArtista: "Lagum, L7NNON, Mart'nália",
        duracao: "3:09"
      },
      {
        id: 7,
          src: "./music/SnapInsta.io - Lil Nas X - Old Town Road (Lyrics) ft. Billy Ray Cyrus (128 kbps).mp3",
          img: "./img/oldtowmroad.jpg",
          nome: "Old Town Road",
          nomeArtista: "Lil Nas X",
          duracao: "2:37"
        },
        {
          id: 8,
          src: "./music/SnapInsta.io - MC CABELINHO - X1 (prod. DALLASS) (256 kbps).mp3",
          img: "https://portalpopline.com.br/wp-content/uploads/2022/10/mc-cabelinho-x1.jpg",
          nome: "X1 (prod. DALLASS)",
          nomeArtista: "MC CABELINHO",
          duracao: "3:04"
        },
        {
          id: 9,
          src: "./music/SnapInsta.io - Goosebumps (Lyrics) - Travis Scott, Kendrick Lamar _ RapTunes (128 kbps).mp3",
          img: "./img/goosebumps.jpg",
          nome: "Goosebumps",
          nomeArtista: "Travis Scott,  Kendrick Lama",
          duracao: "4:13"
        },
  ];

playPauseButton.onclick = () => playPause();

const playPause = () => {
   const playPauseIcon = document.getElementById('playPause');
    if (reprodutor.paused) {
      playPauseIcon.classList.replace('fa-circle-play', 'fa-circle-pause');
      reprodutor.play();
    } else {
      playPauseIcon.classList.replace('fa-circle-pause', 'fa-circle-play');
      reprodutor.pause();
    }
  };

  musicas.forEach((musica) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const divLista = document.createElement("div");
    const divNum = document.createElement("div");
    const divDuracao = document.createElement("div");
    const num = document.createElement("span");
    const nomeMusica = document.createElement("span");
    const nomeArtista = document.createElement("span");
    const duracao = document.createElement("span");
  
    num.textContent = musica.id;
    num.className = "num";
  
    nomeMusica.textContent = musica.nome;
    nomeMusica.className = "nome-musica";
  
    nomeArtista.textContent = musica.nomeArtista;
    nomeArtista.className = "nome-artista";
  
    duracao.textContent = musica.duracao;
    duracao.className = "duracaoLista";
  
    divNum.appendChild(num);
    divNum.className = "num-container";
    divLista.appendChild(divNum);
    divLista.appendChild(div);
  
    div.appendChild(nomeMusica);
    div.appendChild(nomeArtista);
  
    divDuracao.appendChild(duracao);
    divDuracao.className = "duracao-container";
    divLista.appendChild(divDuracao);
  
    div.className = "item-container";
  
    li.appendChild(divLista);
  
    li.onclick = function() {
      selecionarMusica(musica.id-1);
      getDominantColor(musica.img, applyDominantColorToBackground);
    };
  
    li.addEventListener("mouseenter", function() {
      li.classList.add("hovered");
    });
  
    li.addEventListener("mouseleave", function() {
      li.classList.remove("hovered");
    });

    li.style.borderBottom = "1px solid white";
    lista.appendChild(li);
  });

function selecionarMusica(musicaNoIndice) {
  indice = musicaNoIndice;
  reprodutor.src = musicas[indice].src;
  nomeMusica.innerHTML = musicas[indice].nome;
  nomeArtista.innerHTML = musicas[indice].nomeArtista;
  imagemMusica.src = musicas[indice].img;
  playPause();

  iniciarAtualizacaoTempo();
}

  function tocarProximaOuAnterior(tipo) {
    if (tipo === "" && repetir) {
      let aleatorioIcon = document.getElementById("repetir");
      reprodutor.currentTime = 0;
      repetir = !repetir;
      aleatorioIcon.classList.remove('ativo');
    } 
    if (repetir) {
      let aleatorioIcon = document.getElementById("repetir");
      repetir = !repetir;
      aleatorioIcon.classList.remove('ativo');
    }
    else if (aleatorio) {
      do {
      var indiceAleatorio = randomInt(0, musicas.length - 1);
      } while (indice == indiceAleatorio);
      indice = indiceAleatorio;
    }
    else if (tipo === "proxima") {
      indice = (indice + 1) % musicas.length;
    } else if (tipo === "anterior") {
      indice = (indice - 1 + musicas.length) % musicas.length;
    } else if (tipo === "iniciar") {
      indice = 0;
    }

  let musica = musicas[indice];
  reprodutor.src = musica.src;
  nomeMusica.innerHTML = musica.nome;
  nomeArtista.innerHTML = musica.nomeArtista;
  imagemMusica.src = musica.img;
  if (tipo !== "iniciar") playPause();

  iniciarAtualizacaoTempo();
  // Chama a função para obter a cor predominante da imagem e aplicá-la ao fundo
  getDominantColor(musica.img, applyDominantColorToBackground);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


progresso.onclick = (e) => {
  if(reprodutor.paused) {
    let playPauseIcon = document.getElementById('playPause');
    reprodutor.play();
    playPauseIcon.classList.replace('fa-circle-play', 'fa-circle-pause');
  }

  const newTime = (e.offsetX / barraProgresso.offsetWidth) * reprodutor.duration;
  reprodutor.currentTime = newTime;
  iniciarAtualizacaoTempo();
};

reprodutor.addEventListener('loadedmetadata', () => {
  iniciarAtualizacaoTempo();
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
  progresso.value = larguraProgresso;

  if (reprodutor.currentTime >= duracaoFormatada-1) {
    tocarProximaOuAnterior();
  }

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

function ativarAleatorio() {
  aleatorio = !aleatorio;
  const aleatorioIcon = document.getElementById("aleatorio");
  if(aleatorio) {
    aleatorioIcon.classList.add('ativo');
  } else {
    aleatorioIcon.classList.remove('ativo');
  }
}

function ativarRepetir() {
  repetir = !repetir;
  const aleatorioIcon = document.getElementById("repetir");
  if(repetir) {
    aleatorioIcon.classList.add('ativo');
  } else {
    aleatorioIcon.classList.remove('ativo');
  }
}

function iniciarAtualizacaoTempo() {
  const intervalo = setInterval(() => {
    if (reprodutor.paused) {
      clearInterval(intervalo); // Interrompe a atualização quando a reprodução é pausada
    } else {
      atualizarTempo(); // Chama a função para atualizar o tempo
    }
  }, 1000); // Intervalo de 1 segundo (1000 milissegundos)
}

// Obtém a cor predominante da imagem
function getDominantColor(imageUrl, callback) {
  var image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = imageUrl;

  image.onload = function() {
    var colorThief = new ColorThief();
    var color = colorThief.getColor(image);
    callback(color);
  };
}

// Aplica a cor predominante ao fundo da página
function applyDominantColorToBackground(color) {
  var rgbColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
  document.body.style.backgroundColor = rgbColor;
}



