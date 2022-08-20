let acerto = 0;
let cliques = 0;


let quantidadeCartas = prompt('Por favor, digite aqui apenas a quantidade de cartas com que jogar! \nIMPORTANTE: Escolha de 4 a 14 cartas, e sempre números pares!');
quantidadeCartas = Number(quantidadeCartas);

while(quantidadeCartas == null || quantidadeCartas < 4 || quantidadeCartas > 14 || isNaN(quantidadeCartas) || quantidadeCartas % 2 === 1){
  quantidadeCartas = prompt('Por favor, digite aqui a quantidade de cartas com que jogar! \nIMPORTANTE: Escolha de 4 a 14 cartas, e sempre números pares!')
};

const divTimer = document.querySelector('.timer')

let segundos = 0
let minutos = 0

function corrigiNumero(numero){
  if(numero < 10){
    return '0'+numero;
  }else{
    return numero;
  }
}

let idContador;
function startTimer(){
  idContador = setInterval(contador, 1000)
}



function contador(){
  segundos++
  if(segundos == 60){
    minutos++
    segundos = 0
  }
  divTimer.innerHTML = corrigiNumero(minutos) + ':'+corrigiNumero(segundos)
}


const cartas = [
  {
    id: 1,
    img: '/img/bobrossparrot.gif'
  },
  {
    id: 2,
    img: '/img/bobrossparrot.gif'
  },
  {
    id: 3,
    img: '/img/explodyparrot.gif'
  },
  {
    id: 4,
    img: '/img/explodyparrot.gif'
  },
  {
    id: 5,
    img: '/img/fiestaparrot.gif'
  },
  {
    id: 6,
    img: '/img/fiestaparrot.gif'
  },
  {
    id: 7,
    img: '/img/metalparrot.gif'
  },
  {
    id: 8,
    img: '/img/metalparrot.gif'
  },
  {
    id: 9,
    img: '/img/revertitparrot.gif'
  },
  {
    id: 10,
    img: '/img/revertitparrot.gif'
  },
  {
    id: 11,
    img: '/img/tripletsparrot.gif'
  },
  {
    id: 12,
    img: '/img/tripletsparrot.gif'
  },
  {
    id: 13,
    img: '/img/unicornparrot.gif'
  },
  {
    id: 14,
    img: '/img/unicornparrot.gif'
  },
  
]

const cartasPraJogo = [];

for(let i = 0 ; i < quantidadeCartas; i++){
  cartasPraJogo.push(cartas[i]); 
}

function comparador(){
  return Math.random() - 0.5;
};
cartasPraJogo.sort(comparador);

let check = [];
let pontos = 0;

let game1 = document.getElementById('game1');
let game2 = document.getElementById('game2');
let numCartas = quantidadeCartas / 2;

    for(let i = 0 ; i < cartasPraJogo.length / 2; i++){
      let carta = document.createElement('li');
      let cartaEscondida = document.createElement('img');
      let cartaMostra = document.createElement('img');

      carta.classList.add('carta');
      carta.id = i+1;
      cartaMostra.src = cartasPraJogo[i].img;
      // cartaMostra.classList.add('escondida');
      cartaMostra.classList.add('back');
      cartaMostra.id = i+1;

      cartaEscondida.src = '/img/front.png';
      cartaEscondida.id = i+1;
      cartaEscondida.classList.add('front');
      cartaEscondida.classList.add('escondida');


      game1.appendChild(carta);
      carta.appendChild(cartaMostra);
      carta.appendChild(cartaEscondida);
  };

  for(let i = cartasPraJogo.length / 2 ; i < cartasPraJogo.length ; i++){
    let carta = document.createElement('li');
    let cartaEscondida = document.createElement('img');
    let cartaMostra = document.createElement('img');

    carta.classList.add('carta');
    carta.id = i+1;
    cartaMostra.src = cartasPraJogo[i].img;
    // cartaMostra.classList.add('escondida');
    cartaMostra.classList.add('back');
    cartaMostra.id = i+1;

    cartaEscondida.src = '/img/front.png';
    cartaEscondida.id = i+1;
    cartaEscondida.classList.add('front');
    cartaEscondida.classList.add('escondida')


    game2.appendChild(carta);
    carta.appendChild(cartaMostra);
    carta.appendChild(cartaEscondida);
};

let todasBack = document.querySelectorAll('.back')
let todasFront = document.querySelectorAll('.front')

if(quantidadeCartas >= 12){
  setTimeout(()=> {
    todasBack.forEach((item) => {
      item.classList.add('escondida')
    });
    todasFront.forEach((item) => {
      item.classList.remove('escondida')
    })
    startTimer();
  }, 3000)
}else if(quantidadeCartas >= 8){
  setTimeout(()=> {
    todasBack.forEach((item) => {
      item.classList.add('escondida')
    });
    todasFront.forEach((item) => {
      item.classList.remove('escondida')
    })
    startTimer();
  }, 2000)
} else {
  setTimeout(()=> {
    todasBack.forEach((item) => {
      item.classList.add('escondida')
    });
    todasFront.forEach((item) => {
      item.classList.remove('escondida')
    })
    startTimer();
  }, 1000)
}




      const deck = document.querySelectorAll('.carta');

      function viraCarta(){
        if(check.length < 2){
          cliques = cliques+1
        const back = this.childNodes[0];
        const front = this.childNodes[1];

          back.classList.remove('escondida');
          front.classList.add('escondida');

        if(check.length > 0){
          if(check[0].elemento === this){

          }else{
  
            check.push({img: back.src, elemento: this});
          
          }
        }else{
          check.push({img: back.src, elemento: this});
     
        }
        
        
        if(check.length >1){
          if(check[0].img == check[1].img){
            check = [];
            pontos += 1;
            if(pontos*2 === quantidadeCartas){
              setTimeout(() => {
                alert(`Parabéns, você venceu! \nSeu número de tentativas foi de: ${cliques/2}\nSeu tempo foi de: ${corrigiNumero(minutos) + ':'+corrigiNumero(segundos)}!`);
                clearInterval(idContador);
              }, 300);
              setTimeout(() => {
                let resposta = prompt('Deseja jogar novamente? Digite "sim" caso queira jogar de novo, e "não" caso queira encerrar!')
                resposta = resposta.toLowerCase();
                if(resposta.toLowerCase() === 'sim'){
                  location.reload()
                }else if(resposta.toLowerCase === 'não'){
                  alert('Muito obrigado pelo jogo, volte quando quiser!')
                }else{
                  while(resposta.toLowerCase() === 'sim' || resposta.toLowerCase() === 'não'){
                    resposta = prompt('Deseja jogar novamente? Digite "sim" caso queira jogar de novo, e "não" caso queira encerrar!')
                  }
                }
              }, 1000)
            }
        }else{
          setTimeout(() => {
             check[0].elemento.childNodes[0].classList.add('escondida');
            check[1].elemento.childNodes[0].classList.add('escondida');
            check[0].elemento.childNodes[1].classList.remove('escondida');
            check[1].elemento.childNodes[1].classList.remove('escondida');
            check = [];
          }, 1000)
        }
        }
      }
      };

      deck.forEach( item => {
        item.addEventListener('click', viraCarta)
      });
