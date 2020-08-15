import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import Slider from 'react-slick';

Categories.propTypes = {
  categories: PropTypes.array,
};
Categories.defaultProps = {
  categories: [],
};

function Categories(props) {
  const { categories } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box className="Categories">
      <Box className="Categories__inner">
        <Slider {...settings}>
          {Array.from(categories).map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.category}
                width="70%"
                style={{ margin: '0 auto' }}
              />
              <Box>
                <Typography variant="h6" align="center">
                  {item.category}
                </Typography>
              </Box>
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Categories;
