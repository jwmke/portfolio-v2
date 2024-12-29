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
       
        {/* <ZoomPaddingContainer> */}
          <div className="flex py-6 px-2">
          <div className="w-6 h-full mt-[45.7vh] z-20 -right-[1px] relative">
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
              <div className="w-1/3 h-full flex flex-col items-end justify-between">
                <div className="w-full flex justify-end">
                <AsymDiagonalCornerContainer className="w-2/3 min-w-[20rem] 2xl:min-w-[25.4rem] h-[32rem] -top-1 -left-1" size={52}>
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
            </div>
          </DiagonalCornerContainer>
          <div className="w-6 h-full mt-[20vh] z-20 -left-[1px] relative">
            <RightSideExtension />
          </div>
        </div>
        {/* </ZoomPaddingContainer> */}
      </div>
    </div>
  );
}