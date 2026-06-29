import React from 'react';
import './FullScreenLoader.css';

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fs-loader-overlay">
      <div className="fs-loader-content">
        <div className="honeycomb">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
