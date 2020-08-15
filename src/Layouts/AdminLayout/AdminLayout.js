import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import './AdminLayout.scss';
import useStyles from './AdminLayoutStyle';
import AppbarAdmin from './AppbarAdmin/AppbarAdmin';
import ContentPage from './ContentPage/ContentPage';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import GlobalLoading from '../../components/Loading/GlobalLoading/GlobalLoading';

export const OpenContext = React.createContext(null);

function AdminLayout(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <GlobalLoading />
      <CssBaseline />
      <OpenContext.Provider value={{ open, setOpen }}>
        <AppbarAdmin />
        <SidebarMenu />
      </OpenContext.Provider>
      <ContentPage>{props.children}</ContentPage>
    </div>
  );
}

export default AdminLayout;
