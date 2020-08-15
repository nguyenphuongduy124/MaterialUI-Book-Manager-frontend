import React from 'react';
import AwesomeImage from '../../MyComponents/AwesomeImage/AwesomeImage';

const banners = [
  'https://promotions.newegg.com/nepro/20-1322/1920x120.jpg',
];

function SaleOffBanner(props) {
  return (
    <div>
      {banners.map((banner, index) => (
        <AwesomeImage url={banner} key={index} />
      ))}
    </div>
  );
}

export default SaleOffBanner;
