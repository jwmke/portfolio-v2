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
          src: '/img/la_final/la1.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la2.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la3.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la4.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la5.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la6.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la7.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la8.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la9.JPG',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la10.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la11.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la12.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la13.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la14.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la15.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la16.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la17.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la18.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la19.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la20.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la21.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la22.JPG',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la23.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la24.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la25.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la26.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la27.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la28.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la29.JPG',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la30.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la31.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la32.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la33.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la34.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la35.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la36.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la37.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la38.JPG',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la39.JPG',
          height: 100,
          width: 150,
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
                                Downtown Los Angeles
                            </div>
                            <div className='text-teal-500 text-xl space-y-5 my-8'>
                                <p>{"// Shot on Fujifilm X-T30ii 27mm w/ Reggie's Portra"}</p>
                            </div>
                            <ImageMosaic images={images}
                                max={2}
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