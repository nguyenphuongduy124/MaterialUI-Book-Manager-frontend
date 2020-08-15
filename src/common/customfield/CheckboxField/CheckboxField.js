import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@material-ui/core';

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  className: PropTypes.string,
};
CheckboxField.defaultProps = {
  label: '',
  className: '',
};

function CheckboxField(props) {
  const {
    field,
    label,
    className,
    categoryId,
    defaultChecked,
  } = props;
  const { name, onChange } = field;
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={categoryId}
          name={name}
          checked={defaultChecked}
          onChange={onChange}
        />
      }
      className={className}
      label={label}
    />
  );
}

export default CheckboxField;
