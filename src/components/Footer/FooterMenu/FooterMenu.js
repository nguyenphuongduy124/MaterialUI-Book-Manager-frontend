import React, { useState } from 'react';
import './FooterMenu.scss';
import { useMediaQuery } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import clsx from 'clsx';

const footerMenus = [
  {
    'Customer Service': [
      'Help Center',
      'Track an Order',
      'Return an Item',
      'Return Policy',
      'Privacy & Security',
      'Privacy Feedback Security',
      'Privacy Feedback Security',
    ],
  },
  {
    'Customer Service 2': [
      'Help Center 2',
      'Track an Order 2',
      'Return an Item 2',
      'Return Policy 2',
      'Privacy & Security 2',
      'Privacy Feedback Security 2',
    ],
  },
  {
    'Customer Service 3': [
      'Help Center 3',
      'Track an Order 3',
      'Return an Item 3',
      'Return Policy 3',
      'Privacy & Security 3',
      'Privacy Feedback Security 3',
    ],
  },
  {
    'Customer Service 4': [
      'Help Center 4',
      'Track an Order 4',
      'Return an Item 4',
      'Return Policy 4',
      'Privacy & Security 4',
      'Privacy Feedback Security 4',
    ],
  },
];

const ShowMenu = ({ menu, title, mediaMD }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    if (!mediaMD) setToggleMenu(!toggleMenu);
  }
  return (
    <div className="ShowMenu">
      <div
        className={clsx(
          'ShowMenu__inner',
          toggleMenu && 'toggleMenu',
        )}
      >
        <div
          className={'ShowMenu__inner-title'}
          onClick={handleClick}
        >
          {title}
          <SubdirectoryArrowLeftIcon />
        </div>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <ArrowRightAltIcon fontSize="small" />
              <a href="#.">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function FooterMenu(props) {
  const mediaMD = useMediaQuery('(min-width:600px)');
  return (
    <div className="FooterMenu">
      <div className="FooterMenu__inner">
        {footerMenus.map((menu, index) => {
          let title = Object.keys(menu)[0];
          return (
            <ShowMenu
              menu={menu[title]}
              title={title}
              key={index}
              mediaMD={mediaMD}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FooterMenu;
