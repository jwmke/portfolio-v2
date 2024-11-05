import Image from "next/image";

const PolyCornerClip = ({ 
    size = 87,
    strokeWidth = 1,
    corner = ''
  }) => {
    return (
      <div className="absolute" style={{ width: size, height: size }}>
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="w-full h-full"
        >
          <path
            d={`M ${size} 0 L 0 0 L 0 ${size} Z`}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
        </svg>
        <div className="text-white absolute top-[9px] left-[9px]">
            <svg 
            viewBox={`0 0 ${45} ${45}`} 
            className="w-2/3 h-2/3"
            >
            <path
                d={`M ${45} 0 L 0 0 L 0 ${45} Z`}
                stroke="white"
                strokeWidth={strokeWidth}
                fill="transparent"
            />
            </svg>
        </div>
        <div className="text-white absolute top-4 left-4">
            <svg 
            viewBox={`0 0 ${25} ${25}`} 
            className="w-1/3 h-1/3"
            >
            <path
                d={`M ${25} 0 L 0 0 L 0 ${25} Z`}
                stroke="white"
                strokeWidth={strokeWidth}
                fill="transparent"
            />
            </svg>
        </div>
      </div>
    );
  };
  
  export default PolyCornerClip;