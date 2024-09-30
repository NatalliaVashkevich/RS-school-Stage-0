const url = 'https://api.unsplash.com/search/photos';
const accessKey = '1mbj8UuQ4cGTbQzijdVcVTf2xs6a5NfZQGFS6GdWRmA';

const body = document.querySelector("body");
const imageGallery = document.querySelector(".image-gallery");
const searchInput = document.querySelector(".search-input");

let query = 'random';



async function getData() {
    const res = await fetch(`${url}?query=${query}&per_page=9&orientation=landscape&client_id=${accessKey}`)
    const data = await res.json();
    console.log(data);
   
}
getData()

function fillGallery() {
    for (let i = 0; i < 9; i++) {
        const img = document.createElement('img');
        img.src = getData(data.results[i].urls.regular);
        img.alt = 'Image';
        imageGallery.appendChild('img');

    };
}
fillGallery();
