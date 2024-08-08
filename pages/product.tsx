// pages/ProductPage.tsx

import React from 'react';
import Layout from '../components/Layout';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductDetails from '../components/ProductDetails';
import ProductPriceTable from '../components/ProductPriceTable';

const product = {
  title: 'Custom Game Cards (63 x 88mm)',
  description: 'The options you need to create the card you want. Easily browse designs, papers, shapes, and more.',
  rating: 4.6,
  reviewCount: 63885,
  mainImageSrc: 'https://via.placeholder.com/400',
  thumbnails: [
    'https://via.placeholder.com/80',
    'https://via.placeholder.com/80',
    'https://via.placeholder.com/80',
  ],
  priceTable: [
    { quantity: '1', pricePerCard: '$4.99', savings: '0%' },
  ],
};

const ProductPage: React.FC = () => {
  return (
    <Layout>
      <div className="product-page">
        <div className="product-left">
          <ProductImageGallery mainImageSrc={product.mainImageSrc} thumbnails={product.thumbnails} />
        </div>
        <div className="product-right">
          <ProductDetails
            title={product.title}
            description={product.description}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
          <ProductPriceTable priceTable={product.priceTable} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;