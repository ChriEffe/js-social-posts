/*Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.*/

const content = [
    {
        nomeAutore: 'Aldo Baglio',
        fotoProfilo: 11,
        dataAmericana: '12/10/2021',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 21,
        counterLike: 123,
    },
    {
        nomeAutore: 'Giovanni Storti',
        fotoProfilo: 33,
        dataAmericana: '12/10/2021',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 58,
        counterLike: 56,
    },
    {
        nomeAutore: 'Giacomo Poretti',
        fotoProfilo: 18,
        dataAmericana: '12/10/2021',
        testo: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 87,
        counterLike: 99,
    },
];

const container = document.getElementById('container');
createPost(content, container);

const button = document.querySelectorAll('.likes__cta');
const likeCounter = document.querySelectorAll('js-like-counter');
const greenButton = document.querySelectorAll('.like-button');


for (let i = 0; i < button.length; i++) {
    const element = button[i];
    const green = greenButton[i];
    
    element.addEventListener('click', function (event) {
        event.preventDefault();
        green.classList.add('like-button--liked');

    })
}


function createPost(array, container) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const div = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${element.fotoProfilo}" alt="${element.nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.nomeAutore}</div>
                        <div class="post-meta__time">${element.dataAmericana}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.testo}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=${element.immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.counterLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
        
        container.innerHTML += div;
    }
}