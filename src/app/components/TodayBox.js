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
    return <div className="w-[120%] mt-7 relative">
        <h1 className="text-white font-thin text-[4rem] min-[1700px]:text-[4.5rem] leading-[5.5rem] absolute left-[calc(52.5vw-36rem)] 2xl:left-[calc(53vw-38.5rem)] mt-1">
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
        <div className="absolute top-[7.5rem] w-full text-white 2xl:max-w-[calc(52.5vw-31.5rem)] ml-[5.5rem] 2xl:ml-4 text-xs 2xl:text-sm">
            <ul>
                <li className="flex items-center space-x-4">
                    <p>&#8226;</p>
                    <p className={text.className}>Reading & writing about anything of intrest</p>
                </li>
                <li className="flex items-center space-x-4 -ml-5">
                    <p>&#8226;</p>
                    <p className={text.className}>Practicing the dying art of photography</p>
                </li>
                <li className="flex items-center space-x-4 -ml-10">
                    <p>&#8226;</p>
                    <p className={text.className}>Learning & building neurotech in public</p>
                </li>
                <li className="flex items-center space-x-4 -ml-[3.75rem]">
                    <p>&#8226;</p>
                    <p className={text.className}>Solving Advent of Code 2024</p>
                </li>
            </ul>
        </div>
    </div>
}

export default TodayBox;