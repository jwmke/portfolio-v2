"use client";
import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import { Lato } from "next/font/google";
import { useState } from "react";
import CustomLightBox from "@/app/components/CustomLightBox";
import ImageMosaic from "@/app/components/ImageMosaic";

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {

    const images = [
        {
            src: '/img/italy_final/Italy-01.jpg',
        },
      ];

    const [isOpen, setOpen] = useState(false);
    const [currentImageIndex, setCurrentIndex] = useState(0);

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
                                Title
                            </div>
                            <div className='text-teal-500 text-xl space-y-5 my-8'>
                                <p>{"// A collection of my favorite pictures shot on Fujifilm X-T30ii, Kodak Ektar H35, and Google Pixel 7"}</p>
                            </div>
                            <ImageMosaic images={images}
                                handleClick={({ index }) => {
                                setCurrentIndex(index);
                                setOpen(true);
                            }}/>
                            <CustomLightBox images={images} currentImageIndex={currentImageIndex} setCurrentIndex={setCurrentIndex} isOpen={isOpen} onClose={() => setOpen(false)}/>
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