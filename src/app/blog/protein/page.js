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
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
                <div className={text.className}>
                    <div className='mx-auto pt-8 md:px-20'>
                        <div className='text-white text-left sm:mx-5 mb-8'>
                          <div className='text-4xl font-bold'>
                              Zeus&apos; 1K Calorie Chocolate Protein Shake 🏋️
                          </div>
                          <div className='md:text-xl space-y-5 mt-8'>
                            <p>A peanut butter, banana, and chocolate milkshake that contains 65g of protein, 1100 calories, and makes for the perfect post-workout treat.</p>
                            <p className='text-2xl font-bold pt-3'>Ingredients</p>
                            <p>1 banana</p>
                            <p>1 cup, whole milk</p>
                            <p>1 5oz pack, greek yogurt</p>
                            <p>4 tbsp, peanut butter</p>
                            <p>1/4 cup, chocolate whey protein powder</p>
                            <p>1.5 tbsp, olive/coconut oil</p>
                            <p>0.5 tbsp, cocoa powder</p>
                            <p>2 ice cubes</p>
                            <p>5g, creatine monohydrate (optional)</p>
                            <p className='pt-5 text-2xl font-bold'>Instructions</p>
                            <p>Throw everything into a blender and puree for 30-45 seconds</p>
                            <p>To avoid powder clumps at the bottom of the blender, add the milk before the powder ingredients</p>
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