import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ objectHits, handleModal }) => {
  return objectHits.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li
        className={css.ImageGalleryItem}
        key={id}
        onClick={() => handleModal(largeImageURL)}
      >
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  });
};
