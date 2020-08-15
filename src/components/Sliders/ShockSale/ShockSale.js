import React, { useEffect, useRef, useState } from 'react';
import './ShockSale.scss';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

ShockSale.propTypes = {};

function formatPrice(value) {
  return value.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
}
const products = [
  {
    id: '1',
    name:
      'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
    description: 'Product of tp link',
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImage/83-101-738-V01.jpg',
    price: 3000000,
    category: ['switch'],
    brand: 'tp-link',
    shipping: 0,
  },
  {
    id: '2',
    name:
      'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
    description: 'Product of kingston',
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImage/2BA-0041-00029-V01.jpg',
    price: 500000,
    category: ['ram'],
    brand: 'kingston',
    shipping: 0,
  },
  {
    id: '3',
    name:
      'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
    description: 'Drone Zone',
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImage/AMNJS200611JscRi.jpg',
    price: 3500000,
    category: ['drone'],
    brand: 'drone-zone',
    shipping: 0,
  },
  {
    id: '4',
    name:
      'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
    description: 'Product of Coinsair',
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImage/20-236-408-V01.jpg',
    price: 1500000,
    category: ['ram'],
    brand: 'coinsair',
    shipping: 0,
  },
  {
    id: '5',
    name:
      'Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router',
    description: 'Product of Patriot',
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImage/20-225-143-V08.jpg',
    price: 500000,
    category: ['ram'],
    brand: 'patriot',
    shipping: 0,
  },
];

function ShockSale(props) {
  const [counter, setCounter] = useState(0);
  const width = useRef(100);
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    let newMarginLeft = 0;
    newMarginLeft = counter * width.current;
    setMarginLeft(newMarginLeft);
  }, [counter]);

  function handlePrev() {
    if (counter <= 0) return;
    let newCounter = counter - 1;
    setCounter(newCounter);
  }

  function handleNext() {
    let divs = document.querySelectorAll(
      '.shock-sale-inner .shock-sale-item',
    );
    if (counter >= divs.length - 1) return;
    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  return (
    <div className="shock-sale">
      <div className="shock-sale-inner">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="shock-sale-item shock-sale-item-1 product"
            style={idx === 0 ? { marginLeft: -marginLeft + '%' } : {}}
          >
            <div className="product__image">
              <img src={product.image} alt="product" />
            </div>
            <div className="product__brand">
              <img
                src="https://c1.neweggimages.com/Brandimage_70x28//Brand1455.gif"
                alt="brand"
              />
              <span>
                <i className="zmdi zmdi-star"></i>
                <i className="zmdi zmdi-star"></i>
                <i className="zmdi zmdi-star"></i>
                <i className="zmdi zmdi-star"></i>
              </span>
            </div>
            <div className="product__name">{product.name}</div>
            <div className="product__price">
              <div className="wrapper">
                <p className="price-current">
                  {formatPrice(product.price)}
                </p>
                <p className="shipping">Free shipping</p>
                <p className="add-to-cart">
                  <button>
                    Add to card{' '}
                    <i className="zmdi zmdi-caret-right"></i>
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="control control-left" onClick={handlePrev}>
          <ChevronLeftIcon fontSize="large" />
        </button>
        <button
          className="control control-right"
          onClick={handleNext}
        >
          <ChevronRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default ShockSale;
