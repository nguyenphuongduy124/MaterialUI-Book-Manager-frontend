import { Typography } from '@material-ui/core';
import cloneDeep from 'clone-deep';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  addProduct,
  updateProduct,
} from '../../../features/products/productsSlice';
import {
  toastFailed,
  toastSuccess,
} from '../../../features/toastify/toastifySlice';
import { callApi } from '../../../services/callApi';
import ProductForm from '../ProductForm/ProductForm';
import './AddEditProduct.scss';

function handleSubmit(
  values,
  formikBag,
  dispatch = null,
  isAddMode = true,
) {
  let data = cloneDeep(values);
  data.price = parseInt(data.price);
  delete data.file;

  if (isAddMode) {
    try {
      callApi
        .post(data)
        .then((res) => {
          if (res.status === 201) {
            dispatch(addProduct(res.data));
            dispatch(toastSuccess());
            formikBag.setSubmitting(false);
            formikBag.resetForm();
          }
        })
        .catch((err) => {
          dispatch(toastFailed());
          formikBag.setSubmitting(false);
        });
    } catch (err) {
      dispatch(toastFailed());
      formikBag.setSubmitting(false);
    }
  } else {
    let id = data.id;
    delete data.id;
    formikBag.setSubmitting(false);
    callApi
      .put(id, data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(updateProduct({ id: id, data: res.data }));
          dispatch(toastSuccess());
          formikBag.setSubmitting(false);
        }
      })
      .catch((err) => {
        dispatch(toastFailed());
        formikBag.setSubmitting(false);
      });
  }
}

function AddEditProduct(props) {
  const { id } = useParams();
  const isAddMode = !id;

  const editedProduct = useSelector((state) =>
    state.products.find((x) => x.id === id),
  );

  const initialValues = isAddMode
    ? {
        name: '',
        description: '',
        price: '',
        categories: [],
        image: '',
        file: null,
      }
    : editedProduct;
  if (id && !editedProduct) return <div>Cant not find product</div>;
  return (
    <div className="AddEditProduct">
      <div className="AddEditProduct__inner">
        <Typography component="h5" variant="h5">
          {isAddMode ? 'Thêm sản phẩm' : 'Sửa sản phẩm'}
        </Typography>
        <div className="form-wrapper">
          <ProductForm
            isAddMode={isAddMode}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default AddEditProduct;
