import React from 'react';

function OptionSelector({ onSelect }) {
  const options = ['MAGIC', 'POKEMON', 'LORCANA', 'SPORTS'];

  return (
    <div className="option-selector">
      {options.map((option) => (
        <button key={option} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionSelector;