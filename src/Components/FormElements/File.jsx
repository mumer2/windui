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
        <div className="im-icn">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE2IDQySDQwYTE0IDE0IDAgMCAwLTE0IDE0djE0NGExNCAxNCAwIDAgMCAxNCAxNGgxNzZhMTQgMTQgMCAwIDAgMTQtMTRWNTZhMTQgMTQgMCAwIDAtMTQtMTRNNDAgNTRoMTc2YTIgMiAwIDAgMSAyIDJ2MTA3LjU3bC0yOS40Ny0yOS40N2ExNCAxNCAwIDAgMC0xOS44IDBsLTIxLjQyIDIxLjQybC00NS40MS00NS40MmExNCAxNCAwIDAgMC0xOS44IDBMMzggMTU0LjJWNTZhMiAyIDAgMCAxIDItMm0tMiAxNDZ2LTI4LjgzbDUyLjU4LTUyLjU4YTIgMiAwIDAgMSAyLjg0IDBMMTc2LjgzIDIwMkg0MGEyIDIgMCAwIDEtMi0ybTE3OCAyaC0yMi4ybC0zOC0zOGwyMS40MS0yMS40MmEyIDIgMCAwIDEgMi44MyAwbDM4IDM4VjIwMGEyIDIgMCAwIDEtMi4wNCAybS03MC0xMDJhMTAgMTAgMCAxIDEgMTAgMTBhMTAgMTAgMCAwIDEtMTAtMTAiLz48L3N2Zz4="
          alt="Upload Icon"
          className="upload-icon"
        />
        </div>
        
        <p className="upload-text">Upload media or drag and drop</p>
        <p className="upload-types">PNG, JPG or GIF up to 10MB</p>
      </div>
    </div>
  );
};

export default File;
