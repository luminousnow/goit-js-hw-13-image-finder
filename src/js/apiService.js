const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19092084-bc4ccb70eacd908f2d855c18b';

class ImageApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    // console.log(this);
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        // console.log(hits);
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export { ImageApi };
