// components/CardExclusives.tsx
import Image from 'next/image';

const exclusives = [
  {
    title: 'Card Kingdom Blue Box (500ct)',
    price: '$2.49',
    category: 'Deck Boxes',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Card Kingdom Dry Erase Tokens',
    price: '$14.99',
    category: 'Card Kingdom Tokens',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: '"Hello My Commander Is" Stickers',
    price: '$4.99',
    category: 'Card Kingdom Swag',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Card Kingdom Double-Sided Dividers (A-Z) 26 pcs.',
    price: '$11.99',
    category: 'Card Kingdom Swag',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Rookie Playmat (Deck on the left)',
    price: '$14.99',
    category: 'Playmats',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Rookie Playmat (Deck on the right)',
    price: '$14.99',
    category: 'Playmats',
    imageSrc: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const CardExclusives = () => {
  return (
    <section className="card-exclusives">
      <h2>CARD KINGDOM EXCLUSIVES</h2>
      <div className="exclusive-items">
        {exclusives.map((item, index) => (
          <div key={index} className="exclusive-item">
            <Image src={item.imageSrc} alt={item.title} width={150} height={150} />
            <p>{item.price}</p>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="#">VIEW ALL</a>
      </div>
    </section>
  );
};

export default CardExclusives;