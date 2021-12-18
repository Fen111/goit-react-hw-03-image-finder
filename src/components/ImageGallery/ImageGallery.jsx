import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => ImageGalleryItem(image, onClick))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
