import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="px-2 sm:px-14 py-4 relative ">
      <Navbar />
      <Hero />
      <Projects/>
    </div>
  );
}

export default App;
