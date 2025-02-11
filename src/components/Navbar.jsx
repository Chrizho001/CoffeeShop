import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const Navbar = ({ setIsOpen, isOpen }) => {
    return (
        <nav className="absolute top-0 left-0 w-full py-8 px-2  text-white z-50">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold uppercase">
                        <span className="text-primary">Coders </span> Coffee
                    </h1>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    ) : (
                        <FiX className="text-3xl cursor-pointer" />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
