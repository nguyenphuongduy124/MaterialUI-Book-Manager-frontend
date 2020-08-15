import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
SimpleLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

SimpleLink.defaultProps = {
  text: '',
  link: '/',
};

function SimpleLink(props) {
  const { text, link } = props;
  return (
    <Box component="a" href={link}>
      <Box
        component="span"
        style={{
          display: 'flex',
        }}
      >
        {text} <ArrowRightIcon />
      </Box>
    </Box>
  );
}

export default SimpleLink;
