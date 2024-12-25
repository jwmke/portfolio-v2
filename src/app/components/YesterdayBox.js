import localFont from "next/font/local";
import { Lato } from "next/font/google";
import ProjectBox from "./ProjectBox";

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
      <div className="flex flex-row absolute top-[11.75rem]">
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

const projectData = [
{
    title: "Affordable EEG PCB",
    description: "$80 BOM 8-channel EEG PCB Pi Pico W shield using the ADS1299 ADC chip",
    tags: ["KiCad", "Python", "Manufacturing"]
},
{
    title: "BCI Bin Web App",
    description: "Hub for Brain-Computer-Interface datasets & learning resources",
    tags: ["NextJS", "S3", "Supabase", "ThreeJS"]
},
{
    title: "Collabify Web App",
    description: "Enables Spotify users to discover & visualize songs their artists have collaborated on",
    tags: ["Typscript", "Go", "Websockets", "D3"]
},
{
    title: "Autonomous VRC Robot",
    description: "Custom YOLOv5 model combined with D435 depth data to localize game objects for RL",
    tags: ["Pytorch", "OpenCV", "ROS", "TF2"]
},
{
    title: "Bias Compass Bot",
    description: "Telegram Bot that detects political bias in scraped news articles from sent link",
    tags: ["Langchain", "GPT-4", "Python"]
},
{
    title: "Lymphocite Detection",
    description: "Models to detect lymphocites in FTIR biopsy imagas of cancerous ovarian tissue samples",
    tags: ["TensorFlow", "SKLearn", "NumPy"]
},
{
    title: "Glomerular Assessment",
    description: "CV pipeline to assess severity of glomerular cell injuries for renal disease detection",
    tags: ["Pytorch", "Numpy", "Pandas"]
},
{
    title: "RSA / AES Parallelization",
    description: "Parallelized RSA and AES encryption algorithms to run on GPU at 100x+ speedup",
    tags: ["CUDA", "C++"]
},
];

const YesterdayBox = () => {
    return <div className="w-full h-[31.75rem] relative -left-[calc(31vw-26rem)] min-[1700px]:ml-20 ml-1 ">
        <h1 className="text-white font-thin absolute text-[3.25rem] min-[1700px]:text-[4.5rem] flex leading-[5.5rem] w-[115%] gap-4">
            <p className={header.className}>
                Yesterday
            </p>
            <svg viewBox="0 0 200 100" className="h-24">
                {/* Inner curved sections, made larger and connecting at center */}
                {[0, 90, 180, 270].map((angle) => (
                <path
                    key={`curve-${angle}`}
                    d="M 50 30 Q 50 50, 35 50 L 65 50 Q 50 50, 50 30"
                    fill="white"
                    transform={`rotate(${angle}, 50, 50)`}
                />
                ))}

                {/* Three normal spikes (top, left, bottom) */}
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

                {/* Extended right spike (2x length) */}
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

                {/* Small center circle to smooth out any gaps */}
                <circle 
                cx="50" 
                cy="50" 
                r="3" 
                fill="white" 
                />
            </svg>
        </h1>
        {/* <TealGradient /> */}
        <div className="">
            <ul className="space-y-0.5 text-xs text-white mt-[6.25rem]">
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
        <div className="absolute -right-[6.25rem] top-[6.45rem] grid grid-cols-2 gap-x-2 gap-y-2">
            {projectData.map((data, idx) => (
                <ProjectBox key={idx} {...data} />
            ))}
        </div>
    </div>
}

export default YesterdayBox;