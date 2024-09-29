const url = 'https://api.unsplash.com/search/photos';
const accessKey = '1mbj8UuQ4cGTbQzijdVcVTf2xs6a5NfZQGFS6GdWRmA';

const body = document.querySelector("body");
const imageGallery = document.querySelector(".image-gallery");
const image = document.querySelector(".image");
const searchInput = document.querySelector(".search-input");


async function getData() {
    const result = await fetch (`${url}?page=${page}&query=${tags}&client_id=${accessKey}&orientation=landscape&per_page=${per_page}`);
    const data = await result.json();
    
    console.log(data);
}
getData();

