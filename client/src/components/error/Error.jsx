import React from 'react';
import error from '../../Public/images/warning/error.gif';

const Error = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={error} className="loadingImg" alt="" />
    </div>
  );
};

export default Error;
