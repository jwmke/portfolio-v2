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
          <div className="w-full min-h-[100vh] flex justify-center p-2 py-6">
            <DiagonalCornerContainer className="w-[60rem]" size={64}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left mx-5 mb-8'>
                          <div className='text-4xl font-bold'>
                            The Perfect(ish) NYC Pizza 🍕
                          </div>
                          <div className='md:text-xl mt-8'>
                            My experimental journey to make the ultimate NYC slice.<br/>
                          </div>
                          {/* <div className='md:text-xl mt-5'>
                            <Link href='/bucketlist' target="_blank" rel="noreferrer"><span className='inline underline hover:text-teal hover:cursor-pointer'>Bucket List</span></Link> Progress as of 1/10/25: <span className='text-navy font-bold'>141/1000</span>
                          </div>
                          <div className="w-full bg-mint rounded-full h-2 mt-2">
                            <div className="bg-navy h-2 rounded-full" style={{"width": ((141/1000.0)*100) + "%"}}></div>
                          </div> */}
                          <div className='md:text-xl space-y-5 mt-8'>
                            <div className='align-text-bottom'>
                              <span className='inline-block'>
                                <p className='pt-2 text-2xl font-bold'>Dough</p>
                              </span>
                              <span className='inline-block ml-3'>  
                                <p className='text-left text-teal-500 md:text-xl'>{"// four 14\" pies, rise in fridge for 24 hours"}</p>
                              </span>
                            </div>
                            <p>520g lukewarm water (~2.25 cups)</p>
                            <p>3.5g dry yeast (~1 tsp)</p>
                            <p>12g sugar (~1 tbsp)</p>
                            <p>17g salt (~1 tbsp)</p>
                            <p>820g bread flour (~6.25 cups)</p>
                            <p>10g olive oil (~1.5 tbsp)</p>
                            <div className='align-text-bottom'>
                              <span className='inline-block'>
                                <p className='pt-5 text-2xl font-bold'>Sauce</p>
                              </span>
                              <span className='inline-block ml-3'>  
                                <p className='text-left text-teal-500 md:text-xl'>{"// four pies worth"}</p>
                              </span>
                            </div>
                            <p>12oz roma tomato sauce</p>
                            <p>6g salt (~1 tsp)</p>
                            <p>8g sugar (~2 tsp)</p>
                            <p>13g olive oil (~1 tbsp)</p>
                            <p>1 garlic clove, minced</p>
                            <p>1g dried oregano (~1 tsp)</p>
                            <p>2g red chili flakes (~1 tsp)</p>
                            <div className='align-text-bottom'>
                              <span className='inline-block'>
                                <p className='pt-5 text-2xl font-bold'>Cheese</p>
                              </span>
                              <span className='inline-block ml-3'>  
                                <p className='text-left text-teal-500 md:text-xl'>{"// per pie"}</p>
                              </span>
                            </div>
                            <p>1oz shredded parmesan</p>
                            <p>5oz-7oz low-moisture, whole milk mozzarella</p>
                            <p className='pt-5 text-2xl font-bold'>Cooking Tips</p>
                            <p>When making the dough, measure the ingredients by weight for best results</p>
                            <p>Put your pizza steel(recommended)/stone on the second highest oven rack before preheating</p>
                            <p>Preheat oven to its highest temperature for at least 25 minutes</p>
                            <p>Optionally add 3-5 fresh basil leaves on top of the pizza before putting it in the oven</p>
                            <p>Cook until crust is browned to your liking, this should take around 6-8 minutes</p>
                            <p>Drizzle a light layer of olive oil over the pizza before baking for extra flavor/aroma</p>
                            <p>Set the pizza on to a cooling rack when it&apos;s done baking for a crispier crust</p>
                            <p>For a little bit extra sweetness and a slight kick, drizzle with <a href='https://mikeshothoney.com/' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Mike&apos;s Hot Honey</a></p>
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