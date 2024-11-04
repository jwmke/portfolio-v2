import Image from "next/image";
import ImageBox from "./ImageBox";
import CornerClip from "./CornerClip";
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
                <div className="flex flex-col space-y-6 justify-between">
                    <div className="relative w-[24rem]">
                        {/* <CornerClip corner="topLeft" size={80}/> */}
                        <DiagonalPolygon size={110}>
                            <div className="h-[8.5rem] relative">
                                <div className="absolute z-50 ml-[7.5rem] ">
                                    <Image className="" src={'/img/ggreen.png'} height={130} width={130} alt="Col"/>
                                </div>
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