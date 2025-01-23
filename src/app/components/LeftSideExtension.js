import Grain from "./Grain";

const LeftSideExtension = ({ 
    size = 30 
}) => {
    const outerClipPath = `polygon(
        0 ${size}px,
        ${size}px 0,
        103% 0,
        103% 100%,
        ${size}px 100%,
        0 calc(100% - ${size}px)
    )`;
      
    const innerClipPath = `polygon(
        1px ${size + 1}px,
        ${size + 1}px 1px,
        calc(100% + 1px) 1px,
        calc(100% + 1px) calc(100% - 1px),
        ${size + 1}px calc(100% - 1px),
        1px calc(100% - ${size + 1}px)
    )`;
    
    return (
        <div className="relative w-6 h-72">
            <div
                className="absolute inset-0 bg-white"
                style={{
                    clipPath: outerClipPath,
                }}
            >
                <div 
                    className="absolute inset-0"
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
                className="relative z-20 flex"
                style={{ clipPath: outerClipPath }}
            >
            </div>
        </div>
    );
}

export default LeftSideExtension;