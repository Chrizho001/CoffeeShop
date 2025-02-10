

const Card = ({coffee, index}) => {
    return (
        <div className="py-4 mt-2">
            <div className="bg-white w-[300px] h-[380px] max-h-[400px] max-w-[355px] rounded-xl relative px-4 flex flex-col items-center">
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
                  <span className="text-2xl font-semibold text-black">&#8358;{coffee.price}</span>
                  <button className="bg-black/80 rounded-full text-primary font-semibold text-sm w-[120px] py-3">
                        Order Now
                  </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;
