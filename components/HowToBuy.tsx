// components/HowToBuy.tsx
import Image from 'next/image';

const steps = [
  {
    step: 'STEP 1',
    title: 'Insert Your Deck List',
    description: '',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    step: 'STEP 2',
    title: 'Upload Your Own Card',
    description: '',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    step: 'STEP 3',
    title: 'Review & Order',
    description: '',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    step: 'STEP 4',
    title: 'Enjoy Your Proxies!',
    description: '',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const HowToBuy = () => {
  return (
    <section className="how-to-buy">
      <h2>HOW TO BUY MTG PROXY WITH PRINTINGPROXIES.COM!</h2>
      <div className="steps">
        {steps.map((item, index) => (
          <div key={index} className="step">
            <Image src={item.imageSrc} alt={item.title} width={150} height={150} />
            <h3>{item.step}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;