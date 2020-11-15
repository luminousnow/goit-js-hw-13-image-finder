import { getRefs } from '../get-refs';

const refs = getRefs();

// очищує сторінку від розмітки
function clearPageMarkup() {
  refs.imagesCollection.innerHTML = '';
}

export { clearPageMarkup };
