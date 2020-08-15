import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Avatar, Button, Box } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  showLoading,
  hideLoading,
} from '../../../features/loading/loadingSlice';
import {
  setProducts,
  removeProduct,
} from '../../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { callApi } from '../../../services/callApi';
import ConfirmationDialog from '../../../common/ConfirmationDialog/ConfirmationDialog';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function AllProducts(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const products = useSelector((state) => state.products);
  const matches = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(showLoading());
      callApi.get().then((res) => {
        if (res.status === 200) {
          dispatch(setProducts(res.data));
          dispatch(hideLoading());
        }
      });
    } // eslint-disable-next-line
  }, []);
  function handleRemoveProduct(product) {
    setCurrentProduct(product);
    setOpen(true);
  }
  useEffect(() => {
    try {
      if (isDelete && currentProduct) {
        dispatch(showLoading());
        callApi.delete(currentProduct.id).then((res) => {
          if (res.status === 200) {
            dispatch(removeProduct(currentProduct));
            setIsDelete(false);
            setCurrentProduct(null);
            dispatch(hideLoading());
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [isDelete]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Product name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">
                <Avatar src={product.image} />
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">
                {product.categories.map((cate, index) => (
                  <span key={index}>
                    {cate +
                      (index !== product.categories.length - 1
                        ? ', '
                        : '')}
                  </span>
                ))}
              </TableCell>
              <TableCell align="center">
                <Box component="span">
                  <Link to={`${matches.url}/${product.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<EditIcon />}
                      size="small"
                    >
                      Edit
                    </Button>
                  </Link>
                </Box>
                <Box
                  component="span"
                  ml={2}
                  onClick={() => handleRemoveProduct(product)}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    size="small"
                  >
                    Remove
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmationDialog
        open={open}
        setOpen={setOpen}
        setIsDelete={setIsDelete}
        currentProduct={currentProduct}
      />
    </TableContainer>
  );
}

export default AllProducts;
