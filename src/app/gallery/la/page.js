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
          src: '/img/la_final/la1.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la2.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la3.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la4.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la5.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la6.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la7.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la8.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la9.jpg',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la10.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la11.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la12.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la13.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la14.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la15.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la16.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la17.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la18.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la19.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la20.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la21.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la22.jpg',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la23.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la24.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la25.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la26.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la27.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la28.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la29.jpg',
          height: 150,
          width: 100,
      },
      {
          src: '/img/la_final/la30.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la31.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la32.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la33.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la34.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la35.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la36.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la37.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la38.jpg',
          height: 100,
          width: 150,
      },
      {
          src: '/img/la_final/la39.jpg',
          height: 100,
          width: 150,
      },
      // {
      //     src: '/img/la_final/la40.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la41.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la42.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la43.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la44.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la45.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la46.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la47.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la48.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la49.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la50.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la51.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la52.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la53.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la54.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la55.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la56.jpg',
      //     height: 100,
      //     width: 150,
      // },
      // {
      //     src: '/img/la_final/la57.jpg',
      //     height: 100,
      //     width: 150,
      // },
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
          <div className="w-full min-h-[100vh] flex justify-center p-2 py-6">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left mx-5 mb-24'>
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