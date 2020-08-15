import { Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import './ProductHorizontalStyle.scss';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../services/functions';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { toastSuccess } from '../../../features/toastify/toastifySlice';
ProductHorizontalStyle.propTypes = {
  products: PropTypes.array,
  customStyle: PropTypes.string,
};

ProductHorizontalStyle.defaultProps = {
  products: [],
  customStyle: '',
};

function ProductHorizontalStyle(props) {
  const { products, customStyle } = props;
  const dispatch = useDispatch();
  let myStyle = 0;
  if (customStyle === 'simple') {
    // simple = 1;
    myStyle = 1;
  }
  if (customStyle === 'vertical-simple') {
    // vertical-simple = 2;
    myStyle = 2;
  }
  if (customStyle === 'flex-horizontal') {
    // flex-horizontal = 3;
    myStyle = 3;
  }

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    dispatch(toastSuccess());
  }

  if (products.length === 0) return null;
  return (
    <div
      className={clsx(myStyle === 3 && 'ProductHorizontalStyle-flex')}
    >
      {products.map((product, index) => (
        <Box
          className={clsx(
            'ProductHorizontalStyle',
            myStyle &&
              myStyle !== 3 &&
              'ProductHorizontalStyle-simple',
          )}
          pt={2}
          key={index}
        >
          <Box
            className={clsx(
              'ProductHorizontalStyle__inner',
              myStyle && 'ProductHorizontalStyle-simple__inner',
              myStyle === 2 &&
                'ProductHorizontalStyle-simple__vertical',
            )}
          >
            <Box className="ProductHorizontalStyle__inner-media">
              <div>
                <img src={product.image} alt="product" />
              </div>
              <p
                className={clsx(
                  'rating',
                  myStyle === 1 && 'no-rating',
                  myStyle === 2 && 'no-rating',
                )}
              >
                <StarIcon color="secondary" />
                <StarIcon color="secondary" />
                <StarIcon color="secondary" />
                <StarIcon color="secondary" />
              </p>
            </Box>
            <Box className="ProductHorizontalStyle__inner-content">
              <Typography
                component="h2"
                variant="subtitle1"
                className="product-title"
              >
                {product.name}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                className={clsx(
                  'sale-info',
                  myStyle && 'no-sale-info',
                )}
              >
                Sale End in 21 hours.
              </Typography>
              <Typography
                component="p"
                variant="h6"
                className="product-price"
                align={myStyle && myStyle !== 3 ? 'right' : 'left'}
              >
                {formatPrice(product.price)}
              </Typography>
              <Box
                className={clsx(
                  'add-to-cart',
                  myStyle && 'no-add-to-cart-btn',
                )}
              >
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default ProductHorizontalStyle;
