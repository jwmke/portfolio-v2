import DiagonalCornerContainer from "./components/DiagonalCornerContainer";
import Grain from "./components/Grain";
import CyberGrid from "./components/CyberGrid";
import SecondCyberGrid from "./components/SecondCyberGrid";
import Scene from "./components/Scene";
import Image from "next/image";

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
            <div className="w-1/4 rounded-[50%]">
              <SecondCyberGrid>
                    <div className="h-[30rem]">
                      {/* <div className="h-20 w-20 bg-red-500"/> */}
                    </div>
                </SecondCyberGrid>
            </div>
            <DiagonalCornerContainer className="w-1/4 h-[30rem] -top-1 -left-1" size={52}>
              <div className="relative -top-6 -left-6 w-[calc(100%+3rem)]">
                <CyberGrid>
                    <div className="h-[30rem]">
                      <div className="h-80 w-80 absolute -right-20 -top-8">
                        <Image src={'/img/tree.png'} height={150} width={300} alt="Olive Tree" />
                      </div>
                      <Scene />
                    </div>
                </CyberGrid>
              </div>
            </DiagonalCornerContainer>
          </div>
        </DiagonalCornerContainer>
      </div>
    </div>
    </div>
  );
}