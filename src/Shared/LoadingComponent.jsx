import React from 'react';
import loadingImg from '../images/loading-gif.gif';

const LoadingComponent = () => {
  return (
    <div>
      <div className="h-[90vh] flex items-center justify-center bg-transparent">
        <img className="h-60 w-72 bg-transparent" src={loadingImg} alt="" />
      </div>
    </div>
  );
};

export default LoadingComponent;
