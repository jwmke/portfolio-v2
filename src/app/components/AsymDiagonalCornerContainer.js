import React from 'react';
import Grain from "./Grain";

const AsymDiagonalCornerContainer = ({ 
  children, 
  className = '',
  size = 24,
}) => {
  const stepWidth = size * 1;
  const stepHeight = size;
  const stepPosition = '35%';

  const outerClipPath = `polygon(
    ${size}px 0,
    calc(100% - ${size}px) 0,
    100% ${size}px,
    100% calc(100% - ${size}px),
    calc(100% - ${size}px) 100%,
    calc(${stepPosition} + ${stepWidth}px) 100%,
    ${stepPosition} calc(100% - ${stepHeight}px),
    calc(${stepPosition} - ${stepWidth}px) calc(100% - ${stepHeight}px),
    ${size}px calc(100% - ${stepHeight}px),
    0 calc(100% - ${stepHeight * 2}px),
    0 ${size}px
  )`;

  const innerClipPath = `polygon(
    ${size + 1}px 1px,
    calc(100% - ${size + 1}px) 1px,
    calc(100% - 1px) ${size + 1}px,
    calc(100% - 1px) calc(100% - ${size + 1}px),
    calc(100% - ${size + 1}px) calc(100% - 1px),
    calc(${stepPosition} + ${stepWidth + 1}px) calc(100% - 1px),
    ${stepPosition} calc(100% - ${stepHeight + 1}px),
    calc(${stepPosition} - ${stepWidth}px) calc(100% - ${stepHeight + 1}px),
    ${size + 2}px calc(100% - ${stepHeight + 1}px),
    1px calc(100% - ${stepHeight * 2 + 1}px),
    1px ${size + 1}px
  )`;

  return (
    <div className={`relative ${className}`}>
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
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AsymDiagonalCornerContainer;

