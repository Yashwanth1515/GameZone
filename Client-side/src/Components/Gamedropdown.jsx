import React from 'react';
import { FaBolt, FaHatWizard, FaDragon, FaCar, FaFutbol } from 'react-icons/fa';
import './dropdown.css';
import { Link } from 'react-router-dom';

const GenreDropdown = () => {
  return (
    <div className="nav-item">
      <p>Genre</p>
      <div className="dropdown">
        <Link to="#"><FaBolt /> Action</Link>
        <Link to="#"><FaHatWizard /> Adventure</Link>
        <Link to="#"><FaDragon /> RPG</Link>
        <Link to="#"><FaCar /> Racing</Link>
        <Link to="#"><FaFutbol /> Sports</Link>
      </div>
    </div>
  );
};

export default GenreDropdown;
