import React from 'react';

function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="tab-bar">
      <button 
        className={`tab ${activeTab === 'Frames' ? 'active' : ''}`}
        onClick={() => onTabChange('Frames')}
      >
        Frames
      </button>
      <button 
        className={`tab ${activeTab === 'Text' ? 'active' : ''}`}
        onClick={() => onTabChange('Text')}
      >
        Text
      </button>
    </div>
  );
}

export default TabBar;