import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FooterComponent from './FooterComponent/FooterComponent';
import FooterMenu from '../../components/Footer/FooterMenu/FooterMenu';
import DownloadApp from '../../components/Footer/DownloadApp/DownloadApp';
import ConditionAndSocial from '../../components/Footer/ContitionAndSocial/ConditionAndSocial';

ClientLayout.propTypes = {
  className: PropTypes.string,
};
ClientLayout.defaultProps = {
  className: '',
};

export default function ClientLayout(props) {
  const { className } = props;
  return (
    <Box className={`${className}`}>
      <TopMenu />
      {props.children}
      <FooterComponent>
        <FooterMenu />
        <DownloadApp />
        <ConditionAndSocial />
      </FooterComponent>
    </Box>
  );
}
