import Image from "next/image";

const CornerClip = ({ 
    size = 129,
    strokeWidth = 1,
    corner = 'bottomRight' // can be: topRight, topLeft, bottomRight, bottomLeft
  }) => {
    const getPath = () => {
      switch(corner) {
        case 'topLeft':
          return `M ${size} 0 L 0 0 L 0 ${size} Z`;
        case 'bottomRight':
          return `M 0 ${size} L ${size} ${size} L ${size} 0 Z`;
        case 'bottomLeft':
          return `M ${size} ${size} L 0 ${size} L 0 0 Z`;
        case 'topRight':
        default:
          return `M 0 0 L ${size} 0 L ${size} ${size} Z`;
      }
    };
  
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="w-full h-full"
        >
          <path
            d={getPath()}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
        </svg>
        <Image className="absolute bottom-1.5 right-1.5" src={"/img/logo.svg"} width={65} height={40} alt={"Rose"} />
      </div>
    );
  };
  
  export default CornerClip;