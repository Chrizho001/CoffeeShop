import { useState } from "react";
import heroImage from "../assets/bg-slate.png";
import coffeeBlack from "../assets/black.png";
import Navbar from "./Navbar";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const bgImage = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
};

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main style={bgImage}>
            <section
                id="Hero-Section"
                className="relative z-99 overflow-y-hidden overflow-x-hidden"
            >
                <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
                <div className="container mx-auto relative flex flex-col lg:flex-row py-10 px-6">
                    {/* content divs */}
                    <div className="lg:w-[30%]">
                        {/* header text section */}
                        <div className="flex flex-col lg:h-full gap-4 text-lightOrange py-8 mt-[90px]">
                            <h1 className="text-6xl md:text-7xl ml-[30px] md:ml-[40px] w-[250px] md:w-[300px] leading-[80px] ">
                                Blvk Tumbler
                            </h1>
                            <p className="text-sm  opacity-55 w-[300px] md:w-[350px] mt-4 lg:mt-[100px] md:mt-5 leading-loose ">
                                <span className="block text-[20px] text-primary pb-4">
                                    Black Lifestyle lovers
                                </span>
                                For those who crave the deep, the bold, and the
                                unforgettable. Where the aroma is rich, the
                                taste is intense, and the vibe is
                                unapologetically black.
                            </p>
                        </div>
                    </div>
                    {/* Hero image section */}
                    <div className="flex flex-col lg:w-[70%] lg:flex-row justify-normal gap-6">
                        <div className="relative flex justify-center items-center lg:w-full">
                            <img
                                className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[350px] lg:ml-[20px]  img-shadow z-30 "
                                src={coffeeBlack}
                                alt=""
                            />
                            <div className="absolute h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:w-[320px] md:h-[320px]  top-[50px] -right-0 sm:right-[90px] sm:top-[60px] lg:w-[200px] lg:h-[200px] lg:left-[280px] lg:top-[90px]   border-primary border-[20px] rounded-full z-10"></div>
                        </div>
                        <div className="flex items-center md:justify-end lg:w-full lg:justify-end mt-2 py-4">
                            <div className="w-[320px] md:w-[350px] md:px-4 lg:mt-[180px]">
                                <p className="text-sm opacity-55  leading-loose text-lightOrange py-4">
                                    <span className="block text-[20px] text-primary pb-2">
                                        Blvk Tumbler
                                    </span>
                                    Bold Brews, Rich Conversations, Timeless
                                    Moments. For those who crave the deep, the
                                    bold, and the unforgettable.
                                </p>
                                {/* <button className="px-6 py-2  bg-primary rounded-md text-sm font-semibold text-darkGrey">
                                    Order Now
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[50px] left-[190px] sm:top-[50px] sm:left-[400px] lg:top-[80px] lg:left-[690px] z-[1]">
                        <h1 className="text-[50px] sm:text-[80px] lg:text-[120px] scale-150 font-bold text-darkGrey/25 leading-none">
                            Blvk <br />
                            Tumbler
                        </h1>
                    </div>
                </div>
                
                {/* side bar */}
                {isOpen && (
                    <div className="absolute top-0 right-0 h-screen w-[110px] overflow-y-auto  bg-gradient-to-b from-primary/80 to to-primaryDark/80 backdrop:blur-sm z-10">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center text-white gap-6">
                                {/* line */}
                                <div className="w-[1px] h-[70px] bg-white"></div>
                                {/* social icons */}
                                <div className="inline-block p-2 rounded-full cursor-pointer border  border-white">
                                    <FaFacebookF className="text-2xl" />
                                </div>
                                <div className="inline-block p-2 rounded-full cursor-pointer border  border-white">
                                    <FaTwitter className="text-2xl" />
                                </div>
                                <div className="inline-block p-2 rounded-full cursor-pointer border  border-white">
                                    <FaInstagram className="text-2xl" />
                                </div>
                                <div className="w-[1px] h-[70px] bg-white"></div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Hero;
