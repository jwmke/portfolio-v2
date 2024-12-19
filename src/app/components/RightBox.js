import Image from "next/image";
import { MdRecycling } from "react-icons/md";
import { PiIntersectThreeLight } from "react-icons/pi";
import ImageBox from "./ImageBox";
import CornerClip from "./CornerClip";

import { Flow_Block } from "next/font/google";

const block = Flow_Block({
    subsets: ['latin'],
    weight: ["400"]
});


const RightBox = () => {
    return <div className="relative min-w-[30rem] 2xl:min-w-[35.5rem] max-w-[38rem]">

        <div className="absolute w-[75%] 2xl:right-[25.5rem] right-[20.5rem] -top-[32rem] h-[1px] mt-4 bg-white"/>
        <div className="absolute w-[15.75rem] -rotate-45 h-[1px] 2xl:right-[23.25rem] right-[18.25rem] -top-[25.4rem] bg-white"/>

        <div className="absolute h-[27.75rem] bottom-[17.5rem] left-1 flex flex-col justify-end">
            <div className="mb-[1.75rem]">
                <CornerClip />
            </div>
            <ImageBox className="relative inline-block">
                <Image className="" src={"/img/eeg2t.png"} width={130} height={200} alt="EEG"/>
            </ImageBox>
        </div>
        <div className="text-white flex flex-col items-start w-full relative pt-[1.125rem]">
            <div className="absolute bottom-[3.5rem] 2xl:bottom-[3.75rem] text-sm left-0.5">Occupation</div>
            <div className="font-thin text-[2.5rem] 2xl:text-[2.8rem] absolute bottom-1 2xl:bottom-0.5">Bit Manipulator</div>
        </div>
        <div className="w-[calc(100%-2.4rem)] h-[1px] bg-white"/>
        <div className="h-48 w-full flex 2xl:justify-between justify-end">
            <div className="w-[30rem] absolute -top-[17.5rem] -left-[31.25rem] h-[30rem] rotate-90 text-white text-[.25rem] tracking-[.85em]">
                <p className={block.className}>
                    The Industrial Revolution and its consequences have been a disaster for the human race. 
                </p>
            </div>
            <div className="absolute -right-16 -top-6 w-[7.5rem] h-[1px] bg-white -rotate-45"/>
            <div className="text-[.55rem] text-teal-600 mt-6 relative left-0 hidden 2xl:block">
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
            <div className="absolute 2xl:top-[4.5rem] left-6 top-[3.5rem] 2xl:left-[11.75rem] rotate-[0deg]">
                <Image src={"/img/molecule.png"} height={150} width={200} alt="Molecule"/>
            </div>
            <div className="-rotate-90 relative right-6 -top-10">
                <Image src={'/img/king.png'} height={140} width={150} alt="King"/>
            </div>
            <div className="flex space-x-2 absolute bottom-4 right-0">
                <div className="mt-0.5 mr-1">
                    <Image src={"/img/ce.png"} width={50} height={30} alt="CE"/>
                </div>
                <MdRecycling className="text-white text-[2.5rem]"/>
                <Image src={"/img/fire2.png"} width={30} height={40} alt="Fire"/> 
                <PiIntersectThreeLight className="text-white text-[2.5rem]"/>
                <Image src={"/img/trash.png"} width={36} height={30} alt="Trash"/>
            </div>
        </div>
    </div>
}

export default RightBox