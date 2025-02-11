import ReviewCard from "./ReviewCard"
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg"
import user3 from "../assets/user3.jpg"
import user4 from "../assets/user4.jpg"
import user5 from "../assets/user5.jpg"

const reviews = [
    {
        name: "Emily Johnson",
        image: user1,
        review: "Absolutely love this coffee shop! The aroma, the taste, and the cozy ambiance make it my go-to spot every morning."
    },
    {
        name: "Daniel Smith",
        image: user2,
        review: "The best coffee I’ve had in a long time! Smooth, rich, and perfectly brewed. Highly recommend the caramel latte!"
    },
    {
        name: "Sophia Martinez",
        image: user3,
        review: "Amazing experience! Friendly staff, quick service, and the mocha is just heavenly. Can’t start my day without it!"
    },
    // {
    //     name: "James Williams",
    //     image: user4,
    //     review: "Hands down the best espresso in town. The baristas really know their craft, and the quality is top-notch!"
    // },
    // {
    //     name: "Olivia Brown",
    //     image: user5,
    //     review: "This place is a hidden gem! The cappuccino is spot on, and the atmosphere is so relaxing. A must-visit for coffee lovers!"
    // }
];

console.log(reviews);


const Reviews = () => {
  return (
    <section className="container mx-auto flex flex-col mt-[70px] px-6 items-center">
        <h1 className="text-4xl text-black/70 font-bold leading-normal tracking-normal sm:w-auto">
            Customer Reviews
        </h1>
        <div className="flex flex-wrap md:flex-row lg:flex-wrap items-center justify-center py-8 px-2 md:px-4 gap-4">
            {
                reviews.map((review, index) => (
                    <ReviewCard key={index} review={review.review} name={review.name} image={review.image} />
                ))
            }
        </div>
    </section>
  )
}

export default Reviews