import axios from 'axios';
import { MOCK_API_PRODUCTS, CLOUDINARY } from '../constant';

export const callApi = {
  get: (id = null) => {
    if (!id) {
      return axios.get(MOCK_API_PRODUCTS);
    }

    return axios.get(MOCK_API_PRODUCTS + `/${id}`);
  },
  delete: (id) => {
    return axios.delete(MOCK_API_PRODUCTS + `/${id}`);
  },
  post: (data = null) => {
    return axios({
      method: 'post',
      url: MOCK_API_PRODUCTS,
      data,
    });
  },
  put: (id, data = null) => {
    return axios({
      method: 'put',
      url: MOCK_API_PRODUCTS + `/${id}`,
      data,
    });
  },
};

export const cloudinaryApi = {
  post: (data = null) => {
    return axios({
      method: 'post',
      url: CLOUDINARY,
      data,
    });
  },
};
