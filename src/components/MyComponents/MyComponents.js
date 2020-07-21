import React from 'react';
import useStyles from './styles';

function MyComponents(props) {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      dawdawdawdawdaw
      <p>paragraph</p>
      <div>
        <p className={classes.childP}>Child p</p>
      </div>
    </div>
  );
}

export default MyComponents;
