import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import React from 'react';
import SimpleLink from '../../MyComponents/SimpleLink/SimpleLink';
import './ShopWithConfidence.scss';
function ShopWithConfidence(props) {
  return (
    <div className="ShopWithConfidence">
      <div className="ShopWithConfidence__inner">
        <div className="quotes">
          <q>
            It was easy, my grandson sent me the link to the item he
            wanted. All Grandma had to do is register, order, and pay.
            No complaints.
          </q>
          <span>– a grandma</span>
        </div>
        <div className="highlight">
          <div>
            <p className="hit">
              <span className="number">20</span>
              <span className="text">M+</span>
            </p>
            <p className="subHit">Top Selling Items</p>
          </div>
          <div>
            <p className="hit">
              <span className="number">2.7</span>
              <span className="text">K+</span>
            </p>
            <p className="subHit">Popular Brands</p>
          </div>
          <div>
            <p className="hit">
              <span className="number">4</span>
              <span className="text">M+</span>
            </p>
            <p className="subHit">Legit Customer Reviews</p>
          </div>
          <div>
            <p className="hit">
              <span className="number">7</span>
              <span className="text">M+</span>
            </p>
            <p className="subHit">Packages Processed In 2020</p>
          </div>
        </div>
        <div className="subcribe">
          <div className="subcribe__left">
            <span>GET PROMO CODES IN YOUR INBOX</span>
            <span>EXCLUSIVE SAVINGS FOR SUBSCRIBERS</span>
          </div>
          <div className="subcribe__center">
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
                labelWidth={0}
              />
            </FormControl>
            <Button variant="contained">Sign up</Button>
          </div>
          <div className="subcribe__right">
            <SimpleLink text="Lastest Email Deals" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopWithConfidence;
