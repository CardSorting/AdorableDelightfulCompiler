// components/ProxyInfo.tsx
import Image from 'next/image';

const ProxyInfo = () => {
  const games = [
    { name: 'Magic', imageSrc: 'https://via.placeholder.com/150', alt: 'Magic' },
    { name: 'Disney Lorcana', imageSrc: 'https://via.placeholder.com/150', alt: 'Disney Lorcana' },
    { name: 'Star Wars Unlimited', imageSrc: 'https://via.placeholder.com/150', alt: 'Star Wars Unlimited' },
    { name: 'Pokémon', imageSrc: 'https://via.placeholder.com/150', alt: 'Pokémon' },
    { name: 'One Piece Card Game', imageSrc: 'https://via.placeholder.com/150', alt: 'One Piece Card Game' },
    { name: 'Star Wars Customizable Card Game', imageSrc: 'https://via.placeholder.com/150', alt: 'Star Wars Customizable Card Game' },
    { name: 'Flesh and Blood', imageSrc: 'https://via.placeholder.com/150', alt: 'Flesh and Blood' },
  ];

  const proxyImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <section className="proxy-info">
      <div className="intro">
        <h2>QUALITY MTG PROXY & POKEMON PROXIES</h2>
        <p><span className="highlight">ANY CARD ON DEMAND !</span></p>
        <p>High quality MTG proxy and Pokemon Proxy cards, on demand for home games or casual LGS events. Made with <span className="highlight">S33 German Black core</span>: Simply the best cardstock on the market for MTG proxy. Deck list friendly, any card or your own custom uploads. <strong>Next day ready and shipped. 2-5 days delivery time USA.</strong></p>
      </div>
      <div className="games">
        <h3>WE MAKE PROXIES FOR...</h3>
        <div className="game-logos">
          {games.map((game, index) => (
            <div key={index} className="game-logo">
              <Image src={game.imageSrc} alt={game.alt} width={150} height={150} />
            </div>
          ))}
        </div>
        <button className="start-order-btn">START ORDER</button>
      </div>
      <div className="cardstock-info">
        <h2>S33 SUPERIOR GERMAN BLACK CORE CARDSTOCK</h2>
        <p>Our S33 card stock has an extra smooth finish and is a card stock which is considered to be one of the finest available: A 1 to 1 matching cardstock to MTG/PKM cards. This card stock provides more visual contrast than standard stock, keeping the graphics printed on each card vivid in colors.</p>
        <button className="order-now-btn">ORDER NOW</button>
      </div>
      <div className="proxy-preview">
        <h2>MTG PROXY & POKEMON PROXY PREVIEW</h2>
        <div className="proxy-images">
          {proxyImages.map((src, index) => (
            <div key={index} className="proxy-image">
              <Image src={src} alt={`Proxy ${index + 1}`} width={150} height={150} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProxyInfo;