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
                                    
                                    <li><strong>It supports your crackhead hobby</strong> - if you need to have a car lift in your garage, 5 acres of land to raise cows for your raw milk addiction, or set up a blacksmith&apos;s forge in your basement, renting probably isn&apos;t the way to go</li>
                                </ul>

                                <p>That&apos;s it. That&apos;s the whole list. Every other reason for ownership I&apos;ve ever heard either falls into one of the above buckets or is pure cope.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    &quot;I don&apos;t want to throw away money on rent.&quot;
                                </div>

                                <p>This is the counterargument I hear over and over again when it comes to people choosing to buy over renting. It often comes in different flavors too: &quot;It&apos;s an investment,&quot; &quot;I&apos;m building equity,&quot; &quot;I&apos;ll own an asset in the end,&quot; etc., etc., etc.</p>

                                <p>These might have meant something 5 years ago, but today they&apos;re all bullshit.</p>

                                <p>To prove this, the remainder of this blog will attempt to be the most comprehensive case study I can conceive for owning vs. renting an average home in the US.</p>

                                <div className='text-3xl font-bold mt-8 mb-4'>
                                    The $500k Lie
                                </div>

                                <p>Any case study worth its weight in salt must establish all of its assumptions before diving into the issue at hand.</p>

                                <p>For this study, we&apos;ll assume you&apos;re an average young adult who wants to live in a slightly above-average box with no shared walls. You have no desire to ever repair or modify your residence. You&apos;re looking at the suburbs of the average American town of Madison, Wisconsin. You know you love Madison, so you estimate that you&apos;ll live there for 20 years, but, being honest with yourself, you&apos;ll probably end up moving after 5-10 years. Based on your needs, hobbies, and aspirations, you think a 3-Bed / 2-Bath in the $500k range would be ideal.</p>

                                <p>You grab a pen and two napkins and start jotting down the financial details for buying a house of this caliber versus just renting it.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    Napkin #1
                                </div>

                                <p>At the top, you write &quot;HOUSING COSTS.&quot;</p>

                                <p>The most obvious cost is the mortgage. More specifically, the interest associated with the mortgage, as the remainder of your mortgage payment goes towards equity, turning your house into a physical bank account. A bank account that&apos;s capable of being drained by natural disasters at any time. God might be the biggest scammer out there.</p>

                                <p>As of writing this in 2025, a good 30-year mortgage rate in Wisconsin is around 7%, but with a little bit of negotiation and luck, you&apos;re able to get 6.5%. You optimistically tell yourself you&apos;ll refinance when rates go down in the future (they never do).</p>

                                <p>You crunch some numbers, and, assuming you&apos;ll put 20% down and stay the full 20 years, you&apos;ll end up paying $429k in interest over that timespan, and have around $277k towards the principal.</p>

                                <p>Your estimate that your house has appreciated within the bounds of the historical averages of 3-5% and has consistently grown in value by 4% year over year, and is now worth $1.09m, meaning you own $867k in equity.</p>

                                <p>You try to gather all the other recurring expenses that come to your mind. You Google the average cost of each of these expenses, and then conservatively assume they&apos;ll go up by 3% each year (aside from property tax). Homeowners insurance $3000/yr, maintenance $6000/yr, HOA $500/yr, 1.5% property tax $7500/yr. After 20 years, you will have spent $430k on these recurring costs with almost nothing to show for it.</p>

                                <p>If you had invested these payments directly into the S&P 500, assuming its lifetime return rate of 10%, you would have ended up with $1.23m.</p>

                                <p>Lastly, you think of all of the one-time payments you&apos;ll need to pay. The $100k down payment that goes straight to equity, closing costs (Loan Origination, Appraisal, Inspection, Escrow, Reporting, Attorney, and other fees) add up to 2-5% of the property value, in your case, 3%, and immediate repairs range from 2-5%; you get lucky and only end up needing 2% worth.</p>

                                <p>If you had invested this $130,000 at the start of your mortgage term instead, making the same assumptions about the S&P 500 above, it would have grown to $875k in the 20 years.</p>

                                <p>And the final fuck you comes when you&apos;ve decided you&apos;ve finally had enough of this house in those 20 years and want to sell it to move to a new box. The moment you buy the property, 5-6% of its future value is locked up. This is because the seller pays the realtor fees for both the buying and selling agents. So when you&apos;re ready to sell your house at its peak value, you must forfeit 5% of its new valuation of 1.09m in addition to the average closing costs the seller will pay (average is 3% but you&apos;ll assume 2%).</p>

                                <p>So that&apos;s $76k of your future money that you can look forward to being destroyed.</p>

                                <p>You know how you thought that was the final fuck you, it looks like you forgot about one more.</p>

                                <div className='flex justify-center'>
                                    <Image width={400} height={400} src={"/img/blog/sam.jpg"} alt="sam" className=''/>
                                </div>

                                <p>Since your house will have appreciated by $590k, and assuming you take advantage of the Principal Residence Exclusion for a $250k deduction, you&apos;ll owe long-term capital gains of $51k, assuming you don&apos;t do any tax loophole black magic.</p>

                                <div className='text-2xl font-bold mt-8 mb-4'>
                                    Napkin #2
                                </div>

                                <p>You let out an exhausted sigh. Once again, you write at the top, &quot;RENTING COSTS.&quot;</p>

                                <p>Combing through your brain, you realize you can only think of one significant cost, the rent itself. You look at Zillow and see that identical 3 Bed / 2 Baths in Madison are renting for $2500, which happens to be the same monthly number you would be paying for the 30-year mortgage. You assume the average year-over-year rent increase of 3% and crunch a few more numbers.</p>

                                <p>The final cost of renting comes out to be 806k dollars &quot;thrown away.&quot;</p>

                                <p>You keep trying to brainstorm and realize that there are no other costs associated with renting that aren&apos;t also associated with owning (such as utilities and moving costs). The only one that comes to mind is renters insurance, but at $15/month, it&apos;s negligible.</p>

                                <p>Then you turn back to the amounts you had written down on the first napkin and start writing:</p>
                                <br/>
                                    1.23m + 875k = 2.11m - ((profit - initial investment) * 15% LTCG tax) = 1.88m<br/>
                                    1.09m - $76k seller fees - $51k LTCG tax = 963k<br/>
                                    1.88m - 963k = 917k extra dollars in your pocket if you stick to renting.

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

                                <p>Finally, I&apos;d like to mention that I&apos;m not trying to be a dick by writing this. As mentioned in the Life is Multicolored section, there are indeed reasons to own a house. But when you break down the $917k over 20 years, it amounts to $126/day.</p>

                                <p>If you&apos;re able to extract $126 of value from your house every day for 20 years for any of the previous reasons, then by all means, buy a house.</p>

                                <p>But be aware, that&apos;s $126 a day to live in a box you can paint any color you want.</p>

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