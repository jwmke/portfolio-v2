"use client";
import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import { Lato } from "next/font/google";
import { useState, useEffect } from "react";
import CustomLightBox from "@/app/components/CustomLightBox";
import ImageMosaic from "@/app/components/ImageMosaic";
import Image from "next/image";

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {

  const imageV = [    
    { src: '/img/ce_final/ce8.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce6.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce4.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce7.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce3.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce9.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce2.jpg', height: 150, width: 100 },
  ]

  // Rest of your image arrays...
  const imageB1 = [
    { src: '/img/ce_final/ce16.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce33.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce10.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce15.jpg', height: 100, width: 150 },
  ]
  
  // Include all your other image arrays here
  const imageB2 = [
    { src: '/img/ce_final/ce25.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce12.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce13.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce14.jpg', height: 100, width: 150 },
  ]

  const imageB3 = [
    { src: '/img/ce_final/ce18.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce19.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce20.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce21.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce22.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce24.jpg', height: 100, width: 150 },
  ]

  const imageB4 = [
    { src: '/img/ce_final/ce27.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce28.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce29.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce30.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce31.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce32.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce34.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce35.jpg', height: 100, width: 150 },
  ]

  const imageB5 = [
    { src: '/img/ce_final/ce36.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce38.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce39.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce40.jpg', height: 100, width: 150 },
  ]
  
  const imageB6 = [
    { src: '/img/ce_final/ce41.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce42.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce43.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce45.jpg', height: 100, width: 100 },
  ]

  const imageB7 = [
    { src: '/img/ce_final/ce50.jpg', height: 100, width: 150 }, 
    { src: '/img/ce_final/ce49.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce46.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce48.jpg', height: 100, width: 150 },
  ];

  const imageP1 =[
    { src: '/img/ce_final/ce51.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce52.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce53.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce54.jpg', height: 150, width: 100 },
  ];

  const imageP2 =[
    { src: '/img/ce_final/ce56.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce57.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce59.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce58.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce60.jpg', height: 160, width: 90 },
    { src: '/img/ce_final/ce61.jpg', height: 160, width: 90 },
  ]
  
  const imageP3 =[      
    { src: '/img/ce_final/ce62.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce66.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce65.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce64.jpg', height: 100, width: 150 },
  ]
  
  const imageP4 = [
    { src: '/img/ce_final/ce63.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce73.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce72.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce70.jpg', height: 100, width: 100 },
  ]
  
  const imageP5 = [
    { src: '/img/ce_final/ce76.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce74.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce69.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce75.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce77.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce78.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce79.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce80.jpg', height: 100, width: 150 },
  ]
  
  const imageP6 = [
    { src: '/img/ce_final/ce81.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce82.jpg', height: 100, width: 150 },
  ]
  
  const imageP7 = [
    { src: '/img/ce_final/ce86.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce87.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce88.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce89.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce91.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce85.jpg', height: 100, width: 100 },
  ]
  
  const imageP8 = [
    { src: '/img/ce_final/ce92.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce94.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce93.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce96.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce98.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce97.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce100.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce99.jpg', height: 100, width: 150 },
  ]

  const imageK1 = [
    { src: '/img/ce_final/ce101.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce106.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce103.jpg', height: 100, width: 100 },
    { src: '/img/ce_final/ce1.jpg', height: 100, width: 150 },
  ]

  const imageK2 = [
    { src: '/img/ce_final/ce102.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce108.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce107.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce110.jpg', height: 100, width: 150 },
  ];

  const imageK3 = [
    { src: '/img/ce_final/ce111.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce112.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce114.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce113.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce115.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce116.jpg', height: 100, width: 150 },
  ]
  
  const imageK4 = [
    { src: '/img/ce_final/ce120.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce119.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce121.jpg', height: 150, width: 100 },
    { src: '/img/ce_final/ce122.jpg', height: 100, width: 150 },
  ]
  
  const imageK5 = [
    { src: '/img/ce_final/ce123.jpg', height: 100, width: 150 },
    { src: '/img/ce_final/ce125.jpg', height: 100, width: 150 },
  ]

  // State for lightbox
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  
  // Create a single unified array with all images for the lightbox
  const allImagesForLightbox = [
    // Featured images
    { src: '/img/ce_final/ce5.jpg' },
    ...imageV.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce47.jpg' },
    ...imageB1.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce23.jpg' },
    ...imageB2.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce17.jpg' },
    ...imageB3.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce26.jpg' },
    ...imageB4.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce37.jpg' },
    ...imageB5.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce44.jpg' },
    ...imageB6.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce11.jpg' },
    ...imageB7.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce67.jpg' },
    ...imageP1.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce55.jpg' },
    ...imageP2.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce95.jpg' },
    ...imageP3.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce68.jpg' },
    ...imageP4.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce71.jpg' },
    ...imageP5.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce83.jpg' },
    ...imageP6.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce84.jpg' },
    ...imageP7.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce90.jpg' },
    ...imageP8.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce105.jpg' },
    ...imageK1.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce104.jpg' },
    ...imageK2.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce109.jpg' },
    ...imageK3.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce117.jpg' },
    ...imageK4.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce118.jpg' },
    ...imageK5.map(img => ({ src: img.src })),
    { src: '/img/ce_final/ce124.jpg' },
  ];

  // Function to find the index of an image in the combined array
  const findImageIndex = (src) => {
    return allImagesForLightbox.findIndex(img => img.src === src);
  };

  // Handler for when an image is clicked, either featured or in a mosaic
  const handleImageClick = (src) => {
    const index = findImageIndex(src);
    if (index !== -1) {
      setCurrentIndex(index);
      setOpen(true);
    }
  };

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
                      <div className='text-white text-left sm:mx-5 mb-4 sm:mb-24'>
                          <div className='text-4xl font-bold'>
                              Central Europe 125
                          </div>
                          <div className='mt-8 text-xl'>
                            125 of my favorite pictures from a 2 week trip to Central Europe in March, 2025.
                          </div>
                          <div className='text-teal-500 text-xl space-y-5 my-8'>
                              <p>{"// Shot on Fujifilm X-T30ii, TTArtisan 27mm, w/ Reggie's Portra"}</p>
                          </div>
                          
                          {/* Vienna Section */}
                          <div className="text-2xl font-bold pb-4">
                            1 Day - Vienna, Austria
                          </div>
                          <div 
                            className="relative w-full aspect-[3/2] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce5.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce5.jpg"
                              alt="Vienna"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageV}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          {/* Budapest Section */}
                          <div className="text-2xl font-bold pb-4 pt-8">
                            4 Days - Budapest, Hungary
                          </div>
                          <div 
                            className="relative w-full aspect-[3/2] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce47.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce47.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB1}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          {/* Continue with all your other sections */}
                          <div 
                            className="relative w-full aspect-[.98] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce23.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce23.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB2}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce17.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce17.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB3}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce26.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce26.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB4}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce37.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce37.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB5}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[5.6/2] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce44.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce44.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB6}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce11.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce11.jpg"
                              alt="Budapest"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageB7}
                            max={2}
                            handleClick={handleImageClick}
                          />

                          {/* Prague Section */}
                          <div className="text-2xl font-bold pb-4 pt-8">
                              4 Days - Prague, Czech Republic
                          </div>
                          <div 
                            className="relative w-full aspect-[3/2] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce67.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce67.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP1}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce55.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce55.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP2}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce95.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce95.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP3}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[2/3.05] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce68.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce68.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP4}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce71.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce71.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP5}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce83.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce83.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP6}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce84.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce84.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP7}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce90.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce90.jpg"
                              alt="Prague"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageP8}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          {/* Krakow Section */}
                          <div className="text-2xl font-bold pb-4 pt-8">
                            3 Days - Krakow, Poland
                          </div>
                          <div 
                            className="relative w-full aspect-[3/2] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce105.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce105.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageK1}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce104.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce104.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageK2}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce109.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce109.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageK3}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce117.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce117.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageK4}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce118.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce118.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                          <ImageMosaic 
                            images={imageK5}
                            max={2}
                            handleClick={handleImageClick}
                          />
                          
                          <div 
                            className="relative w-full aspect-[3/2.1] mb-4 cursor-pointer"
                            onClick={() => handleImageClick('/img/ce_final/ce124.jpg')}
                          >
                            <Image 
                              src="/img/ce_final/ce124.jpg"
                              alt="Krakow"
                              fill
                              priority
                              className="object-contain pt-4"
                            />
                          </div>
                      </div>
                  </div>
              </div>
          </DiagonalCornerContainer>
        </div>
      </div>

      {/* Lightbox for all images */}
      <CustomLightBox
        images={allImagesForLightbox}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Page;