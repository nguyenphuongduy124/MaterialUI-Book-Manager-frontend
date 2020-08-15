import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import CheckboxField from '../../../common/customfield/CheckboxField/CheckboxField';
import InputCustom from '../../../common/customfield/InputCustom/InputCustom';
import TextAreaCustom from '../../../common/customfield/TextAreaCustom/TextAreaCustom';
import UploadCustom from '../../../common/customfield/UploadCustom/UploadCustom';
import CATEGORIES from '../../../constant/categories';

ProductForm.propTypes = {};

function ProductForm(props) {
  const { initialValues, onSubmit, isAddMode } = props;
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required Field'),
    description: Yup.string()
      .min(5, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required Field'),
    price: Yup.number()
      .integer('Expect a integer number')
      .required('Required Field'),
    categories: Yup.array().required('Select a category'),
    image: Yup.string()
      .min(5, 'Too Short!')
      .required('Required File'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikBag) => {
        onSubmit(values, formikBag, dispatch, isAddMode);
      }}
      enableReinitialize={true}
    >
      {(formikProps) => {
        const {
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          status,
        } = formikProps;

        return (
          <Form className="product-form" onSubmit={handleSubmit}>
            <FastField
              name="name"
              component={InputCustom}
              label="Product Name"
              className="wrap-input"
            />
            {errors.name && touched.name ? (
              <Alert severity="error">{errors.name}</Alert>
            ) : null}
            <FastField
              name="description"
              component={TextAreaCustom}
              label="Description"
              rowsMin={10}
              rowsMax={10}
              cols={75}
            />
            {errors.description && touched.description ? (
              <Alert severity="error">{errors.description}</Alert>
            ) : null}

            <FastField
              name="price"
              component={InputCustom}
              label="Price"
              className="wrap-input"
            />
            {errors.price && touched.price ? (
              <Alert severity="error">{errors.price}</Alert>
            ) : null}
            <div>
              {CATEGORIES.map((category) => (
                <FastField
                  name="categories"
                  category={category.category}
                  component={CheckboxField}
                  key={category.id}
                  label={category.description}
                  categoryId={category.id}
                  defaultChecked={
                    values.categories.includes(category.id)
                      ? true
                      : false
                  }
                />
              ))}
            </div>
            {errors.categories && touched.categories ? (
              <Alert severity="error">{errors.categories}</Alert>
            ) : null}
            <FastField
              name="file"
              component={UploadCustom}
              label="Image Product"
              image={values.image}
            />
            {errors.image && touched.image ? (
              <Alert severity="error">{errors.image}</Alert>
            ) : null}
            {errors.file ? (
              <Alert severity="error">{errors.file}</Alert>
            ) : null}
            <div className="product-btn-submit">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button>
              {isSubmitting && <CircularProgress />}
              {errors.failSubmit ? (
                <Alert severity="error">{errors.failSubmit}</Alert>
              ) : null}
              {errors.failSave ? (
                <Alert severity="error">{errors.failSave}</Alert>
              ) : null}
            </div>
            {status ? (
              <Alert severity="success">{status.success}</Alert>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductForm;
