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


const NameTag = ({ 
    size = 52 
  }) => {
    const outerClipPath = `polygon(
      -1px 0,
      100% 0,
      100% calc(100% - ${size}px),
      calc(100% - ${size}px) 100%,
      -1px 100%
    )`;
  
    const innerClipPath = `polygon(
      -1px 1px,
      calc(100% - 1px) 1px,
      calc(100% - 1px) calc(100% - ${size + 1}px),
      calc(100% - ${size + 1}px) calc(100% - 1px),
      -1px calc(100% - 1px)
    )`;
  
    return (
      <div className="relative min-w-[37rem] max-h-36 overflow-hidden">
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
          <div className="flex flex-col justify-between">
            <div className="w-[1px] h-6 bg-white relative"/>
            <div className="w-[1px] h-6 bg-white relative"/>
          </div>
          <div className="p-2 text-white">
            <div className="flex items-center gap-2">
                <div className="flex flex-col text-3xl font-thin">
                    <p>김</p>
                    <p>조</p>
                    <p>셉</p>
                </div>
                <div className="flex flex-col">
              <span className="text-7xl font-bold tracking-[.3rem]">
                <p className={saira.className}>Joseph Weller</p>
              </span>
                    <div className="flex items-center gap-3 pt-1">
                        <span className="text-3xl font-thin">00</span>
                        <Image className="mx-2" src={'/img/right.svg'} height={20} width={30} alt="Right" />
                        <span className="text-3xl font-thin">24</span>
                        
                        <div className="flex items-center gap-2 ml-auto">
                            <Image className="pb-1" src={'/img/globe.png'} height={30} width={50} alt="Globe" />
                            <div className="text-4xl pt-2 relative leading-[0.5rem] mr-12">
                                <p className={barcode.className}>Ride the Tiger</p>
                            </div>
                            {/* <div className="w-10"/> */}
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default NameTag;