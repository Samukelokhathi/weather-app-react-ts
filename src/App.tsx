import "./App.css";
import Navbar from "./Components/Nav Bar/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="WeatherApp">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
