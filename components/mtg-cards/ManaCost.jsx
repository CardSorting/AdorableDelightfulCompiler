// components/mtg-cards/ManaCost.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../styles/mtg-cards/ManaCost.module.css';

const ManaCost = ({ cost }) => {
  const symbols = cost.match(/\{([^}]+)\}/g) || [];

  return (
    <div className={styles.manaCost}>
      {symbols.map((symbol, index) => {
        const cleanSymbol = symbol.replace(/[{}]/g, '');
        return (
          <Image
            key={index}
            src={`/mtg-cards/manaSymbols/symbol_mana_${cleanSymbol}.png`}
            alt={cleanSymbol}
            width={20}
            height={20}
            className={styles.manaSymbol}
          />
        );
      })}
    </div>
  );
};

ManaCost.propTypes = {
  cost: PropTypes.string.isRequired,
};

export default ManaCost;