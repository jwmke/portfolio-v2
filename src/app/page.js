import DiagonalCornerContainer from "./components/DiagonalCornerContainer";
import Grain from "./components/Grain";
import CyberGrid from "./components/CyberGrid";
import SecondCyberGrid from "./components/SecondCyberGrid";
import Scene from "./components/Scene";
import Image from "next/image";
import AsymDiagonalCornerContainer from "./components/AsymDiagonalCornerContainer";
import NameTag from "./components/Nametag";
import RightBox from "./components/RightBox";

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
      
      <div className="relative z-10 flex min-h-screen p-6">
        <DiagonalCornerContainer className="w-full" size={64}>
          <div className="w-full flex justify-end relative">
            {/* <div className="w-1/4 rounded-[50%]">
              <SecondCyberGrid>
                    <div className="h-[30rem]">
                        <div className="h-20 w-20 bg-red-500"/>
                    </div>
                </SecondCyberGrid>
            </div> */}
            <div className="w-1/3 h-full flex flex-col items-end justify-between">
              <AsymDiagonalCornerContainer className="w-2/3 h-[32rem] -top-1 -left-1 min-w-72" size={52}>
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
              <RightBox/>
              <NameTag/>
            </div>
          </div>
        </DiagonalCornerContainer>
      </div>
    </div>
    </div>
  );
}