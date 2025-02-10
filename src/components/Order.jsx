import orderImg from "../assets/coffee-order.png";

const Order = () => {
    return (
        <section className="mt-[30px] lg:mt-[20px] py-4 px-2 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div>
                    <img
                        src={orderImg}
                        className="w-[600px] md:w-[700px] lg:w-[750px] img-shadow"
                        alt=""
                    />
                </div>
                <div className="flex flex-col  justify-center w-[400px] lg:w-[600px]  gap-4 px-4 ">
                    <h1 className="text-4xl md:text-[40px] lg:text-5xl font-bold leading-normal w-[300px] lg:w-full">
                        Order Your <br />
                        Favorite Coffee
                    </h1>
                    <p className="text-sm md:text-md text-darkGrey leading-loose font-normal">
                        Your Perfect Cup Awaits – Whether You Crave a Bold
                        Espresso, a Creamy Latte, or a Sweet Mocha, We’ve Got
                        the Perfect Brew Just for You. Indulge in the Rich
                        Aroma, Delightful Flavors, and Comforting Warmth of Your
                        Favorite Coffee. Order Now and Savor Every Sip!
                    </p>
                    <button className="bg-black/80 rounded-full text-primary font-semibold text-md w-[150px] py-3 mt-2">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Order;
