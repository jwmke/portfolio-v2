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
                              Panda Express Orange Chicken 🍊
                          </div>
                          <div className='text-xl space-y-5 mt-8'>
                            <p>A copycat recipe of Orange Chicken from Panda Express to satisfy your craving without the commute.</p>
                            <p className='text-2xl font-bold pt-3'>Chicken</p>
                            <p>2 lbs, boneless skinless chicken breasts</p>
                            <p>1 large egg</p>
                            <p>0.5 cup, cornstarch</p>
                            <p>0.25 cup, all-purpose OR bread flour</p>
                            <p>~1 tsp, salt</p>
                            <p>~0.5 tsp, white pepper</p>
                            <p>~1 tsp, MSG (Monosodium Glutamate)</p>
                            <p>~1-3 cups, peanut OR vegetable oil</p>
                            <p className='pt-5 text-2xl font-bold'>Sauce</p>
                            <p>3 tbsp, soy sauce</p>
                            <p>0.75 cup, orange juice</p>
                            <p>0.5 cup, granulated sugar</p>
                            <p>2, cloves of garlic, minced</p>
                            <p>1 tsp, ginger, minced</p>
                            <p>2 tbsp, sweet chili sauce</p>
                            <p>1 tbsp, rice wine</p>
                            <p>1 tsp, sesame oil</p>
                            <p>0.5 tsp, red chili flakes</p>
                            <p>0.25 cup, green onion, chopped</p>
                            <p>3 tbsp, water</p>
                            <p>1 tbsp, cornstarch</p>
                            <p>1 tbsp, peanut OR vegetable oil</p>
                            <p>1 tbsp, lemon juice (optional)</p>
                            <p>2 tbsp, hoisin sauce (optional)</p>
                            <p className='pt-5 text-2xl font-bold'>Instructions</p>
                            <p>1. Cut the chicken breasts into ~1&quot; pieces</p>
                            <p>2. Add around 0.5&quot; of oil to a wok (or large skillet) and begin heating to around 375°F</p>
                            <p>3. In one bowl, mix the egg, salt, white pepper, and MSG</p>
                            <p>4. In a second bowl, mix the cornstarch and flour</p>
                            <p>5. In small batches, dip the chicken in the first bowl, then into the second bowl, and then fry them in the wok for 4 to 5 minutes or until golden brown</p>
                            <p>6. Remove the chicken from the oil and place it on a plate lined with a paper towel</p>
                            <p>7. In a new bowl, combine the soy sauce, orange juice, sugar, rice wine, chili sauce, and optionally lemon juice and hoisin sauce</p>
                            <p>8. Clean the wok and heat it up for 15-30 seconds over high heat</p>
                            <p>9. Turn down the heat and add the tablespoon of oil to the wok and sauté the ginger, garlic, green onion, and chili flakes for around 1-2 minutes until fragrant</p>
                            <p>10. Now add the sauce mixture and the chicken to the wok and stir-fry until evenly coated</p>
                            <p>11. Combine the water and the cornstarch in a separate bowl and slowly add the mixture to the wok until the sauce has thickened</p>
                            <p>12. Remove the wok from the heat and drizzle on the sesame oil</p>
                            <p>13. Serve over a 50:50 blend of long-grain white rice and jasmine rice, and enjoy</p>
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