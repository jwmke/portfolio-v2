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
                            <div className='text-4xl font-bold'>
                              My Favorite Locations to Read in Los Angeles
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                              <div className='flex justify-center'>
                                <Image width={466} height={466} src={"/img/blog/vibe.jpg"} alt="vibe" className=''/>
                              </div>
                              <p>While reading for vanity is something I deeply disagree with, one of the greatest benefits of books comes from when your mind starts to wander when reading them. A rigid individual might view this wandering as an annoyance that needs to be cut out. However, these brief episodes of distraction allow you to explore your imagination and reshape your inner perceptions and values.</p>
                              <p>Due to this, the environment in which you read can sometimes be just as important as your book&apos;s content (the ratio is probably closer to 90% content, 10% environment, but I digress.)</p>
                              <p>It&apos;s nearly been a year since I moved to Los Angeles, and there&apos;s an extreme lack of beautiful parks and tranquil spaces here. Therefore I set out to make this post, to highlight the favorite places I&apos;ve stumbled upon (both on my own and friend&apos;s recommendations) so that you too can enjoy them, assuming you live in LA.</p>
                              <p>Since I live in Hawthorne and am the one person in all of LA who doesn&apos;t own a car, most of these will be within biking distance of South Bay, with a few downtown from when I&apos;ll take the occasional weekend venture down there via metro.</p>
                            </div>
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