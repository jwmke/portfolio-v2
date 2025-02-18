import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {
    const styledLink = (text, link) => (
      <a href={link} target="_blank" rel="noreferrer" className='hover:text-teal-300 underline hover:cursor-nesw-resize'>
          {text}
      </a>
    )
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
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                            {/* The Museum of Contemporary Art Plaza */}
                            {/* California Plaza */}
                            {/* Aquarius - Jerome Kirk Plaza */}
                            {/* Site Memory Reflection  */}
                            {/* Beach cities plaza */}
                            {/* Lakers complex */}
                            {/* Coffee Connection terrace */}
                            {/* Blue butterfly patio */}
                            {/* Last bookstore */}
                            {/* Manhattan beach library 2nd story */}
                            {/* Barns n noble coffee shop */}
                            {/* DTLA library garden */}
                            {/* Plaza El Segundo */}
                            {/* Turf lawn at the point */}
                            {/* Coridor flow */}
                            {/* Playa vista urban strip */}
                            {/* LMU campus overlook */}
                            {/* Tiger labs */}
                            {/* Central Park */}
                            {/* Bench overlooking manhattan beach */}
                            {/* Main park downtown top by fountain */}
                            {/* Side benches lil tokyo or weller court */}
                            {/* Rooftop cafe city courthouse */}
                            {/* Patio behind the DLTA equinox cafe */}
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