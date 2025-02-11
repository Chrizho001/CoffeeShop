import { motion } from "framer-motion";

const ReviewCard = ({ name, image, review, index}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
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
            className="flex flex-col w-[300px] lg:w-[400px] h-[] text-center items-center justify-center py-2 px-3 "
        >
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
        </motion.div>
    );
};

export default ReviewCard;
