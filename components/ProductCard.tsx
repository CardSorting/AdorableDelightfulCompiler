// components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const ProductCard = ({ title, description, price, imageSrc }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Image src={imageSrc} alt={title} width={200} height={200} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">From ${price}</p>
        <button className="start-design-btn">Start Design</button>
      </div>
    </div>
  );
};

export default ProductCard;