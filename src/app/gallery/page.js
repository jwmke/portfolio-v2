import Grain from "../components/Grain"
import DiagonalCornerContainer from "../components/DiagonalCornerContainer";
import Image from "next/image";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import picData from '../data/picData';
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


const Page = () => {
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
          <div className="w-full flex justify-center items-center min-h-[100vh]">
            <DiagonalCornerContainer className="m-2 min-[925px]:hidden w-full max-w-[450px] text-white" size={32}>
              <div className="min-[425px]:text-[4.7rem] text-[3.5rem] leading-[3rem] mt-12 w-full flex justify-center">
                <h1 className={header.className}>
                  Gallery
                </h1>
              </div>
              <div className="mt-12 mb-16 grid grid-cols-2 gap-x-2 gap-y-2">
                {picData.map(recipe => (
                  <Link className="hover:text-teal-300 flex justify-center" href={recipe.route} key={recipe.name}>
                    <div className="flex space-x-4 text-sm">
                      {/* <p>&#8226;</p> */}
                      <p className={text.className}>{recipe.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </DiagonalCornerContainer>
            <DiagonalCornerContainer className="w-[58rem] mx-2 min-[925px]:flex hidden" size={48} bottomRightStraight>
              <div className="w-full flex justify-between">
                <div className="text-white min-w-[36rem] mt-4 mr-8">
                  <div className="text-[4.7rem] leading-[3rem] ml-4">
                    <h1 className={header.className}>
                      The Gallery
                    </h1>
                  </div>
                  <div className="mt-9 mb-6 ml-4">
                    {picData.map(recipe => (
                      <Link className="hover:text-teal-300" href={recipe.route} key={recipe.name}>
                        <div className="flex space-x-4">
                          <p>&#8226;</p>
                          <p className={text.className}>{recipe.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex-col justify-center flex">
                <div className="h-[3.75rem] relative mb-[.95rem] mt-[1.65rem]">
                    <p className="text-white text-[.7rem] italic absolute max-w-[19rem]">
                        {"I photograph to find out what something will look like photographed."}
                    </p>
                    <div className="flex justify-end text-white text-[.7rem] bottom-2 right-0 absolute">
                    {"― Garry Winogrand, 1969"}
                    </div>
                </div>
                  <Image className="border-white border" src={"/img/street.jpg"} width={320} height={600} alt="Library"/>
                </div>
              </div>
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;