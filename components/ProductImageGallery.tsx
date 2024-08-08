// components/ProductImageGallery.tsx

import React from 'react';
import PropTypes from 'prop-types';

interface ProductImageGalleryProps {
  mainImageSrc: string;
  thumbnails: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ mainImageSrc, thumbnails }) => {
  return (
    <div className="product-image-gallery">
      <img src={mainImageSrc} alt="Main product" />
      <div className="thumbnails">
        {thumbnails.map((src, index) => (
          <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

ProductImageGallery.propTypes = {
  mainImageSrc: PropTypes.string.isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductImageGallery;