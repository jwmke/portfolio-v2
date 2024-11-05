import Image from "next/image";
import ImageBox from "./ImageBox";
import PolyCornerClip from "./PolyCornerClip";
import DiagonalPolygon from "./DiagonalPolygon";

const LeftTopBox = () => {
    return <div className="w-full">
        <div className="w-full px-6">
            <p className="text-white text-[.62rem] ml-[2.75rem] -mt-2 italic">
                {"The world says: \"You have needs -- satisfy them. You have as much right as the rich and the mighty. Don't hesitate to satisfy your needs; indeed, expand your needs and demand more.\" This is the worldly doctrine of today. And they believe that this is freedom. The result for the rich is isolation and suicide, for the poor, envy and murder."}
            </p>
            <div className="flex justify-end text-white text-[.65rem] mt-0.5">
             {"― Fyodor Dostoyevsky"}
            </div>
        </div>
        <div className="ml-6 mt-3">
            <div className="flex space-x-6">
                <ImageBox className="relative inline-block">
                    <Image className="" src={'/img/col.png'} height={320} width={155} alt="Col"/>
                </ImageBox>
                <div className="flex flex-col space-y-5 justify-between">
                    <div className="relative w-[24rem]">
                    <PolyCornerClip corner="topLeft"/>
                        <DiagonalPolygon size={110}>
                            <div className="h-[9rem] relative text-teal-400 text-[.59rem] leading-[.8rem]">
                                <div className="border border-teal-400 w-[5.5rem] h-8 m-1 px-1 p-[2px] absolute bottom-0">
                                    Headquartered in Los Angeles
                                </div>
                                <div className="absolute z-50 ml-[7.5rem] ">
                                    <Image className="mt-1.5" src={'/img/ggreen.png'} height={130} width={130} alt="Globe"/>
                                </div>
                                <div className="border border-teal-400 w-[5.5rem] h-8 m-1 px-1 p-[2px] absolute right-0">
                                    Midwestern Expatriate
                                </div>
                                <div className="bg-teal-400 absolute right-[5.65rem] top-[2.8rem] -rotate-12 w-24 h-[1px]"/>
                                <div className="bg-teal-400 absolute left-[5.15rem] bottom-[3.8rem] -rotate-[40deg] w-20 h-[1px]"/>
                            </div>
                        </DiagonalPolygon>
                    </div>
                    <ImageBox className="relative w-[17rem]">
                        <Image className="px-2 py-1" src={'/img/fis.png'} height={150} width={270} alt="Fis"/>
                    </ImageBox>
                </div>
            </div>
        </div>
    </div>
}

export default LeftTopBox;