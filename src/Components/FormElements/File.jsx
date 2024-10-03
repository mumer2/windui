import React from 'react';

const File = () => {
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
    }
  };

  return (
    <div
      className="upload-container"
      onClick={() => document.getElementById('fileInput').click()}
    >
      <input
        type="file"
        id="fileInput"
        accept="image/png, image/jpeg, image/gif"
        className="file-input"
        onChange={handleFileInput}
      />
      <div className="upload-area">
        <img
          src="https://img.icons8.com/ios/50/000000/upload--v1.png"
          alt="Upload Icon"
          className="upload-icon"
        />
        <p className="upload-text">Upload media or drag and drop</p>
        <p className="upload-types">PNG, JPG or GIF up to 10MB</p>
      </div>
    </div>
  );
};

export default File;
