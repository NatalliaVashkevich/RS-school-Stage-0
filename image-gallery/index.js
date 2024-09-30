const url = 'https://api.unsplash.com/search/photos';
const accessKey = '1mbj8UuQ4cGTbQzijdVcVTf2xs6a5NfZQGFS6GdWRmA';

const body = document.querySelector("body");
const imageGallery = document.querySelector(".image-gallery");
const searchInput = document.querySelector(".search-input");

let query = 'random';

console.log('Поиск реализовать пока не удалось');

async function getData() {
    const result = await fetch(`${url}?query=${query}&per_page=9&orientation=landscape&client_id=${accessKey}`)
    const data = await result.json();
    
   
    console.log(data);
    
    
           
};
const data = getData(`${url}?query=${query}&per_page=9&orientation=landscape&client_id=${accessKey}`);
console.log(data[0].results.urls.regular);

function fill(){
    const img = document.querySelectorAll(".img");
    img.src = 'assets/svg/icons8-камера-24.png';
}
fill();


    
     
    
