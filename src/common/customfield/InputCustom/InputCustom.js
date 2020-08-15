import { TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

InputCustom.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
InputCustom.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  className: '',
};

function InputCustom(props) {
  const {
    field,
    label,
    type,
    placeholder,
    disabled,
    className,
  } = props;
  const { name } = field;

  return (
    <div className={`InputCustom`}>
      {label && (
        <Typography component="h6" variant="subtitle1">
          {label}
        </Typography>
      )}
      <TextField
        id={name}
        type={type}
        variant="outlined"
        {...field}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
      />
    </div>
  );
}

export default InputCustom;
