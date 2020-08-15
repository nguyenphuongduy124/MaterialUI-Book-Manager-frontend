import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import './ConditionAndSocial.scss';

function ConditionAndSocial(props) {
  return (
    <div className="ConditionAndSocial">
      <div className="ConditionAndSocial__inner">
        <div className="conditions">
          <span>
            <a href="#.">Terms & Conditions</a>
          </span>
          <span>
            <a href="#.">Privacy Policy</a>
          </span>
          <span>
            <a href="#.">
              Manage Cookie © 2000-2020 Newegg Inc. All rights
              reserved.
            </a>
          </span>
        </div>
        <div className="socials">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default ConditionAndSocial;
