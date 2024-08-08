// pages/index.tsx
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Image from 'next/image';  // Don't forget to import Image
import CardExclusives from '../components/CardExclusives';
import ProxyPricingPlans from '../components/ProxyPricingPlans';
import ProxyInfo from '../components/ProxyInfo';
import HowToBuy from '../components/HowToBuy';
import CommanderCards from '../components/CommanderCards';

const placeholderImage = "https://via.placeholder.com/1200x600";

const products = [
  {
    title: 'Custom Playing Cards',
    description: '(choose template)',
    price: '0.99',
    imageSrc: 'https://via.placeholder.com/200',
  },
  {
    title: 'Custom Game Cards',
    description: '(choose size)',
    price: '0.75',
    imageSrc: 'https://via.placeholder.com/200',
  },
  {
    title: 'Custom Plastic Cards',
    description: '(choose size)',
    price: '2.70',
    imageSrc: 'https://via.placeholder.com/200',
  },
  {
    title: 'Boxes, Booklets & Accessories',
    description: '',
    price: '0.20',
    imageSrc: 'https://via.placeholder.com/200',
  },
];

const HomePage = () => {
  return (
    <Layout>
      <section className="hero">
        <Image src={placeholderImage} alt="Different Shapes & Sizes" width={1200} height={600} />
        <h2>Customize Now</h2>
      </section>
      <section className="products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      <CardExclusives />
      <ProxyPricingPlans />
      <ProxyInfo />
      <HowToBuy />
      <CommanderCards />
    </Layout>
  );
};

export default HomePage;