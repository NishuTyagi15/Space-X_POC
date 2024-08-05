import React from 'react';
import { starlinkImage } from '../../Images/Icons';
import './Starlink.css';

function Starlink() {

  return (
      <div className='grid-content'>
        <h2 className='launch-facility'>Starlink</h2>
          <div className='launch-content'>
              <div>{starlinkImage}</div>
              <p className='starlink-text'>There are currently 3268 active Starlink satellites on the low Earth orbit.</p>
          </div>
      </div>
  );
}

export default Starlink;
