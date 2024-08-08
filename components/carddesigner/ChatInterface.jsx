import React, { useState } from 'react';
import TabBar from './TabBar';
import ChatWindow from './ChatWindow';
import OptionSelector from './OptionSelector';

function ChatInterface({ uploadedImage }) {
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Welcome! What are you planning to design?' }
  ]);
  const [activeTab, setActiveTab] = useState('Frames');

  const handleOptionSelect = (option) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: option }]);

    // Simulate AI response (replace this with actual AI service call)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', content: `Great! Let's design a ${option} card. What specific elements would you like to include?` }]);
    }, 1000);
  };

  return (
    <div className="chat-interface">
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <ChatWindow messages={messages} />
      <OptionSelector onSelect={handleOptionSelect} />
    </div>
  );
}

export default ChatInterface;