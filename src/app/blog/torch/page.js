import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";
import blogRecents from '../../data/blogRecents.json';

const blogData = blogRecents.find(b => b.route === '/blog/torch');

export const metadata = {
  title: blogData.full_title,
  description: blogData.tag_line,
}

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {
    const styledLink = (text, link) => (
      <a href={link} target="_blank" rel="noreferrer" className='hover:text-teal-300 underline hover:cursor-nesw-resize'>
          {text}
      </a>
    )
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
          <div className="w-full min-h-[100vh] flex justify-center p-2 lg:py-12">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                            <div className='text-4xl font-bold'>
                                Passing The Torch
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                                <div className='flex justify-center'>
                                    <Image width={975} height={550} src={"/img/blog/torch.jpg"} alt="torch" className=''/>
                                </div>
                                <p>Recently, one of my favorite ways to burn blocks of free time is watching Minecraft speedruns.</p>
                                <p>More specifically, the occasional video that the algorithm sneaks in will be some sort of speedrun variation, such as &quot;Full Inventory of Furnaces&quot; or, most recently, &quot;Beating Minecraft, but Every Minute the Player Changes.&quot;</p>
                                <p>For the latter, minimal elaboration is needed apart from the title, but within it, I noticed a parallel to life.</p>
                                <p>Every time a new player was placed in the hot seat, they had no idea where they were, what their collection of items was, or any context at all from the players before them. They only knew the common goal, to kill the ender dragon, and they had to use their trained instincts to perform anything in that minute to move the run closer to that goal.</p>
                                <p>When each player took over, one of three things would occur:</p>
                                <p>Often, a player would be lost and disconcerted by their environment and would accomplish very little, if anything at all, in their minute.</p>
                                <p>Sometimes, a player would come in and accomplish a great deal in their 60 seconds.</p>
                                <p>And occasionally, a player would take a catastrophic action (intentional or not), resulting in the delay of achieving the goal.</p>
                                <p>Sound familiar? Because you&apos;re playing this same challenge every single day.</p>                                
                                <p>This challenge is your life.</p>
                                <p>Every day you wake up, you&apos;re the new player. You have trained instincts on how to play the game; you&apos;ve done this before. The moment you open your eyes in the morning, as far as your consciousness is concerned, this is the first time you&apos;ve ever been alive.</p>
                                <p>You might reproach, &quot;This is intuitively false.&quot; You remember falling asleep where you did, but who are you to say that these memories weren&apos;t planted?</p>
                                <p>The only truth you have is the present.</p>
                                <p className='italic'>&quot;Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.&quot;<br/>Master Oogway</p>
                                <p>When you choose to accept this truth, you must then ask what are your options?</p>
                                <p>You can use your one existence to aimlessly wander for the day and make no meaningful strides towards your goal. Though it&apos;s worth mentioning that this goal won&apos;t be as clear-cut as slaying a dragon. You&apos;re the only one who can define it.</p>
                                <p>You can act with nobility and help contribute to the greater cause by pushing the needle forward on the goal.</p>
                                <p>Or you could even end up making a mistake (intentional or not), that would set you back from what you&apos;re out to accomplish.</p>
                                <div className='flex justify-center'>
                                    <Image width={300} height={300} src={"/img/blog/snek.png"} alt="senk" className=''/>
                                </div>
                                <p>At the end of the day, you lie down and surrender to death, only as temporary as you&apos;ve been tricked into believing.</p>
                                <p>And when you take your final breath, can you say that your existence helped move the collective towards the goal, or would the run have been the same if you had never even spawned?</p>
                                <div className='flex justify-center pt-4'>
                                    <a target="_blank" rel="noreferrer" href='https://notbyai.fyi/' className='hover:cursor-pointer hover:shadow-2xl'>
                                    <Image width={132} height={42} src={"/img/blog/human.png"} alt="human"/>
                                    </a>
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