import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


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
                                The House Always Wins
                            </div>
                            <div className='md:text-xl space-y-5 mt-8'>
                                <div className='flex justify-center'>
                                    <Image width={975} height={550} src={"/img/blog/abd.jpg"} alt="house" className=''/>
                                </div>
                                <p>Homeownership has long been a cornerstone of the American Dream, but in recent years, this dream has become a nightmare. There are many reasons for this, but it&apos;s primarily due to the federal interest rates and private equity firms competing for supply.</p>
                                
                                <p>This post won&apos;t go into either of these reasons; instead, it will serve as an information piece as to why you should personally avoid purchasing a house unless a major economic shift occurs. When this shift happens (if it does), I&apos;ll delete this post.</p>

                                <div className='text-3xl font-bold mt-8 mb-4'>
                                    Life Is Multicolored
                                </div>

                                <p>Now, of course, there is no objective truth when it comes to owning versus renting, as life isn&apos;t black and white. There are a few clear advantages to owning a home, outlined below. This post isn&apos;t to dispel those reasons, but instead to destroy the widely held assumption that home ownership has any financial merit.</p>

                                <p>The comprehensive list of valid reasons to own a house:</p>

                                 <ul className='list-disc list-inside space-y-3 ml-4'>
                                    <li><strong>Overcoming a lack of control</strong> - if you&apos;re the type who can&apos;t coexist with a landlord, homeownership removes this master-slave relationship and gives you back control</li>
                                    
                                    <li><strong>To start a family</strong> - starting a family, on its own, is an act filled with disorder and ambiguity; not having a consistent foundation to raise this family in just adds to the chaos</li>
                                    
                                    {/* <li><strong>Social signaling</strong> - if your aims in life lean towards hedonism, the perceived status from responsibility of homeownership is undeniable</li> */}
                                    
                                    <li><strong>Hedge against other assets</strong> - if your investment portfolio is oversaturated with every other asset class, and you&apos;re paranoid about a market crash to the point of losing sleep, diversification through owning real estate might bring you peace</li>
                                    
                                    <li><strong>Forced savings mechanism</strong> - if you&apos;re a normie who is truly incapable of saving money, a mortgage might be the only mental gymnastics that can help you get your shit together</li>
                                    
                                    <li><strong>It supports your crackhead hobby</strong> - if you need to have a car lift in your garage, <span className="text-teal-400">5</span> acres of land to raise cows for your raw milk addiction, or set up a blacksmith&apos;s forge in your basement, renting probably isn&apos;t the way to go</li>
                                </ul>

                                <p>That&apos;s it. That&apos;s the whole list. Every other reason for ownership I&apos;ve ever heard either falls into one of the above buckets or is pure cope.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    &quot;I don&apos;t want to throw away money on rent.&quot;
                                </div>

                                <p>This is the counterargument I hear over and over again when it comes to people choosing to buy over renting. It often comes in different flavors too: &quot;It&apos;s an investment,&quot; &quot;I&apos;m building equity,&quot; &quot;I&apos;ll own an asset in the end,&quot; etc., etc., etc.</p>

                                <p>These might have meant something 5 years ago, but today they&apos;re all bullshit.</p>

                                <p>To prove this, the remainder of this blog will attempt to be the most comprehensive case study I can conceive for owning vs. renting an average home in the US.</p>

                                <div className='text-3xl font-bold mt-8 mb-4'>
                                    The $<span className="text-teal-400">500k</span> Lie
                                </div>

                                <p>Any case study worth its weight in salt must establish all of its assumptions before diving into the issue at hand.</p>

                                <p>For this study, we&apos;ll assume you&apos;re an average young adult who wants to live in a slightly above-average box with no shared walls. You have no desire to ever repair or modify your residence. You&apos;re looking at the suburbs of the average American town of Madison, Wisconsin. You know you love Madison, so you estimate that you&apos;ll live there for <span className="text-teal-400">20</span> years, but, being honest with yourself, you&apos;ll probably end up moving after <span className="text-teal-400">5</span>-<span className="text-teal-400">10</span> years. Based on your needs, hobbies, and aspirations, you think a 3-Bed / 2-Bath in the $<span className="text-teal-400">500k</span> range would be ideal.</p>

                                <p>You grab a pen and two napkins and start jotting down the financial details for buying a house of this caliber versus just renting it.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    Napkin #1
                                </div>

                                <p>At the top, you write &quot;HOUSING COSTS.&quot;</p>

                                <p>The most obvious cost is the mortgage. More specifically, the interest associated with the mortgage, as the remainder of your mortgage payment goes towards equity, turning your house into a physical bank account. A bank account that&apos;s capable of being drained by natural disasters at any time. God might be the biggest scammer out there.</p>

                                <p>As of writing this in 2025, a good <span className="text-teal-400">30</span>-year mortgage rate in Wisconsin is around <span className="text-teal-400">7%</span>, but with a little bit of negotiation and luck, you&apos;re able to get <span className="text-teal-400">6.5%</span>. You optimistically tell yourself you&apos;ll refinance when rates go down in the future (they never do).</p>

                                <p>You crunch some numbers, and, assuming you&apos;ll put <span className="text-teal-400">20%</span> down and stay the full <span className="text-teal-400">20</span> years, you&apos;ll end up paying $<span className="text-teal-400">429k</span> in interest over that timespan, and have around $<span className="text-teal-400">277k</span> towards the principal.</p>

                                <p>Your estimate that your house has appreciated within the bounds of the historical averages of <span className="text-teal-400">3</span>-<span className="text-teal-400">5%</span> and has consistently grown in value by <span className="text-teal-400">4%</span> year over year, and is now worth $<span className="text-teal-400">1.09m</span>, meaning you own $<span className="text-teal-400">867k</span> in equity.</p>

                                <p>You try to gather all the other recurring expenses that come to your mind. You Google the average cost of each of these expenses, and then conservatively assume they&apos;ll go up by <span className="text-teal-400">3%</span> each year (aside from property tax). Homeowners insurance $<span className="text-teal-400">3000</span>/yr, maintenance $<span className="text-teal-400">6000</span>/yr, HOA $<span className="text-teal-400">500</span>/yr, <span className="text-teal-400">1.5%</span> property tax $<span className="text-teal-400">7500</span>/yr. After <span className="text-teal-400">20</span> years, you will have spent $<span className="text-teal-400">430k</span> on these recurring costs with almost nothing to show for it.</p>

                                <p>If you had invested these payments directly into the S&P 500, assuming its lifetime annual return rate of <span className="text-teal-400">10%</span>, you would have ended up with $<span className="text-teal-400">1.23m</span>.</p>

                                <p>Lastly, you think of all of the one-time payments you&apos;ll need to pay. The $<span className="text-teal-400">100k</span> down payment that goes straight to equity, closing costs (Loan Origination, Appraisal, Inspection, Escrow, Reporting, Attorney, and other fees) add up to <span className="text-teal-400">2</span>-<span className="text-teal-400">5%</span> of the property value, in your case, <span className="text-teal-400">3%</span>, and immediate repairs range from <span className="text-teal-400">2</span>-<span className="text-teal-400">5%</span>; you get lucky and only end up needing <span className="text-teal-400">2%</span> worth.</p>

                                <p>If you had invested this $<span className="text-teal-400">130,000</span> at the start of your mortgage term instead, making the same assumptions about the S&P 500 above, it would have grown to $<span className="text-teal-400">875k</span> in the <span className="text-teal-400">20</span> years.</p>

                                <p>And the final fuck you comes when you&apos;ve decided you&apos;ve finally had enough of this house in those <span className="text-teal-400">20</span> years and want to sell it to move to a new box. The moment you buy the property, <span className="text-teal-400">5</span>-<span className="text-teal-400">6%</span> of its future value is locked up. This is because the seller pays the realtor fees for both the buying and selling agents. So when you&apos;re ready to sell your house at its peak value, you must forfeit <span className="text-teal-400">5%</span> of its new valuation of $<span className="text-teal-400">1.09m</span> in addition to the average closing costs the seller will pay (average is <span className="text-teal-400">3%</span> but you&apos;ll assume <span className="text-teal-400">2%</span>).</p>

                                <p>So that&apos;s $<span className="text-teal-400">76k</span> of your future money that you can look forward to being destroyed.</p>

                                <p>You know how you thought that was the final fuck you, it looks like you forgot about one more.</p>

                                <div className='flex justify-center'>
                                    <Image width={400} height={400} src={"/img/blog/sam.jpg"} alt="sam" className=''/>
                                </div>

                                <p>Since your house will have appreciated by $<span className="text-teal-400">590k</span>, and assuming you take advantage of the Principal Residence Exclusion for a $<span className="text-teal-400">250k</span> deduction, you&apos;ll owe long-term capital gains of $<span className="text-teal-400">51k</span>, assuming you don&apos;t do any tax loophole black magic.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    Napkin #2
                                </div>

                                <p>You let out an exhausted sigh. Once again, you write at the top, &quot;RENTING COSTS.&quot;</p>

                                <p>Combing through your brain, you realize you can only think of one significant cost, the rent itself. You look at Zillow and see that identical 3-Bed / 2-Baths in Madison are renting for $<span className="text-teal-400">2500</span>, which happens to be the same monthly number you would be paying for the <span className="text-teal-400">30</span>-year mortgage. You assume the average year-over-year rent increase of <span className="text-teal-400">3%</span> and crunch a few more numbers.</p>

                                <p>The final cost of renting comes out to be <span className="text-teal-400">806k</span> dollars &quot;thrown away.&quot;</p>

                                <p>You keep trying to brainstorm and realize that there are no other costs associated with renting that aren&apos;t also associated with owning (such as utilities and moving costs). The only one that comes to mind is renters insurance, but at $<span className="text-teal-400">15</span>/month, it&apos;s negligible.</p>

                                <p>Then you turn back to the amounts you had written down on the first napkin and start writing:</p>
                                <br/>
                                    <span className="text-teal-400">1.23m</span> + <span className="text-teal-400">875k</span> = <span className="text-teal-400">2.11m</span> - ((profit - initial investment) * <span className="text-teal-400">15%</span> LTCG tax) = <span className="text-teal-400">1.88m</span><br/>
                                    <span className="text-teal-400">1.09m</span> - $<span className="text-teal-400">76k</span> seller fees - $<span className="text-teal-400">51k</span> LTCG tax = <span className="text-teal-400">963k</span><br/>
                                    <span className="text-teal-400">1.88m</span> - <span className="text-teal-400">963k</span> = <span className="text-teal-400">917k</span> extra dollars in your pocket if you stick to renting.

                                <p>You crumple up both napkins and throw them away.</p>

                                <div className='text-3xl font-bold mt-8 mb-4'>
                                    Epilogue
                                </div>

                                <p>I&apos;d like to outline a few more assumptions that were made for this case study that didn&apos;t feel relevant to mention above.</p>

                               <ol className='list-decimal list-inside space-y-3 ml-4'>
                                    <li>This study ignores economic recessions in both the stock and housing markets. At this point, I believe both are equally as likely, so they&apos;re not worth mentioning.</li>
                                    
                                    <li>The study also ignores niche tax rules for both scenarios. For the housing side of the argument, you could defer capital gains tax through a 1031 Exchange, and for the renting side, you could use tax-advantaged brokerage accounts. Both of these would result in more dollars in your pocket, but if we were to outline every tax loophole, this blog post could easily turn into a book.</li>
                                    
                                    <li>I tried to give homeownership the benefit of the doubt wherever possible, choosing to make their profit margins higher and expenses on the low range of averages, so depending on how unlucky you are, the actual difference will likely be much greater.</li>
                                </ol>

                                <p>Finally, I&apos;d like to mention that I&apos;m not trying to be a dick by writing this. As mentioned in the Life is Multicolored section, there are indeed reasons to own a house. But when you break down the $<span className="text-teal-400">917k</span> over <span className="text-teal-400">20</span> years, it amounts to $<span className="text-teal-400">126</span>/day.</p>

                                <p>If you&apos;re able to extract $<span className="text-teal-400">126</span> of value from your house every day for <span className="text-teal-400">20</span> years for any of the previous reasons, then by all means, buy a house.</p>

                                <p>But be aware, that&apos;s $<span className="text-teal-400">126</span> a day to live in a box you can paint any color you want.</p>

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