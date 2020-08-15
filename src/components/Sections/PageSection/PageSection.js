import React from 'react';
import { Box, Typography } from '@material-ui/core';
import './PageSection.scss';
import Proptypes from 'prop-types';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

PageSection.propTypes = {
  title: Proptypes.string,
  subTitle: Proptypes.string,
  subTitleBottom: Proptypes.string,
  isGray: Proptypes.bool,
};

PageSection.defaultProps = {
  title: '',
  subTitle: '',
  subTitleBottom: '',
  isGray: false,
};

function PageSection(props) {
  const { title, subTitle, isGray, subTitleBottom } = props;
  return (
    <Box
      className={`${props.className} PageSection`}
      style={{ backgroundColor: isGray ? '#eee' : '#fff' }}
    >
      <Box className="PageSection__inner">
        {title && (
          <Box className="title" mb={2}>
            <Typography
              component="span"
              variant="h4"
              style={{
                textTransform: 'uppercase',
                fontWeight: '300',
              }}
            >
              {title}
            </Typography>
            <Typography
              component="a"
              href="/"
              variant="subtitle2"
              style={{
                marginLeft: '1.5rem',
                fontWeight: '400',
                display: 'flex',
              }}
            >
              {subTitle} {subTitle && <ArrowRightIcon />}
            </Typography>
          </Box>
        )}
        <Box className="content">{props.children}</Box>
        {subTitleBottom && (
          <Box
            className="subTitleBottom"
            style={{ backgroundColor: '#eee' }}
          >
            <Box>
              <Box component="a" href="/">
                {subTitleBottom} {<ArrowRightIcon />}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PageSection;
