import orderImg from "../assets/coffee-order.png";
import { motion } from "framer-motion";


const Order = () => {
       return (
        <section className="mt-[30px] lg:mt-[20px] py-4 px-2 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div>
                    <motion.img
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
                        
                        src={orderImg}
                        className="w-[600px] sm:w-[650px] md:w-[700px] lg:w-[750px] img-shadow"
                        alt=""
                    />
                </div>
                <div className="flex flex-col  justify-center w-[400px] md:w-[600px] gap-4 px-4 ">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-4xl md:text-[35px] lg:text-5xl font-bold leading-normal w-[300px] lg:w-full"
                    >
                        Order Your <br />
                        Favorite Coffee
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
                                delay: 0.5,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-sm md:text-md text-darkGrey leading-loose font-normal lg:w-full"
                    >
                        Your Perfect Cup Awaits – Whether You Crave a Bold
                        Espresso, a Creamy Latte, or a Sweet Mocha, We’ve Got
                        the Perfect Brew Just for You. Order Now and Savor Every
                        Sip!
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
                                delay: 0.6,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="bg-black/80 rounded-full text-white font-semibold text-md w-[150px] py-3 mt-2"
                    >
                        Order Now
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Order;
