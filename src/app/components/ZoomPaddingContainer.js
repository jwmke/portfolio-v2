"use client"
import React, { useState, useEffect } from 'react';

const ZoomScaleContainer = ({ children }) => {
  const [scale, setScale] = useState(1);
  const [initialWidth, setInitialWidth] = useState(null);
  
  useEffect(() => {
    const container = document.querySelector('.content-container');
    if (!initialWidth && container) {
      setInitialWidth(container.getBoundingClientRect().width);
    }

    const handleZoom = () => {
      if (!initialWidth) return;
      
      const currentWidth = window.innerWidth;
      const newScale = Math.min(currentWidth / initialWidth, 1);
      setScale(newScale);
    };

    // Set up resize observer to catch all size changes
    const resizeObserver = new ResizeObserver(handleZoom);
    if (container) {
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', handleZoom);
    window.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        requestAnimationFrame(handleZoom);
      }
    });

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
      window.removeEventListener('resize', handleZoom);
      window.removeEventListener('wheel', handleZoom);
    };
  }, [initialWidth]);

  return (
    <div className={`w-full min-h-screen flex items-center justify-center overflow-hidden`}>
      <div 
        className="content-container"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: initialWidth ? `${initialWidth}px` : '100%',
          maxWidth: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ZoomScaleContainer;