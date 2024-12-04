import DiagonalCornerContainer from "./components/DiagonalCornerContainer";
import Grain from "./components/Grain";
import CyberGrid from "./components/CyberGrid";

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
      <Grain opacity={0.75} blendMode="multiply" />
      
      <div className="relative z-10 flex min-h-screen p-8">
        <DiagonalCornerContainer className="my-2 w-full" size={64}>
          <DiagonalCornerContainer className="w-1/2 h-96 -top-1 -left-1" size={48}>
          <div className="relative -top-6 -left-6 w-[calc(100%+3rem)]">
            <CyberGrid>
                <div className="h-[24rem]">
                  aaa
                </div>
            </CyberGrid>
          </div>
          </DiagonalCornerContainer>
          
        </DiagonalCornerContainer>
      </div>
    </div>
    </div>
  );
}