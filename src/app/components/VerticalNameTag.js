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
    size = 52 
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
        <div className="relative w-36 h-[38.5rem] overflow-hidden">
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
                    <div className="text-3xl font-thin flex tracking-[.4rem] ml-1.5 justify-center mt-3">김조셉</div>
                    
                    <div className="mt-auto flex flex-col items-center gap-2 mb-16 h-[30rem] w-12 absolute right-2 top-[3.75rem]">
                        <div className="text-3xl">00</div>
                        <Image src={'/img/right.svg'} height={16} width={30} alt="Triangle" className="my-2 rotate-90"/>
                        <div className="text-3xl">24</div>
                        <Image src={'/img/globe.png'} height={20} width={50} alt="Globe" className="mt-[9rem] rotate-90"/>
                        <div className="text-4xl mt-24 mr-3 rotate-90 w-[12rem]">
                            <p className={barcode.className}>Ride the Tiger</p>
                        </div>
                    </div>
                    <div className="rotate-90 -right-[11rem] top-[18.25rem] absolute">
                        <span className={`text-7xl font-bold tracking-[.3rem] whitespace-nowrap ${saira.className}`}>
                            Joseph Weller
                        </span>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default VerticalNameTag;