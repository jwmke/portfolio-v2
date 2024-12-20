import localFont from "next/font/local";

const header = localFont({
    src: "../fonts/NicoMoji.ttf",
    subsets: ['latin'],
    variable: "--font-nico-moji",
    weight: "100 400 900",
});

const YesterdayBox = () => {
    return <div className="w-full h-[32.5rem]">
        <h1 className="text-white font-thin text-[3.75rem] min-[1700px]:text-[4.5rem] leading-[5.5rem]">
            <p className={header.className}>
                Yesterday
            </p>
        </h1>

    </div>
}

export default YesterdayBox;