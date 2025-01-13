import { Lato, Vollkorn_SC } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from 'next/link';
import PolyCornerClip from "./BulletCorner";
import DiagonalPolygon from "./DiagonalPolygon";
import ParallelogramImage from "./ParallelogramImage";
import blogRecents from '../data/blogRecents'

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

const TodayBox = () => {
    return <div className="w-[120%] mt-7 relative h-[19.5rem]">
        <h1 className="text-white font-thin min-[1400px]:text-[3.25rem] min-[1250px]:text-[4.5rem] min-[1100px]:text-[3.25rem] text-[3.25rem] min-[900px]:text-[4.5rem] ml-12 min-[1700px]:ml-0 min-[1700px]:text-[4.5rem] min-[1650px]:leading-[5.5rem] min-[1400px]:leading-[4.5rem] leading-[1rem] absolute left-0 min-[1400px]:left-[calc(52.5vw-40rem)] 2xl:left-[calc(60vw-46.5rem)] mt-1">
            <p className={header.className}>
                Today
            </p>
        </h1>
        <svg viewBox="0 0 200 100" className="h-24 min-[1400px]:hidden min-[900px]:hidden min-[600px]:block hidden min-[1100px]:block min-[900px]:relative absolute -top-8 min-[1250px]:left-[22rem] left-[16.5rem]">
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
        <div className="min-[1400px]:hidden min-[600px]:block hidden min-[900px]:relative absolute min-[900px]:-top-[calc(5rem+1px)] top-[calc(1rem-1px)] min-[1250px]:left-[22.75rem] left-[17.25rem]">
            <div className="h-[1px] min-[1250px]:w-[calc(200%-40rem)] min-[900px]:w-[calc(200%-36rem)] w-[10rem] bg-white"/>
        </div>
        <div className="text-[.55rem] text-teal-700 mt-1.5 leading-4 min-[1700px]:ml-6 ml-7 min-[1900px]:ml-4 max-h-20 overflow-hidden min-[1650px]:block hidden 2xl:max-w-[calc(52.5vw-39.5rem)]">
            <p>{"(g=Array(20).fill().map(_=>Array(20).fill().map(_=>Math.random()<.3)))&&setInterval(_=>{"}</p>
            <p>{"g=g.map((r,i)=>r.map((c,j)=>{let n=[-1,0,1].flatMap(x=>[-1,0,1].map(y=>[i+x,j+y]))"}</p>
            <p>{".filter(([x,y])=>x>=0&&x<20&&y>=0&&y<20&&!(x==i&&y==j)).reduce((s,[x,y])=>s+(g[x][y]?1:0),0);return n==3||(c&&n==2)}));"}</p>
            <p>{"console.clear();console.log(g.map(r=>r.map(c=>c?'O':' ').join``).join`\\n`)},200)"}</p>
        </div>
        <div className="absolute left-[1.75rem] top-[5.25rem] min-[1400px]:hidden">
            <PolyCornerClip />
        </div>
        <div className="absolute min-[1800px]:top-[8rem] min-[1650px]:top-[6rem] min-[1400px]:top-[5.5rem] top-[5rem] min-[750px]:w-full w-[150%] text-white 2xl:max-w-[calc(52.5vw-31.5rem)] ml-[5.5rem] left-10 min-[1400px]:left-[3.75rem] min-[1700px]:left-10 min-[1800px]:left-0 2xl:ml-3 text-xs">
            <ul className="space-y-0.5">
            <li className="flex items-center space-x-4">
                <p>&#8226;</p>
                <p className={text.className}>
                <a href="https://www.goodreads.com/jwmke" className="underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">Reading</a>
                {' & '}
                <Link href="/blog" className="underline hover:text-teal-300">writing</Link>
                {' about anything interesting'}
                </p>
            </li>
            <li className="flex items-center space-x-4 -ml-5">
                <p>&#8226;</p>
                <p className={text.className}>
                Mentoring the next generation w/ {' '}
                <a href="https://team4201.org/" className="underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">Team 4201</a>
                </p>
            </li>
            <li className="flex items-center space-x-4 -ml-10">
                <p>&#8226;</p>
                <p className={text.className}>
                Learning & building {' '}
                <a href="https://bcibin.com" className="underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">neurotech / BCIs</a>
                {' in public'}
                </p>
            </li>
            <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*3)]">
                <p>&#8226;</p>
                <p className={text.className}>
                Sparring aristocrats at the {' '}
                <a href="https://x.com/gundobookclub" className="underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">Gundo Book Club</a>
                </p>
            </li>
            <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*4)]">
                <p>&#8226;</p>
                <p className={text.className}>
                Practicing the dying art of {' '}
                <Link href="/pics" className="underline hover:text-teal-300">street photography</Link>
                </p>
            </li>
            <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*5)]">
                <p>&#8226;</p>
                <p className={text.className}>
                Running trails, climbing rocks & weight training
                </p>
            </li>
            </ul>
        </div>
        <div className="w-[27rem] relative -top-[2rem] left-[25.5rem] min-[1100px]:hidden">
            <DiagonalPolygon size={160} className="min-[1000px]:block hidden">
                <div className="h-[12.5rem] relative text-teal-400 text-[.59rem] leading-[.8rem]">
                    <div className="border border-teal-400 w-[5.5rem] h-8 m-1 px-1 p-[2px] absolute bottom-0">
                        <p className={text.className}>
                            Headquartered in Los Angeles
                        </p>
                    </div>
                    <div className="absolute z-50 ml-[7.5rem] ">
                        <Image className="mt-3.5" src={'/img/ggreen.png'} height={130} width={170} alt="Globe"/>
                    </div>
                    <div className="border border-teal-400 w-[4.5rem] h-8 m-1 px-1 p-[2px] absolute right-0">
                        <p className={text.className}>
                            Midwestern Expatriate
                        </p>
                    </div>
                    <div className="bg-teal-400 absolute right-[4.5rem] top-[3rem] -rotate-12 w-32 h-[1px]"/>
                    <div className="bg-teal-400 absolute left-[5.15rem] bottom-[3.8rem] -rotate-[40deg] w-20 h-[1px]"/>
                    <div className="text-white font-thin absolute -right-[1.75rem] text-sm bottom-[4.25rem] tracking-[.4rem] -rotate-45">
                        <p className={header.className}>
                            Pax Americana
                        </p>
                    </div>
                </div>
            </DiagonalPolygon>
        </div>
        <div className="w-[24rem] relative top-[1.5rem] left-[23rem] min-[1000px]:hidden min-[925px]:block hidden">
            <DiagonalPolygon size={110} className="min-[1000px]:hidden min-[925px]:block hidden">
                <div className="h-[9rem] relative text-teal-400 text-[.59rem] leading-[.8rem]">
                    <div className="border border-teal-400 w-[5.5rem] h-8 m-1 px-1 p-[2px] absolute bottom-0">
                        <p className={text.className}>
                            Headquartered in Los Angeles
                        </p>
                    </div>
                    <div className="absolute z-50 ml-[7.5rem] ">
                        <Image className="mt-1.5" src={'/img/ggreen.png'} height={130} width={130} alt="Globe"/>
                    </div>
                    <div className="border border-teal-400 w-[4.5rem] h-8 m-1 px-1 p-[2px] absolute right-0">
                        <p className={text.className}>
                            Midwestern Expatriate
                        </p>
                    </div>
                    <div className="bg-teal-400 absolute right-[4.5rem] top-[3rem] -rotate-12 w-32 h-[1px]"/>
                    <div className="bg-teal-400 absolute left-[5.15rem] bottom-[3.8rem] -rotate-[40deg] w-20 h-[1px]"/>
                    <div className="text-white font-thin absolute -right-2 text-sm bottom-[2.5rem] -rotate-45">
                        <p className={header.className}>
                            Pax Americana
                        </p>
                    </div>
                </div>
            </DiagonalPolygon>
        </div>
        <ParallelogramImage 
            src="/img/landscape.jpg"
            alt="Landscape"
            className="min-[925px]:hidden min-[700px]:block hidden -bottom-[calc(1rem-1px)] left-[19rem] w-[calc(225%-15rem)] absolute"
            size={180}
        />
        <div className="w-[10vw] text-nowrap h-20 text-xs top-[8.05rem] absolute text-white left-[calc(55.5vw-47rem)] min-[1850px]:left-[calc(57.5vw-50.5rem)] min-[1800px]:flex hidden">
            <ul className="space-y-0.5">
                <li className="flex items-center space-x-4 justify-end">
                    <p className={text.className}>
                    Sparring aristocrats at the {' '}
                    <a href="https://x.com/gundobookclub" className="underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">Gundo Book Club</a>
                    </p>
                    <p>&#8226;</p>
                </li>
                <li className="flex items-center space-x-4 justify-end mr-5">
                    <p className={text.className}>
                    Practicing the dying art of {' '}
                    <Link href="/gallery" className="underline hover:text-teal-300">street photography</Link>
                    </p>
                    <p>&#8226;</p>
                </li>
                <li className="flex items-center space-x-4 justify-end mr-10">
                    <p className={text.className}>
                    Running trails, climbing rocks & weight training
                    </p>
                    <p>&#8226;</p>

                </li>
            </ul>
            {/* <div className="justify-between flex">
                <div className="w-1/2 border-white border-r px-3 pb-3 pt-2.5 flex justify-end border-b">
                    <p className={text.className}>
                        Running Trails
                    </p>
                </div>
                <div className="w-1/2 border-white  px-3 pb-3 pt-2.5 border-b">
                    <p className={text.className}>
                        Climbing Rocks
                    </p>
                </div>
            </div>
            <div className="justify-between flex">
                <div className="w-1/2 border-white border-r px-3 pb-2 pt-3 flex justify-end space-x-1">
                    <p className={text.className}>
                        Studying 
                    </p>
                    <p className="text-[.60rem] pt-0.5">
                        한국인
                    </p>
                </div>
                <div className="w-1/2 border-white px-3 pb-2 pt-3">
                    <p className={text.className}>
                        Taking Pictures
                    </p>
                </div>
            </div> */}
        </div>
        
        <div className="w-[90%] h-24 absolute -bottom-0 flex space-x-3 min-[1400px]:-left-[calc(31vw-26rem)] left-0 min-[1700px]:ml-20 min-[1450px]:ml-6 ml-2">
            <div className="text-white -rotate-90 absolute bottom-[1.45rem] -left-8 flex space-x-2 text-[2rem]">
                <p className={text.className}>
                    Recent
                </p>
            </div>
            <div className="z-40 pr-8 min-[1900px]:w-[102%] min-[1800px]:w-[90%] min-[1600px]:w-[80%] min-[1400px]:w-[70%] min-[1350px]:w-[130%] min-[1225px]:w-[110%] min-[1100px]:w-[95%] min-[950px]:w-[210%] min-[850px]:w-[200%] min-[750px]:w-[190%] w-[170%] h-24 left-8 absolute text-white grid min-[750px]:grid-cols-4 grid-cols-3 min-[850px]:grid-cols-5 min-[950px]:grid-cols-6 min-[1100px]:grid-cols-3 min-[1225px]:grid-cols-4 min-[1350px]:grid-cols-5 min-[1400px]:grid-cols-3 min-[1600px]:grid-cols-4 min-[1800px]:grid-cols-5 min-[1900px]:grid-cols-6 overflow-hidden">
            {blogRecents.map((blogInfo, idx) => (
    <Link 
      key={idx} 
      href={blogInfo.route}
      target={blogInfo.external ? "_blank" : ""}
      referrerPolicy="no-referrer"
      className="h-24 w-24 border-white border relative overflow-hidden group hover:cursor-ne-resize"
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
        <div className="absolute bottom-[2rem] -left-1.5 text-[.7rem] font-thin max-w-[90%] -rotate-90">
          <p className={text.className}>
            {blogInfo.date}
          </p>
        </div>
        <div className="absolute bottom-1 left-1 text-[.65rem] font-bold max-w-[90%]">
          <p className={text.className}>
            {blogInfo.title}
          </p>
        </div>
      </div>
    </Link>
  ))}
    <div className="text-white rotate-90 absolute bottom-[1.5rem] -right-[2rem] flex space-x-2 text-[1.9rem]">
                    <Link className="hover:text-teal-300" href={"/blog"}>
                        <p className={text.className}>
                            Corpus
                        </p>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
}

export default TodayBox;