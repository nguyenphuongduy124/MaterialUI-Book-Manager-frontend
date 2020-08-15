import React, { useContext } from 'react';
import './SumaryComponent.scss';
import BlockWithTitle from '../BlockWithTitle/BlockWithTitle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Button, Box } from '@material-ui/core';
import SimpleLink from '../SimpleLink/SimpleLink';
import PropTypes from 'prop-types';
import ProductHorizontalStyle from '../../Products/ProductHorizontalStyle/ProductHorizontalStyle';
import Categories from '../../Products/Categories/Categories';
import { CategoriesContext } from '../../../Pages/HomePage/HomePage';

SumaryComponent.propTypes = {
  products: PropTypes.array,
};

SumaryComponent.defaultProps = {
  products: [],
};

function SumaryComponent(props) {
  const { products } = props;
  const categories = useContext(CategoriesContext);

  return (
    <div className="SumaryComponent">
      <div className="SumaryComponent__inner">
        <div className="sign-in">
          <BlockWithTitle title="SIGN IN FOR THE BEST EXPERIENCE">
            <Button
              variant="outlined"
              fullWidth
              className="sign-in-btn"
            >
              Sign In <ArrowRightIcon />
            </Button>
            <Box className="simple-link">
              <span>New to Newegg?</span> &nbsp;
              <SimpleLink text="Sign up" />
            </Box>
          </BlockWithTitle>
        </div>
        <div className="today-deal-1">
          <BlockWithTitle title="TODAY'S DEAL">
            <ProductHorizontalStyle
              products={[{ ...products[0] }]}
              customStyle="simple"
            />
          </BlockWithTitle>
        </div>
        <div className="today-deal-2">
          <BlockWithTitle title="TODAY'S DEAL" subTitle="See All">
            <ProductHorizontalStyle
              products={[{ ...products[1] }]}
              customStyle="vertical-simple"
            />
          </BlockWithTitle>
        </div>
        <div className="today-deal-3">
          <BlockWithTitle title="TODAY'S DEAL">
            <ProductHorizontalStyle
              products={[{ ...products[2] }]}
              customStyle="simple"
            />
          </BlockWithTitle>
        </div>
        <div className="categories">
          <BlockWithTitle title="CATEGORIES">
            <Categories categories={categories} />
          </BlockWithTitle>
        </div>
      </div>
    </div>
  );
}

export default SumaryComponent;
