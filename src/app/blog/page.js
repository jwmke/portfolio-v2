import Grain from "../components/Grain"
import DiagonalCornerContainer from "../components/DiagonalCornerContainer";
import Image from "next/image";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import blogRecents from '../data/blogRecents';
import recipeData from '../data/recipeData';
import BlogBox from "../components/BlogBox";
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

const blogroll = [
  {
    "name": "Tim Urban",
    "link": "https://waitbutwhy.com/"
  },
  {
    "name": "Paul Graham",
    "link": "http://www.paulgraham.com/articles.html"
  },
  {
    "name": "Derek Sivers",
    "link": "https://sive.rs/blog"
  },
  {
    "name": "George Hotz",
    "link": "https://geohot.github.io/blog/"
  },
  {
    "name": "James de Llis",
    "link": "https://web.archive.org/web/20211006105800/https://www.meta-nomad.net/"
  },
  {
    "name": "Curtis Yarvin",
    "link": "https://graymirror.substack.com/"
  },
  {
    "name": "Ludic Mataroa",
    "link": "https://ludic.mataroa.blog/"
  },
  {
    "name": "Paul Stamatiou",
    "link": "https://paulstamatiou.com/"
  },
  {
    "name": "Nick Bostrom",
    "link": "https://nickbostrom.com/"
  },
  {
    "name": "Alex Mango",
    "link": "https://mango.pdf.zone/"
  },
  {
    "name": "Ran Prieur",
    "link": "https://ranprieur.com/index.html"
  }
];

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
            <DiagonalCornerContainer className="m-4 min-[925px]:hidden w-full max-w-[450px] text-white" size={32}>
              <div className="min-[425px]:text-[4.7rem] text-[3.5rem] leading-[3rem] mt-4 w-full flex justify-center">
                <h1 className={header.className}>
                  Library
                </h1>
              </div>
              <div className="mt-10 space-y-2">
                {blogRecents.map(blog => (
                  <BlogBox external={blog.external} mobile full_title={blog.full_title} link={blog.route} tag_line={blog.tag_line} key={blog.title} />
                ))}
              </div>
              <div className="min-[425px]:text-[4.7rem] text-[3.5rem] leading-[3rem] mt-14 w-full flex justify-center">
                <h1 className={header.className} id="recipes">
                  Recipes
                </h1>
              </div>
              <div className="mt-10 mb-16 grid grid-cols-2 gap-x-2 gap-y-2">
                {recipeData.map(recipe => (
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
                <div className="text-white min-w-[34rem] mt-4 mr-8">
                  <div className="text-[4.7rem] leading-[3rem] ml-4">
                    <h1 className={header.className}>
                      Library
                    </h1>
                  </div>
                  <div className="mt-9 space-y-2 h-[23.5rem] overflow-y-scroll pr-2">
                    {blogRecents.map(blog => (
                      <BlogBox external={blog.external} full_title={blog.full_title} link={blog.route} tag_line={blog.tag_line} key={blog.title} />
                    ))}
                  </div>
                  <div className="text-[4.7rem] leading-[3rem] ml-4 mt-8">
                    <h1 className={header.className}>
                      Recipes
                    </h1>
                  </div>
                  <div className="mt-9 mb-6 grid grid-cols-2">
                    {recipeData.map(recipe => (
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
                        {"In the very books in which philosophers bid us scorn fame, they inscribe their names."}
                    </p>
                    <div className="flex justify-end text-white text-[.7rem] bottom-2 right-0 absolute">
                    {"― Marcus Cicero, 102 BC"} 
                    </div>
                </div>
                  <div className="group border-white border relative text-white">
                    <Image 
                      className="group-hover:opacity-50 transition-all duration-150" 
                      src="/img/libg.jpg" 
                      width={320} 
                      height={600} 
                      alt="Library"
                    />
                    <div className="absolute w-full h-full top-0 opacity-0 group-hover:opacity-100 transition-all duration-150">
                      <div className="text-[3.5rem] leading-[3rem] mt-4 w-full ml-5">
                        <h1 className={header.className}>
                          Blogroll
                        </h1>
                      </div>
                      <div className="ml-5 mt-8">
                        <ul>
                          {blogroll.map(({ name, link }) => (
                            <li key={name}>
                              <a href={link} target="_blank" rel="noopener noreferrer">
                                <div className="flex space-x-4 hover:cursor-ne-resize hover:text-teal-300">
                                  <p>&#8226;</p>
                                  <p className={text.className}>{name}</p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;