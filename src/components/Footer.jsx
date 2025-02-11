const Footer = () => {
    return (
        <footer className="bg-darkGrey px-2 md:px-6 py-10 mt-8">
            <div className="container flex flex-col sm:flex-col lg:flex-row gap-6 px-2">
                <div className="flex flex-col md:w-[90%] ">
                    <h1 className="text-white font-bold text-2xl py-4">
                        Sign Up for{" "}
                        <span className="text-primary">Newsletter</span> and
                        Updates
                    </h1>
                    <div className="flex flex-col mt-4 gap-4">
                        <input
                            type="email"
                            placeholder="Stay Updated"
                            className="w-[90%] py-2 rounded-md bg-gray-200 outline-none px-3"
                        />
                        <button className="bg-primary w-[120px] py-2 rounded-3xl text-white font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-auto gap-6 mt-[50px] md:w-[600px] md:mt-0 ">
                    <div>
                        <h2 className="text-3xl text-white font-semibold py-3">
                            <span className="text-primary">Coders </span> Coffee
                        </h2>
                        <p className="text-sm text-lightOrange leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos, reprehenderit magni suscipit
                            perferendis minima eligendi excepturi eveniet, harum
                            officia
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl text-white font-semibold py-2">
                            Get in touch
                        </h3>
                        <p className="text-sm tracking-wide text-lightOrange">
                            chrisfriday033@gmail.com
                        </p>
                        <p className="text-sm text-lightOrange">
                            (+234) 7033216285
                        </p>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row items-center text-center mt-[40px] py-4 md:justify-between ">
                <p className="text-sm text-gray-200 font-semibold">
                    &copy;Copyright. All rights reserved
                </p>
                <p className="text-sm text-gray-200 font-semibold">
                    Terms & Conditions
                </p>
            </div>
        </footer>
    );
};

export default Footer;
