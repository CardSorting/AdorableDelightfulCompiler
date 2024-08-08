// components/CommanderCards.tsx
import Image from 'next/image';

const commanderCards = [
  {
    title: 'Sauron, the Dark Lord',
    price: '$8.99',
    set: 'The Lord of the Rings: Tales of Middle-earth',
    imageSrc: 'https://via.placeholder.com/210x300', // Replace with actual image URL
  },
  {
    title: 'The Ur-Dragon (Borderless)',
    price: '$29.99',
    set: 'Commander Masters Variants',
    imageSrc: 'https://via.placeholder.com/210x300', // Replace with actual image URL
  },
  {
    title: 'Pantlaza, Sun-Favored',
    price: '$0.99',
    set: 'The Lost Caverns of Ixalan Commander Decks',
    imageSrc: 'https://via.placeholder.com/210x300', // Replace with actual image URL
  },
  {
    title: 'Miirym, Sentinel Wyrm (Showcase)',
    price: '$1.99',
    set: 'Commander Legends: Battle for Baldur\'s Gate Variants',
    imageSrc: 'https://via.placeholder.com/210x300', // Replace with actual image URL
  },
];

const CommanderCards = () => {
  return (
    <section className="commander-cards">
      <div className="commander-intro">
        <h2>BUILD YOUR COMMANDER DECK</h2>
        <h3>COMMANDER CARDS</h3>
        <p>Commander is arguably the most popular format in Magic: The Gathering. Players build 100-card singleton decks helmed by a legendary creature (or commander) card that can be cast from a special zone called the Command Zone. Commander is a fun, casual, multiplayer format that allows players to express their creativity and draw from Magic's rich history.</p>
        <button className="view-all-btn">VIEW ALL COMMANDERS</button>
      </div>
      <div className="commander-cards-grid">
        {commanderCards.map((card, index) => (
          <div key={index} className="commander-card">
            <Image src={card.imageSrc} alt={card.title} width={210} height={300} />
            <p className="price">{card.price}</p>
            <h4>{card.title}</h4>
            <p className="set">{card.set}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommanderCards;