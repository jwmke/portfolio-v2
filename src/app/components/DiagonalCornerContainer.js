import Grain from "./Grain";

const DiagonalCornerContainer = ({ 
  children, 
  className = '',
  bottomRightStraight = false,
  size = 24,
}) => {
  const outerClipPath = `polygon(
    ${size}px 0,
    calc(100% - ${size}px) 0,
    100% ${size}px,
    100% ${bottomRightStraight ? '100%' : `calc(100% - ${size}px)`},
    ${bottomRightStraight ? '100%' : `calc(100% - ${size}px)`} 100%,
    ${size}px 100%,
    0 calc(100% - ${size}px),
    0 ${size}px
  )`;

  const innerClipPath = `polygon(
    ${size + 1}px 1px,
    calc(100% - ${size + 1}px) 1px,
    calc(100% - 1px) ${size + 1}px,
    calc(100% - 1px) ${bottomRightStraight ? 'calc(100% - 1px)' : `calc(100% - ${size + 1}px)`},
    ${bottomRightStraight ? 'calc(100% - 1px)' : `calc(100% - ${size + 1}px)`} calc(100% - 1px),
    ${size + 1}px calc(100% - 1px),
    1px calc(100% - ${size + 1}px),
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

export default DiagonalCornerContainer;