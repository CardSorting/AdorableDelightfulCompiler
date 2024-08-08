import React, { useState } from 'react';
import ImageUploadCanvas from './ImageUploadCanvas';
import ChatInterface from './ChatInterface';

function DesignWorkspace() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div className="design-workspace-container">
      <div className="design-workspace">
        <div className="workspace-left">
          <ImageUploadCanvas 
            onImageUpload={handleImageUpload}
            uploadedImage={uploadedImage}
          />
        </div>
        <div className="workspace-right">
          <ChatInterface uploadedImage={uploadedImage} />
        </div>
      </div>
    </div>
  );
}

export default DesignWorkspace;