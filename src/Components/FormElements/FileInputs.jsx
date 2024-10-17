import React from 'react'
import File from './File'
import CodePre from '../General/CodePre'
import Choosefile from './Choosefile'

export const FileInputs = () => {
  const htmlCode = `  <div
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
  `;

const reactCode = `import React from 'react';

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

`;

const cssCode = `.fileinputs{
  margin-top: 15%;
  margin-left: 2%;
  color: rgb(100, 91, 91);
}
.fileinputs h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.fileinputs h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.fileinputs h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px dotted #ccc;
  border-radius: 8px;
  padding: 60px;
  width: 600px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.upload-area {
  text-align: center;
}

.upload-icon {
  width: 40px;
  margin-bottom: 16px;
}

.upload-text {
  color: #3cb371;
  font-weight: 600;
}

.upload-types {
  color: #777;
  font-size: 0.9em;
}
.im-icn{
  border: 1px solid rgb(237, 235, 235);
  width: 80px;
  padding-top: 20px;
  margin-left: 60px;
}
.file-input {
  display: none;
}
.file-uplod{
  margin-top: 10%;
  display: flex;
  justify-content: center;
  border: 1px solid rgb(227, 225, 225);
  margin: 20px;
  border-radius: 10px;
  padding: 40px;
}


/* File Choose */

.file-upload-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
}

.file-input {
  display: none; /* Hide the default input */
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3cb371;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

.custom-file-upload:hover {
  background-color: #2e8b57;
}

.file-name {
  color: #555;
  font-size: 0.9em;
}`;

  return (
    <div>
        <div className="fileinputs">
            <h1>File Inputs</h1>
            <p>The File Input component lets the user choose one or more files from their device.</p>
        </div>
        <div className="file-uplod">
        <File/>
        </div>

        <div className="fileinputs">
            <h2>Variations</h2>
            <h4>Button File Input</h4>
        </div>
        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>
        <div className="file-uplod">
        <Choosefile/>
        </div>
    </div>
  )
}
