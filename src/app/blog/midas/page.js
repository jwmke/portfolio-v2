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
                              Midas’ Monocle and the Heat Death of the Universe
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                                <div className='flex justify-center'>
                                  <Image width={700} height={466} src={"/img/blog/alch.jpg"} alt="alch" className=''/>
                                </div>
                                <p></p>
                                <p></p>
                                <p className='text-3xl font-bold pt-3'>Technology of Today</p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p className='text-2xl font-bold'>Surveillance</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Defense</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Cars</p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/cars.jpg"} alt="cars" className=''/>
                                </div>
                                <p></p>
                                <p className='text-2xl font-bold'>Medicine</p>
                                <p></p>
                                <p></p>
                                <p className='text-3xl font-bold pt-3'>Lenses</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Techno-Optimism</p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/midas.jpg"} alt="midas" className=''/>
                                </div>
                                <p></p>
                                <p></p>
                                <p className='text-2xl font-bold'>Techno-Skepticism</p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/shrooms.png"} alt="shrooms" className=''/>
                                </div>
                                <p></p>
                                <p className='text-2xl font-bold'>Techno-Traditionalism</p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/tiger.jpg"} alt="tiger" className=''/>
                                </div>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p className='text-3xl font-bold pt-3'>Technology of Tomorrow</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Genetic Engineering</p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/10x.png"} alt="10x" className=''/>
                                </div>
                                <p></p>
                                <p className='text-2xl font-bold'>BCIs</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Virtual Reality</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Unlimited Power</p>
                                <p></p>
                                <p className='text-2xl font-bold'>Immortality</p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/fountain.jpg"} alt="fountain" className=''/>
                                </div>
                                <p></p>
                                <p className='text-3xl font-bold pt-3'>The End</p>
                                <p></p>
                                <p></p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/black.png"} alt="death" className=''/>
                                </div>
                                <p></p>
                                <p></p>
                                <div className='flex justify-center pt-4'>
                                    <a target="_blank" rel="noreferrer" href='https://notbyai.fyi/' className='hover:cursor-pointer hover:shadow-2xl'>
                                    <Image width={132} height={42} src={"/img/blog/human.png"} alt="human"/>
                                    </a>
                                </div>
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