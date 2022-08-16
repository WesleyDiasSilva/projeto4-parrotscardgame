let acerto = 0;


let quantidadeCartas = prompt('Por favor, digite aqui apenas a quantidade de cartas com que jogar! \nIMPORTANTE: Escolha de 4 a 14 cartas, e sempre números pares!');
quantidadeCartas = Number(quantidadeCartas);

while(quantidadeCartas == null || quantidadeCartas < 4 || quantidadeCartas > 14 || isNaN(quantidadeCartas) || quantidadeCartas % 2 === 1){
  quantidadeCartas = prompt('Por favor, digite aqui a quantidade de cartas com que jogar! \nIMPORTANTE: Escolha de 4 a 14 cartas, e sempre números pares!')
};

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

let game = document.querySelector('.game');
let numCartas = quantidadeCartas / 2;

    for(let i = 0 ; i < cartasPraJogo.length; i++){
      let carta = document.createElement('li');
      let cartaEscondida = document.createElement('img');
      let cartaMostra = document.createElement('img');

      carta.classList.add('carta');
      carta.id = i+1;
      cartaMostra.src = cartasPraJogo[i].img;
      cartaMostra.classList.add('escondida');
      cartaMostra.classList.add('back'+(i+1));
      cartaMostra.id = i+1;

      // cartaEscondida.classList.add('escondida')
      cartaEscondida.src = '/img/front.png';
      cartaEscondida.id = i+1;
      const classe = 'front'+(i+1);
      cartaEscondida.classList.add(classe);

      game.appendChild(carta);
      carta.appendChild(cartaMostra);
      carta.appendChild(cartaEscondida);
  };

      const deck = document.querySelectorAll('.carta');

      function viraCarta(){

        cliques += 1
        
        const back = document.querySelector('.back'+this.id);

        back.classList.remove('escondida');

        const front = document.querySelector('.front'+this.id);

        front.classList.add('escondida');

        check.push({img: back.src, elemento: this});
        console.log(check);
        if(check.length > 1)
          if(check[0].img == check[1].img){
            check = [];
        }else{
          setTimeout(() => {
             check[0].elemento.childNodes[0].classList.add('escondida');
            check[1].elemento.childNodes[0].classList.add('escondida');
            check[0].elemento.childNodes[1].classList.remove('escondida');
            check[1].elemento.childNodes[1].classList.remove('escondida');
            check = [];
          }, 1000)
        }
      };
      
      setInterval(() => {
        if(acerto == quantidadeCartas){
          console.log(acerto)
        }
      },1000)

      deck.forEach( item => {
        item.addEventListener('click', viraCarta)
      });
