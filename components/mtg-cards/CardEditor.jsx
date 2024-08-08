import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardEditor({ initialCardData, onSave }) {
  const [cardData, setCardData] = useState(initialCardData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAssetChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevData => ({
      ...prevData,
      assets: {
        ...prevData.assets,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(cardData);
  };

  return (
    <div className="card-editor">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cardData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="manaCost">Mana Cost:</label>
          <input
            type="text"
            id="manaCost"
            name="manaCost"
            value={cardData.manaCost}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeLine">Type Line:</label>
          <input
            type="text"
            id="typeLine"
            name="typeLine"
            value={cardData.typeLine}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="oracleText">Oracle Text:</label>
          <textarea
            id="oracleText"
            name="oracleText"
            value={cardData.oracleText}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flavorText">Flavor Text:</label>
          <textarea
            id="flavorText"
            name="flavorText"
            value={cardData.flavorText}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="powerToughness">Power/Toughness:</label>
          <input
            type="text"
            id="powerToughness"
            name="powerToughness"
            value={cardData.powerToughness}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loyalty">Loyalty:</label>
          <input
            type="number"
            id="loyalty"
            name="loyalty"
            value={cardData.loyalty || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rarity">Rarity:</label>
          <input
            type="text"
            id="rarity"
            name="rarity"
            value={cardData.rarity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="set">Set:</label>
          <input
            type="text"
            id="set"
            name="set"
            value={cardData.set}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collectorNumber">Collector Number:</label>
          <input
            type="text"
            id="collectorNumber"
            name="collectorNumber"
            value={cardData.collectorNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={cardData.artist}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardImage">Card Image URL:</label>
          <input
            type="text"
            id="cardImage"
            name="cardImage"
            value={cardData.assets.cardImage}
            onChange={handleAssetChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardFrame">Card Frame URL:</label>
          <input
            type="text"
            id="cardFrame"
            name="cardFrame"
            value={cardData.assets.cardFrame}
            onChange={handleAssetChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="setSymbol">Set Symbol URL:</label>
          <input
            type="text"
            id="setSymbol"
            name="setSymbol"
            value={cardData.assets.setSymbol}
            onChange={handleAssetChange}
          />
        </div>
        <button type="submit">Save Card</button>
      </form>
      <div className="card-preview">
        <Card cardData={cardData} />
      </div>
    </div>
  );
}

CardEditor.propTypes = {
  initialCardData: PropTypes.shape({
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
  onSave: PropTypes.func.isRequired,
};

export default CardEditor;