import SecondCyberGrid from "./SecondCyberGrid";
import Image from "next/image";
import ImageBox from "./ImageBox";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const RobotBox = () => {
    return <div className="w-full">
        {/* <div className="w-6 -mt-[.6rem] -left-[calc(3rem-1px)] absolute">
          <LeftSideExtension />
        </div> */}
        <div className="w-full flex">
            <div className="relative w-1/2 -mt-[8.5rem] h-[1px] bg-white"/>
            <div className="relative -mt-[4.25rem] w-48 -ml-[1.75rem] h-[1px] bg-white rotate-45 z-40"/>
            <div className="w-[1px] h-[20rem] -mb-6 -ml-[1.75rem] bg-white z-40"/>

            <div className="relative w-1/3 -ml-[27%] -mt-[8.5rem] h-[1px] bg-white"/>
            <div className="relative w-10 -ml-10 h-[1px] bg-white"/>
            <div className="relative -mt-6 w-[1px] h-6 bg-white"/>
            <div className="relative -mt-[8.5rem] -ml-[1px] w-[1px] h-6 bg-white"/>
            <div className="flex flex-col items-end text-white text-[.35rem] -mt-[7.75rem] -ml-[8.25rem] space-y-4">
                <div>
                <InlineMath>{`f(n) \\in O(g(n)) \\Leftrightarrow \\lim \\sup_{n \\to \\infty} \\frac{|f(n)|}{|g(n)|} < \\infty`}</InlineMath>
                </div>
                <div>
                <InlineMath>{`Y = \\lambda f.(\\lambda x.f(x\\ x))(\\lambda x.f(x\\ x))`}</InlineMath>
                </div>
                <div>
                <InlineMath>{`P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}`}</InlineMath>
                </div>
                <div>
                <InlineMath>{`\\binom{n}{k} = \\frac{n!}{k!(n-k)!}`}</InlineMath>
                </div>
                <div>
                <InlineMath>{`P = NP`}</InlineMath>
                </div>
            </div>
        </div>
        <Image className="z-50 absolute bottom-[5.5rem] left-[4vw]" src={'/img/bot_final.png'} height={270} width={270} alt="Robot"/>
        <Image className="z-50 absolute bottom-[16.5rem] -left-6 rotate-[135deg]" src={'/img/top_final.png'} height={145} width={145} alt="Top"/>
        <ImageBox className="z-50 absolute bottom-2 left-[16vw]">
            <Image className="p-1.5" src={'/img/rollt_final.png'} height={70} width={70} alt="Roller"/>
        </ImageBox>
        <Image className="z-50 absolute bottom-4 left-4" src={'/img/arml_final.png'} width={180} height={170} alt="Arm"/>
        <SecondCyberGrid/>
    </div>
}

export default RobotBox;
