import localFont from "next/font/local";
import { Lato } from "next/font/google";
import ProjectBox from "./ProjectBox";
import VerticalNameTag from "./MobileVerticalNameTag";
import projectData from '../data/projectData';
import { MdRecycling } from "react-icons/md";
import { PiIntersectThreeLight } from "react-icons/pi";
import Image from "next/image";
import Scene from "./Scene";
import SecondCyberGrid from "./SecondCyberGrid";

const header = localFont({
    src: "../fonts/NicoMoji.ttf",
    subsets: ['latin'],
    variable: "--font-nico-moji",
    weight: "100 400 900",
});

const text = Lato({
    subsets: ['latin'],
    weight: ["100", "400"]
});

const TealGradient = () => {
    const tealColors = [
      'bg-white',
      'bg-teal-50',
      'bg-teal-100',
      'bg-teal-200',
      'bg-teal-300',
      'bg-teal-400',
      'bg-teal-500',
      'bg-teal-600',
      'bg-teal-700',
      'bg-teal-800',
      'bg-teal-900',
      'bg-teal-950',
    ];

    tealColors.reverse()
  
    return (
      <div className="flex-col flex mt-[3px]">
        {tealColors.map((color, index) => (
          <div
            key={index}
            className={`${color} w-[1.4rem] h-[5.01rem] min-[480px]:block hidden border border-white -ml-[1px]`}
          />
        ))}
        
      </div>
    );
  };

const MobileYesterdayBox = () => {
    return <div>
        <div className='flex w-[calc(100%)] relative'>
                <h1 className="text-white font-thin min-[480px]:text-[3.5rem] text-[calc(15.15vw-1rem)] leading-[3.5rem] w-full z-40">
                    <p className={header.className}>
                        Yesterday
                    </p>
                </h1>
            </div>
            <div className="w-full mt-6 flex"> 
                <TealGradient />
                <div className="flex w-full gap-4">
                    <div className="flex flex-col">
                        <ul className="space-y-0.5 min-[480px]:ml-4 min-[480px]:text-[.75rem] text-[calc(6.2vw-1rem)] text-white z-40">
                            <li className="flex items-center space-x-3">
                                {/* <p>&#8226;</p> */}
                                <p className={text.className}>Helped advance the future of mining @ Durin</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <p>&#8226;</p> */}
                                <p className={text.className}> Interned @ MSI Data & Rockwell Automation</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <p>&#8226;</p> */}
                                <p className={text.className}>Tutor @ Raider Center for Academic Success</p>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* <p>&#8226;</p> */}
                                <p className={text.className}>Comp Sci @ Milwaukee School of Engineering</p>
                            </li>
                        </ul>
                        <div className="text-white min-[480px]:text-[1.9rem] min-[480px]:ml-4 mt-4 text-[calc(9.9vw-1rem)]">
                            <p className={text.className}>
                                Contributions
                            </p>
                        </div>
                        <div className="flex min-[480px]:ml-4 mt-2 flex-col gap-y-2">
                            {projectData.map((data, idx) => (
                                <ProjectBox key={idx} mobile {...data} />
                            ))}
                        </div>
                        <div className="flex min-[480px]:space-x-4 space-x-[.15rem] mt-6 min-[480px]:-ml-6 mb-2">
                            <div className="mt-0.5 mr-1">
                                <Image src={"/img/ce.png"} width={50} height={30} alt="CE"/>
                            </div>
                            <MdRecycling className="text-white text-[2.5rem]"/>
                            <Image src={"/img/fire2.png"} width={30} height={40} alt="Fire"/> 
                            <PiIntersectThreeLight className="text-white text-[2.5rem]"/>
                            <Image src={"/img/trash.png"} width={36} height={30} alt="Trash"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-24 -mr-2">
                        <div className="w-[calc(24vw-1rem)] min-[480px]:w-24 flex justify-center h-32 z-50">
                            <Scene small/>
                        </div>
                        <div className="absolute h-24 w-24 min-[480px]:top-[29.5rem] top-[calc(110vw-1rem)] min-[480px]:right-[3.5rem] min-[410px]:right-[calc(13vw-1rem)] min-[430px]:right-[calc(16vw-1rem)] right-[calc(10vw-1rem)]">
                            <SecondCyberGrid small />
                        </div>
                        <div className="text-white min-[480px]:text-[1.9rem] text-[calc(9.9vw-1rem)] mt-2 z-40">
                            <p className={text.className}>
                                Recipes
                            </p>
                        </div>
                        <ul className="text-[.7rem] space-y-1 mt-1 text-white z-40">
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>Vanilla Matcha Latte</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>PX Orange Chicken</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>Easy Avocado Toast</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>Zeus&apos; Protein Shake</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>Garlic Fried Rice</p>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <p>&#8226;</p>
                                    <p className={text.className}>Perfect NYC Pizza</p>
                                </li>
                                <li className="flex items-center space-x-2 mt-2 text-teal-500">
                                    <p className={text.className}>All Recipes...</p>
                                </li>
                            </ul>
                            <div className="text-white min-[480px]:text-[1.9rem] text-[calc(9.9vw-1rem)] mt-3">
                                <p className={text.className}>
                                    Pictures
                                </p>
                            </div>
                            <ul className="text-[.7rem] mt-1 text-white">
                                <li className="flex items-center space-x-2">
                                <p>&#8226;</p>

                                    <p className={text.className}>Italia en Autunno</p>
                                </li>
                                <li className="flex items-center space-x-2 mt-2 text-teal-500">
                                    <p className={text.className}>More coming soon...</p>
                                </li>
                            </ul>
                    </div>
                    
                </div>
            </div>
            <VerticalNameTag />
    </div>
}

export default MobileYesterdayBox;