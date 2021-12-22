import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem(
  { id, webformatURL, largeImageURL, tags },
  onClick,
) {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        data-img={largeImageURL}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
