export function renderThumbnails(photos) {
  const picturesContainer = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = template.cloneNode(true);

    const img = pictureElement.querySelector('.picture__img');
    img.src = url;
    img.alt = description;

    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = likes;

    const commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = comments.length;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}
