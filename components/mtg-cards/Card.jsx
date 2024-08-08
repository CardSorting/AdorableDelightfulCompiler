import React from 'react';
import PropTypes from 'prop-types';

function Card({ cardData }) {
  const {
    name,
    manaCost,
    typeLine,
    oracleText,
    flavorText,
    powerToughness,
    loyalty,
    rarity,
    set,
    collectorNumber,
    artist,
    assets
  } = cardData;

  return (
    <div className="card">
      <div className="card-frame" style={{backgroundImage: `url(${assets.cardFrame})`}}>
        <div className="card-name">{name}</div>
        <div className="mana-cost">{manaCost}</div>
        <img className="card-image" src={assets.cardImage} alt={name} />
        <div className="type-line">{typeLine}</div>
        <div className="text-box">
          <p className="oracle-text">{oracleText}</p>
          {flavorText && <p className="flavor-text"><i>{flavorText}</i></p>}
        </div>
        {powerToughness && <div className="power-toughness">{powerToughness}</div>}
        {loyalty && <div className="loyalty">{loyalty}</div>}
        <div className="card-info">
          <img className="set-symbol" src={assets.setSymbol} alt={set} />
          <span className="rarity">{rarity}</span>
          <span className="collector-number">{collectorNumber}</span>
          <span className="artist">{artist}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    manaCost: PropTypes.string.isRequired,
    typeLine: PropTypes.string.isRequired,
    oracleText: PropTypes.string.isRequired,
    flavorText: PropTypes.string,
    powerToughness: PropTypes.string,
    loyalty: PropTypes.number,
    rarity: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired,
    collectorNumber: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    assets: PropTypes.shape({
      cardImage: PropTypes.string.isRequired,
      cardFrame: PropTypes.string.isRequired,
      setSymbol: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;