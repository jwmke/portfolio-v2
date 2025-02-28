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
          <div className="w-full min-h-[100vh] flex justify-center p-2 lg:py-12">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                        <div className='text-4xl font-bold'>
                            How to Make the World&apos;s Largest Bowl of Cereal
                        </div>
                        <div className='md:text-xl space-y-5 mt-8'>
                        <div className='text-pine'>{"// TL;DR - a step-by-step guide on how to fill a "}<div className='inline line-through'>{"construction dumpster"}</div>{" bowl with over nine thousand pounds of cereal and milk because why not"}</div>
                        <div>*record scratch* Yep, that&apos;s me. You&apos;re probably wondering how I got here.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                                <Image width={700} height={466} src={"/img/blog/knee_deep.jpg"} alt="knee_deep" className=''/>
                                <div>Knee deep in an 8-foot tall dumpster full of Cocoa Puffs</div>
                            </div>
                        </div>
                        <div>To get there, we first need to rewind by 6 months from when this picture was taken, to when my roommate approached me, seemingly innocently, to show me a listing on one of the most problematic digital markets to gain traction since the Silk Road, Facebook Marketplace.</div> {/* https://en.wikipedia.org/wiki/Silk_Road_(marketplace) */}
                        <div className='text-3xl font-bold pt-3'>Step 0: Get Lucky</div>
                        <div className='italic'>&quot;Luck is when an opportunity comes along and you&apos;re prepared for it&quot;<br/>Denzel Washington</div>
                        <div>It all began with a General Mills truck driver, for the sake of anonymity, we&apos;ll call him Carl. Sometime in January 2020, Carl was assigned an objective to transport a trailer of 24 pallets of Cocoa Puffs from one coast to the other.</div>
                        <div>As Carl reached the end of his journey he noticed a fatal mistake he had made at the start of it. This error pertained to the tamper tag on his trailer, or rather, the lack thereof.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/tag.jpg"} alt="tag" className=''/>
                            <div>Tamper tag</div>
                            </div>
                        </div>
                        <div>For those who aren&apos;t as brushed up on your trucker terminology, a tamper tag is a glorified zip tie that&apos;s required by law to seal semi-trailers when they&apos;re transporting consumable goods. If the tag is removed in transit, or, in the case of Carl, forgotten to be put on in the first place, the goods are considered to be compromised, and must either be:</div>
                        <ol className='pl-10'>
                            <li className='pb-2'>1. Incinerated</li>
                            <li className='pb-2'>2. Buried in a landfill</li>
                            <li className='pb-2'>3. Given away for free</li>
                        </ol>
                        <div>With Carl&apos;s villain origin story out of the way, we come back to my roommate who, with a slight grin on his face, is handing his phone to me with a Marketplace listing on-screen.</div>
                        <div className='text-2xl font-bold'>FREE - 24 Pallets of Cocoa Puffs. First Come, First Served.</div>
                        <div>I took a quick glance at the post, &quot;haha, pretty interesting dude&quot;, and as I&apos;m handing his phone back I notice a glisten in his eye as he began to speak.</div>
                        <div>Honestly, I don&apos;t remember a majority of the conversation that followed, likely because my brain repressed it as a response to the traumatic stress of the ensuing clown carnival ride of experiences that followed. However, in essence, my roommate wanted to do something big. Bigger than anything he, or anyone he knew, had done before. And he viewed these 24 pallets of cereal as being the gateway to doing that big thing, agnostic of what that big thing might be.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/pallet.jpg"} alt="pallet" className=''/>
                            <div>Pallet containing a ~600 lb bag of Cocoa Puffs, skid-steer for scale</div>
                            </div>
                        </div>
                        <div>While my head was overflowing with questions, he abruptly asked if I would help him &quot;get the cereal.&quot; I was reluctant, but since our winter break was less than a week away, and I didn&apos;t have any other plans, I figured that helping out with this, whatever <div className='inline italic'>this</div> was going to be, would likely be more entertaining than immediately heading home, so I agreed.</div>
                        <div>He organized a day to meet up with the man who was in possession of the pallets and reached out to around 10 other friends, who turned out to be just as bored and curious as me, to see if they&apos;d be willing to lend a hand.</div>
                        <div>Then, with an army amassed, the ringleader and his troops marched into war.</div>
                        <div className='text-3xl font-bold pt-3'>Step 1: Obtain 10,000 lbs of Cereal</div>
                        <div>The plan was simple. Two phases. In and out.</div>
                        <div className='text-2xl font-bold'>Phase 1, Procuring</div>
                        <ol className='pl-10'>
                            <li className='pb-2'>1. Rent the largest moving truck we could legally drive and attach a trailer to it for good measure</li>
                            <li className='pb-2'>2. Pull up to the cargo yard where the semi-trailer containing the Cocoa Puffs was located</li>
                            <li>3. Fill every square inch of the moving truck with cereal, first with pallets, then with garbage bags full of cereal to fill in all nooks and crannies <div className='italic inline'>(shoutout to Phil and his friends from the cargo yard for letting us use their heavy machines and for offering us some of their weed (we graciously declined))</div></li>
                        </ol>
                        <div>Once dusk was upon us, we would pack up and drive to a self-storage facility 40 minutes from the cargo yard. The second phase of the plan would then be initiated.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/uhaul.jpg"} alt="uhaul" className=''/>
                            <div>The CocoaMobile</div>
                            </div>
                        </div>
                        <div className='text-2xl font-bold'>Phase 2, Hoarding</div>
                        <ol className='pl-10'>
                            <li className='pb-2'>1. Redeem two <div className='inline font-bold'>first-month free</div> deals for the self-storage place&apos;s largest lockers. This would be done under the name of the two of us who drew the shortest straws</li>
                            <li className='pb-2'>2. Discreetly unload ten thousand pounds of cereal into the lockers, this time without heavy machines</li>
                            <li className='pb-2'>3. Wait 29 days before drawing straws again to determine who would use the same deal to sign up for two new lockers, and then proceed to migrate all of the cereal from locker to locker</li>
                            <li>4. Rinse and repeat the previous step until we determine what we&apos;re going to do with ten thousand pounds of Cocoa Puffs</li>
                        </ol>
                        <div>All in all, the first half of the day went according to plan, however, once we approached the second phase, we began to encounter just a few <div className='inline text-lg'>slight</div> <div className='inline text-base'>minor</div> <div className='inline text-sm'>tiny</div> <div className='inline text-xs'>hiccups.</div></div>
                        <div className='text-3xl font-bold pt-3'>Step 2: Survive</div>
                        <div>At around 5:00 PM, as the sun was setting, we departed from the cargo yard, beginning our trek to the self-storage facility.</div>
                        <div>Leading the convoy was a minivan, (also filled to the brim with cereal garbage bags), behind it, the CocoaMobile in all its glory, and the trailing escort vehicle was an SUV carrying the remainder of the infantry.</div>
                        <div>The CocoaMobile may or may not have been just a pound or two <div className='inline line-through'>thousand</div> over its suggested haul limit, so the SUV was strategically following it at the tail end of the convoy, with the passengers of both vehicles on speed dial with each other in case any catastrophes were to arise.</div>
                        <div>With the exception of the fact that the CocoaMobile&apos;s max speed was 10 miles under the highway speed limit, the voyage was going smoothly until around 20 minutes in.</div>
                        <div>Out of nowhere, an NPC truck attempted to cut off CocoaMobile, causing its driver to slam on the brakes. This caused the trailer to force itself off the hitch, meaning the trailer was only attached by the safety chains as the front of it was grinding itself into nothingness against the road.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/cord.jpg"} alt="cord" className=''/>
                            <div>Break-light cord that was guillotined by the trailer&apos;s safety chains, kept as a souvenir</div>
                            </div>
                        </div>
                        <div>It was easy to notice this was happening from the SUV&apos;s point of view, not only because of the light show of sparks that suddenly occurred but also because the trailer began to start violently fishtailing back and forth.</div>
                        <div>The passenger of the SUV nearly immediately called the CocoaMobile and politely screamed at the driver what was happening, and that he needed to speed up, to stop the fishtailing, then slow down and pull over.</div>
                        <div>Luckily the driver was able to get to the side of the highway safely, but if that call would have been made even 10 seconds later, this guide likely would have had a much different title:</div>
                        <div className='text-2xl font-bold'>How to Cause a Three-Hour Delay on Interstate-94 Using Only 5 Tons of Cereal</div>
                        <div>After we reattached the trailer and mentally confirmed that there was now only a {"<5%"} chance that we&apos;d be receiving our deposit back. Our journey resumed, and somehow, we eventually made it to the self-storage facility.</div>
                        <div>I&apos;ll just give the SparkNotes about how the second phase unfolded so that we can get to the bread and butter of the guide quicker.</div>
                        <ul className='pl-10'>
                            <li className='pb-2'>• Having no heavy machinery meant that we had to simply push and drop the pallets off the back of the CocoaMoble, and pray they didn&apos;t explode in the process (most didn&apos;t!)</li>
                            <li className='pb-2'>• The rented lockers were <div className='italic inline'>randomly</div> selected to be on the second floor of the facility, meaning we not only had to bring the cereal to them by hand, but we also had to fit everything in an elevator with an opening barely wider than the width of the pallets</li>
                            <li className='pb-2'>• The garbage bags and pallets were constantly leaking and tearing, leaving piles of Cocoa Puffs everywhere in our path (parking lot, corridors, elevator shaft, etc.) as we were transporting them to the lockers. This resulted in a total loss of around 1000 pounds of puffs</li>
                            <li>• Our unlimited free storage hack was discovered the second time we were transferring the cereal to different lockers, so we had to move all of the cereal to a new self-storage facility, leading to around another 1000 lost pounds of puffs</li>
                        </ul>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/before-after.gif"} alt="before-after" className='' unoptimized={true}/>
                            <div>Proof that we cleaned up because we&apos;re not human garbage</div>
                            </div>
                        </div>
                        <div>Now that we had <div className='inline line-through'>10K</div> <div className='inline line-through'>9K</div> 8K pounds of cereal in our possession, we sat down and asked ourselves, why?</div>
                        <div className='text-3xl font-bold pt-3'>Step 3: <div className='inline line-through'>Contemplate Existence</div> Make a Plan</div>
                        <div className='italic'>&quot;In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.&quot;<br/>Theodore Roosevelt</div>
                        <div>You might be asking yourself, shouldn&apos;t making a plan have been the first step in this guide? A point with which my left brain completely agrees, however, by attempting to craft the perfect plan at the beginning of the adventure, we risked crossing paths with analysis paralysis. That encounter could have ended this whole expedition before it even began.</div>
                        <div>And what better way to force yourself into action than having the commitment of three 2008 Honda Civics worth of breakfast cereal tied to your name.</div>
                        <div>After a bit of brainstorming, it was clear that the only big thing you could really do with this much cereal is build the world&apos;s largest cereal bowl.</div>
                        <div>So with the puffs in our back pocket, we produced a plan, and by we, I mostly mean my roommate because, at the time, I was trying to juggle being a tutor, intern, student, and (poorly) attempting to maintain a social life through extracurriculars.</div>
                        <div className='text-2xl font-bold'>The Plan</div>
                        <div>To maximize clout, we wanted to make this thing official, so we began by reaching out to Guinness for guidelines on how to qualify for breaking the current record. We then proceeded to wait 3 months for a reply since we didn&apos;t pay for their $800 &quot;premium&quot; communication package.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={244} height={244} src={"/img/blog/da_rules.png"} alt="da-rules" className=''/>
                            </div>
                        </div>
                        <div>When they eventually got back to us, they provided a few pages of requirements. Here are a few of the notable ones:</div>
                        <ol className='pl-10'>
                            <li className='pb-2'>1. The bowl must be weighable by scale, rather than by calculating the theoretical weight (i.e. no inground pools or grain silos)</li>
                            <li className='pb-2'>2. Milk or a non-dairy alternative must be poured into the bowl and the milk to the cereal-to-milk ratio cannot be inordinately unreasonable</li>
                            <li className='pb-2'>3. The bowl must look like a bowl (no dumping everything in a shipping container and calling it a day)</li>
                            <li>4. A public health official and an expert in weights and measurements must be present as the bowl is being filled to ensure that all ingredients and procedures are sanitary (yikes) and to periodically record the weight of the bowl as it&apos;s being filled</li>
                        </ol>
                        <div>With da rules in hand, our engineering backgrounds were put to use as we explored our next moves.</div>
                        <div>Through the process of elimination, the only container option for the bowl that logistically made sense was a construction dumpster. We could rent the dumpster and have a truck drop it off on our doorstep, and when everything would be said and done, the truck would return and whisk away the dumpster, cereal, and all of our cleanup problems.</div>
                        <div>The only flaw in this choice of container was that it was obviously not round. So we decided we would design and construct a facade in an attempt to give the dumpster the illusion of being a colossal, semi-spherical, polka-dotted bowl.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/bom.jpg"} alt="schematic" className=''/>
                            <div>Schematic for one of the facade trusses</div>
                            </div>
                        </div>
                        <div>To weigh said bowl, the most economic choice we found was to rent a pair of scales that were traditionally used to weigh semi-trucks. One slight con of using these scales was that they weighed around 450 pounds apiece. This meant we&apos;d also require a means of removing them from the trailer they&apos;d be transported in. So we decided to build a 12-foot-tall gantry crane as well.</div>
                        <div>And then to fill the bowl, we originally decided on using a human-conveyor system with ladders and scaffolding to get the ingredients into the bowl. However, upon 5 seconds of retrospecting on this idea, we realized how many potential downsides that system had.</div>
                        <div>So instead, we chose to build a pair of platforms that could be loaded up with the ingredients and then raised by a forklift so that we could simply pour the ingredients into the bowl.</div>
                        <div>And last but not least, we needed some milk.</div>
                        <div className='text-3xl font-bold pt-3'>Step 4: Got Milk?</div>
                        <div>If you do, we could really use it, all the grocery stores and gas stations in a 5-mile radius are fresh out.</div>
                        <div>Well, perhaps not. In an alternative universe where we weren&apos;t on a budget, purchasing every local gallon of milk would have been excellent for the meme. However, back in reality, we were broke college students.</div>
                        <div>To adhere to the milk guidelines that were given in da rules, we crunched some numbers and estimated that we&apos;d need around 500 gallons. Knowing this, we began to explore our options.</div>
                        <div className='text-2xl font-bold'>Cow Milk?</div>
                        <div>Buying 500 gallons of milk locally, assuming we could hypothetically find and be allowed to purchase that milk much from a store, would have run us at least $1600. So, we decided to get creative instead.</div>
                        <div className='italic'>&quot;Necessity is the mother of invention.&quot;<br/>Plato</div>
                        <div className='text-2xl font-bold'>Powdered Milk?</div>
                        <div>Since no one would actually be eating from the cereal bowl, we decided to be as cheap as possible. Our first idea we combining powdered milk and hose water, but it turns out that mass amounts of powdered milk are also quite expensive. So we ruled this option out.</div>
                        <div className='text-2xl font-bold'>Hipster Milk?</div>
                        <div>Then, we explored the options of making large batches of oat/almond milk. The most budgetary option that we could find here was 50-pound bags of industrial horse oats. So we bought two of those with the intention of grinding the oats in blenders and combining the product with hose water.</div>
                        <div>As the big day drew closer, we realized how excruciatingly laborious it would be to grind 100 pounds of oats, so we nixed that idea and resorted back to powdered milk.</div>
                        <div>We then realized we&apos;d need somewhere to mix and store all 500 gallons of this milk, so we turned to our best frienemy, Facebook Marketplace, once more, and sure enough.</div>
                        <div className='text-2xl font-bold'>For Sale - Ten Used 55 Gallon Oil Drums</div>
                        <div>Another solution dropped right into our laps. If we were to have skipped step 0, this never would&apos;ve happened.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/milk_b.jpg"} alt="milk" className=''/>
                            <div>A glimpse into Operation M.I.L.K.</div>
                            </div>
                        </div>
                        <div>Needless to say, we added these oil drums, along with many other items, to our near-infinite shopping list.</div>
                        <div className='text-3xl font-bold pt-3'>Step 5: Praise Capitalism</div>
                        <div>An observant reader might have noticed that over the course of the last few steps, a modest tab has been racked up. Including but not limited to:</div>
                        <ul className='pl-10'>
                            <li className='pb-2'>• A forklift rental</li>
                            <li className='pb-2'>• Semi truck scales</li>
                            <li className='pb-2'>• Multiple trailer & U-Haul rentals</li>
                            <li className='pb-2'>• The largest construction dumpster feasible</li>
                            <li className='pb-2'>• Steel, tarps, cardboard, and paint</li>
                            <li className='pb-2'>• 10 x 55-gallon oil drums</li>
                            <li className='pb-2'>• Paint mixers, pumps, and powdered milk</li>
                            <li className='pb-2'>• Lumber for a gantry crane</li>
                            <li className='pb-2'>• Lumber for the forklift platforms</li>
                            <li className='pb-2'>• <div className='inline line-through'>A bribe for a public health official</div></li>
                            <li className='pb-2'>• Countless other tools and materials</li>
                            <li>• Merch</li>
                        </ul>
                        <div>Credit must be given where credit is due. My roommate ate the cost for nearly the entirety of the operation. Not only with his wallet but also with his time, as he was the primary planner of the whole ordeal.</div>
                        <div>Also, credit certainly has to be given to the capitalistic system I was born into that not only allows for all this absurdity to take place but actively encourages it.</div>
                        <div>Now, without further ado, it&apos;s time to get to the reason you clicked on this guide in the first place.</div>
                        <div className='text-3xl font-bold pt-3'>Step 6: Showtime</div>
                        <div>It was 4 a.m. on a warm summer night. In less than a dozen hours, the crux of this odyssey would occur. The remaining members of the crew who were still awake duct taped the final <div className='inline italic'>food-grade</div> tarp to the inside of the dumpster and then retreated inside to scavenge any morsel of sleep they could before the day of reckoning was upon them.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/wide_inside.jpg"} alt="inside" className=''/>
                            <div>The night before, T-10 hours</div>
                            </div>
                        </div>
                        <div>The prior week of preparation had been nothing short of insanity.</div>
                        <div>Upon completing one task, two more would appear in its place. We had to powerwash the oil drums, buy/cut/weld the steel trusses, construct the gantry crane and platforms, pick up and unload the scales, forklift, and dumpster, perform a rescue mission on the cereal, draft waivers for our legion of volunteers, coordinate with the officials required by Guinness, etc., etc., etc.</div>
                        <div className='text-2xl font-bold'>Wait a minute, where are we?</div>
                        <div>In addition to the frenzy of completing these tasks, we weren&apos;t even aware of the location of where the bowl would be filled until rather last minute. </div>
                        <div>We had originally reached out to a few stores and businesses with the proposal of making the event a public charity fundraiser in their parking lots. One of these businesses even initially said yes, however, since this was towards the beginning of the pandemic, they revoked their offer out of caution</div>
                        <div>By this point, we were too invested in the current date to postpone the event and find a new venue, so we were left with one final option.</div>
                        <div className='text-2xl font-bold'>Beg.</div>
                        <div>My roommate, with chutzpa far greater than my own, went to his parents and proposed the idea of hosting the ceremony in their backyard, and after a few days of negotiation, they generously allowed him to privately host the event on their property.</div>
                        <div>Despite obstacles emerging left and right throughout the completion of these tasks, the common goal of building and filling this bowl created a sense of camaraderie that pushed us through the storm.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs px-3'>
                            <Image width={255} height={468} src={"/img/blog/crane.jpg"} alt="crane" className=''/>
                            <div>Unloading the scales</div>
                            </div>
                            <div className='inline-block text-center text-xs px-3'>
                            <Image width={244} height={468} src={"/img/blog/facade.jpg"} alt="facade" className=''/>
                            <div>Assembling the facade</div>
                            </div>
                        </div>
                        <div>Eventually, we did fasten the final tarp and retreated for the night. On the other side of that slumber, our demons patiently waited for us, willing to wage war.</div>
                        <div>We woke up at 8 a.m., ate a quick breakfast of anything except cereal, and were out the door.</div>
                        <div>After completing a few finishing touches on the bowl, we had to pick up the puffs. They were currently docked in the driveway of my roommate&apos;s neighborhood friend, all stored in lawn bags for eventual ease of emptying. Multiple trips were taken throughout the day to transport them to my roommate&apos;s front lawn.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/lawn.jpg"} alt="lawn" className=''/>
                            <div>~1/3rd of the cereal</div>
                            </div>
                        </div>
                        <div>As soon as the public health official and weights and measurements expert arrived on the scene, we were off to the races.</div>
                        <div>To ensure everything progressed smoothly, multiple unevenly sized fireteams were assembled from the 20+ volunteers who signed up.</div>
                        <div className='text-2xl font-bold'>Team TREK</div>
                        <div>Responsible for migrating all of the cereal from the neighborhood friend&apos;s driveway to my roommate&apos;s front lawn.</div>
                        <div className='text-2xl font-bold'>Team FILL</div>
                        <div>Responsible for loading the platforms with bags from the front lawn, standing on said platforms as they were lifted to the lip of the bowl by the forklift, and dumping the cereal into the bowl; additionally responsible for having someone in the bowl to evenly spread out the cereal. <div className='inline italic'>*resume flashback*</div></div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/dumping.jpg"} alt="dump" className=''/>
                            <div>Chocolate rain</div>
                            </div>
                        </div>
                        <div className='text-2xl font-bold'>Team SKIM</div>
                        <div>Responsible for creating milk batches in an oil drum that we angle-grinded the top off of, and then pumping said milk into the other empty oil drums to later be used by Team FILL.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/pour.jpg"} alt="pour" className=''/>
                            <div>Two lethal doses of calcium</div>
                            </div>
                        </div>
                        <div className='text-2xl font-bold'>Team BOSS</div>
                        <div>Responsible for maintaining the stereotype that any well-functioning system requires a minimum threshold of bureaucracy.</div>
                        <div>And when you morph these teams together, add a bit of water and sunshine, and let them do their thing for 4-6 hours, bada-bing bada-boom:</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/final.jpg"} alt="bowl" className=''/>
                            <div>The world&apos;s largest bowl of cereal</div>
                            </div>
                        </div>
                        <div>The total weight came out to be 9,045 pounds of stale, salmonella-inducing breakfast goodness. More than 2.5 times the previous world record.</div>
                        <div>As an aside, this number only included around 200 gallons of milk, compared to the 500 we had made. We had to postpone pouring the remainder of the milk in as the public health official had to leave early, and we didn&apos;t want to risk doing anything off record. But deep down in my heart, we broke 10,000 pounds.</div>
                        <div>Somehow, we had made it this far without any catastrophes, so what else was there to do at this point but to celebrate?</div>
                        <div className='text-3xl font-bold pt-3'>Step 7: Swim in It</div>
                        <div>Not much to say here, just a few friends lounging in a dumpster, inhaling enough chocolate dust to cause a new form of lung cancer.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={468} height={244} src={"/img/blog/swim.jpg"} alt="swimming" className=''/>
                            <div>In love with the cocoa</div>
                            </div>
                        </div>
                        <div>A few hours after this picture was taken, the construction dumpster rental company swung by to reclaim what was theirs, and, per what we initially agreed with them, we gave them an additional tip in exchange for them getting rid of the cereal at a composting facility instead of a landfill. </div>
                        <div className='pb-96'>Now, all that was left was to submit the necessary paperwork and evidence to Guinness and wait...</div>
                        <div className='pb-96'>And wait some more...</div>
                        <div className='pb-96'>Just a few more weeks...</div>
                        <div className='pb-96'>Any day now...</div>
                        <div className='italic'>*You have 1 new email from Guinness*</div>
                        <div className='text-2xl font-bold'>We regret to inform you that your world record application has been denied.</div>
                        <div className='flex justify-center'>
                            <div className='inline-block text-center text-xs'>
                            <Image width={244} height={244} src={"/img/blog/bruh.gif"} alt="bruh" className='' unoptimized={true}/>
                            </div>
                        </div>
                        <div className='text-3xl font-bold pt-3'>Step 8: Condemn Capitalism</div>
                        <div>Upon reading this email, my roommate decided he was going to speedrun (any %) the 5 stages of grief.</div>
                        <div>&quot;This has to be some sort of misunderstanding,&quot; he told me, &quot;we triple-checked every piece of information they asked for.&quot; He wasn&apos;t even over-exaggerating.</div>
                        <div>But on the surface the rationale for the decision was clear.</div>
                        <div>The email stated that &quot;after an extensive review of your documentation, the pre-tared weight of the bowl was found to be missing.&quot;</div>
                        <div>Even though this information was never explicitly being asked for in the first place, no worries, we thought. Fortunately, we had that information on hand, so we sent it over to them and played the waiting game once more.</div>
                        <div>However, this time, they replied much more quickly.</div>
                        <div className='italic'>&quot;The decision made on your application is final and cannot be amended.&quot;<br/>Guinness employee who enjoys kicking puppies</div>
                        <div>And just like that, our golden ticket to being immortalized in history, at least, temporarily, metamorphosized into a reasonably expensive lesson.</div>
                        <div className='text-2xl font-bold'>Guinness is Pay-to-Win</div>
                        <div>To preface this theory, I&apos;d like to point out that not only did we not opt into paying $800 for Guinness&apos; premium communication package, but we also declined their offer for an adjudicator to fly from Ireland on our dime to <div className='inline italic'>potentially</div> recognize our record the same day it happened for the low price of $16,000.</div>
                        <div>Now if you&apos;re as cynical as me when reading opinions on the internet, you might think that I&apos;m being a sore loser and that I should move on with my life instead of jumping to such a conclusion.</div>
                        <div>However, this speculation isn&apos;t exclusive to me. With a single Google search, articles such as <a target="_blank" rel="noreferrer" href='https://www.vox.com/2015/3/6/8157639/guinness-world-record-business' className='inline underline hover:text-mint'>this</a> and <a target="_blank" rel="noreferrer" href='https://pawebpage.com/2252/archive/guinness-world-records-from-faithful-to-fraudulent/' className='inline underline hover:text-mint'>this</a> appear that support the claim that &quot;Guinness has a track record of approving or disapproving record attempts based on whether or not it will benefit their corporate image.&quot; But then again, anyone can write anything on the internet.</div>
                        <div>Admittedly, the final picture of the bowl didn&apos;t look as visually stunning as it could&apos;ve been. But this notion coupled with the fact that we didn&apos;t pay Guinness a single cent led us to the conclusion that we were rejected not based on a technicality, but instead, for the sake of preserving Guinness&apos; brand (i.e. $$$).</div>
                        <div>But honestly, I can&apos;t blame them. They&apos;re a for-profit business, not a charity. I think that it&apos;s simply unfortunate that they assert themselves as being &quot;the world&apos;s unrivaled authority on record-breaking achievement&quot; while simultaneously having to play by the rules of the game of capitalism to survive. But I digress.</div>
                        <div className='text-3xl font-bold pt-3'>Step 9: Reject Authority</div>
                        <div>By Guinness&apos; standard, we were out of the race, but as the ashes fell and the chocolatey dust settled, we were left with nothing but our own tales to commemorate this feat.</div>
                        <div>With our heads held high, we knew that, together, we had achieved the triumph that we had originally set out to achieve, regardless of what any self-proclaimed authority could tell us otherwise.</div>
                        <div>And who knows, in the end, maybe getting denied by Guinness was the better of the two outcomes. Not only did it humble us into awareness of the primitive realities of this world, but it also allowed us to shift our hindsight to the aspects of the whole endeavor which we might&apos;ve considered lesser otherwise.</div>
                        <div>Now, armed with this knowledge, go embark into the world, and make an oversized cereal bowl of your own.</div>
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