import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import AdminPage from './Pages/AdminPage/AdminPage';
import HomePage from './Pages/HomePage/HomePage';
import MyTheme from './theme/index';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import CartPage from './Pages/CartPage/CartPage';
import { ToastContainer } from 'react-toastify';
function App(props) {
  return (
    <MyTheme>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={PageNotFound} />
      </Router>
      <ToastContainer />
    </MyTheme>
  );
}

export default App;
