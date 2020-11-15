import './scss/style.scss';
import 'lazysizes';
import 'material-design-icons';
import imageCardTpl from './templates/image-card.hbs';
import { getRefs } from './js/get-refs';
import { ImageApi } from './js/apiService';

const refs = getRefs();

const imageApi = new ImageApi();

refs.form.addEventListener('keypress', onFetch);
refs.loadMoreBtn.addEventListener('click', onFetchMore);

// Фетч при першому запиті
function onFetch(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();

    imageApi.query = evt.currentTarget.elements.query.value;
    if (imageApi.query === '') {
      return alert('Поле запроса пустое. Введите запрос и нажмите "Enter"');
    }

    imageApi.resetPage();
    imageApi.fetchImages().then(images => {
      clearPageMarkup();
      appendImagesMarkup(images);
    });
  }
}

// Фетч при кліку по кнопці "Load more"
function onFetchMore(evt) {
  if (imageApi.query === '') {
    return alert('Сначала введите запрос в и нажмите "Enter"');
  }

  imageApi.fetchImages().then(images => {
    appendImagesMarkup(images);
    scrollPage();
  });
}

// додає розмітку галереї зображень
function appendImagesMarkup(images) {
  refs.imagesCollection.insertAdjacentHTML('beforeend', imageCardTpl(images));
}

// очищує сторінку від розмітки
function clearPageMarkup() {
  refs.imagesCollection.innerHTML = '';
}

// скролить сторінку
function scrollPage() {
  // window.scrollBy(0, -350);
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
