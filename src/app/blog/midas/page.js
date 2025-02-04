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
                                <p className='text-3xl font-bold pt-3'>Technology of Today</p>
                                <p>modern examples</p>
                                <p className='text-2xl font-bold'>Surveillance</p>
                                <p className='text-2xl font-bold'>Defense</p>
                                <p className='text-2xl font-bold'>Cars</p>
                                <p className='text-2xl font-bold'>Medicine</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/cars.jpg"} alt="cars" className=''/>
                                </div>
                                <p>backwards is impossible</p>
                                <p className='text-3xl font-bold pt-3'>Lenses</p>
                                <p className='text-2xl font-bold'>Techno-Optimism</p>
                                <p>Andreessen</p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/midas.jpg"} alt="midas" className=''/>
                                </div>
                                <p className='text-2xl font-bold'>Techno-Skepticism</p>
                                <p>Kaczynski</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/shrooms.png"} alt="shrooms" className=''/>
                                </div>
                                <p className='text-2xl font-bold'>Techno-Traditionalism</p>
                                <p>Evola</p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/tiger.jpg"} alt="tiger" className=''/>
                                </div>
                                <p className='text-3xl font-bold pt-3'>Technology of Tomorrow</p>
                                
                                <p className='text-2xl font-bold'>Genetic Engineering</p>
                                <p className='text-2xl font-bold'>BCIs</p>
                                <p className='text-2xl font-bold'>Virtual Reality</p>
                                <p className='text-2xl font-bold'>Unlimited Power</p>
                                <p className='text-2xl font-bold'>Immortality</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/fountain.jpg"} alt="fountain" className=''/>
                                </div>
                                <p className='text-3xl font-bold pt-3'>The End</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/black.png"} alt="death" className=''/>
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