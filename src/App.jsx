import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadCard from "./components/HeadCard";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadCard />
      <Food />
      <Category />
      <Footer />
    </div>
  )
}