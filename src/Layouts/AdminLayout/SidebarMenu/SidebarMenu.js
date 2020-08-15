import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClassIcon from '@material-ui/icons/Class';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LabelIcon from '@material-ui/icons/Label';
import MailIcon from '@material-ui/icons/Mail';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { OpenContext } from '../AdminLayout';
import './SidebarMenu.scss';
import useStyles from './styles';
const myMenus = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    isParent: false,
    icon: <MailIcon />,
  },
  {
    name: 'Categories',
    to: '/categories',
    isParent: true,
    child: [
      { name: 'New Category', to: '/add-category', isParent: false },
      { name: 'All Categories', to: '/categories', isParent: false },
    ],
    icon: <ClassIcon />,
  },
  {
    name: 'Products',
    to: '/products',
    isParent: true,
    child: [
      { name: 'New Product', to: '/add-product', isParent: false },
      { name: 'All Products', to: '/products', isParent: false },
    ],
    icon: <ShoppingCartIcon />,
  },
  {
    name: 'Posts',
    to: '/posts',
    isParent: true,

    child: [
      { name: 'New Post', to: '/add-post', isParent: false },
      { name: 'All Posts', to: '/posts', isParent: false },
    ],
    icon: <PostAddIcon />,
  },
];

const RenderMenu = ({ menus }) => {
  const match = useRouteMatch();
  const { path } = match;
  const classes = useStyles();
  return menus.map((menu) => {
    if (!menu.isParent) {
      return (
        <Link
          to={path + menu.to}
          className={classes.wrapLink}
          key={menu.name}
        >
          <ListItem button>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.name} />
          </ListItem>
        </Link>
      );
    } else {
      return <NestedMenu menu={menu} key={menu.name} path={path} />;
    }
  });
};

const NestedMenu = ({ menu, path }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.child.map((item) => (
            <Link
              to={path + item.to}
              className={classes.wrapLink}
              key={item.name}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

function SidebarMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { open, setOpen } = useContext(OpenContext);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <RenderMenu menus={myMenus} />
      </List>
    </Drawer>
  );
}

export default SidebarMenu;
