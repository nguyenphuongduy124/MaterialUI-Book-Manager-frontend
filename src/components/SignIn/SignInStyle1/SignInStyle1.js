import React from 'react';
import './SignInStyle1.scss';
import { Button } from '@material-ui/core';

function SignInStyle1(props) {
  return (
    <div className="SignInStyle1">
      <div className="SignInStyle1__inner">
        <Button fullWidth variant="outlined">
          SIGN IN
        </Button>
        <div>
          <span>New to Newegg?</span>
          <a href="/">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default SignInStyle1;
