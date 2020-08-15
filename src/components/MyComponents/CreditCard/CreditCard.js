import React from 'react';
import BlockWithTitle from '../BlockWithTitle/BlockWithTitle';
import './CreditCard.scss';
function CreditCard(props) {
  return (
    <div className="CreditCard">
      <div>
        <img
          src="https://c1.neweggimages.com/WebResource/Themes/2005/Nest/branding_cc.png"
          alt="credit card"
        />
      </div>
      <p>
        Up to 12 Months special financing every day, every purchase.
      </p>
      <BlockWithTitle subTitle="Learn more" onlyTitle noPadding />
    </div>
  );
}

export default CreditCard;
