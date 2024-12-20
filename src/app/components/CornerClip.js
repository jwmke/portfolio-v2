const CornerClip = ({ 
  size = 129,
  strokeWidth = 1,
  corner = 'bottomRight'
}) => {
  // Calculate transformations based on corner prop
  const getTransform = () => {
    switch(corner) {
      case 'topLeft':
        return 'rotate(180 50 50)';
      case 'topRight':
        return 'rotate(270 50 50)';
      case 'bottomLeft':
        return 'rotate(90 50 50)';
      default:
        return '';
    }
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className="w-full h-full"
      >
        <defs>
          <pattern 
            id="wavePattern" 
            patternUnits="userSpaceOnUse"
            width="100" 
            height="20"
          >
            <rect width="100" height="20" fill="#1f1f1f"/>
            <path 
              d="M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z"
              fill="#ffffff"
              fillOpacity="1"
              fillRule="evenodd"
            />
          </pattern>
        </defs>
        
        {/* Pattern-filled triangle */}
        <path
          d={`M 0 ${size} L ${size} ${size} L ${size} 0 Z`}
          stroke="url(#wavePattern)"
          strokeWidth={strokeWidth}
          fill="url(#wavePattern)"
          transform={getTransform()}
        />
        
        {/* White outline triangle */}
        <path
          d={`M 0 ${size} L ${size} ${size} L ${size} 0 Z`}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          transform={getTransform()}
        />
      </svg>
    </div>
  );
};

export default CornerClip;