// components/ProductDetails.tsx

import React from 'react';
import PropTypes from 'prop-types';

interface ProductDetailsProps {
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, description, rating, reviewCount }) => {
  return (
    <div className="product-details">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="rating">
        <span>{rating} stars</span>
        <span>({reviewCount} reviews)</span>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default ProductDetails;