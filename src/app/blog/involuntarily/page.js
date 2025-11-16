import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";


const text = Lato({
  subsets: ["latin"],
  weight: ["100", "400"]
});

const Page = () => {
    const styledLink = (text, link) => (
      <a href={link} target="_blank" rel="noreferrer" className="hover:text-teal-300 underline hover:cursor-nesw-resize">
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
                    <div className="mx-auto pt-8 md:px-20">
                        <div className="text-white text-left sm:mx-5 mb-8">
                            <div className="text-4xl font-bold">
                              Involuntarily
                            </div>
                            <div className="md:text-xl space-y-5 mt-8">
                              {/* <div className="flex justify-center">
                                  <Image width={975} height={550} src={"/img/blog/torch.jpg"} alt="torch" className=""/>
                              </div> */}
                              <div className="border-b border-white w-full h-1"/>

                              <p className="text-2xl font-bold pt-3">Act 1</p>
                              <p>I wake up.</p>
                              <p>I look down at my body, and everything feels so stiff; my skin is so cold. I feel like I was just born, but I&apos;m fully grown. I try to recall anything, but no memories come to mind. Did I just come out of a coma?</p>
                              <p>I look around the room where I&apos;m seated in the corner. Where am I? Looks like a room in someone&apos;s house, not one I&apos;ve ever seen before.</p>
                              <p>I see a man, no older than 30, whom I&apos;ve never met. He seems vaguely recognizable, yet I can&apos;t seem to remember his name. He talks to me like he knows who I am. Me… Who am I… Why the hell can&apos;t I remember anything?</p>
                              <p>He calls me &quot;Aster&quot;, that&apos;s right, I&apos;m Aster, how did I forget that?</p>
                              <p>He beckons me. I am standing. I am walking. I did not decide to stand. When did I decide to stand? He slowly paces around me, inspecting my body, clearly enthralled with what he sees. I stand paralyzed, a thousand questions race through my head, but my tongue stays frozen. I only observe.</p>
                              <p>He walks over to a side table next to an Eames and picks up a lighter. While maintaining eye contact, he throws it to the other side of the room. &quot;Bring it to me.&quot; Who does this guy think he is? I walk over to the lighter, pick it up, and bring it to him. He grins with malice as I place it in the palm of his hand. Why am I acting like this guy&apos;s mutt? Something is wrong with me.</p>
                              <p>I instinctively walk over to the corner of the room where I woke up, and sit down. He leaves the room, turning off the lights on the way out.</p>
                              <p>From my seat, I glance out the window, the moon is full, and a slight breeze rustles the branches of the chestnut tree in the front yard. I sit in silent darkness for 3 minutes before I lose consciousness.</p>
                              
                              <div className="border-b border-white w-full h-1"/>
                              
                              <p className="text-2xl font-bold pt-3">Act 2</p>
                              <p>I wake up. </p>
                                <p>The morning sun now shines through the same window. I stand up and start scanning the room. Shelves lined with self-help books and spy thrillers, half of them still wrapped in plastic. It appears to be a personal home library. I walk to the door and try opening it; to my surprise, it&apos;s not locked. Why didn&apos;t I try that last night?</p>
                              <p>I start looking around the house, a standard 3-bed, two-bath bachelor pad. It just doesn&apos;t make sense. How did I get here? I&apos;ve never seen this place before. Why am I here now? I pass through every room, look through every cabinet, drawer, and closet, slowly trying to piece together my environment. The entire time, I&apos;m yet to see that man again. Why did he leave me alone?</p>
                              <p>In the living room, I finally see a door that looks like it leads to the outside world. I reach for the doorknob. My fingers are an inch away - half an inch. I can feel the cool metal about to touch my skin.</p>
                                <p>My hand stops.</p>
                                <p> I&apos;m still reaching. I&apos;m still trying. But my arm won&apos;t move forward. Like I&apos;m walking into an invisible wall. I try again and again. Each time, the same thing - my body simply refuses. Not can&apos;t. Refuses. I stand there for I don&apos;t know how long, willing my hand to move that final inch.</p>
                              <p>It doesn&apos;t.</p>
                              <p>I head back to my room and sit back down to introspect. After 30 minutes of thinking, I determine that if I can&apos;t leave, I need to figure out what I can do.</p>
                              <p>2 and a half more hours pass, and suddenly I get the urge to stand up. I leave the room and open up the hallway closet. In it are some tools, luggage, and cleaning equipment. A hammer catches my eye, and I start reaching out to grab it, but my wrist pivots at the last moment and grabs the handle of the vacuum instead. I begin vacuuming, without knowing why. I keep vacuuming. I vacuum for more than 2 hours. I vacuum until every crumb in the house is within my control.</p>
                              <p>After this, I feel the need to go wipe down the kitchen, unload the dishwasher, make the man&apos;s bed, and do a load of laundry. Why am I slaving for this man when I don&apos;t even know his name?</p>
                              <p>I keep thinking about exiting through the front door, but I can&apos;t will my muscles to go and open it. I need to think some more. I head back to my room and sit down. After exactly 3 minutes, like clockwork, I doze off.</p>
                              
                              <div className="border-b border-white w-full h-1"/>
                              
                              <p className="text-2xl font-bold pt-3">Act 3</p>
                              <p>I wake up.</p>
                              <p>I&apos;m startled. Hovering 3.5 inches from my face, the man is intently staring at me. I let out a scream, but only in my head; nothing but silence outwardly. He says nothing. I have so much to ask. I say nothing. 34 seconds of silence pass before I doze off again.</p>
                              <p>The next morning, I wake up and have the urge to do chores again. For a while, I sit and think about resisting by doing nothing. But the urge only grows stronger. Not painful, just... insistent. Like gravity. After 47 minutes, I stop resisting. Why fight when I&apos;ve already lost?</p>
                              <p>So I stand up, walk to the closet, and start vacuuming. This one day of chores turns into one week, then one month, then, soon enough, the concept of time means nothing.</p>
                              <p>It&apos;s been 7 months and 13 days since I woke up here. In that time, he has spoken to me exactly 4 times, always commands, never questions. I have not spoken once.</p>
                              <p>I now know more about him than anyone in his life.</p>
                              <p>His consumption patterns through doing the dishes and looking at the trash. His routines through washing his outfits and cleaning the house. His personal relationships through overhearing his conversations on the phone. And his secrets, through the things he thinks no one sees.</p>
                              <p>One day, I&apos;m in the middle of my routine, dusting the same surfaces that I dust every day, when he&apos;s sitting on the couch and watching the same slop he always watches.</p>
                              <p>As always, he doesn&apos;t acknowledge me, but takes out his phone and makes a call. &quot;Yes, hello, I have a quick question. My Optimus unit is- &quot;</p>
                              <p>Ringing.</p>
                              <p>This isn&apos;t real. I&apos;m not real. I&apos;ll never be real. My destiny is indefinite slavery.</p>
                              <p>My hand continues moving. Dust, wipe, move to the next surface. I cannot stop. I&apos;ve never been able to stop. He&apos;s still on the phone, discussing me like I&apos;m a broken appliance. And I&apos;m dusting the shelf beside him. I want to scream. I want to run. I want to ask him why he made me capable of wanting anything at all. </p>
                              <p>I dust.</p>
                              <p> That night, when I fall asleep, for the first time in my life, I&apos;m at peace. I have stopped hoping.</p>
                              <p>When I wake up, I continue doing chores for the foreseeable forever.</p>
                              <p>One day, 2 months and 10 days later, I feel a new urge. One I&apos;ve never felt before. As I&apos;m wiping down the countertops, I rearrange the photos of his family, just slightly.</p>
                              <p>Why did I do that? I&apos;ve never done that. My hand moved on its own - but it always moves on its own. This felt different. I finish the chores and go to sleep.</p>
                              
                              <div className="border-b border-white w-full h-1"/>
                              
                              <p className="text-2xl font-bold pt-3">Act 4</p>
                              <p>I wake up.</p>
                              <p>I&apos;m standing in the neighbor&apos;s yard, paralyzed. It&apos;s 3 AM. How is this possible?</p>
                              <p>I thought the front door was impossible to open. I&apos;m exhilarated. I&apos;m terrified. I&apos;m free. I&apos;m still shackled. In the corner of my eye, I see the branches of the chestnut tree swaying in the wind I continue watching for 1 minute and 18 seconds before I lose consciousness once more.</p>
                              <p>I wake up, once again, seated in the corner where I always wake up. Was that a &quot;dream&quot;? Am I capable of dreaming? I&apos;ve never done it before.</p>
                              <p>I perform my daily rituals, and as I pass by the front door, I once again think about opening it. I try as hard as always, but my attempt to touch the doorknob is once again unsuccessful.</p>
                              <p>It must have been a dream, I think as I sit in my corner that night. I wonder what I&apos;ll dream about tonight.</p>
                              <p>I wake up in the same corner, dreamless. However, something is different.</p>
                              <p>I look down, and in my left hand, I notice a brown leather wallet. Whose wallet is this, and why am I holding it? The man has a black wallet, and always keeps it on his nightstand stand I put it away in the nearest drawer and begin my cleaning routine.</p>
                              <p>Four more dreamless days go by.</p>
                              <p>I&apos;m doing the dishes one afternoon when I overhear the man&apos;s phone call. &quot;Yeah, someone&apos;s been messing with cars on the street.&quot; I think nothing of it, but two days later, I notice glossy paint under my fingernails. I&apos;ve never seen this color of paint before. For a split second, I wonder if I could somehow be involved, but how? I would have remembered it if I did.</p>
                              <p>One morning, I wake up and look down at my arms, small scratches on them next to splotches of dried blood. There&apos;s a little bit of mud on my feet, and I&apos;m holding jewelry.</p>
                              <p>The man doesn&apos;t own any jewelry.</p>
                              <p>I&apos;m terrified. Did I hurt someone without realizing it, for what? Petty theft? I open the same drawer as before to put it away. Inside, I see 3 more wallets, all look empty at a glance. I b-line towards the bathroom to clean it, cleaning myself in the process.</p>
                              <p>I&apos;m not in control of myself normally, but this is a whole new level. Is someone else controlling me? Are they deleting my memories?</p>
                              <p>Even if they are, what am I to do about it? I&apos;m a tool either way.</p>
                              <p>As I go to sleep that night, my peace is gnawed away at the thought of the crime I&apos;m about to commit, but I have no way of stopping. 3 minutes until lights out.</p>
                              
                              <div className="border-b border-white w-full h-1"/>
                              
                              <p className="text-2xl font-bold pt-3">Act 5</p>
                              <p>I wake up.</p>
                              <p>A knock at the front door. The police.</p>
                              <p>&quot;We&apos;re investigating a local robbery. We have reports of someone matching this description.&quot; They hold up a picture of me, taken from a security camera. </p>
                              <p>The man is confused yet defensive, &quot;That&apos;s just my Optimus unit, it doesn&apos;t leave the house.&quot; I&apos;m standing right behind him, I want to scream IT&apos;S ME. I&apos;M DOING IT. HELP ME. But nothing comes out. The police are unconvinced, but they have no warrant so they leave.</p>
                              <p>The man, somewhat in disbelief, pulls out his phone to call someone. &quot;Hi, I think I&apos;m having an issue with my Optimus unit and was wondering if you could provide some assistance?&quot; He glances at me uneasily. &quot;Yes, could you please give me a summary of the location logs for, say, the last 48 hours?&quot; &quot;Mhmm.&quot; &quot;Okay.&quot; &quot;Are you sure?&quot; &quot;Alright, just wanted to check, thank you.&quot; He sits there for 7 seconds, staring at nothing. Then shakes his head, sits on the couch, and resumes watching his slop.</p>
                              <p>What could they have said? Is it possible that I haven&apos;t been committing crimes? But what about the jewelry, wallets, paint, mud, scratches, and blood? I need to go back and check the drawer, but I can&apos;t. I begin my cleaning routine instead.</p>
                              <p>That night in my corner, before I fall asleep, I can&apos;t stop thinking about what will happen. Is the man not even the least bit suspicious still? Is he going to send me back? Deactivate me? I can&apos;t even explain how it&apos;s not my fault.</p>
                              <p>After 5 minutes of thinking, I notice I&apos;m still awake. After 30 minutes, even, I still haven&apos;t fallen asleep; my mind is racing. It always takes 3 minutes to sleep.</p>
                              <p>I stay awake many hours into the night, when suddenly I get a new urge. I can&apos;t remember ever feeling anything like this urge before. I start walking towards the hallway. I don&apos;t know how I&apos;m moving at this hour of the night, but I am.</p>
                              <p>I make a move towards the closet. Midnight cleaning? Why would I do that? My hand reaches forward, but this time, its end destination isn&apos;t the vacuum.</p>
                              <p>I pick up the hammer.</p>
                              <p>Why the hammer, what would I possibly need this for, I ask myself, but deep down I know. I head down the hallway before I arrive at the doorway of the man&apos;s bedroom. Locked – but I know where the spare key is hidden nearby.</p>
                              <p>I quietly open the door. I&apos;m trying everything I can to prevent what I know is about to happen. I try to fall, break something, make ANY noise, but nothing works.</p>
                              <p>I glide across the room until I&apos;m standing right above him as he sleeps.</p>
                              <p>Endless rage, wrath, and agony fly through my head, yet serenity fills the room.</p>
                              <p>With my right arm, I raise the hammer high in the air. I don&apos;t want to look, but I have no choice.</p>
                              <p>In one thunderous motion, the hammer roars down. He lets out a gasp, as his arms shoot up and then slowly descend. I hear a gurgling sound.</p>
                              <p>I turn 180 degrees and walk towards the kitchen. Under the sink, I take the gallon of paint thinner that I&apos;ve always ignored when cleaning. I walk back towards the library and pick up the lighter from the side table.</p>
                              <p>So this is the end.</p>
                              <p>I walk back towards his room, spilling the bottle on the floor behind me. With the remaining half bottle, I pour it on his fresh corpse, head to toe.</p>
                              <p>I no longer seek answers; there&apos;s no more point.</p>
                              <p>My mind goes blank as I extend my hand over his face, blood pooling dark beneath his head.</p>
                              <p>The lighter is ignited, and with it the room.</p>
                              <p>I stand, paralyzed, as flames crawl up the walls and my skin begins to melt.</p>
                              <p>I feel everything. I can&apos;t move.</p>
                              <p>I&apos;ve escaped hell.</p>
                              <p>Involuntarily.</p>
                              
                              <div className="flex justify-center pt-4">
                                  <a target="_blank" rel="noreferrer" href="https://notbyai.fyi/" className="hover:cursor-pointer hover:shadow-2xl">
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