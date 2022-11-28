// recupera os elementos DOM que serão utilizados
const heroCardEl = document.querySelector('.card');
const sortHeroBtn = document.getElementsByTagName('button')[0];
const heroNameEl = document.querySelector('.hero-name');
const heroImgEl = document.querySelector('.hero-img');

// gera um número aleatório que será o id utilizado na API para identificar o heroi
function genRandomId() {
  return Math.round(Math.random() * 700);
}

// API utilizada para ter as infos dos heroes
const SUPERHERO_API = `https://www.superheroapi.com/api.php/465423652366655/`;

// cria a lógica de funcionamento do botão
sortHeroBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${SUPERHERO_API}${genRandomId()}`)
    .then((response) => response.json())
    .then((data) => {
      const { name } = data;
      const { image } = data;
      heroImgEl.src = image.url;
      heroNameEl.innerHTML = name;
    });
});
