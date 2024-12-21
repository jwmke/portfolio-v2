import { Lato, Vollkorn_SC } from "next/font/google";
import localFont from "next/font/local";

// const header = Vollkorn_SC({
//     subsets: ['latin'],
//     weight: ["400"]
// });

const header = localFont({
    src: "../fonts/NicoMoji.ttf",
    subsets: ['latin'],
    variable: "--font-nico-moji",
    weight: "100 400 900",
});

const text = Lato({
    subsets: ['latin'],
    weight: ["400"]
});

const TodayBox = () => {
    return <div className="w-[120%] mt-7 relative h-[19.5rem]">
        <h1 className="text-white font-thin text-[3.25rem] ml-12 min-[1700px]:ml-0 min-[1700px]:text-[4.5rem] leading-[5.5rem] absolute left-[calc(52.5vw-36rem)] 2xl:left-[calc(53vw-38.5rem)] mt-1">
            <p className={header.className}>
                Today
            </p>
        </h1>
        <div className="text-[.55rem] text-teal-600 mt-1.5 leading-4 ml-6 min-[1700px]:ml-4 max-h-20 overflow-hidden min-[1650px]:block hidden 2xl:max-w-[calc(52.5vw-39.5rem)]">
            <p>{"(g=Array(20).fill().map(_=>Array(20).fill().map(_=>Math.random()<.3)))&&setInterval(_=>{"}</p>
            <p>{"g=g.map((r,i)=>r.map((c,j)=>{let n=[-1,0,1].flatMap(x=>[-1,0,1].map(y=>[i+x,j+y]))"}</p>
            <p>{".filter(([x,y])=>x>=0&&x<20&&y>=0&&y<20&&!(x==i&&y==j)).reduce((s,[x,y])=>s+(g[x][y]?1:0),0);return n==3||(c&&n==2)}));"}</p>
            <p>{"console.clear();console.log(g.map(r=>r.map(c=>c?'O':' ').join``).join`\\n`)},200)"}</p>
            </div>
        <div className="absolute top-[7.25rem] w-full text-white 2xl:max-w-[calc(52.5vw-31.5rem)] ml-[5.5rem] 2xl:ml-4 text-xs 2xl:text-sm">
            <ul className="space-y-0.5">
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Reading & writing about anything interesting</p>
                </li>
                <li className="flex items-center space-x-4 -ml-5">
                    <p>&#8226;</p>
                    <p className={text.className}>Practicing the dying art of street photography</p>
                </li>
                <li className="flex items-center space-x-4 -ml-10">
                    <p>&#8226;</p>
                    <p className={text.className}>Learning & building neurotech in public</p>
                </li>
                <li className="flex items-center space-x-4 -ml-[3.75rem]">
                    <p>&#8226;</p>
                    <p className={text.className}>Sharpening my sword in AoC 2024</p>
                </li>
            </ul>
        </div>
        <div className="w-[10vw] text-nowrap h-20 text-xs top-[8rem] absolute text-white left-[calc(57.5vw-46rem)] min-[1775px]:block hidden">
            <div className="justify-between flex">
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
            </div>
        </div>
        
        <div className="w-[90%] h-24 bg-red-500 absolute -bottom-2 right-36 flex space-x-2">
            <div className="text-white -rotate-90 font-bold absolute bottom-8 -left-8 flex space-x-2 text-sm">
                <p className={text.className}>
                    Recent
                </p>
                <p className={text.className}>
                    Posts
                </p>
            </div>

        </div>
    </div>
}

export default TodayBox;