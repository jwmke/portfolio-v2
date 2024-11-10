import SecondCyberGrid from "./SecondCyberGrid";
import Image from "next/image";
import ImageBox from "./ImageBox";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const RobotBox = () => {
    return <div className="w-full min-w-[31rem]">
        {/* <div className="w-6 -mt-[.6rem] -left-[calc(3rem-1px)] absolute">
          <LeftSideExtension />
        </div> */}
        <div className="w-full flex">
            <div className="w-full relative h-[calc(27rem+1px)]">
                <div className="absolute w-1/2 h-[1px] bg-white top-0"/>
                <div className="absolute top-[4.25rem] w-48 -ml-[1.75rem] left-1/2 h-[1px] bg-white rotate-45 z-40"/>
                <div className="absolute w-[1px] top-[8.5rem] left-1/2 h-[20.25rem] ml-[8.5rem] bg-white z-40"/>

                <div className="absolute w-[12.25rem] h-[1px] left-[calc(50%)] bg-white"/>
                <div className="absolute w-[1px] h-6 bg-white -ml-[1px] left-[calc(50%+12.25rem)]"/>
                <div className="absolute -ml-[1px] w-[1px] h-6 bg-white left-[calc(50%+12.25rem)] -mt-6 top-[8.5rem]"/>
                <div className="absolute w-[3.75rem] h-[1px] bg-white left-[calc(50%+8.5rem)] top-[8.5rem]"/>
                <div className="absolute flex flex-col items-end text-white text-[.4rem] space-y-3.5 mt-3.5 left-[calc(50%+2.9rem)]">
                    <div>
                    <InlineMath>{`f(n) \\in O(g(n)) \\Leftrightarrow \\lim \\sup_{n \\to \\infty} \\frac{|f(n)|}{|g(n)|} < \\infty`}</InlineMath>
                    </div>
                    <div>
                    <InlineMath>{`Y = \\lambda f.(\\lambda x.f(x\\ x))(\\lambda x.f(x\\ x))`}</InlineMath>
                    </div>
                    <div>
                    <InlineMath>{`P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}`}</InlineMath>
                    </div>
                    <div className="text-[.45rem]">
                    <InlineMath>{`\\binom{n}{k} = \\frac{n!}{k!(n-k)!}`}</InlineMath>
                    </div>
                    <div className="text-[.35rem]">
                    <InlineMath>{`P = NP`}</InlineMath>
                    </div>
                </div>
            </div>
            {/* <div className="relative -mt-[20.5rem] -ml-[1px] w-[1px] h-[13.75rem] bg-white"/> */}
            
        </div>
        <Image className="z-50 absolute bottom-[5.5rem] left-[4vw]" src={'/img/bot_final.png'} height={270} width={270} alt="Robot"/>
        <Image className="z-50 absolute bottom-[16.5rem] -left-6 rotate-[135deg]" src={'/img/top_final.png'} height={145} width={145} alt="Top"/>
        <div className="w-full relative">
            <ImageBox className="z-50 absolute bottom-2 left-[calc(50%+2.5rem)]">
                <Image className="p-1.5" src={'/img/rollt_final.png'} height={70} width={70} alt="Roller"/>
            </ImageBox>
        </div>
        <Image className="z-50 absolute bottom-4 left-4" src={'/img/arml_final.png'} width={180} height={170} alt="Arm"/>
        <SecondCyberGrid/>
    </div>
}

export default RobotBox;

