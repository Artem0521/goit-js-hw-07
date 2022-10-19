import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery (galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onClick);

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </div>`).join('');
};

function onClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
			instance.close(); 		
        }
        })
}


