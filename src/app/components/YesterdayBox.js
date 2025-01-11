import localFont from "next/font/local";
import { Lato } from "next/font/google";
import ProjectBox from "./ProjectBox";
import ImageBox from "./ImageBox";
import Image from "next/image";
import projectData from '../data/projectData';
import Link from "next/link";

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
      <div className="flex-row absolute top-[11.75rem] 2xl:ml-0 min-[1400px]:ml-10 ml-0 min-[1700px]:flex 2xl:hidden min-[1250px]:flex min-[1100px]:hidden min-[1000px]:flex hidden">
        {/* <div
            style={{
                backgroundColor: 'rgb(31, 35, 35)'
              }}
            className="w-[2rem] h-4"
        /> */}
        {tealColors.map((color, index) => (
          <div
            key={index}
            className={`${color} w-[1.4rem] h-[1.5rem] border border-white -ml-[1px]`}
          />
        ))}
        
      </div>
    );
  };

const YesterdayBox = () => {
    return <div className="w-full h-[31.75rem] relative min-[1400px]:-left-[calc(31vw-26rem)] min-[1700px]:ml-20 ml-1 ">
        <h1 className="text-white font-thin absolute min-[1250px]:text-[4.5rem] min-[1100px]:text-[3.25rem] text-[3.25rem] min-[900px]:text-[4.5rem] min-[1400px]:text-[3.25rem] min-[1700px]:ml-0 min-[1450px]:ml-6 min-[1400px]:ml-2 min-[1700px]:text-[4.5rem] flex leading-[5.5rem] w-[115%] gap-4">
            <p className={header.className}>
                Yesterday
            </p>
            <svg viewBox="0 0 200 100" className="h-24 min-[1900px]:block hidden ">
                {[0, 90, 180, 270].map((angle) => (
                <path
                    key={`curve-${angle}`}
                    d="M 50 30 Q 50 50, 35 50 L 65 50 Q 50 50, 50 30"
                    fill="white"
                    transform={`rotate(${angle}, 50, 50)`}
                />
                ))}

                {[0].map((angle) => (
                <line
                    key={`spike-${angle}`}
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="85"
                    stroke="white"
                    strokeWidth="1"
                    transform={`rotate(${angle}, 50, 50)`}
                />
                ))}

                <line
                    key="spike-extended"
                    x1="50"
                    y1="-120"
                    x2="50"
                    y2="85"
                    stroke="white"
                    strokeWidth="1"
                    transform="rotate(90, 50, 50)"
                />

                <circle 
                cx="50" 
                cy="50" 
                r="3" 
                fill="white" 
                />
            </svg>
        </h1>
        <svg viewBox="0 0 200 100" className="h-24 hidden min-[750px]:block  min-[1100px]:hidden absolute min-[900px]:left-[31.25rem] left-[22.75rem]">
            {[0, 90, 180, 270].map((angle) => (
            <path
                key={`curve-${angle}`}
                d="M 50 30 Q 50 50, 35 50 L 65 50 Q 50 50, 50 30"
                fill="white"
                transform={`rotate(${angle}, 50, 50)`}
            />
            ))}

            {[0].map((angle) => (
            <line
                key={`spike-${angle}`}
                x1="50"
                y1="15"
                x2="50"
                y2="85"
                stroke="white"
                strokeWidth="1"
                transform={`rotate(${angle}, 50, 50)`}
            />
            ))}

            <circle 
            cx="50" 
            cy="50" 
            r="3" 
            fill="white" 
            />
        </svg>
        <div className="min-[1100px]:hidden hidden min-[750px]:block relative top-[calc(3rem-1px)] min-[900px]:left-[32rem] left-[23.5rem]">
            <div className="h-[1px] min-[900px]:w-[calc(220%-29rem)] w-[calc(250%-27rem)] bg-white"/>
        </div>
        {/* <TealGradient /> */}
        <div className="">
            <ul className="space-y-0.5 min-[1700px]:w-80 2xl:w-[32%] min-[1250px]:w-auto min-[1100px]:w-40 w-40 min-[1000px]:w-auto text-xs text-white mt-[6.25rem] min-[1700px]:ml-0 min-[1400px]:ml-10 min-[1250px]:ml-0 min-[1100px]:-ml-6 -ml-6 min-[1000px]:ml-0">
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Helped advance the future of mining @ Durin</p>
                </li>
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}> Interned @ MSI Data & Rockwell Automation</p>
                </li>
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Tutor @ Raider Center for Academic Success</p>
                </li>
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Comp Sci @ Milwaukee School of Engineering</p>
                </li>
            </ul>
        </div>
        <TealGradient />
        <div className="absolute min-[1900px]:left-[calc(40vw-31rem)] min-[1700px]:left-[calc(100vw-89rem)] min-[1400px]:left-[calc(100vw-84rem)] min-[1100px]:left-[calc(90vw-52rem)] min-[850px]:left-[calc(100vw-44.25rem)] left-[calc(100vw-31rem)] min-[1800px]:w-[27rem]  min-[1400px]:w-[14rem] min-[850px]:w-[27rem] w-[14rem] top-[6.45rem] grid min-[1900px]:grid-cols-2 min-[850px]:grid-cols-2 grid-cols-1 min-[1100px]:grid-cols-1 2xl:h-[25.35rem] min-[1400px]:h-0 h-[25.35rem] overflow-hidden gap-x-2 gap-y-2">
            {projectData.map((data, idx) => (
                <ProjectBox key={idx} {...data} />
            ))}
        </div>
        <div className="border-white min-[1700px]:ml-0 ml-10 w-[19.25rem] min-[1300px]:h-[17rem] h-[14rem] absolute min-[1100px]:bottom-10 min-[1000px]:bottom-[3.5rem] bottom-10 min-[1300px]:bottom-0 min-[1300px]:-left-[3.25rem] -left-[2.75rem] text-white">
            <div className="flex h-full w-full justify-between min-[1700px]:flex-row 2xl:flex-col min-[1300px]:flex-row flex-col">
                <div className="flex flex-col">
                    <div className="font-bold">
                        <p className={text.className}>
                            Recipes
                        </p>
                    </div>
                    <ul className="text-xs mt-2">
                        <Link className="hover:text-teal-300" href="/blog/matcha">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>Vanilla Matcha Latte</p>
                        </li>
                        </Link>
                        <Link className="hover:text-teal-300" href="/blog/panda">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>PX Orange Chicken</p>
                        </li>
                        </Link>
                        <Link className="hover:text-teal-300" href="/blog/avocado">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>Simple Avocado Toast</p>
                         </li>
                         </Link>
                         <Link className="hover:text-teal-300" href="/blog/protein">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>Zeus&apos; Protein Shake</p>
                        </li>
                        </Link>
                        <Link className="hover:text-teal-300" href="/blog/rice">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>Garlic Fried Rice</p>
                        </li>
                        </Link>
                        <Link className="hover:text-teal-300" href="/blog/pizza">
                        <li className="flex items-center space-x-2">
                            <p>&#8226;</p>
                            <p className={text.className}>Perfect NYC Pizza</p>
                        </li>
                        </Link>
                        <Link className="hover:text-teal-300 text-teal-500" href="/blog">
                        <li className="flex items-center space-x-2 mt-1 ">
                            <p className={text.className}>All Recipes...</p>
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-col min-[1700px]:items-end items-start">
                    <div className="font-bold">
                        <p className={text.className}>
                            Pictures
                        </p>
                    </div>
                    <ul className="text-xs mt-2">
                        <Link className="hover:text-teal-300" href="/blog/italy">
                            <li className="flex items-center space-x-2 justify-end">
                                <p className={text.className}>Italia en Autunno</p>
                                <p>&#8226;</p>
                            </li>
                        </Link>
                        <li className="flex items-center space-x-2 justify-end mt-1 text-teal-500">
                            <p className={text.className}>More coming soon...</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <ImageBox className="z-50 absolute bottom-0"> */}
            <Image src="/img/sound.png" alt="Landscape" width={310} height={200} className="z-50 absolute bottom-0 min-[1700px]:block min-[1400px]:hidden min-[1400px]:mb-0 mb-3 min-[1300px]:block hidden 2xl:hidden min-[1450px]:block"/>
            {/* </ImageBox> */}
        </div>
    </div>
}

export default YesterdayBox;