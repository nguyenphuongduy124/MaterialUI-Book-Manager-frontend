import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

ContentPage.propTypes = {
  className: PropTypes.string,
};

ContentPage.defaultProps = {
  className: '',
};

function ContentPage(props) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Box>{props.children}</Box>
    </main>
  );
}

export default ContentPage;
