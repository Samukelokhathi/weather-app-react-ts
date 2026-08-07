import "./App.css";
import Navbar from "./Components/Nav Bar/Nav";
import CurrentWeather from "./pages/CurrentWeather";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CurrentWeather/:location" element={<CurrentWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
