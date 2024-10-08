import React from 'react';

const Card = () => {
  return (
    <div className="card-section">
      <div className="card">
      <i class="fa-solid fa-bolt card-icon"></i>
        <p className="card-title"><b>Responsive Design:</b> wind UI ensures your web application looks and functions flawlessly.</p>
      </div>
      <div className="card">
      <i className="fa-solid fa-list card-icon"></i>
        <p className="card-title"><b>Effortless Customization:</b>  Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.</p>
      </div> <div className="card">
      <i className="fa-regular fa-user card-icon"></i>
        <p className="card-title"><b>Community-Driven Support:</b> Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.</p>
      </div>
    </div>
  );
};

export default Card;
