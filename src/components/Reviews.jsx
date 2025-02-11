import ReviewCard from "./ReviewCard";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const reviews = [
    {
        name: "Emily Johnson",
        image: user1,
        review: "Absolutely love this coffee shop! The aroma, the taste, and the cozy ambiance make it my go-to spot every morning.",
    },
    {
        name: "Daniel Smith",
        image: user2,
        review: "The best coffee I’ve had in a long time! Smooth, rich, and perfectly brewed. Highly recommend the caramel latte!",
    },
    {
        name: "Sophia Martinez",
        image: user3,
        review: "Amazing experience! Friendly staff, quick service, and the mocha is just heavenly. Can’t start my day without it!",
    },
];

console.log(reviews);

const Reviews = () => {
    return (
        <section className="container mx-auto flex flex-col mt-[70px] px-6 items-center">
            <h1 className="text-4xl text-black/70 font-bold leading-normal tracking-normal sm:w-auto">
                Customer Reviews
            </h1>
            <p className="text-sm text-center text-black/70 py-3 leading-6 md:w-[400px] lg:w-[600px]">
                Every cup tells a story! Hear from our coffee lovers who have
                tasted the richness, felt the warmth, and experienced the
                perfect brew. Your next favorite coffee is just a sip away!
            </p>
            <div className="flex flex-wrap md:flex-row lg:flex-wrap items-center justify-center py-8 px-2 md:px-4 gap-4">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        review={review.review}
                        name={review.name}
                        image={review.image}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
