import Grain from "../components/Grain"
import DiagonalCornerContainer from "../components/DiagonalCornerContainer";
import Image from "next/image";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import blogRecents from '../data/blogRecents';

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
            <DiagonalCornerContainer className="w-[60rem] mx-2" size={48} bottomRightStraight>
              <div className="w-full flex justify-between">
                <div className="text-white w-[33.75rem] mt-4">
                  <div className="text-[4.5rem] leading-[3rem] ml-4">
                    <h1 className={header.className}>
                      Blog Posts
                    </h1>
                  </div>
                  <div className="mt-14 space-y-3">
                    {blogRecents.map(blog => (
                      <div className="text-xl flex space-x-3">
                        <p>&#8226;</p>
                        <p className={text.className}>
                          {blog.full_title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                <div className="h-[3.75rem] relative mb-2 mt-4">
                    <p className="text-white text-[.65rem] italic absolute max-w-[19rem]">
                        {"Without words, without writing and without books there would be no history, there could be no concept of humanity."}
                    </p>
                    <div className="flex justify-end text-white text-[.65rem] bottom-3 right-0 absolute">
                    {"― Hermann Hesse, 1904"} 
                    </div>
                </div>
                  <Image className="border-white border" src={"/img/libg.jpg"} width={320} height={600} alt="Library"/>
                </div>
              </div>
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;