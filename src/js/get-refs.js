function getRefs() {
  return {
    form: document.querySelector('.search-form'),
    imagesCollection: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('button'),
  };
}

export { getRefs };
