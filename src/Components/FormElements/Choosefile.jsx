import React, { useState } from 'react';

const Choosefile = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="file-upload-wrapper">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="custom-file-upload">
        Upload a file
      </label>
      <span className="file-name">{fileName}</span>
    </div>
  );
};

export default Choosefile;
