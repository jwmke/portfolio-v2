import Image from "next/image";
import { MdRecycling } from "react-icons/md";
import { PiIntersectThreeLight } from "react-icons/pi";
import ImageBox from "./ImageBox";
import CornerClip from "./CornerClip";
import Link from "next/link";

import { Flow_Block, Lato } from "next/font/google";

const block = Flow_Block({
    subsets: ['latin'],
    weight: ["400"]
});

const text = Lato({
    subsets: ['latin'],
    weight: ["400"]
});


const RightBox = () => {
    return <div className="relative min-[1400px]:min-w-[30rem] min-w-[35.5rem] 2xl:min-w-[35.5rem] max-w-[38rem]">

        <div className="absolute w-[75%] 2xl:right-[25.5rem] min-[1400px]:right-[20.25rem] min-[1400px]:block hidden -top-[32rem] h-[1px] mt-4 bg-white"/>
        <div className="absolute min-[1400px]:w-[15.75rem] -rotate-45 h-[1px] 2xl:right-[23.25rem] w-[20rem] min-[1400px]:right-[18rem] right-[19.9rem] -top-[26.75rem] min-[1400px]:-top-[25.4rem] bg-white"/>

        <div className="absolute h-[27.75rem] bottom-[17.5rem] left-1 flex flex-col justify-end">
            <div className="mb-[1.75rem]">
                <CornerClip />
            </div>
            <a className="hover:cursor-ne-resize hover:bg-teal-900 h-[13.2rem] mb-1" href="https://github.com/jwmke/eeg" 
                    target="_blank"
                    rel="noopener noreferrer">
                <ImageBox className="relative inline-block">
                    <Image className="" src={"/img/eeg2t.png"} width={130} height={200} alt="EEG"/>
                </ImageBox>
            </a>
        </div>
        <div className="text-white flex flex-col items-start w-full relative pt-[1.125rem]">
            <div className="absolute bottom-[3.5rem] 2xl:bottom-[3.75rem] text-sm left-0.5">
                <p className={text.className}>
                    Occupation
                </p>
            </div>
            <div className="font-thin text-[2.5rem] 2xl:text-[2.8rem] absolute bottom-1 2xl:bottom-0.5">
                <p className={text.className}>
                    Bit Manipulator
                </p>
            </div>
        </div>
        <div className="w-[calc(100%-2.4rem)] h-[1px] bg-white"/>
        <div className="h-48 w-full flex 2xl:justify-between min-[1400px]:justify-end justify-between">
            <div className="w-[33rem] absolute -top-[17rem] -left-[32.75rem] h-[30rem] rotate-90 text-white text-[.25rem] tracking-[.65em]">
                <p className={block.className}>
                    &quot;The Industrial Revolution and its consequences have been a disaster for the human race.&quot; - Dr. Kaczynski
                </p>
            </div>
            <div className="absolute -right-16 -top-6 w-[7.5rem] h-[1px] bg-white -rotate-45"/>
            <div className="text-[.55rem] text-teal-700 mt-6 relative left-0 min-[1400px]:hidden block 2xl:block">
                <p>buffer = OPENSSL_malloc(1 + 2 + payload + padding);</p>
                <p className="h-3"/>
                <p>bp = buffer;</p>
                <p>*bp++ = TLS1_HB_RESPONSE;</p>
                <p>s2n(payload, bp);</p>
                <p>memcpy(bp, pl, payload);</p>
                <p>bp += payload;</p>
                <p>RAND_pseudo_bytes(bp, padding);</p>
                <p className="h-3"/>
                <p>r = dtls1_write_bytes(s, TLS1_RT_HEARTBEAT, buffer,</p>
                <p>3 + payload + padding);</p>
            </div>
            <div className="absolute 2xl:top-[4.5rem] top-[4.5rem] min-[1400px]:left-6 min-[1400px]:top-[3.5rem] 2xl:left-[11.75rem] left-[11.75rem] rotate-[0deg]">
                <Image src={"/img/molecule.png"} height={150} width={200} alt="Molecule"/>
            </div>
            <div className="-rotate-90 relative right-6 -top-10">
                <Image src={'/img/king.png'} height={140} width={150} alt="King"/>
            </div>
            <div className="flex space-x-2 absolute bottom-4 right-0">
                <div className="mt-0.5 mr-1">
                    <a 
                    href="https://www.goodreads.com/jwmke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <div className="group">
                        <Image 
                        src="/img/ce.png" 
                        width={50} 
                        height={30} 
                        alt="CE"
                        className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                        />
                    </div>
                    </a>
                </div>

                <a 
                    href="https://github.com/jwmke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdRecycling className="text-white text-[2.5rem] hover:text-teal-700 transition-all duration-200"/>
                </a>

                <Link href="/blog">
                    <div className="group">
                    <Image 
                        src="/img/fire2.png" 
                        width={30} 
                        height={40} 
                        alt="Fire"
                        className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                    />
                    </div>
                </Link>

                <Link href="/dojoe">
                    <PiIntersectThreeLight className="text-white text-[2.5rem] hover:text-teal-700 transition-all duration-200"/>
                </Link>

                <a 
                    href="https://x.com/jwmke"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="group">
                    <Image 
                        src="/img/trash.png" 
                        width={36} 
                        height={30} 
                        alt="Trash"
                        className="transition-all duration-200 group-hover:[filter:invert(71%)_sepia(98%)_saturate(387%)_hue-rotate(123deg)_brightness(95%)_contrast(101%)]"
                    />
                    </div>
                </a>
                </div>
        </div>
    </div>
}

export default RightBox