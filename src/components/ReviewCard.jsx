const ReviewCard = ({ name, image, review }) => {
    return (
        <div className="flex flex-col w-[300px] lg:w-[400px] h-[] text-center items-center justify-center py-2 px-3">

            <img
                src={image}
                className="w-[80px] rounded-full items-center"
                alt=""
            />
            <p className="text-sm text-black/75 font-Poppins leading-5 py-3">
                {review}
            </p>
            <div className="flex items-center gap-2 py-3">
                <div className="w-[40px] h-[2px] border border-black/25 bg-black/25"></div>
                <p className="text-sm text-primary font-semibold tracking-normal leading-3">
                    {name}
                </p>
                <div className="w-[40px] h-[2px] border border-black/25 bg-black/25"></div>
            </div>
        </div>
    );
};

export default ReviewCard;
