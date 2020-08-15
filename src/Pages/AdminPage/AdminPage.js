import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout/AdminLayout';

import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AllCategories from '../Categories/AllCategories/AllCategories';
import AddEditCategory from '../Categories/AddEditCategory/AddEditCategory';
import AllProducts from '../Products/AllProducts/AllProducts';
import AddEditProduct from '../Products/AddEditProduct/AddEditProduct';
import AllPosts from '../Posts/AllPosts/AllPosts';
import AddEditPost from '../Posts/AddEditPost/AddEditPost';
import PageNotFound from '../PageNotFound/PageNotFound';

function AdminPage(props) {
  const match = useRouteMatch();

  return (
    <AdminLayout>
      <Switch>
        <Redirect
          from={`${match.url}`}
          exact
          to={`${match.url}/dashboard`}
        />
        <Route
          path={`${match.url}/dashboard`}
          component={Dashboard}
        />
        <Route
          path={`${match.url}/categories`}
          component={AllCategories}
        />
        <Route
          path={`${match.url}/add-category`}
          component={AddEditCategory}
        />
        <Route
          path={`${match.url}/products`}
          component={AllProducts}
          exact
        />
        <Route
          path={`${match.url}/products/:id`}
          component={AddEditProduct}
        />
        <Route
          path={`${match.url}/add-product`}
          component={AddEditProduct}
        />
        <Route path={`${match.url}/posts`} component={AllPosts} />
        <Route
          path={`${match.url}/add-post`}
          component={AddEditPost}
        />
        <Route component={PageNotFound} />
      </Switch>
    </AdminLayout>
  );
}

export default AdminPage;
