"use client";
import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import { Lato } from "next/font/google";
import { useState, useCallback } from "react";
import OriginalCustomLightBox from "@/app/components/OriginalCustomLightBox";
import ImageMosaic from "@/app/components/ImageMosaic";

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const IMAGES = [
    { src: '/img/greece_final/g65.jpg', height: 2, width: 3, full: true },
    
    { src: '/img/greece_final/g6.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g7.jpg', height: 3, width: 2 },
    
    { src: '/img/greece_final/g36.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g1.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g2.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g56.jpg', height: 2, width: 3 },
    
    { src: '/img/greece_final/g10.jpg', height: 2, width: 3, full: true },
    
    { src: '/img/greece_final/g14.jpg', height: 3, width: 2 },
    // { src: '/img/greece_final/g3.jpg', height: 2, width: 3 },
     { src: '/img/greece_final/g4.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g23.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g17.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g13.jpg', height: 21.79, width: 61.8, full: true },

    { src: '/img/greece_final/g9.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g11.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g5.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g8.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g18.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g15.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g29.jpg', height: 2, width: 3, full: true },

    { src: '/img/greece_final/g12.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g20.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g21.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g22.jpg', height: 1, width: 1 },

    { src: '/img/greece_final/g24.jpg', height: 3, width: 4 },
    { src: '/img/greece_final/g61.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g33.jpg', height: 2, width: 3, full: true },

    { src: '/img/greece_final/g28.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g25.jpg', height: 2, width: 3 },


    { src: '/img/greece_final/g27.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g32.jpg', height: 3, width: 2 },

    
    { src: '/img/greece_final/g30.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g34.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g26.jpg', height: 3, width: 2, full: true },
    
    { src: '/img/greece_final/g31.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g38.jpg', height: 3, width: 2 },
    
    { src: '/img/greece_final/g37.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g16.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g35.jpg', height: 1, width: 1 },
    { src: '/img/greece_final/g42.jpg', height: 1, width: 1 },
    
    { src: '/img/greece_final/g41.jpg', height: 2, width: 3, full: true },

    { src: '/img/greece_final/g39.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g40.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g46.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g45.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g43.jpg', height: 2, width: 3, full: true },

    { src: '/img/greece_final/g44.jpg', height: 1, width: 1 },
    { src: '/img/greece_final/g47.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g48.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g49.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g50.jpg', height: 1, width: 1, full: true },

    { src: '/img/greece_final/g51.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g83.jpg', height: 3, width: 2 },


    { src: '/img/greece_final/g53.jpg', height: 1, width: 1 },
    { src: '/img/greece_final/g54.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g55.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g73.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g58.jpg', height: 2, width: 3, full: true },

    { src: '/img/greece_final/g60.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g59.jpg', height: 2, width: 3 },
    
    { src: '/img/greece_final/g62.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g68.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g63.jpg', height: 21.78, width: 62.4, full: true },

    { src: '/img/greece_final/g77.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g66.jpg', height: 2, width: 3 },
    
    { src: '/img/greece_final/g67.jpg', height: 1, width: 1 },
    { src: '/img/greece_final/g69.jpg', height: 1, width: 1 },
    
    { src: '/img/greece_final/g75.jpg', height: 2, width: 3, full: true },


    { src: '/img/greece_final/g52.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g87.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g71.jpg', height: 3, width: 2 },    
    { src: '/img/greece_final/g19.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g72.jpg', height: 1, width: 1 },
    { src: '/img/greece_final/g74.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g79.jpg', height: 3, width: 2, full: true },

    { src: '/img/greece_final/g57.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g81.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g80.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g64.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g78.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g76.jpg', height: 3, width: 2 },

    
    { src: '/img/greece_final/g86.jpg', height: 3, width: 2, full: true },
        
    { src: '/img/greece_final/g88.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g82.jpg', height: 2, width: 3 },

    { src: '/img/greece_final/g85.jpg', height: 2, width: 3 },
    { src: '/img/greece_final/g89.jpg', height: 3, width: 2 },

    { src: '/img/greece_final/g84.jpg', height: 3, width: 2 },
    { src: '/img/greece_final/g90.jpg', height: 2, width: 3 },
    
    { src: '/img/greece_final/g70.jpg', height: 2, width: 3, full: true },
];

const Page = () => {
    const [isOpen, setOpen] = useState(false);
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const handleClick = useCallback(({ index }) => {
        setCurrentIndex(index);
        setOpen(true);
    }, []);

    return (
      <div className="bg-black">
        <div
          className="w-full min-h-screen relative"
          style={{
            background: `linear-gradient(135deg,
              rgb(31, 31, 31) 0%,
              rgb(57, 173, 161, .5) 50%,
              rgb(31, 31, 31) 100%)`
          }}
        >
          <Grain opacity={.95} blendMode="multiply" />
          <div className="w-full min-h-[100vh] flex justify-center p-2 lg:py-12">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-4 sm:mb-24'>
                            <div className='text-4xl font-bold'>
                                Modern Mythology
                            </div>
                            <div className='mt-8 text-xl'>
                                A few pictures from a 9 day trip to Greece in September, 2025.
                            </div>
                            <div className='text-teal-500 text-xl space-y-5 my-8'>
                                <p>{"// Shot on Fujifilm X-T30ii, 27mm w/ Reggie's Portra"}</p>
                            </div>
                            <ImageMosaic 
                                images={IMAGES}
                                max={2}
                                handleClick={handleClick}
                            />
                            <OriginalCustomLightBox 
                                images={IMAGES} 
                                currentImageIndex={currentImageIndex} 
                                setCurrentIndex={setCurrentIndex} 
                                isOpen={isOpen} 
                                onClose={() => setOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;