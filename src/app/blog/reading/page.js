import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {
    const meta = (name, overall, seating, busy, coffee, bathroom, beauty, img, latlong) => {
      latlong = latlong.split(', ')
      .map(num => parseFloat(num).toFixed(3))
      .join(', ');

      return <div>
        <div className="flex h-full items-center space-x-4 pb-4">
          <p className="text-base font-bold sm:font-normal sm:text-2xl">{name}</p>
          <div className="text-teal-500 text-xs sm:text-base flex space-x-1 pt-1.5">
            <p>// </p>
            <a href={"https://www.google.com/maps/search/?api=1&query="+latlong} target="_blank" rel="noreferrer" className='hover:text-teal-300 underline hover:cursor-nesw-resize'>
              {latlong}
            </a>
          </div>
        </div>
        {img && <div className='flex justify-center pb-4'>
          <Image width={466} height={466} src={`/img/blog/${img}`} alt={img} className=''/>
        </div>}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-0">
            
            {/* Beauty Score */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Beauty Score</div>
              <div className="text-white text-base font-bold mt-2">{beauty}</div>
            </div>

            {/* Plush Seating */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Plush Seating</div>
              <div className="text-white text-base font-bold mt-2">{seating}</div>
            </div>
            
            {/* Other People */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Other People</div>
              <div className="text-white text-base font-bold mt-2">{busy}</div>
            </div>
            
            {/* Coffee / Food */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Coffee / Food</div>
              <div className="text-white text-base font-bold mt-2">{coffee}</div>
            </div>
            
            {/* Free Bathrooms */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Free Bathrooms</div>
              <div className="text-white text-base font-bold mt-2">{bathroom}</div>
            </div>
            
            
            {/* Overall Rating */}
            <div className="flex flex-col border border-white py-2 text-center">
              <div className="text-white text-xs font-medium pb-2 border-b border-white">Overall Rating</div>
              <div className="text-white text-base font-bold mt-2">{overall}</div>
            </div>
          </div>
        </div>
      </div>
    }
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
                              Favorite Places to Read at in Los Angeles
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                              <div className='flex justify-center'>
                                <Image width={466} height={466} src={"/img/blog/vibe.jpg"} alt="vibe" className=''/>
                              </div>
                              <p>One of the greatest benefits of books comes from when your mind starts to wander when reading. These brief episodes of distraction allow you to explore your own mind and reshape your inner perceptions and values.</p>
                              <p>Due to this, the environment in which you read can sometimes be just as important as your book&apos;s content (the ratio is probably closer to 90% content, 10% environment, but I digress.)</p>
                              <p>It&apos;s nearly been a year since I moved to Los Angeles. When I first moved, I thought there&apos;s an extreme lack of beautiful parks and tranquil spaces here.</p>
                              <p>Therefore, I set out to find as many public reading spots as I could, and this post will highlight the favorite places I&apos;ve stumbled upon (both on my own and through friend&apos;s recommendations) so that you too can enjoy them.</p>
                              <p>I live in Hawthorne, and since I&apos;m the one person in all of LA who doesn&apos;t own a car, half of these will be within biking distance of South Bay, and the other half will be downtown for the occasional weekend venture via metro.</p>
                              
                              {/* name, overall, plush seating, other people, coffee/food, bathroom, beauty, img, latlong */}

                              <p className='text-3xl font-bold'>Locations</p>
                              {/* Blue butterfly patio */}
                              {meta("Blue Butterfly Patio", "3/5", "No", "Sometimes", "Yes", "Yes", "4/5", "butterfly.jpg", "33.920558949294325, -118.41627942411804")}
                              {/* The Museum of Contemporary Art Plaza */}
                              {meta("The Museum of Contemporary Art Plaza", "3/5", "No", "Sometimes", "No", "Yes", "3/5", "", "34.05325928863944, -118.25045898651463")}
                              {/* California Plaza */}
                              {meta("California Plaza Park", "2/5", "No", "Not Often", "No", "No", "4/5", "", "34.051751414173225, -118.25102103241822")}
                              {/* Aquarius - Jerome Kirk Plaza */}
                              {meta("Aquarius @ Union Bank Plaza", "2/5", "No", "Almost Never", "No", "No", "4/5", "", "34.05344616344884, -118.25662926140906")}
                              {/* Site Memory Reflection  */}
                              {meta("Site Memory Reflection", "3/5", "Yes", "Almost Never", "No", "No", "3/5", "", "34.04941104258684, -118.2557127039912")}
                              {/* DTLA library garden */}
                              {meta("Maguire Gardens", "2/5", "No", "Often", "No", "Yes", "3/5", "", "34.050975805726004, -118.25602709418831")}
                              {/* Main park downtown top by fountain */}
                              {meta("Gloria Molina Grand Park", "3/5", "", "", "", "", "", "", "")}
                              {/* Side benches lil tokyo or weller court */}
                              {meta("Benches in Little Tokyo", "3/5", "", "", "", "", "", "", "")}
                              {/* Rooftop cafe city courthouse */}
                              {meta("Panorama Café", "3/5", "", "", "", "", "", "", "")}
                              {/* Patio behind the DLTA equinox cafe */}
                              {meta("Public Patio in DTLA Equinox", "4/5", "", "", "", "", "", "", "34.05158161230905, -118.25498869779938")}
                              {/* Last bookstore */}
                              {meta("The Last Bookstore", "5/5", "Yes", "Often", "No", "Yes", "5/5", "", "34.0477128104877, -118.24989269392711")}
                              {/* Beach cities plaza */}
                              {meta("Beach Cities Plaza", "4/5", "", "", "", "", "", "", "33.902429685568784, -118.38910455092012")}
                              {/* Lakers complex */}
                              {meta("Lakers Complex", "4/5", "", "", "", "", "", "", "33.92598916728364, -118.3842892913526")}
                              {/* Coffee Connection terrace */}
                              {meta("Coffee Connection Terrace", "4/5", "", "", "", "", "", "", "34.00312026717867, -118.4328734261084")}
                              {/* Manhattan beach library 2nd story */}
                              {meta("Manhattan Beach Library (2nd Story)", "4/5", "", "", "", "", "", "", "33.886847283745915, -118.41044054057366")}
                              {/* Barns n noble coffee shop */}
                              {meta("Barnes & Noble Café", "3/5", "", "", "", "", "", "", "")}
                              {/* Plaza El Segundo */}
                              {meta("Plaza El Segundo", "2/5", "", "", "", "", "", "", "33.904442710981456, -118.39574657651686")}
                              {/* Turf lawn at the point */}
                              {meta("The Point", "2/5", "", "", "", "", "", "", "33.9027287385624, -118.3948010010989")}
                              {/* Coridor flow */}
                              {meta("Corridor Flow", "4/5", "Yes", "", "", "", "", "", "33.80206955188868, -118.31982987137044")}
                              {/* Playa vista urban strip */}
                              {meta("Playa Vista Urban Strip", "2/5", "", "", "", "", "", "playa.png", "33.97531597700462, -118.41614845995426")}
                              {/* LMU campus overlook */}
                              {meta("LMU Overlook", "4/5", "", "", "", "", "", "", "33.9731047605077, -118.41579908256898")}
                              {/* Tiger labs */}
                              {meta("Smoking Tiger Coffee Lab", "3/5", "", "", "", "", "", "", "33.89201697542193, -118.31007084176585")}
                              {/* Central Park */}
                              {meta("Central Park", "3/5", "", "", "", "", "4/5", "", "33.98191114717258, -118.40452192255496")}
                              {/* Bench overlooking manhattan beach */}
                              {meta("Bench Overlooking Manhattan Beach", "2/5", "", "", "", "", "5/5", "", "33.88570458605538, -118.4124860326432")}
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