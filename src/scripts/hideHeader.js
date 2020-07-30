export function hidePictures() {
  const images = document.querySelectorAll(`.header-img`);

  for (const img of images) {
    img.style.display = 'none';
  }
}
