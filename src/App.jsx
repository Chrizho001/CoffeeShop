import Hero from "./components/Hero"
import Order from "./components/Order"
import BestSelling from "./components/BestSelling"
import Download from "./components/Download"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Order />
      <BestSelling />
      <Download />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App