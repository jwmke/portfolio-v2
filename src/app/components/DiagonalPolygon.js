import React from 'react';
import Grain from './Grain';
import Image from 'next/image';

const DiagonalPolygonContainer = ({
  children,
  className = '',
  size = 60,
}) => {
  // Points for polygon with diagonal corners only on top-left and bottom-right
  const outerClipPath = `polygon(
    ${size}px 0,
    100% 0,
    100% calc(100% - ${size}px),
    calc(100% - ${size}px) 100%,
    0 100%,
    0 ${size}px
  )`;

  const innerClipPath = `polygon(
    ${size + 1}px 1px,
    calc(100% - 1px) 1px,
    calc(100% - 1px) calc(100% - ${size + 1}px),
    calc(100% - ${size + 1}px) calc(100% - 1px),
    1px calc(100% - 1px),
    1px ${size + 1}px
  )`;

  return (
    <div className={`${className}`}>
      {/* Border container */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: outerClipPath,
        }}
      >
        {/* Inner transparent container */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: innerClipPath,
            backgroundColor: 'rgb(31, 31, 31)',
          }}
        >
          {/* Background grain effect */}
          <div className="relative w-full h-full">
            <Grain 
              opacity={0.5} 
              blendMode="soft-light" 
              className="absolute !fixed:none" 
            />
          </div>
        </div>
      </div>
      
      {/* Content container */}
      <div
        className="relative z-10 h-full"
        style={{ clipPath: outerClipPath }}
      >
        <div className="p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DiagonalPolygonContainer;