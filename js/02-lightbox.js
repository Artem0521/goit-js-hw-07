import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery (galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onClick);

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) =>
    `<a class="gallery__item"
        href="${original}">
    <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>`).join('');
};

function onClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
