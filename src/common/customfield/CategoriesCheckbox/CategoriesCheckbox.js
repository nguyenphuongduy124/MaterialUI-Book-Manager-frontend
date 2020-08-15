import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

CategoriesCheckbox.propTypes = {};

const RenderCategory = (props) => {
  const [checked, setChecked] = React.useState(false);
  const { category, description, id } = props.category;
  const { onHandleCategory } = props;
  function handleChange(e) {
    setChecked(e.target.checked);
    onHandleCategory({
      id: e.target.parentNode.parentNode.getAttribute('itemID'),
      name: e.target.name,
      checked: e.target.checked,
    });
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name={category}
          itemID={id}
        />
      }
      label={description}
    />
  );
};

function CategoriesCheckbox(props) {
  const { CATEGORIES } = props;
  const classes = useStyles();

  return (
    <div className="product-categories">
      <Typography component="h6" variant="subtitle1">
        Categories
      </Typography>
      <FormGroup row className={classes.wrapCategories}>
        {CATEGORIES.map((category, index) => (
          <RenderCategory
            category={category}
            key={index}
            onHandleCategory={props.onHandleCategory}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default CategoriesCheckbox;
