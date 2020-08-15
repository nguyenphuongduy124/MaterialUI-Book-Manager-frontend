import { FormControl, OutlinedInput } from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../../../assets/images/logo.png';
import './TopMenu.scss';
import { useSelector } from 'react-redux';

export default function TopMenu() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="TopMenu">
      <div className="TopMenu__inner">
        <div className="logo">
          <div>
            <MenuIcon fontSize="large" />

            <Link to="/">
              <img src={logoUrl} alt="logo-topmenu" />
            </Link>
          </div>
        </div>
        <div className="search">
          <FormControl variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              startAdornment={<SearchIcon />}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
          </FormControl>
        </div>
        <div className="portal">
          <div>
            <Link to="/">Best today</Link>
            <Link to="/">Best selling Deals</Link>
            <Link to="/">Live now</Link>
            <Link to="/">Best selling Deals</Link>
          </div>
        </div>
        <div className="info-user">
          <div>
            <div className="cart">
              <Link to="/cart">
                <ShoppingCartIcon fontSize="large" />
                <span>{cart.length}</span>
              </Link>
            </div>
            <Link to="/admin">
              <PersonOutlineIcon fontSize="large" />
              <div>
                <span>Welcome</span>
                <span>Sign in / Register</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="services">
          <div>
            <Link to="/">Newegg Business</Link>
            <Link to="/">
              Feedback <FeedbackIcon style={{ fontSize: '1rem' }} />
            </Link>
            <Link to="/">
              Customer Service{' '}
              <LiveHelpIcon style={{ fontSize: '1rem' }} />
            </Link>
            <Link to="/"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
