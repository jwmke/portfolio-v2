import Grain from "../components/Grain"
import DiagonalCornerContainer from "../components/DiagonalCornerContainer";

const Page = () => {
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
          <div className="w-full min-h-[100vh] flex justify-center py-6">
            <DiagonalCornerContainer className="w-[50rem]" size={64}>
              {/* TODO */}
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;