// recupera os elementos que serão utilizados
const randomDogBtn = document.querySelector('#get-dog');
const randomCatBtn = document.querySelector('#get-cat');
const surpriseMeBtn = document.querySelector('#suprise-me');
const petImgEl = document.getElementsByTagName('img')[0];

// api's utilizadas na aplicação
const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';
const RANDOM_CAT_API = 'https://aws.random.cat/meow';

// cria função de chamada da API
function getPetImage(api) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // recupera a ulr da imagem do pet e atribui como valor do src
      petImgEl.src = Object.values(data)[0];
    });
}

//cria a lógica de funcionamento dos botões 'get dog' e 'get cat'

randomDogBtn.addEventListener('click', () => getPetImage(RANDOM_DOG_API));

randomCatBtn.addEventListener('click', () => getPetImage(RANDOM_CAT_API));

//cria a lógica de funcionamento do botão 'surprise me'

surpriseMeBtn.addEventListener('click', () => {
  Promise.any([fetch(RANDOM_CAT_API), fetch(RANDOM_DOG_API)])
    .then((res) => res.json())
    .then((data) => (petImgEl.src = Object.values(data)[0]));
});
