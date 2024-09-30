const url = 'https://api.unsplash.com/search/photos';
const accessKey = '1mbj8UuQ4cGTbQzijdVcVTf2xs6a5NfZQGFS6GdWRmA';


const imageGallery = document.querySelector(".image-gallery");
const searchInput = document.querySelector(".search-input");

let query = 'random';
let arr =[];

console.log('Поиск реализовать пока не удалось');

async function getData(ref) {
    const result = await fetch(ref);
    const data = await result.json();
    
   
    console.log(data);
    
        
    const img = document.querySelectorAll('.img');
    for(let i = 0; i < 9; i++) {
        img[i].src = data.results[i].urls.regular;
        img[i].alt = data.results[i].alt_description;
    }
    
          
};
getData(`${url}?query=${query}&per_page=9&orientation=landscape&client_id=${accessKey}`);