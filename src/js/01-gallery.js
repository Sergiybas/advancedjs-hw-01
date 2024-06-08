import { galleryItems } from './gallery-items';
const gallery = document.querySelector('.gallery');

function galleryBild(arr) {
  return arr
    .map(
      elem =>
        `<li class="gallery__item">
            <img class="gallery__image gallery__link" src="${elem.preview}" alt="${elem.description}">
         </li>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryBild(galleryItems));
console.log(galleryItems);
