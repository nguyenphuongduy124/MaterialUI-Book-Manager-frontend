import React from 'react';
import './Brands.scss';
const brands = [
  'https://c1.neweggimages.com/brandimage//Brand1315.gif',
  'https://c1.neweggimages.com/brandimage//Brand1146.gif',
  'https://c1.neweggimages.com/brandimage//Brand10418.gif',
  'https://c1.neweggimages.com/brandimage//Brand1312.gif',
  'https://c1.neweggimages.com/brandimage//Brand1077.gif',
  'https://c1.neweggimages.com/brandimage//Brand1305.gif',
];

function Brands(props) {
  return (
    <div className="Brands">
      <div className="Brands__title">Featured Brands</div>
      <div className="Brands__content">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
