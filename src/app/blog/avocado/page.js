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
                              Easy Avocado Toast 🥑
                          </div>
                          <div className='md:text-xl space-y-5 mt-8'>
                            <p>The only snack in my diet that&apos;s both healthy and somehow tastes good. Here&apos;s how to quickly make it with minimal cleanup involved.</p>
                            <p className='text-2xl font-bold pt-3'>Ingredients</p>
                            <p>2 Slices of Bread (Sourdough or Whole Grain)</p>
                            <p>1 Hass Avocado</p>
                            <p>.5 tsp, Extra Virgin Olive Oil</p>
                            <p>.25 tsp, Sea Salt</p>
                            <p>.25 tsp, White Pepper</p>
                            <p>.25 tsp, <a href='https://www.traderjoes.com/home/products/pdp/ground-fermented-black-garlic-067160' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Ground Fermented Black Garlic</a> (or Garlic Powder)</p>
                            <p>.25 tsp, Red Chili Flakes </p>
                            <p>.5 tsp, Sesame Seeds</p>
                            <p>1/4 cup, <a href='https://www.culinaryhill.com/how-to-toast-walnuts/' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Toasted Walnuts</a> (optional)</p>
                            <p className='text-2xl font-bold pt-3'>Preparation Tips</p>
                            <p>While toasting the bread, use a large knife to slice the Avocado into quarters, vertically.</p>
                            <p>For each quarter, peel off the skin, slice it vertically 2-3 times, and then set the slices aside.</p>
                            <p>Lightly drizzle the EVOO on the toasted bread slices before laying the avocado wedges on them.</p>
                            <p>Lastly, sprinkle the seasoning blend over the avocado toast and enjoy.</p>
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