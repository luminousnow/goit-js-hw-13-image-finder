import imageCardTpl from '../templates/image-card.hbs';
import { getRefs } from './get-refs';

const refs = getRefs();

// додає розмітку галереї зображень
function appendImagesMarkup(images) {
  refs.imagesCollection.insertAdjacentHTML('beforeend', imageCardTpl(images));
}

export { appendImagesMarkup };
