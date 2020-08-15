import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './UploadCustom.scss';
import {
  FILE_SIZE,
  SUPPORTED_FORMATS,
} from '../../../constant/fileInfo';

UploadCustom.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  className: PropTypes.string,
};
UploadCustom.defaultProps = {
  label: '',
  className: '',
};

function Thumbnail(props) {
  const [state, setState] = useState({
    loading: false,
    thumbnail: undefined,
  });
  const { file, image, setFieldValue, setErrors } = props;

  useEffect(() => {
    if (image.length > 0) {
      setState({ ...state, thumbnail: image });
      return;
    }
    if (!file) return;

    setState({ ...state, loading: true }); // eslint-disable-next-line
  }, [file]);

  useEffect(() => {
    if (!file) return;
    if (state.loading) {
      setTimeout(() => {
        let reader = new FileReader();
        reader.onloadend = () => {
          if (file.size > FILE_SIZE) {
            setErrors({ file: 'File too large' });
            setState({ loading: false, thumbnail: undefined });
            return;
          }
          if (!SUPPORTED_FORMATS.includes(file.type)) {
            setErrors({ file: 'Unsupported Format' });
            setState({ loading: false, thumbnail: undefined });
            return;
          }
          setState({ loading: false, thumbnail: reader.result });
          setFieldValue('image', reader.result);
        };
        reader.readAsDataURL(file);
      }, 700);
    }
    // eslint-disable-next-line
  }, [state]);

  if (!file && image.length === 0) {
    return null;
  }
  if (state.loading) return <p>Loading...</p>;

  return (
    <img
      src={state.thumbnail}
      alt="product"
      className="img-thumbnail mt-2"
      height={150}
      width={150}
    />
  );
}

function UploadCustom(props) {
  const { field, form, label, image } = props;
  const { name } = field;
  const { setFieldValue, values, setErrors } = form;
  return (
    <div className="UploadCustom">
      <label>{label}</label>
      <input
        type="file"
        name={name}
        onChange={(event) => {
          setFieldValue(name, event.currentTarget.files[0]);
          setFieldValue('image', '');
        }}
      />
      <Thumbnail
        file={values[name]}
        setFieldValue={setFieldValue}
        setErrors={setErrors}
        image={image}
      />
    </div>
  );
}

export default UploadCustom;
