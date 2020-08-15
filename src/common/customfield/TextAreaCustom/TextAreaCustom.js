import React from 'react';

import { Typography, TextareaAutosize } from '@material-ui/core';
import PropTypes from 'prop-types';
TextAreaCustom.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  rowsMin: PropTypes.number,
  rowsMax: PropTypes.number,
  cols: PropTypes.number,
};
TextAreaCustom.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  className: '',
  rowsMin: 10,
  rowsMax: 10,
  cols: 10,
};
function TextAreaCustom(props) {
  const {
    field,
    label,

    rowsMax,
    rowsMin,
    cols,
  } = props;

  return (
    <div className="TextAreaCustom">
      <Typography component="h6" variant="subtitle1">
        {label}
      </Typography>
      <TextareaAutosize
        aria-label="minimum height"
        {...field}
        rowsMin={rowsMin}
        rowsMax={rowsMax}
        cols={cols}
      />
    </div>
  );
}

export default TextAreaCustom;
