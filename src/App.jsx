import Footer from "./components/Footer";
import Glimpse from "./components/Glimpse";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Search from "./components/Search";
function App() {
  return (
    <div className="px-2 sm:px-14 py-2 relative ">
      <Navbar />
      <Hero />
      <Search/>
      <Glimpse/>
      <Projects />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
