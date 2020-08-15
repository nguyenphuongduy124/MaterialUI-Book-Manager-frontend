import React from 'react';

const advers = [
  'https://promotions.newegg.com/netgear/20-1536/homepage_right.jpg',
  'https://promotions.newegg.com/nepro/18-2300/homepage_right.jpg',
  'https://promotions.newegg.com/home/20-1402/homepage_right.jpg',
];

function Advertisement(props) {
  return (
    <div className="Advertisement">
      {advers.map((ad, index) => (
        <img src={ad} alt="advertisement" key={index} />
      ))}
    </div>
  );
}

export default Advertisement;
