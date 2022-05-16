const isSupportWebp =
  !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
if (isSupportWebp) {
  body.classList.add('webp');
} else {
  body.classList.add('no-webp');
}
