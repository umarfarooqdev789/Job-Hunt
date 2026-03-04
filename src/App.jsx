import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Popular from "./Components/PopularService";
import TopWorkers from "./Components/TopWorkers";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular/>
      <TopWorkers/>
      <Footer/>
    </div>
  );
}

export default App;