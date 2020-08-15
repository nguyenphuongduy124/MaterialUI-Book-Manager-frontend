import React from 'react';
import { useDispatch } from 'react-redux';
import { toastSuccess } from '../../features/toastify/toastifySlice';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard(props) {
  const dispatch = useDispatch();
  function notify() {
    dispatch(toastSuccess());
  }

  return (
    <div className="Dashboard">
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default Dashboard;
