

/* kicks off app when the DOM is loaded */
window.addEventListener("load", generateGrid);



// globale variabler
// let myData = null; //til data objekt opgaven
let myImages = ['assets/img/brachypelma_smithi.jpg', 'assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/standard_tiger.jpg' ]; // til array opgaven, byg dit array af billed urlér her.
const myApp = document.getElementById('app');






// her starter din app
function generateGrid(){

    clearApp();

    myImages.map((imageUrl)=>{
        console.log('Map')
        createCard(imageUrl);

    });
}


function createCard(myUrl){


    let myArticleTag = document.createElement('article');

    myArticleTag.classList.add('galleryCard')

    let myImageTag = document.createElement('img');

    myImageTag.src = myUrl;

    myImageTag.addEventListener('click', clickSmall);

    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);
}

// Find url på det klikkede image, send url til build big
function clickSmall(myEvent){
    let myUrl = myEvent.target.src;
    buildBig(myUrl);
    
}

function buildBig(myUrl){

    clearApp();


    let myArticleTag = document.createElement('article');

    let myImageTag = document.createElement('img');

    myArticleTag.classList.add('detailView')

    myImageTag.src = myUrl;

    myImageTag.addEventListener('click', generateGrid);

    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);

}

function clearApp(){

    myApp.innerHTML = "";

}


