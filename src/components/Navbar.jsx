import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = ({ setIsOpen, isOpen }) => {
    return (
        <nav className="absolute top-0 left-0 w-full py-8 px-2  text-white z-50">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="text-2xl font-semibold uppercase"
                    >
                        <span className="text-primary">Coders </span> Coffee
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    ) : (
                        <FiX className="text-3xl cursor-pointer" />
                    )}
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
