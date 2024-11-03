import Grain from "./Grain";

const RightSideExtension = ({ 
    size = 30 
  }) => {
    const outerClipPath = `polygon(
        0 0,
        100% 0,
        100% calc(100% - ${size}px),
        calc(100% - ${size}px) 100%,
        0 100%
      )`;
      
      const innerClipPath = `polygon(
        0px 1px,
        calc(100% - 1px) 1px,
        calc(100% - 1px) calc(100% - ${size + 1}px),
        calc(100% - ${size + 1}px) calc(100% - 1px),
        0px calc(100% - 1px)
      )`;
    return <div className="relative w-6 h-28 overflow-hidden">
    <div
      className="absolute inset-0 bg-white"
      style={{
        clipPath: outerClipPath,
      }}
    >
      <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        clipPath: innerClipPath,
        backgroundColor: 'rgb(31, 31, 31)',
      }}
    >
      <div className="relative w-full h-full">
        <Grain 
          opacity={0.5} 
          blendMode="soft-light" 
          className="absolute !fixed:none" 
        />
      </div>
    </div>
    </div>
    
    <div
      className="relative z-10 flex"
      style={{ clipPath: outerClipPath }}
    >
        <div className="h-[5.5rem] w-3 ml-1 mr-2 mt-2.5">
            <div className="h-[1px] mb-0.5 w-2.5 bg-white"/>
            <div className="h-0.5 mb-[3px] w-2.5 bg-white"/>
            <div className="h-2 mb-1 w-2.5 bg-white"/>
            <div className="h-4 mb-2 w-2.5 bg-white"/>
            <div className="h-10 mb-4 w-2.5 bg-white"/>
        </div>
    </div>
</div>
}

export default RightSideExtension;