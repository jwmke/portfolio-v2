import blogRecents from '../data/blogRecents'
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import Link from 'next/link';
import PolyCornerClip from './MobilePolyCorner';
import CornerClip from './MobileCorner';
import Image from 'next/image';

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

const CORNER_SIZE = 70;

const MobileTodayBox = () => {
    return <div>
        <div className='flex w-[calc(100%rem)]'>
            <h1 className="text-white font-thin min-[480px]:text-[3.5rem] text-[calc(15.15vw-1rem)] leading-[3.5rem]">
                <p className={header.className}>
                    Today
                </p>
            </h1>
            <svg viewBox="0 0 100 100" className="h-24 absolute top-2 min-[480px]:left-[16rem] left-[53vw] hidden min-[350px]:block">
                {[0, 90, 180, 270].map((angle) => (
                <path key={`curve-${angle}`} d="M 50 30 Q 50 50, 35 50 L 65 50 Q 50 50, 50 30" fill="white" transform={`rotate(${angle}, 50, 50)`} />
                ))}

                {[0].map((angle) => (
                <line key={`spike-${angle}`} x1="50" y1="15" x2="50" y2="85" stroke="white" strokeWidth="1" transform={`rotate(${angle}, 50, 50)`} />
                ))}

                <circle cx="50"  cy="50"  r="3" fill="white" />
            </svg>
            <div className="w-full mt-8 ml-6 hidden min-[350px]:block">
                <div className="h-[1px] bg-white"/>
            </div>
        </div>
        <div className="w-full mt-7 relative">
        <div className="absolute">
            <PolyCornerClip size={CORNER_SIZE}/>
        </div>
        <ul className="space-y-0.5 min-[480px]:text-[.75rem] text-[calc(6.2vw-1rem)] text-white ml-[6.5rem] pl-[2vw] min-[480px]:px-[4.7vw]">
                <li className="flex items-center space-x-3">
                    {/* <p>&#8226;</p> */}
                    <p className={text.className}>Reading & writing about anything interesting</p>
                </li>
                <li className="flex items-center space-x-3 -ml-5">
                    {/* <p>&#8226;</p> */}
                    <p className={text.className}>Mentoring the next generation w/ team 4201</p>
                </li>
                <li className="flex items-center space-x-3 -ml-10">
                    {/* <p>&#8226;</p> */}
                    <p className={text.className}>Learning & building neurotech / BCIs in public</p>
                </li>
                <li className="flex items-center space-x-3 min-[1800px]:hidden -ml-[calc(1.25rem*3)]">
                    {/* <p>&#8226;</p> */}
                    <p className={text.className}>Sparring aristocrats at the Gundo Book Club</p>
                </li>
                <li className="flex items-center space-x-3 min-[1800px]:hidden -ml-[calc(1.25rem*4)]">
                {/* <p>&#8226;</p> */}
                    <p className={text.className}>Practicing the dying art of street photography</p>
                </li>
                <li className="flex items-center space-x-3 min-[1800px]:hidden -ml-[calc(1.25rem*5)]">
                {/* <p>&#8226;</p> */}
                    <p className={text.className}>Running trails, climbing rocks & weight training</p>
                </li>
            </ul>
            <div className="absolute bottom-0 right-0">
                <CornerClip size={CORNER_SIZE}/>
            </div>
        </div>
        <div className='w-full mt-6 mb-4'>
            <div className="min-[480px]:h-24 h-[calc(24vw-1rem)] relative flex space-x-3 w-full">
                <div className="text-white -rotate-90 absolute top-[1.55rem] min-[480px]:-left-10 -left-[calc(10vw-1rem)] flex space-x-2 min-[480px]:text-[2rem] text-[calc(10vw-1rem)]">
                    <p className={text.className}>
                        Recent
                    </p>
                </div>
                <div className="z-40 pr-8 left-6 min-[480px]:h-24 h-[calc(24vw-1rem)] w-[92%] absolute text-white grid grid-cols-3 overflow-hidden ">
                {blogRecents.map((blogInfo, idx) => (
                    <Link 
                    key={idx} 
                    href={blogInfo.route}
                    className="min-[480px]:h-24 min-[480px]:w-24 h-[calc(24vw-1rem)] w-[calc(24vw-1rem)] border-white border relative overflow-hidden group"
                    >
                    <div className="absolute inset-0">
                        <div className="absolute inset-0" style={{
                        clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                        }}>
                        <Image
                            src={blogInfo.path}
                            alt={blogInfo.title}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                        <div className="absolute inset-0 bg-teal-600 bg-opacity-40 transition-opacity duration-75 group-hover:opacity-0" />
                        </div>
                    </div>

                    <div className="absolute inset-0">
                        <div 
                        className="absolute h-[1px] w-[141.4%] bg-white" 
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            transformOrigin: 'center'
                        }}
                        />
                    </div>

                    <div className="absolute inset-0" style={{
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
                    }}>
                        <div className="absolute bottom-[2rem] -left-1.5 min-[480px]:text-[.7rem] text-[calc(6vw-1rem)] font-thin max-w-[90%] -rotate-90">
                        <p className={text.className}>
                            {blogInfo.date}
                        </p>
                        </div>
                        <div className="absolute bottom-1 left-1 min-[480px]:text-[.65rem] text-[calc(6vw-1rem)] font-bold max-w-[90%]">
                        <p className={text.className}>
                            {blogInfo.title}
                        </p>
                        </div>
                    </div>
                    </Link>
                ))}
                    <div className="text-white rotate-90 absolute bottom-[1.5rem] min-[480px]:-right-8 -right-[calc(10vw-1rem)] flex space-x-2 min-[480px]:text-[1.9rem] text-[calc(9.9vw-1rem)]">
                        <p className={text.className}>
                            Corpus
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default MobileTodayBox;
