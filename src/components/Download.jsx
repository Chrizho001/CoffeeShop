import download1 from "../assets/download1.png";
import download2 from "../assets/download2.png";
import { motion } from "framer-motion";

const Download = () => {
    return (
        <div className="bg-darkGrey/25 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row-reverse px-6 py-4 items-center justify-center ">
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.1,
                        },
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="relative flex flex-row items-center justify-start h-auto md:w-full lg:w-[550px] object-contain py-4 mt-2 md:pl-[100px]">
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
                </motion.div>

                <div className="flex flex-col w-auto h-auto md:w-full lg:w-[450px] py-2 px-2  ">
                    <motion.h1 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-3xl font-bold py-4">
                        Instant Coffee <br />
                        At Your Home
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.3,
                            },
                        }}
                        viewport={{
                            once: true,
                        }} 
                        className="text-sm text-black/70 font-normal leading-6 tracking-normal">
                        Your perfect cup of coffee, just a tap away! Order,
                        customize, and enjoy every sip—anytime, anywhere.
                        Download now and make every coffee run smoother!
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.5,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="bg-black/80 rounded-full text-white font-semibold text-sm w-[160px] py-3 mt-4">
                        Download The App
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Download;
