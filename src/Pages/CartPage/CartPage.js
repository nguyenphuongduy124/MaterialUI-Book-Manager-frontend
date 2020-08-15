import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClientLayout from '../../Layouts/ClientLayout/ClientLayout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './CartPage.scss';
import { Typography, Avatar } from '@material-ui/core';
import { formatPrice } from '../../services/functions';

const TAX_RATE = 0.1;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function subtotal(cart) {
  return cart
    .map(({ price }) => price)
    .reduce((sum, i) => sum + i, 0);
}
function tax(number, rate = TAX_RATE) {
  return number * rate;
}

function CartPage(props) {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();

  useEffect(() => {
    console.log(cart);
  });
  return (
    <ClientLayout className="CartPage">
      <div className="CartPage__inner">
        <TableContainer component={Paper} className="cart-table">
          <Table
            className={classes.table}
            aria-label="spanning table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  <Typography component="p" variant="h5">
                    Giỏ hàng
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Chi tiết
                </TableCell>
                <TableCell align="right">Giá</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tên</TableCell>
                <TableCell>Ảnh</TableCell>
                <TableCell align="right">Số lượng</TableCell>
                <TableCell align="right">Đơn giá</TableCell>
                <TableCell align="right">Tổng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Avatar src={item.image} />
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {formatPrice(item.price)}
                  </TableCell>
                  <TableCell align="right">
                    {formatPrice(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {formatPrice(subtotal(cart))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0,
                )} %`}</TableCell>
                <TableCell align="right">
                  {formatPrice(tax(subtotal(cart)))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">
                  {formatPrice(subtotal(cart) + tax(subtotal(cart)))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ClientLayout>
  );
}

export default CartPage;
