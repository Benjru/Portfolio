import React, { useState } from 'react';
import './info-block.css';

const InfoBlock = ({ header, text, icon, attribution, attLink, attName, onClick, numComponents}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const componentWidth = `${81 / (numComponents)}%`;

  return (
    <div
      onClick={onClick}
      className={`InfoBlock ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: componentWidth }}
    >
    <div className="Header-text">{header}</div>
    <img src={icon} className="Icon" alt="InfoBlock icon" />
    <div className="Body-text">{text}</div>
    <a href={attLink} title={attName} className="Attribution">
      {attribution}
    </a>
  </div>
  );
};

export default InfoBlock;
