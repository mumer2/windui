import React from 'react';

const Card = () => {
  return (
    <div className="card-section">
      <div className="card">
      <i class="fa-solid fa-bolt card-icon"></i>
        <h3 className="card-title">Responsive Design:</h3>
        <p className="card-text">
        wind UI ensures your web application looks and functions flawlessly.      </p>
      </div>

      <div className="card">
       <i class="fa-solid fa-list card-icon"></i>
        <h3 className="card-title">Effortless Customization:</h3>
        <p className="card-text">
        Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.      </p>
      </div>

      <div className="card">
      <i class="fa-regular fa-user card-icon"></i>
        <h3 className="card-title">Community-Driven Support:</h3>
        <p className="card-text">
        Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.
        </p>
      </div>
    </div>
  );
};

export default Card;
