import "./App.css";
import Navbar from "./Components/Nav Bar/Nav";
import Home from "./pages/Home";

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
