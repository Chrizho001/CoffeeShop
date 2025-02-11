import Card from "./Card";
import coo from "../assets/coo.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";
import { motion } from "framer-motion";

const coffeeMenu = [
    {
        image: coffee2,
        name: "Caramel Latte",
        description:
            "Smooth espresso blended with creamy steamed milk and a drizzle of caramel for the perfect balance of sweet and bold flavors.",
        price: "4200.75",
    },
    {
        image: coo,
        name: "Double Espresso",
        description:
            "A shot of pure energy, bold and intense, with a rich crema that wakes your senses and fuels your day.",
        price: "3000.50",
    },
    {
        image: coffee3,
        name: "Caramel Frappe",
        description:
            "A delightful fusion of rich espresso, velvety chocolate, and frothy milk, creating a luxurious, indulgent coffee experience.",
        price: "1500.00",
    },
];

const BestSelling = () => {
    return (
        <section className="mt-[70px] py-4 w-full">
            <div className="container mx-auto flex flex-col gap-8">
                <div className="flex flex-col items-center justify-center sm:px-3 gap-4">
                    <motion.h1 
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
                        className="font-bold text-4xl lg:text-5xl leading-normal tracking-normal">
                        Best Selling Coffee
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
                                delay: 0.2,
                            },
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-sm px-3 font-normal tracking-normal sm:px-4 text-center md:w-[650px] lg:text-md ">
                        Discover the coffee that everyone is raving about! From
                        rich, bold espressos to creamy, dreamy lattes, these
                        customer favorites are crafted to perfection.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 py-4 gap-[30px] md:gap-7 lg:gap-x-[0px] place-items-center lg:mt-10 items-center">
                    {coffeeMenu.map((coffee, index) => (
                        <Card key={index} coffee={coffee} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
