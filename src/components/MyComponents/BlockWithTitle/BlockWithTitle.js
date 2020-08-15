import { Box, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import './BlockWithTitle.scss';

BlockWithTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  noPadding: PropTypes.bool,
  size: PropTypes.string,
  onlyTitle: PropTypes.bool,
};
BlockWithTitle.defaultProps = {
  title: '',
  subTitle: '',
  noPadding: false,
  onlyTitle: false,
  size: '',
};
function BlockWithTitle(props) {
  const { title, subTitle, children, noPadding, onlyTitle } = props;
  return (
    <Box
      className={clsx(
        'BlockWithTitle',
        noPadding && 'BlockWithTitle-no-padding',
      )}
    >
      <Box className="BlockWithTitle__inner">
        <Box
          className={clsx('block-title', onlyTitle && 'only-title')}
        >
          {title && (
            <Typography
              component="div"
              variant="h5"
              className="title"
            >
              {title}
            </Typography>
          )}
          <Typography
            component="a"
            href="/"
            variant="subtitle2"
            className="subtitle"
          >
            {subTitle} {subTitle && <ArrowRightIcon />}
          </Typography>
        </Box>
        <Box className="content">{children}</Box>
      </Box>
    </Box>
  );
}

export default BlockWithTitle;
