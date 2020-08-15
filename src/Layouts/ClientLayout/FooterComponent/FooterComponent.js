import React from 'react';
import './FooterComponent.scss';

function FooterComponent(props) {
  return (
    <div className="FooterComponent">
      <div className="FooterComponent__inner">{props.children}</div>
    </div>
  );
}

export default FooterComponent;
