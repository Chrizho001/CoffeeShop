import Card from "./Card";
import coo from "../assets/coo.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";

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
        <section className="mt-[100px] py-4 w-full">
            <div className="container mx-auto flex flex-col gap-8 items-center">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="font-bold text-4xl lg:text-6xl leading-normal tracking-normal">
                        Best Selling Coffee
                    </h1>
                    <p className="text-sm font-normal tracking-normal text-center w-[350px] lg:text-md py-3">
                        A drink from{" "}
                        <span className="text-primary">Blvk Tumbler</span> to
                        get you going all day long. Leaving fresh, vigorous and
                        active.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-8 lg:mt-10 place-content-center">
                    {coffeeMenu.map((coffee, index) => (
                        <Card key={index} coffee={coffee} index ={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
