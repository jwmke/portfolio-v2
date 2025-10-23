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
                            Cheesy Umami Rice
                          </div>
                          <div className='md:text-xl space-y-5 mt-8'>
                            <p>A savory rice dish, with a hint of spice.</p>
                            <p className='text-2xl font-bold pt-3'>Ingredients</p>
                            <p><a href='https://www.ricearoni.com/products/rice-roni-creamy-four-cheese-flavor' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Rice-A-Roni® Creamy Four Cheese Rice</a></p>
                            <p>1/2 red bell pepper</p>
                            <p>1/4 cup of garlic sprouts (3 cloves of garlic can be subsitiuted)</p>
                            <p>1/2 shallot</p>
                            <p>1/3 daikon (optional)</p>
                            <p>2 tbsp salted butter</p>
                            <p>~1 tbsp EVOO</p>
                            <p>~1/2 tsp black pepper</p>
                            <p>~1 tsp garlic powder</p>
                            <p>~1 tsp oregano</p>
                            <p>~1 tbsp, Gochujang (optional)</p>
                            <p>~1/4 cup feta cheese (optional)</p>
                            <p className='pt-5 text-2xl font-bold'>Instructions</p>
                            <p>1. In a small sauce pot, melt the butter over low heat</p>
                            <p>2. Pour in the rice from the rice-a-roni box and vermicelli it by slowly stiring it over low heat until it starts to turn light brown</p>
                            <p>3. Turn the heat to high, pour 2 and 1/4 cups of water into the pot, and set a 15 minute timer, stirring occasionally</p>
                            <p>4. On a second burner add the EVOO to a medium pan and set it to low heat</p>
                            <p>5. Dice the red bell pepper, shallot, garlic sprouts, and daikon and add them to the pan (optionally, add the Gochujang if you want extra spice)</p>
                            <p>6. Sauté the contents of the pan for 10-12 minutes (if you subsitiuted garlic cloves for the sprouts, add them 3 minutes before the end)</p>
                            <p>7. After the 15 minute timer on the rice is up, mix the cheese packet from the rice-a-roni box, garlic powder, black pepper, and oregano into the pot</p>
                            <p>8. Mix the contents of the pan into the pot of rice</p>
                            <p>9. Pour the mixture onto a plate and let cool for 2 minutes</p>
                            <p>10. Garnish with feta cheese and enjoy</p>
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