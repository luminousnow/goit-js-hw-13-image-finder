import './scss/style.scss';
import 'lazysizes';
import 'material-design-icons';
import { getRefs } from './js/get-refs';
import { ImageApi } from './js/apiService';
import { scrollPage } from './js/components/scroll-page';
import { clearPageMarkup } from './js/components/clear-page-markup';
import { appendImagesMarkup } from './js/get-markup';

let position = 0;
const refs = getRefs();
const imageApi = new ImageApi();

console.dir(refs.loadMoreBtn);

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
      console.log(images.length);
      if (images.length >= 12) {
        refs.loadMoreBtn.hidden = false;
      }
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

  position = refs.imagesCollection.offsetHeight;

  imageApi.fetchImages().then(images => {
    if (images.length >= 12) {
      refs.loadMoreBtn.hidden = false;
    }
    appendImagesMarkup(images);
    scrollPage(position);
  });
}
