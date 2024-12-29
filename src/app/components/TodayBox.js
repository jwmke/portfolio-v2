import { Lato, Vollkorn_SC } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from 'next/link';

// const header = Vollkorn_SC({
//     subsets: ['latin'],
//     weight: ["400"]
// });

const blogRecents = [
    {
        "title": "Neuroscience",
        "path": "/img/blog/Neuro.jpg",
        "date": "06/24",
        "route": "/neuroscience"
    },
    {
        "title": "BCIs",
        "path": "/img/blog/Waves.png",
        "date": "04/24",
        "route": "/"
    },
    {
        "title": "Doom",
        "path": "/img/blog/Romanticization.jpg",
        "date": "07/23",
        "route": "/"
    },
    {
        "title": "Context",
        "path": "/img/blog/Window2.jpg",
        "date": "05/23",
        "route": "/"
    },
    {
        "title": "Cereal",
        "path": "/img/blog/Bowl.jpg",
        "date": "04/23",
        "route": "/"
    },
    {
        "title": "Graduation",
        "path": "/img/blog/Grad.jpg",
        "date": "12/22",
        "route": "/"
    },

]

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
        <h1 className="text-white font-thin text-[3.25rem] ml-12 min-[1700px]:ml-0 min-[1700px]:text-[4.5rem] min-[1650px]:leading-[5.5rem] leading-[5rem] absolute  left-[calc(52.5vw-40rem)] 2xl:left-[calc(53vw-38.5rem)] mt-1">
            <p className={header.className}>
                Today
            </p>
        </h1>
        <div className="text-[.55rem] text-teal-700 mt-1.5 leading-4 ml-6 min-[1700px]:ml-4 max-h-20 overflow-hidden min-[1650px]:block hidden 2xl:max-w-[calc(52.5vw-39.5rem)]">
            <p>{"(g=Array(20).fill().map(_=>Array(20).fill().map(_=>Math.random()<.3)))&&setInterval(_=>{"}</p>
            <p>{"g=g.map((r,i)=>r.map((c,j)=>{let n=[-1,0,1].flatMap(x=>[-1,0,1].map(y=>[i+x,j+y]))"}</p>
            <p>{".filter(([x,y])=>x>=0&&x<20&&y>=0&&y<20&&!(x==i&&y==j)).reduce((s,[x,y])=>s+(g[x][y]?1:0),0);return n==3||(c&&n==2)}));"}</p>
            <p>{"console.clear();console.log(g.map(r=>r.map(c=>c?'O':' ').join``).join`\\n`)},200)"}</p>
            </div>
        <div className="absolute min-[1800px]:top-[8rem] top-[6rem] w-full text-white 2xl:max-w-[calc(52.5vw-31.5rem)] ml-[5.5rem] left-10 min-[1800px]:left-0 2xl:ml-3 text-xs">
            <ul className="space-y-0.5">
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Reading & writing about anything interesting</p>
                </li>
                <li className="flex items-center space-x-4 -ml-5">
                    <p>&#8226;</p>
                    <p className={text.className}>Mentoring the next generation w/ team 4201</p>
                </li>
                <li className="flex items-center space-x-4 -ml-10">
                    <p>&#8226;</p>
                    <p className={text.className}>Learning & building neurotech in public</p>
                </li>
                <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*3)]">
                    <p>&#8226;</p>
                    <p className={text.className}>Sparring aristocrats at the Gundo Book Club</p>
                </li>
                <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*4)]">
                <p>&#8226;</p>
                    <p className={text.className}>Practicing the dying art of street photography</p>
                </li>
                <li className="flex items-center space-x-4 min-[1800px]:hidden -ml-[calc(1.25rem*5)]">
                <p>&#8226;</p>
                    <p className={text.className}>Running trails, climbing rocks, & weight training</p>
                </li>
            </ul>
        </div>
        <div className="w-[10vw] text-nowrap h-20 text-xs top-[8.05rem] absolute text-white left-[calc(55.5vw-48rem)] min-[1850px]:left-[calc(57.5vw-50.5rem)] min-[1800px]:flex hidden">
            <ul className="space-y-0.5">
                <li className="flex items-center space-x-4 justify-end">
                    <p className={text.className}>Sparring aristocrats at the Gundo Book Club</p>
                    <p>&#8226;</p>
                </li>
                <li className="flex items-center space-x-4 justify-end mr-5">
                    <p className={text.className}>Practicing the dying art of street photography</p>
                    <p>&#8226;</p>
                </li>
                <li className="flex items-center space-x-4 justify-end mr-10">
                    <p className={text.className}>Running trails, climbing rocks, & lifting weights</p>
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
        
        <div className="w-[90%] h-24 absolute -bottom-0 flex space-x-3 -left-[calc(31vw-26rem)] min-[1700px]:ml-20 min-[1450px]:ml-6 ml-2">
            <div className="text-white -rotate-90 absolute bottom-[1.45rem] -left-8 flex space-x-2 text-[2rem]">
                <p className={text.className}>
                    Recent
                </p>
            </div>
            <div className="z-40 min-[1900px]:w-[102%] min-[1800px]:w-[90%] min-[1600px]:w-[80%] w-[70%] h-24 left-8 absolute text-white grid grid-cols-3 min-[1600px]:grid-cols-4 min-[1800px]:grid-cols-5 min-[1900px]:grid-cols-6 overflow-hidden">
            {blogRecents.map((blogInfo, idx) => (
    <Link 
      key={idx} 
      href={blogInfo.route}
      className="h-24 w-24 border-white border relative overflow-hidden group"
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
            </div>
        </div>
    </div>
}

export default TodayBox;