import Hero from "./components/Hero"
import Order from "./components/Order"
import BestSelling from "./components/BestSelling"
import Download from "./components/Download"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Order />
      <BestSelling />
      <Download />
    </div>
  )
}

export default App