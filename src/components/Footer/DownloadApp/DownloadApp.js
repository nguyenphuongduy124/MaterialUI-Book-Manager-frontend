import React from 'react';
import './DownloadApp.scss';

function DownloadApp(props) {
  return (
    <div className="DownloadApp">
      <div className="DownloadApp__inner">
        <div className="info">
          <div>
            <p>Newegg Global</p>
            <p>International Shopping</p>
          </div>
          <div>
            <p>NeweggBusiness</p>
            <p>For Business Needs</p>
          </div>
          <div>
            <p>Newegg GameCrate</p>
            <p>Gaming and Hardware News</p>
          </div>
        </div>
        <div className="apps">
          <a href="#.">
            <img
              src="https://c1.neweggimages.com/WebResource/Themes/2005/Nest/Footer/MobileIcon/btn_mobileSite.png"
              alt="app"
            />
          </a>
          <a href="#.">
            <img
              src="https://c1.neweggimages.com/WebResource/Themes/2005/Nest/Footer/MobileIcon/btn_appStore.png"
              alt="app"
            />
          </a>
          <a href="#.">
            <img
              src="https://c1.neweggimages.com/WebResource/Themes/2005/Nest/Footer/MobileIcon/btn_playStore.png"
              alt="app"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
