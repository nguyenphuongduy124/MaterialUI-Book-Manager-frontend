import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './GlobalLoading.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function GlobalLoading(props) {
  const loading = useSelector((state) => state.loading);
  return (
    <div className={clsx('GlobalLoading', !loading && 'hidden')}>
      {loading && <CircularProgress disableShrink />}
    </div>
  );
}

export default GlobalLoading;
