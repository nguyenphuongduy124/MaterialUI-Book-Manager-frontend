import React from 'react';
import Slider from 'react-slick';

const products = [
  {
    id: 1,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/24-011-232-V01.jpg?ex=2',
  },
  {
    id: 2,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/83-289-049-V04.jpg?ex=2',
  },
  {
    id: 3,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/24-012-016-V06.jpg?ex=2',
  },
  {
    id: 4,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/20-250-134-01.jpg?ex=2',
  },
  {
    id: 5,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/19-113-651-V01.jpg?ex=2',
  },
  {
    id: 6,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/34-316-900-V11.jpg?ex=2',
  },
  {
    id: 7,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/83-102-971-09.jpg?ex=2',
  },
  {
    id: 8,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/20-236-538-V01.jpg?ex=2',
  },
  {
    id: 9,
    image:
      'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/20-233-859-01.jpg?ex=2',
  },
];

function SliderProducts(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <a href="#." key={index} style={{ padding: '0 0.5rem' }}>
            <img src={product.image} alt="product" width="95%" />
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default SliderProducts;
