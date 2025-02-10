import download1 from "../assets/download1.png";
import download2 from "../assets/download2.png";

const Download = () => {
    return (
        <div className="bg-darkGrey/25 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row-reverse px-6 py-4 items-center justify-center ">
                <div className="relative flex flex-row items-center justify-start h-auto md:w-full lg:w-[550px] object-contain py-4 mt-2 md:pl-[100px]">
                    <img
                        src={download1}
                        className="absolute top-4 -left-[60px] md:left-[40px] -rotate-12 w-[150px] h-[270px] lg:w-[200px] lg:h-[350px] rounded-md z-0"
                        alt=""
                    />
                    <img
                        src={download2}
                        className="relative left-[40px] w-[150px] h-[270px] lg:w-[200px] lg:h-[350px] rounded-md z-10"
                        alt=""
                    />
                </div>
                <div className="flex flex-col w-auto h-auto md:w-full lg:w-[450px] py-2 px-2  ">
                    <h1 className="text-3xl font-bold py-4">
                        Instant Coffee <br />
                        At Your Home
                    </h1>
                    <p className="text-sm text-black/70 font-normal leading-6 tracking-normal">
                        Your perfect cup of coffee, just a tap away! Order,
                        customize, and enjoy every sip—anytime, anywhere.
                        Download now and make every coffee run smoother!
                    </p>
                    <button className="bg-black/80 rounded-full text-white font-semibold text-sm w-[160px] py-3 mt-4">
                        Download The App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Download;
