import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';

function MyTheme(props) {
  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  );
}

export default MyTheme;
