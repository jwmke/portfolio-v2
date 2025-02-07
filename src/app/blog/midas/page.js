import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


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
          <div className="w-full min-h-[100vh] flex justify-center p-4">
            <DiagonalCornerContainer className="w-[60rem]" size={64}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                            <div className='text-4xl font-bold'>
                              Midas&apos; Monocle and the Heat Death of the Universe
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                                <div className='flex justify-center'>
                                  <Image width={700} height={466} src={"/img/blog/alch.jpg"} alt="alch" className=''/>
                                </div>
                                <p>From the dawn of the Enlightenment to the present day, the momentum of technological progress has remained unstoppable. Whether this represents humanity's triumph or its eventual undoing depends entirely on which lens we choose to look through.</p>
                                <p>In what follows, I&apos;ll explore the consequences of technological headway, followed by three perspectives through which this progress can be viewed, and what the medium to long-term future will look like if we don&apos;t proceed with caution.</p>
                                <p className='text-3xl font-bold pt-3'>Technology of Today</p>
                                <p>I recently interviewed a few of my peers in STEM to determine their motives for dedicating their careers to the pursuit of developing technology. With some variance, the most common answer I received was to help solve tasks to make the world of tomorrow a better place than the world of today. This answer comes off as admirable since the impulse toward improvement runs deep in our cultural DNA. Yet history suggests a more complex story &mdash; every technological solution seems to spawn new, often unforeseen problems.</p>
                                <p>To evaluate this pattern, we must examine today&apos;s most widespread technologies, why they were created, and the issues they&apos;ve unintentionally created.</p>
                                <p>Let&apos;s move from least to most polarizing.</p>
                                <p className='text-2xl font-bold'>Surveillance</p>
                                <p>From an American perspective, this one&apos;s a no-brainer. Technologies for keeping track of social credit scores and statewide surveillance systems were originally introduced to promote trustworthiness amongst citizens. However, they&apos;re now easy to denounce, partially due to the emphasized value of liberty and autonomy in the West and partially due to observing the results of individual freedoms at the hands of authoritarian governments.</p>
                                <p className='text-2xl font-bold'>Defense</p>
                                <p>The virtue of technologies built for the sake of defending a nation is more nuanced. Ultimately, however, these technologies preserve the human lives and cultures/ideas of those who create them. While the mere presence of these technologies is enough to prevent their use 99% of the time, with enough time and entropy they will be used, and human life will be lost.</p>
                                <p className='text-2xl font-bold'>Cars</p>
                                <p>For some, the automobile is a strong contender for the worst technology ever made. The first cars were created with good intentions &mdash; to allow for more freedom by solving the convenience pitfalls of horse-drawn carriages. Not soon after, urban planners began to prioritize the existence of cars over the experience of humans by introducing the idea of suburbs and expanding the footprints of cities to include streets wherever feasible.</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/cars.jpg"} alt="cars" className=''/>
                                </div>
                                <p>Fast forward to today. The evil introduced by cars goes beyond their ecological carnage and their annually demanded 40,000 human sacrifices. The true evil of automobiles is the destruction of deep relationships they cause through the physical distance they create between everyone and everything.</p>
                                <p className='text-2xl font-bold'>Medicine</p>
                                <p>There&apos;s no need to go into the abundant benefits that modern medicine has provided society with, however, as with the other technologies listed, the pharmaceutical and healthcare industries have largely deviated from their native purposes. The opioid epidemic, which has been around since the 1800s, speaks for itself as an artifact of the original benefits that painkillers promised. And, perhaps even worse, by the magnitude of lives impacted, is the cost structure around healthcare that&apos;s been exponentially inflated by decades of corruption.</p>
                                <p>The same ruinations of the above technologies can also be mapped to the internet, phones, electricity, modern agriculture, written language, you name it. All of these technologies have strayed from their original purpose, but my point isn&apos;t that we need to eradicate them, in fact, such a thing is impossible. However, by shining a spotlight on mankind's most widespread inventions, I hope it&apos;s evident how these undesired byproducts will continue to happen with every technology going forward.</p>
                                <p className='text-3xl font-bold pt-3'>Lenses</p>
                                <p>Now that you&apos;ve seen the current state of technology I offer three lenses that you can look through to interpret the future technologies you&apos;ll see during the rest of your lifetime. There are dozens of representatives and literary works for each of these lenses, so I&apos;ve chosen what I believe to be the primary forefather and cornerstone texts that best represent each lens.</p>
                                <p className='text-2xl font-bold'>Techno-Optimism</p>
                                <p>Marc Andreessen - The Techno-Optimist Manifesto</p>
                                <p>This first lens closely aligns with the beliefs of the majority of my STEM peers, as mentioned earlier. It&apos;s rooted in the post-COVID movement called Effective Accelerationism (often shortened to e/acc) which is a fork from the Accelerationism movement. </p>
                                <p>Accelerationism, which only started gaining popularity in the early 2010s, is the idea that existing political and social systems are bound to collapse with time. Therefore we should dramatically accelerate technological change in hopes of destroying existing systems and creating radical social transformations sooner rather than later.</p>
                                <p>Effective Accelerationism, on the other hand, has a more naively optimistic outlook. Followers of this movement believe that, given enough time, unrestricted technological progress will produce solutions to universal human problems like poverty, war, and climate change.</p>
                                <p>These ideas are the foundation for Andreessen&apos;s manifesto, which is essentially a long Twitter thread. It reads like a religious devotion to the idea that technology is the savior of mankind and that developing faster and building more is key to improving the human condition.</p>
                                <p>Andreessen uses the derogatory term decel, short for decelerationist, for anyone critical of his blind procession towards the light. He claims that these enemies of his movement are indirectly murderers of all of the future lives that could be saved by technology if not for their stagnation.</p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/midas.jpg"} alt="midas" className=''/>
                                </div>
                                <p>Like King Midas before his revelation, Andreessen sees only the golden promise of each technological touch, never pausing to consider that the same power that transforms bread into gold might also have unintended consequences.</p>
                                <p>When Andreessen initially published his manifesto, it was met with a healthy amount of public backlash. And just as Midas finally understood the curse of his gift, the unrealized problems we've seen in today's technology suggest that another technique could be considered in examining the development of new technology: a healthy amount of skepticism.</p>
                                <p className='text-2xl font-bold'>Techno-Skepticism</p>
                                <p>Theodore Kaczynski - Industrial Society and its Future</p>
                                <p>The first time I heard about Ted Kaczynski, aka the Unabomber, the 10-second rundown I received was somewhere along the lines of “he's a schizophrenic luddite who mailed bombs to scientists and executives to deter the development of future technologies.” While this is all mostly true, the true reason for his killings was to bring attention to his ideas on progressivism and technology in his manifesto. These ideas will act as the foundation for the lens of techno-skepticism.</p>
                                <p>You might have noticed that this lens isn&apos;t called techno-pessimism, despite basing it on the narrative of a luddite. This is because the definition of being a luddite has evolved with time. It originally described English workers who feared technology and destroyed machinery to increase job security. Nowadays, luddites aren&apos;t anti-tech for the sake of fearing the unknown, but instead, they&apos;re pragmatically skeptical of it since they&apos;ve seen its ramifications firsthand.</p>
                                <p>By viewing new technologies like a luddite, you&apos;ll unlock the benefit of preemptively spotting long-term issues that can spawn from them. If you start applying the lens to existing technology you&apos;ll also discover that technological progress alone doesn&apos;t solve societal problems but instead, can exacerbate them. In addition, when technology advances beyond our understanding, and we eventually become overly reliant on it, you can be preemptive about what will happen after the machine stops.</p>
                                <p>You might not be convinced that modern luddites have deviated from their archetype, and therefore you&apos;ll continue to view them as cynics against all technology, aka technophobes. But, consider a fungophobe &mdash; someone who fears all mushrooms and wants nothing to do with them. On the other hand, consider a fungophile &mdash; someone who is intensely interested in mushrooms and analytical about their properties, taste, toxicity, etc.</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/shrooms.png"} alt="shrooms" className=''/>
                                </div>
                                <p>The modern luddite, (i.e. techno-skepticist), should act more as a technophile rather than a technophobe, examining new technologies with extreme caution and criticality. This skepticism won&apos;t be nearly as provocative as using every ounce of your willpower to transform reality into a sci-fi utopia, but when the alternative is running around and eating every mushroom in the woods, the added red tape might be the lesser evil.</p>
                                <p className='text-2xl font-bold'>Techno-Traditionalism</p>
                                <p>Julius Evola - Revolt Against the Modern World</p>
                                <p>This lens won't be for everyone, but if it speaks to even one person, it is worth mentioning.</p>
                                <p>As you read through the previous section, there&apos;s a chance that the following thought ran across your mind; “what&apos;s the point? Even if I approach new technology with ample skepticism and decide not to pursue it, if I don't build it someone else will, and perhaps they&apos;ll build it with worse intentions.” If so, the lens of techno-traditionalism might be right for you.</p>
                                <p>Julius Evola was an Italian philosopher who advocated for a few different conservative schools of thought. The two major works he&apos;s most known for, Revolt Against The Modern World and Ride the Tiger, center around the school of Traditionalism, sometimes called Perennialism.</p>
                                <p>Evola's interpretation of Traditionalism was highly convoluted, so a brief description won&apos;t do it justice, in the same sense that it's impossible to describe Fascism concisely. For this essay, we can view Traditionalism as a philosophical worldview that sees human history as cyclical rather than progressive, where modern society has entered a spiritual and cultural decline toward dissolute darkness and is well beyond repair.</p>
                                <p>At its core, Traditionalism suggests there are eternal, unchanging truths and principles that transcend time and culture. Evola describes a differentiated man, (l'uomo differenziato), as one who has awakened to these eternal principles and maintains them even as the world descends further into chaos. This differentiated man doesn't resist the inevitable decay of civilization, but rather, stands apart from it, understanding that attempting to halt its decline is futile.</p>
                                <div className='flex justify-center'>
                                  <Image width={300} height={300} src={"/img/blog/tiger.jpg"} alt="tiger" className=''/>
                                </div>
                                <p>The lens of techno-traditionalism isn't about wholesale rejection of modernity, but rather about maintaining a spiritual and intellectual sovereignty in the face of accelerating change. When Evola wrote about "riding the tiger" &mdash; a metaphor he used to describe living in modern times &mdash; he wasn't advocating for complete withdrawal from society, but rather for maintaining inner detachment while engaging with modernity on one's own terms.</p>
                                <p>This philosophy might come off as an overly cynical dose of copium for some. But as previously prefaced, it&apos;s not meant for everyone. Fully grasping it requires accepting premises about the nature of history and society that run counter to the modern techno-optimist narratives of progress and technological salvation.</p>
                                <p>However, for those who sense something fundamentally missing in today&apos;s infinite race toward nothing, techno-traditionalism offers a framework for understanding and navigating the ever-changing landscape of technology, without being consumed by it.</p>
                                <p className='text-3xl font-bold pt-3'>Technology of Tomorrow</p>
                                <p>The technologies emerging on the horizon will test each of these lenses to their breaking points. Some developments we can already see taking shape; others lurk just beyond our peripheral vision. Let&apos;s take a look at a few.</p>
                                <p className='text-2xl font-bold'>Genetic Engineering</p>
                                <p>What will start as eliminating legitimately terrible diseases like Alzheimer&apos;s and Parkinson&apos;s, will eventually turn into gene enhancements for leisure or productivity.</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/10x.png"} alt="10x" className=''/>
                                </div>
                                <p>The 10x agency question will no longer be hypothetical, you&apos;ll just head to the nearest streetside gene clinic and make it happen. The only eventual outcomes would be either worldwide factions divided by whether you&apos;re okay with playing God, or, if the benefits are too enticing and everyone gives in, the last “natural” humans will be locked up in the name of science.</p>
                                <p className='text-2xl font-bold'>BCIs</p>
                                <p>Brain Computer Interfaces and other biological enhancements will be introduced as optional productivity enhancers, but eventually, through social pressure, will become required. That one weirdo without an iPhone who can&apos;t take calls today will be the same weirdo without a telepathy implant who still has to use vocal cords to communicate with others in 2045.</p>
                                <p className='text-2xl font-bold'>Virtual Reality</p>
                                <p>While virtual/augmented reality is already quite far along in adoption, it hasn&apos;t come anywhere near the threshold of evil it&apos;s capable of. If current technological trends keep up, in the not so far future, a Three Class Society might emerge &mdash; where anyone can choose to drop out of society and live in their padded wirehead cage for the rest of their days.</p>
                                <p className='text-2xl font-bold'>Unlimited Power</p>
                                <p>You may think that harnessing nuclear fusion, or any other surrogate process for creating unlimited energy, may not sound like it could have downsides. And if used responsibly, you&apos;d be correct. Unfortunately, as seen with every other technology stated thus far, human nature gets in the way. Greed + time + heat dissipation would create an environmental catastrophe that would make modern-day climate change look like a joke. (Admittedly, this might be a weak argument, but I&apos;ll leave it to you to think of others.)</p>
                                <p className='text-2xl font-bold'>Immortality</p>
                                <p>Conquering death is not a matter of if, but when. And when that fateful day comes when the dragon is slain and immortality is commoditized, a plethora of new problems will rise in its place. These problems include but aren&apos;t limited to, population control via state-mandated eugenics, eternal boredom after we run out of novel entertainment in a few thousand years, the collapse of marriage and dating (not sure how much 45 and 13,547-year-olds have in common), and the unfairness of premature/accidental death would increase exponentially.</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/fountain.jpg"} alt="fountain" className=''/>
                                </div>
                                <p>The written and unwritten laws of society will need to be reshaped so drastically, that everything about our current way of life will be unrecognizable.</p>
                                <p className='text-3xl font-bold pt-3'>The End</p>
                                <p>In Isaac Asimov's The Last Question, humanity leaps forward through time, each jump being an order of magnitude larger than the last. With each glimpse into the future, technology has advanced so dramatically that the previous era appears primitive by comparison. This procession continues until, ten trillion years later, when entropy is fully expended, and the last star dies &mdash; humankind along with it.</p>
                                <p>This is the universe where the techno-optimists won. All of the personal freedoms squandered, all of the short-term suffering created, all of the fundamental human experiences sacrificed - only for the last man, in the last corner of the universe, to experience the same darkness as every soul who came before him.</p>
                                <div className='flex justify-center'>
                                  <Image width={500} height={300} src={"/img/blog/black.png"} alt="death" className=''/>
                                </div>
                                <p>Like Midas realizing the price of his golden touch before it was too late, this is our cautionary tale. If you're a techno-optimist today, you must weigh the true cost of progress against its promised rewards. You must be conscious of which lens sits in your monocle, and whether the glitter of innovation blinds you from its shadow. And above all else, you must consider, embrace, or even just tolerate, the perspective of the skeptics and traditionalists who see different colors in technology's spectrum.</p>
                                <p>This is how we'll build not just a future of progress, but one worth progressing toward.</p>
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