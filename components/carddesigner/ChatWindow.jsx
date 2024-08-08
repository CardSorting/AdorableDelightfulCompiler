import React from 'react';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`message ${message.type}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;