import React from 'react';
import loading from '../../Public/images/warning/loading.svg';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={loading} className="loadingImg" alt="" />
    </div>
  );
};

export default Loading;
