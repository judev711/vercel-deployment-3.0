import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from "./components/Products/Products.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Topproducts from "./components/Top_Products/Topproducts.jsx";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      delay: 300,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Products />
        <Topproducts />
      </div>
    </>
  );
}

export default App
