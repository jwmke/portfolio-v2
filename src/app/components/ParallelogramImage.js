import React from 'react';
import Image from 'next/image';

const ParallelogramImage = ({ 
  src, 
  alt,
  size = 60,
  className = ''
}) => {
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
    calc(100% - 1px) calc(100% - ${size}px),
    calc(100% - ${size}px) calc(100% - 1px),
    1px calc(100% - 1px),
    1px ${size}px
  )`;

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 bg-white"
        style={{
          clipPath: outerClipPath,
        }}
      />
      
      <div
        className="relative h-[10.5rem] overflow-hidden"
        style={{ clipPath: innerClipPath }}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="object-cover object-center w-full ml-[.8rem] h-[calc(100%)] mt-[1px]"
        />
      </div>
    </div>
  );
};

export default ParallelogramImage;