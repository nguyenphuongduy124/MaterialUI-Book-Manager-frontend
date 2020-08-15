import React from 'react';
import urlShortCuts from '../../assets/images/shortcuts2x.png';
import './ShortCuts.scss';

const shortCutsText = [
  'Email Deals',
  'Order History',
  'Wist List',
  'All Products',
];

function ShortCuts(props) {
  return (
    <div className="ShortCuts">
      {shortCutsText.map((item, index) => (
        <div key={index}>
          <a href="/">
            <span
              style={{
                display: 'inline-block',
                width: '2rem',
                height: '2rem',
                backgroundColor: '#eee',
                backgroundImage: `url(${urlShortCuts})`,
                backgroundSize: 'cover',
                backgroundPositionY: `-${index * 40}px`,
              }}
            ></span>
            <span>{item}</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ShortCuts;
