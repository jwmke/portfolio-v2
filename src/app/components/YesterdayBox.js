import localFont from "next/font/local";

const header = localFont({
    src: "../fonts/NicoMoji.ttf",
    subsets: ['latin'],
    variable: "--font-nico-moji",
    weight: "100 400 900",
});

const YesterdayBox = () => {
    return <div className="w-full h-[31.75rem] relative -left-[calc(31vw-26rem)] min-[1700px]:ml-20 ml-1">
        <h1 className="text-white font-thin text-[3.25rem] min-[1700px]:text-[4.5rem] leading-[5.5rem]">
            <p className={header.className}>
                Yesterday
            </p>
        </h1>

    </div>
}

export default YesterdayBox;