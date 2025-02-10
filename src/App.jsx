import Hero from "./components/Hero"
import Order from "./components/Order"
import BestSelling from "./components/BestSelling"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Order />
      <BestSelling />
    </div>
  )
}

export default App