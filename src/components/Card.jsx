import { motion } from "framer-motion";

const Card = ({ coffee, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.1 * index ,
                },
            }}
            viewport={{
                once: true,
            }}
            className="py-4 mt-2"
        >
            <div className="bg-white w-[280px] h-[380px] max-h-[400px] max-w-[355px] rounded-xl relative px-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                <img
                    src={coffee.image}
                    className="w-[310px] absolute -top-[80px] -left-[60px]"
                    alt=""
                />
                <h1 className="absolute top-[25px] -right-3 w-[150px] text-2xl font-bold">
                    <span className="text-sm text-primary font-semibold">
                        {`#${index + 1} Seller`}
                    </span>
                    <br />
                    {coffee.name}
                </h1>
                <div className="absolute bottom-0 px-4 py-2 flex flex-col">
                    <p className="text-sm text-black font-light leading-normal tracking-normal">
                        {coffee.description}
                    </p>
                    <div className="flex justify-between items-center py-4">
                        <span className="text-xl font-semibold text-black">
                            &#8358;{coffee.price}
                        </span>
                        <button className="bg-black/80 rounded-full text-white font-semibold text-sm w-[100px] py-2">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
