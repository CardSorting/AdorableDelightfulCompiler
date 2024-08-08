import React, { useRef, useState } from 'react';

function ImageUploadCanvas({ onImageUpload, uploadedImage }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    onImageUpload(files[0]);
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="image-upload-container">
      <div
        className={`image-upload-canvas ${isDragging ? 'dragging' : ''}`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleChange}
          accept="image/*"
        />
        {uploadedImage ? (
          <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-prompt">
            <p>DRAG &</p>
            <p>DROP</p>
            <p>YOUR</p>
            <p>IMAGE</p>
            <p>HERE</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploadCanvas;