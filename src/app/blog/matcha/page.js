import Grain from "../../components/Grain"
import DiagonalCornerContainer from "../../components/DiagonalCornerContainer";
import Image from "next/image";
import { Lato } from "next/font/google";
import recipeData from '../../data/recipeData.json';

const recipeData_item = recipeData.find(r => r.route === '/blog/matcha');

export const metadata = {
  title: recipeData_item.name,
  description: `A delicious recipe for ${recipeData_item.name}`,
}

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
                              Iced Vanilla Matcha Latte 🍵
                          </div>
                          <div className='md:text-xl space-y-5 mt-8'>
                            <p>1/10 the price and 1/2 as much sugar as the Starbucks <a href='https://www.starbucks.com/menu/product/468/iced/nutrition' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>alternative</a>, yet somehow tastes that much better since you made it yourself.</p>
                            <p className='text-2xl font-bold pt-3'>Ingredients</p>
                            <p>1.5 tsp, Matcha Powder</p>
                            <p>1/4 cup, Boiling Water</p>
                            <p>1 cup, Milk</p>
                            <p>1/2 cup, Ice</p>
                            <p>2 tsp, Vanilla Syrup</p>
                            <p>1 tbsp, Granulated Sugar</p>
                            <p className='text-2xl font-bold pt-3'>Instructions</p>
                            <p>0. Sift matcha powder into a cup to avoid clumping (optional)</p>
                            <p>1. Pour the boiling water into the cup with the matcha powder and whisk thoroughly</p>
                            <p>2. Add the milk, ice, vanilla and sugar to the glass</p>
                            <p>3. Stir, and enjoy</p>
                            <p></p>
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