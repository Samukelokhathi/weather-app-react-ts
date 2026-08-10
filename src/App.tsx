import "./App.css";
import WeatherCard from "./Components/Card/WeatherCard";
import Navbar from "./Components/Navbar/Nav";
import SearchBar from "./Components/SearchBar/SearchBar";
// import CurrentWeather from "./pages/CurrentWeather";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />
      <SearchBar />
      {/* <WeatherCard weather={ } /> */}
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/CurrentWeather/:location" element={<CurrentWeather />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
