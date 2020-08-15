import React from 'react';
import { Container } from '@material-ui/core';
import './BodyComponent.scss';

function BodyComponent(props) {
  return (
    <Container disableGutters className="BodyComponent">
      {props.children}
    </Container>
  );
}

export default BodyComponent;
