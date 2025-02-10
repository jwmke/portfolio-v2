import Image from "next/image";
import Grain from "./Grain";

import { Libre_Barcode_128, Saira_Stencil_One } from "next/font/google";

const barcode = Libre_Barcode_128({
    subsets: ['latin'],
    weight: ["400"]
});

const saira = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ["400"]
});

const VerticalNameTag = ({ 
    size = 26 
}) => {
    const outerClipPath = `polygon(
        0 0,
        100% 0,
        100% calc(100% - ${size}px),
        calc(100% - ${size}px) 100%,
        0 100%
    )`;
    
    const innerClipPath = `polygon(
        1px 0px,
        calc(100% - 1px) 0px,
        calc(100% - 1px) calc(100% - ${size + 1}px),
        calc(100% - ${size + 1}px) calc(100% - 1px),
        1px calc(100% - 1px)
    )`;
    
    return (
        <div className="absolute bottom-4 right-4 w-[5rem] min-[410px]:w-28 min-[400px]:w-[6rem] h-[28.75rem] overflow-hidden">
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
                className="relative z-10 h-full text-white"
                style={{ clipPath: outerClipPath }}
            >
                {/* Top opening markers */}
                <div className="flex justify-between">
                    <div className="h-[1px] w-6 bg-white relative"/>
                    <div className="h-[1px] w-6 bg-white relative"/>
                </div>

                <div className="flex flex-col h-full relative">
                    <div className="min-[400px]:text-[1.4rem] text-[1.2rem] font-thin flex tracking-[.2rem] ml-1 min-[400px]:ml-1.5 justify-center mt-2">김조셉</div>
                    
                    <div className="mt-auto min-[400px]:flex hidden flex-col items-center gap-2 mb-16 h-[30rem] w-12 absolute right-0.5 min-[410px]:top-[2.75rem] top-[4.5rem]">
                        <div className="text-[1.75rem] ml-2 min-[410px]:ml-0">00</div>
                        <Image src={'/img/right.svg'} height={16} width={30} alt="Triangle" className="my-1 rotate-90 ml-2 min-[410px]:ml-0"/>
                        <div className="text-[1.75rem] ml-2 min-[410px]:ml-0">25</div>
                        <Image src={'/img/globe.png'} height={20} width={50} alt="Globe" className="mt-[1.35rem] min-[410px]:mt-[3.25rem] rotate-90 hidden min-[410px]:flex"/>
                        <div className="min-[410px]:text-[1.9rem] text-[1.7rem] min-[410px]:mt-24 mt-[10.75rem] mr-3 rotate-90 w-[12.5rem] ml-3 min-[410px]:ml-0">
                            <p className={barcode.className}>Ride the Tiger</p>
                        </div>
                    </div>
                    <div className="rotate-90 min-[410px]:-right-[8.25rem] min-[400px]:-right-[8.85rem] -right-[10.3rem] min-[400px]:top-[12.85rem] top-[12.75rem] absolute">
                        <span className={`text-[3.45rem] font-bold tracking-[.2rem] whitespace-nowrap ${saira.className}`}>
                            Joseph Weller
                        </span>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default VerticalNameTag;