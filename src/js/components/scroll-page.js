// скролить сторінку
function scrollPage(position) {
  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });
}

export { scrollPage };
