import Image from "next/image";
import ImageBox from "./ImageBox";
import PolyCornerClip from "./PolyCornerClip";
import DiagonalPolygon from "./DiagonalPolygon";

const LeftTopBox = () => {
    return <div className="w-full min-w-[32rem] max-w-[36.7rem] relative">

        <div className="absolute -right-8 -mr-[75%] w-[75%] h-[1px] mt-4 bg-white"/>
        <div className="absolute -right-[2.15rem] w-[.9rem] -rotate-45 h-[1px] top-[1.3rem] bg-white"/>
        <div className="absolute w-[1px] h-24 -right-[1.35rem] top-[1.6rem] bg-white"/>
        <div className="absolute w-[1px] h-[9.9rem] right-[2.1rem] top-[6.2rem] bg-white rotate-45"/>
        <div className="absolute w-[1px] h-[11.5rem] top-[14.6rem] bg-white -ml-[1px] right-[5.65rem]"/>
        <div className="pl-6 h-[3.75rem] relative -mt-1">
            <p className="text-white text-[.62rem] ml-[2.75rem] -mt-1 mr-4 italic absolute">
                {"The world says: \"You have needs -- satisfy them. You have as much right as the rich and the mighty. Don't hesitate to satisfy your needs; indeed, expand your needs and demand more.\" This is the worldly doctrine of today. And they believe that this is freedom. The result for the rich is isolation and suicide, for the poor, envy and murder."}
            </p>
            <div className="flex justify-end text-white text-[.62rem] bottom-0 right-4 absolute">
             {"― Fyodor Dostoyevsky, 1879"} {/* The Brothers Karamazov */}
            </div>
        </div>
        <div className="absolute right-0 h-[calc(3.25rem)] top-6 w-[1px] bg-white"></div>
        <div className="absolute -right-[.85rem] h-10 -top-2.5 rotate-45 w-[1px] bg-white"></div>
        <div className="absolute w-[45vw] -mt-[5px] top-[1px] left-[calc(100%+1.8rem)] -ml-[1px] h-[1px] bg-white"/>
        <div className="ml-6 mt-3">
            <div className="flex space-x-6">
                <ImageBox className="relative inline-block">
                    <Image className="object-cover object-center h-[20.5rem] w-full" src={'/img/col.png'} height={320} width={155} alt="Col" style={{
                    clipPath: 'inset(0)',
                    objectPosition: 'center'
                    }} />
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
                                <div className="border border-teal-400 w-[4.5rem] h-8 m-1 px-1 p-[2px] absolute right-0">
                                    Midwestern Expatriate
                                </div>
                                <div className="bg-teal-400 absolute right-[4.5rem] top-[3rem] -rotate-12 w-32 h-[1px]"/>
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