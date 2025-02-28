'use client';
import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";
import { GrCycle } from "react-icons/gr";
import { useState, useEffect } from "react";

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {
  // Array of all location data
  const locationData = [
    { name: "Blue Butterfly Patio", overall: "3/5", seating: "No", busy: "Sometimes", coffee: "Yes", bathroom: "Yes", beauty: "4/5", img: "butterfly.jpg", latlong: "33.920558949294325, -118.41627942411804" },
    { name: "The Museum of Contemporary Art Plaza", overall: "3/5", seating: "No", busy: "Sometimes", coffee: "No", bathroom: "Yes", beauty: "3/5", img: "moca.jpg", latlong: "34.05325928863944, -118.25045898651463" },
    { name: "California Plaza Park", overall: "2/5", seating: "No", busy: "Not Often", coffee: "No", bathroom: "No", beauty: "4/5", img: "cal.jpg", latlong: "34.051751414173225, -118.25102103241822" },
    { name: "Aquarius @ Union Bank Plaza", overall: "3/5", seating: "Yes", busy: "Almost Never", coffee: "No", bathroom: "No", beauty: "4/5", img: "ubp.jpg", latlong: "34.05344616344884, -118.25662926140906" },
    { name: "Site Memory Reflection", overall: "3/5", seating: "Yes", busy: "Almost Never", coffee: "No", bathroom: "No", beauty: "3/5", img: "reflection.png", latlong: "34.04941104258684, -118.2557127039912" },
    { name: "Maguire Gardens", overall: "2/5", seating: "No", busy: "Often", coffee: "No", bathroom: "Yes", beauty: "3/5", img: "mag.jpg", latlong: "34.050975805726004, -118.25602709418831" },
    { name: "Gloria Molina Grand Park", overall: "4/5", seating: "No", busy: "Sometimes", coffee: "Yes", bathroom: "Yes", beauty: "4/5", img: "gloria.jpg", latlong: "34.056340578054055, -118.24677133769866" },
    { name: "Benches in Little Tokyo", overall: "3/5", seating: "No", busy: "Often", coffee: "Yes", bathroom: "No", beauty: "4/5", img: "tokyo.jpg", latlong: "34.04889241791202, -118.24029932837401" },
    { name: "Panorama Café", overall: "3/5", seating: "No", busy: "Sometimes", coffee: "Yes", bathroom: "Yes", beauty: "3/5", img: "pan.jpg", latlong: "34.055837615053115, -118.2477438003257" },
    { name: "Public Patio in DTLA Equinox", overall: "4/5", seating: "Yes", busy: "Almost Never", coffee: "Yes", bathroom: "No", beauty: "4/5", img: "equinox.jpg", latlong: "34.05158161230905, -118.25498869779938" },
    { name: "The Last Bookstore", overall: "5/5", seating: "Yes", busy: "Often", coffee: "No", bathroom: "Yes", beauty: "5/5", img: "last.jpg", latlong: "34.0477128104877, -118.24989269392711" },
    { name: "Beach Cities Plaza", overall: "4/5", seating: "Yes", busy: "Almost Never", coffee: "No", bathroom: "No", beauty: "3/5", img: "plaza.jpg", latlong: "33.902429685568784, -118.38910455092012" },
    { name: "Lakers Complex", overall: "3/5", seating: "Yes", busy: "Sometimes", coffee: "Yes", bathroom: "No", beauty: "2/5", img: "lakers.png", latlong: "33.92598916728364, -118.3842892913526" },
    { name: "Coffee Connection Terrace", overall: "5/5", seating: "Yes", busy: "Often", coffee: "Yes", bathroom: "Yes", beauty: "5/5", img: "connect.jpg", latlong: "34.00312026717867, -118.4328734261084" },
    { name: "Manhattan Beach Library (2nd Story)", overall: "4/5", seating: "Yes", busy: "Often", coffee: "Nearby", bathroom: "Yes", beauty: "4/5", img: "mbl.jpg", latlong: "33.886847283745915, -118.41044054057366" },
    { name: "Barnes & Noble Café", overall: "2/5", seating: "No", busy: "Sometimes", coffee: "Yes", bathroom: "Yes", beauty: "1/5", img: "bnn.jpg", latlong: "33.90077253269358, -118.3805161576652" },
    { name: "Plaza El Segundo", overall: "2/5", seating: "No", busy: "Almost Never", coffee: "Nearby", bathroom: "No", beauty: "3/5", img: "elsegundo.jpeg", latlong: "33.904442710981456, -118.39574657651686" },
    { name: "The Point", overall: "2/5", seating: "Yes", busy: "Very Often", coffee: "Yes", bathroom: "No", beauty: "3/5", img: "point.jpg", latlong: "33.9027287385624, -118.3948010010989" },
    { name: "Corridor Flow", overall: "4/5", seating: "Yes", busy: "Often", coffee: "Yes", bathroom: "Yes", beauty: "3/5", img: "coridor.jpg", latlong: "33.80206955188868, -118.31982987137044" },
    { name: "Playa Vista Urban Strip", overall: "2/5", seating: "No", busy: "Very Often", coffee: "Yes", bathroom: "No", beauty: "4/5", img: "playa.png", latlong: "33.97531597700462, -118.41614845995426" },
    { name: "LMU Overlook", overall: "4/5", seating: "No", busy: "Sometimes", coffee: "Nearby", bathroom: "Yes", beauty: "5/5", img: "lmu.jpg", latlong: "33.9731047605077, -118.41579908256898" },
    { name: "Smoking Tiger Coffee Lab", overall: "3/5", seating: "No", busy: "Sometimes", coffee: "Yes", bathroom: "Yes", beauty: "2/5", img: "smoke.jpg", latlong: "33.89201697542193, -118.31007084176585" },
    { name: "Central Park", overall: "3/5", seating: "No", busy: "Sometimes", coffee: "No", bathroom: "Yes", beauty: "4/5", img: "central.jpg", latlong: "33.98191114717258, -118.40452192255496" },
    { name: "Bench Overlooking Manhattan Beach", overall: "2/5", seating: "No", busy: "Very Often", coffee: "No", bathroom: "No", beauty: "5/5", img: "beach.jpg", latlong: "33.88570458605538, -118.4124860326432" }
  ];

  // State to hold the shuffled locations
  const [shuffledLocations, setShuffledLocations] = useState([]);

  // Function to shuffle the locations array
  const shuffleLocations = () => {
    // Create a copy of the locationData array
    const shuffled = [...locationData];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setShuffledLocations(shuffled);
  };

  // Shuffle locations on initial render
  useEffect(() => {
    shuffleLocations();
  }, []);

  // Render a location card with meta information
  const renderLocationCard = (location) => {
    const { name, overall, seating, busy, coffee, bathroom, beauty, img, latlong } = location;
    const newlatlong = latlong.split(', ')
      .map(num => parseFloat(num).toFixed(3))
      .join(', ');
  
    // Data array for scores to easily map through in mobile view
    const scoreData = [
      { label: "Overall Rating", value: overall },
      { label: "Plush Seating", value: seating },
      { label: "Other People", value: busy },
      { label: "Coffee / Food", value: coffee },
      { label: "Free Bathrooms", value: bathroom },
      { label: "Beauty Score", value: beauty },
    ];
  
    return (
      <div key={name} className="mb-8">
        <div className="flex h-full items-center space-x-4 pb-4">
          <p className="text-base font-bold sm:font-normal sm:text-2xl">{name}</p>
          <div className="text-teal-500 text-xs sm:text-base flex space-x-1 pt-1.5">
            <p>{"// "}</p>
            <a href={"https://www.google.com/maps/search/?api=1&query="+latlong} target="_blank" rel="noreferrer" className='hover:text-teal-300 underline hover:cursor-nesw-resize'>
              {newlatlong}
            </a>
          </div>
        </div>
        {img && (
          <div className='flex justify-center pb-4'>
            <Image width={466} height={466} src={`/img/blog/${img}`} alt={img} className=''/>
          </div>
        )}
        
        {/* Mobile view (visible only on small screens) */}
        <div className="w-full overflow-hidden block sm:hidden">
          <div className="border border-white">
            {scoreData.map((item, index) => (
              <div key={index} className={`flex flex-row ${index !== 0 ? 'border-t border-white' : ''}`}>
                <div className="text-white text-xs font-medium text-center pt-3 px-2 w-1/3 border-r border-white">{item.label}</div>
                <div className="text-white text-base font-bold py-2 px-2 w-2/3 text-center">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tablet/Desktop view (hidden on small screens) */}
        <div className="w-full overflow-hidden hidden sm:block">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-0">
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
    );
  };

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
        <div className="w-full min-h-[100vh] flex justify-center p-2">
          <DiagonalCornerContainer className="w-[60rem]" size={32}>
            <div className={text.className}>
              <div className='mx-auto pt-8 md:px-20'>
                <div className='text-white text-left sm:mx-5 mb-8'>
                  <div className='text-4xl font-bold'>
                    Favorite Places to Read in Los Angeles
                  </div>
                  <div className='md:text-xl space-y-5 mt-8'>
                    <div className='flex justify-center'>
                      <Image width={466} height={466} src={"/img/blog/vibe.jpg"} alt="vibe" className=''/>
                    </div>
                    <p>{"One of the greatest benefits of books comes from the brief episodes when your mind starts to wander while reading. These moments of contemplation allow you to explore your own thoughts and reshape your inner perceptions and values."}</p>
                    <p>{"The physical environment where you read directly influences this experience — a peaceful setting can invite more meaningful wandering, while a busier environment might spark your imagination to explore directions it wouldn't have discovered in the quiet comfort of home."}</p>
                    <p>{"Though the content of your book carries 90+% of weight of your experience, the atmosphere around you can transform a good reading session into a transcendent one."}</p>
                    <p>{"It's nearly been a year since I moved to Los Angeles, and what began as disappointment in LA's sparse offering of tranquil spaces has evolved into a deep appreciation for the city's hidden sanctuaries. This post highlights some of the favorite places I've stumbled upon (both on my own and from friends' recommendations) so you can enjoy them too."}</p>
                    <p>{"I live in Hawthorne, and since I'm the one person in all of LA who doesn't own a car, half of these will be within biking distance of South Bay, and the other half will be downtown for the occasional weekend venture via metro."}</p>
                    
                    <p className='text-3xl font-bold'>Locations</p>
                    <div className="flex space-x-2 items-center">
                      <p>The ordering is random.</p>
                      <GrCycle 
                        className="text-teal-500 hover:text-teal-300 hover:cursor-pointer text-xl"
                        onClick={shuffleLocations}
                      />
                    </div>
                    
                    {/* Render all the shuffled locations */}
                    {shuffledLocations.map(location => renderLocationCard(location))}
                  </div>
                </div>
              </div>
            </div>
          </DiagonalCornerContainer>
        </div>
      </div>
    </div>
  );
};

export default Page;