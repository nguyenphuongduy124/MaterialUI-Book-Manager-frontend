import React from 'react';

function AwesomeImage({ url, height = '7.5rem' }) {
  return (
    <div
      style={{
        width: `100%`,
        height: `${height}`,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
      }}
    ></div>
  );
}

export default AwesomeImage;
