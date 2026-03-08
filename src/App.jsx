import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Popular from "./Components/PopularService";
import TopWorkers from "./Components/TopWorkers";
import Footer from "./Components/Footer";
import JobsListing from "./Components/Jobslisting";
import AllWorkers from "./Components/Allworkers";
import Allworkers from "./Components/Allworkers";
import JobDetails from "./Components/JobDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero />
      <Popular/> */}
      <Allworkers/>
      {/* <JobDetails/> */}
      <Footer/> 
    </div>
  );
}

export default App;