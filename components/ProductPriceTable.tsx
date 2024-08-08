// components/ProductPriceTable.tsx

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

interface PriceTableEntry {
  quantity: string;
  pricePerCard: string;
  savings: string;
}

interface ProductPriceTableProps {
  priceTable: PriceTableEntry[];
}

const ProductPriceTable: React.FC<ProductPriceTableProps> = ({ priceTable }) => {
  const { quantity, pricePerCard, savings } = priceTable[0];
  const router = useRouter();

  const handleStartDesignClick = () => {
    router.push('/card-designer');
  };

  return (
    <div className="product-price-table">
      <div className="price-row selected">
        <span className="quantity">Quantity: {quantity}</span>
        <span className="price">Price per Card: {pricePerCard}</span>
        <span className="savings">Savings: {savings}</span>
      </div>
      <button className="start-design-button" onClick={handleStartDesignClick}>
        Start your design
      </button>
    </div>
  );
};

ProductPriceTable.propTypes = {
  priceTable: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.string.isRequired,
      pricePerCard: PropTypes.string.isRequired,
      savings: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductPriceTable;