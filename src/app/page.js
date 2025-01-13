import DiagonalCornerContainer from "./components/DiagonalCornerContainer";
import Grain from "./components/Grain";
import CyberGrid from "./components/CyberGrid";
import Scene from "./components/Scene";
import Image from "next/image";
import AsymDiagonalCornerContainer from "./components/AsymDiagonalCornerContainer";
import NameTag from "./components/Nametag";
import RightBox from "./components/RightBox";
import LeftSideExtension from "./components/LeftSideExtension";
import RightSideExtension from "./components/RightSideExtension";
import LeftTopBox from "./components/LeftTopBox";
import RobotBox from "./components/RobotBox";
import TodayBox from "./components/TodayBox";
import YesterdayBox from "./components/YesterdayBox";
import ZoomPaddingContainer from "./components/ZoomPaddingContainer";
import VerticalNameTag from "./components/VerticalNameTag";
import { MdRecycling } from "react-icons/md";
import { PiIntersectThreeLight } from "react-icons/pi";
import MobileTodayBox from "./components/MobileTodayBox";
import MobileYesterdayBox from "./components/MobileYesterdayBox";
import Link from "next/link";

export default function Home() {
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
        <div className="p-4 min-[650px]:hidden flex  justify-center">
          <DiagonalCornerContainer className="w-full max-w-[450px]" size={32}>
              <div className="w-full flex flex-col">
                <MobileTodayBox />
                <MobileYesterdayBox />
              </div>
            </DiagonalCornerContainer>
        </div>
        <div className="min-[1921px]:flex hidden justify-center items-center min-h-[100vh]">
          <DiagonalCornerContainer className="flex justify-between" size={24}>
            <Image src={"/img/enhance.gif"} width={300} height={300} alt="Enhance" className="border border-white mt-1 mx-1" />
            <div className="flex items-end justify-between mt-4">
              <div className="text-white font-bold text-2xl">
                ENHANCE
              </div>
              <div className="text-white ml-1.5 mb-[3px] text-sm">
                {"zoom in to <= 1920px"}
              </div>
            </div>
          </DiagonalCornerContainer>
        </div>
        <div className="min-[1921px]:hidden min-[650px]:flex hidden flex-col justify-center min-h-screen min-w-full">
        {/* <ZoomPaddingContainer> */}
          <div className="py-2 px-2 min-[1921px]:hidden min-[650px]:flex hidden">
          <div className="w-6 h-full mt-[27rem] z-20 -right-[1px] top-[3px] relative transform translate-x-0">
            <LeftSideExtension />
          </div>
          <DiagonalCornerContainer className="w-full" size={64}>
            <div className="w-full flex justify-between relative">
              <div className="w-1/3 min-h-full min-[1400px]:flex hidden flex-col justify-between -ml-6">
                <LeftTopBox />
                <RobotBox />
              </div>
              <div className="w-1/3 min-h-full flex flex-col justify-between relative">
                <TodayBox/>
                <YesterdayBox/>
              </div>
              <div className="w-1/3 h-full flex-col items-end justify-between min-[1100px]:flex hidden">
                <div className="w-full flex justify-end">
                <AsymDiagonalCornerContainer className="w-2/3 min-[1400px]:min-w-[20rem] min-w-[25.4rem] 2xl:min-w-[25.4rem] h-[32rem] -top-1 -left-1" size={52}>
                  <div className="relative -top-6 -left-6 w-[calc(100%+3rem)]">
                    <CyberGrid>
                      <div className="h-[32rem]">
                        <div className="h-40 w-80 absolute -right-10 -top-12 z-50">
                          <Image src={'/img/tree.png'} height={300} width={500} alt="Olive Tree" className="select-none" />
                        </div>
                        <Scene />
                      </div>
                    </CyberGrid>
                  </div>
                </AsymDiagonalCornerContainer>
                </div>
                <RightBox/>
                <NameTag/>
              </div>
              <div className="min-[1100px]:hidden min-h-full flex-col justify-end flex space-y-7 right-0 absolute">
                <div className="flex flex-col space-y-2 w-full items-end">
                  <a 
                    href="https://github.com/jwmke"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdRecycling className="text-white text-[2.5rem] hover:text-teal-700 transition-all duration-200"/>
                  </a>

                  <div className="flex space-x-2">
                    <Link href="/blog">
                      <div className="group">
                        <Image 
                          src="/img/fire2.png" 
                          width={30} 
                          height={40} 
                          alt="Fire"
                          className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                        />
                      </div>
                    </Link>
                    
                    <Link href="/dojoe">
                      <PiIntersectThreeLight className="text-white text-[2.5rem] hover:text-teal-700 transition-all duration-200"/>
                    </Link>
                  </div>

                  <div className="flex space-x-2">
                    <div className="mt-0.5 mr-1">
                      <a 
                        href="https://www.goodreads.com/jwmke" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="group">
                          <Image 
                            src="/img/ce.png" 
                            width={50} 
                            height={30} 
                            alt="CE"
                            className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                          />
                        </div>
                      </a>
                    </div>

                    <a 
                      href="https://x.com/jwmke"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group">
                        <Image 
                          src="/img/trash.png" 
                          width={36} 
                          height={30} 
                          alt="Trash"
                          className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <VerticalNameTag />
              </div>
            </div>
          </DiagonalCornerContainer>
          <div className="w-6 h-full min-[1100px]:mt-[13.6rem] mt-[10rem] z-20 -left-[1px] relative transform translate-x-0">
            <RightSideExtension />
          </div>
        </div>
        {/* </ZoomPaddingContainer> */}
        </div>
      </div>
    </div>
  );
}