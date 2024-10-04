import React from 'react';
import { Link } from 'react-router-dom';
import './Tiles.css';

const Tiles = () => {
  return (
    <div className="page-background">
      <div className="tile-container">
        <Link to="/dailysports" className="tile" 
            style={{
                backgroundImage: 'url(/images/dailysports.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
          <div className="tile-content">
            <h2>Daily Sports</h2>
          </div>
        </Link>
        
        <Link to="/adventuresports" className="tile" 
            style={{
                backgroundImage: 'url(/images/adventuresport.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
          <div className="tile-content">
            <h2>Adventure Sports</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Tiles;