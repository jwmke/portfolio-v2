import React from 'react';

const ImageBox = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {/* Top-left corner */}
      <div className="absolute top-0 left-0 w-4 h-4 z-40">
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-white"/>
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-white"/>
      </div>
      
      {/* Top-right corner */}
      <div className="absolute top-0 right-0 w-4 h-4 z-40">
        <div className="absolute top-0 right-0 w-[1px] h-4 bg-white"/>
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-white"/>
      </div>
      
      {/* Bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-4 h-4 z-40">
        <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-white"/>
        <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-white"/>
      </div>
      
      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-4 h-4 z-40">
        <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white"/>
        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white"/>
      </div>
      
      {children}
    </div>
  );
};

export default ImageBox;