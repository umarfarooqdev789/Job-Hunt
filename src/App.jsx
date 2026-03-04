import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Popular from "./Components/PopularService";
import TopWorkers from "./Components/TopWorkers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular/>
      <TopWorkers/>
    </div>
  );
}

export default App;