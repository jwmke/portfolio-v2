import Image from "next/image";

const CornerClip = ({ 
    size = 129,
    strokeWidth = 1,
    corner = 'bottomRight'
  }) => {
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="w-full h-full"
        >
          <path
            d={`M 0 ${size} L ${size} ${size} L ${size} 0 Z`}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
        </svg>
        {corner === "bottomRight" ? <Image className="absolute bottom-1.5 right-1.5" src={"/img/logo.svg"} width={65} height={40} alt={"Rose"} /> : null}
      </div>
    );
  };
  
  export default CornerClip;