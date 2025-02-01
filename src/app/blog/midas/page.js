import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

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
          <div className="w-full min-h-[100vh] flex justify-center p-4">
            <DiagonalCornerContainer className="w-[60rem]" size={64}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                            <div className='text-4xl font-bold'>
                                Techno Future Litmus Test 
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                                <div className='flex justify-center'>
                                  <Image width={700} height={466} src={"/img/blog/doom2.jpg"} alt="doomer" className=''/>
                                </div>
                                <p>pandoras box</p>
                                <p>modern examples</p>
                                <p>backwards is impossible</p>
                                <p className='text-3xl font-bold pt-3'>Lenses</p>
                                <p>Andreessen</p>
                                <p>Kaczynski</p> 
                                <p>Evola</p>
                                <p className='text-3xl font-bold pt-3'>Future</p>
                                <p>future examples</p>
                                <p className='text-3xl font-bold pt-3'>Conclusion</p>
                                <p>???</p>
                            </div>
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