import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const toastifySlice = createSlice({
  name: 'toastify',
  initialState: null,
  reducers: {
    toastSuccess(state, action) {
      toast.success('Done !', {
        position: toast.POSITION.TOP_CENTER,
      });
      return null;
    },
    toastFailed(state, action) {
      toast.warning('Failed !', {
        position: toast.POSITION.TOP_CENTER,
      });
      return null;
    },
  },
});

export const { toastSuccess, toastFailed } = toastifySlice.actions;
export default toastifySlice.reducer;
