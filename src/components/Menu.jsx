import React, { useState } from 'react';
import './menu.css'; // Import stylesheet

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar "></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li>Menu item 1</li>
          <li>Menu item 2</li>
         
        </ul>
      )}
    </div>
  );
};

export default Menu;