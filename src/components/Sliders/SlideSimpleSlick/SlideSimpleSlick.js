import { Avatar, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { formatPrice } from '../../../services/functions';
import './SlideSimpleSlick.scss';

SlideSimpleSlick.propTypes = {
  products: PropTypes.array,
  amount: PropTypes.number,
  useThumbnail: PropTypes.bool,
  showAddBtn: PropTypes.bool,
};
SlideSimpleSlick.defaultProps = {
  products: [],
  amount: 1,
  useThumbnail: true,
  showAddBtn: true,
};

function SlideSimpleSlick(props) {
  const { products, amount, useThumbnail, showAddBtn } = props;
  const slider1 = useRef();
  const slider2 = useRef();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: amount,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    focusOnSelect: true,
  };

  return (
    <div className="SlideSimpleSlick">
      {useThumbnail && (
        <Slider
          {...settings2}
          ref={slider1}
          asNavFor={nav2}
          className="SlideSimpleSlick__thumbnails"
        >
          {products.map((product) => (
            <Avatar
              src={product.image}
              variant="square"
              key={product.id}
            />
          ))}
        </Slider>
      )}
      <Slider
        {...settings}
        ref={slider2}
        asNavFor={nav1}
        className="SlideSimpleSlick__slider"
      >
        {products.map((product) => (
          <Card className="SlideSimpleSlick__card" key={product.id}>
            <CardActionArea>
              <Link to="/">
                <CardMedia
                  className="SlideSimpleSlick__media"
                  image={product.image}
                  title="Contemplative Reptile"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom component="p">
                  <StarIcon color="secondary" />
                  <StarIcon color="secondary" />
                  <StarIcon color="secondary" />
                  <StarIcon color="secondary" />
                </Typography>
                <Link>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="h2"
                    className="product-name"
                  >
                    {product.name}
                  </Typography>
                </Link>
                <Typography gutterBottom variant="h6" component="p">
                  {formatPrice(product.price)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {showAddBtn && (
                <Button size="small" variant="contained">
                  Add to cart
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default SlideSimpleSlick;
