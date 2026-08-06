import "./App.css";
import WeatherCard from "./Components/Card/WeatherCard";
import Navbar from "./Components/Nav Bar/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="WeatherApp">
        <Navbar />
        <Home />
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
