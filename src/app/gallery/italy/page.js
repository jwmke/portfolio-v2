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
            height: 110,
            width: 85,
            title: 'Rome'
        },
        {
            src: '/img/italy_final/Italy-02.jpg',
            height: 110,
            width: 85,
            title: 'Rome'
        },
        {
            src: '/img/italy_final/Italy-03.jpg',
            height: 85,
            width: 110,
            title: 'Pompeii'
        },
        {
            src: '/img/italy_final/Italy-04.jpg',
            height: 85,
            width: 110,
            title: 'Venice'
        },
        {
            src: '/img/italy_final/Italy-05.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-06.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-07.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-08.jpg',
            height: 110,
            width: 85,
            title: "Pompeii"
        },
        {
            src: '/img/italy_final/Italy-09.jpg',
            height: 85,
            width: 110,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-10.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-11.jpg',
            height: 110,
            width: 85,
            title: "San Gimignano"
        },
        {
            src: '/img/italy_final/Italy-12.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-13.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-14.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-15.jpg',
            height: 85,
            width: 110,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-16.jpg',
            height: 85,
            width: 110,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-17.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-18.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-19.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-20.jpg',
            height: 110,
            width: 85,
            title: "Vatican City"
        },
        {
            src: '/img/italy_final/Italy-21.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-22.jpg',
            height: 85,
            width: 110,
            title: "Tuscany"
        },
        {
            src: '/img/italy_final/Italy-23.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-24.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-25.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-26.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-27.jpg',
            height: 85,
            width: 110,
            title: "Milan"
        },
        {
            src: '/img/italy_final/Italy-28.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-29.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-30.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-31.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-32.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-33.jpg',
            height: 85,
            width: 110,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-34.jpg',
            height: 85,
            width: 110,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-35.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-36.jpg',
            height: 110,
            width: 85,
            title: "Tuscany"
        },
        {
            src: '/img/italy_final/Italy-37.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-38.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-39.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-40.jpg',
            height: 85,
            width: 110,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-41.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-42.jpg',
            height: 110,
            width: 85,
            title: "Pompeii"
        },
        {
            src: '/img/italy_final/Italy-43.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-44.jpg',
            height: 110,
            width: 85,
            title: "Sienna"
        },
        {
            src: '/img/italy_final/Italy-45.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-46.jpg',
            height: 85,
            width: 110,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-47.jpg',
            height: 110,
            width: 85,
            title: "Pompeii"
        },
        {
            src: '/img/italy_final/Italy-48.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-49.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-50.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-51.jpg',
            height: 85,
            width: 110,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-52.jpg',
            height: 85,
            width: 110,
            title: "Milan"
        },
        {
            src: '/img/italy_final/Italy-53.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-54.jpg',
            height: 110,
            width: 85,
            title: "Milan"
        },
        {
            src: '/img/italy_final/Italy-55.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-56.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-57.jpg',
            height: 85,
            width: 110,
            title: "Vatican City"
        },
        {
            src: '/img/italy_final/Italy-58.jpg',
            height: 85,
            width: 110,
            title: "Vatican City"
        },
        {
            src: '/img/italy_final/Italy-59.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-60.jpg',
            height: 110,
            width: 85,
            title: "Pisa"
        },
        {
            src: '/img/italy_final/Italy-61.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-62.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-63.jpg',
            height: 85,
            width: 110,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-64.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-65.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-66.jpg',
            height: 110,
            width: 85,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-67.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-68.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-69.jpg',
            height: 85,
            width: 110,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-70.jpg',
            height: 85,
            width: 110,
            title: "Milan"
        },
        {
            src: '/img/italy_final/Italy-71.jpg',
            height: 110,
            width: 85,
            title: "Milan"
        },
        {
            src: '/img/italy_final/Italy-72.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-73.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-74.jpg',
            height: 110,
            width: 85,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-75.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-76.jpg',
            height: 85,
            width: 110,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-77.jpg',
            height: 110,
            width: 85,
            title: "Pompeii"
        },
        {
            src: '/img/italy_final/Italy-78.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-79.jpg',
            height: 110,
            width: 85,
            title: "Florence"
        },
        {
            src: '/img/italy_final/Italy-80.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-81.jpg',
            height: 85,
            width: 110,
            title: "Venice"
        },
        {
            src: '/img/italy_final/Italy-82.jpg',
            height: 80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ,
            width: 110,
            title: "Naples"
        },
        {
            src: '/img/italy_final/Italy-83.jpg',
            height: 110,
            width: 85,
            title: "Rome"
        },
        {
            src: '/img/italy_final/Italy-84.jpg',
            height: 110,
            width: 85,
            title: "Florence"
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
          <div className="w-full min-h-[100vh] flex justify-center p-2">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-4 sm:mb-24'>
                            <div className='text-4xl font-bold'>
                                Italy in Autumn
                            </div>
                            <div className='text-teal-500 text-xl space-y-5 my-8'>
                                <p>{"// Shot on Kodak Ektar H35 w/ Kodak Gold 200 35mm"}</p>
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