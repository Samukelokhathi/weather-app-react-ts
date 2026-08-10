import "./App.css";
import Navbar from "./Components/Navbar/Nav";
// import CurrentWeather from "./pages/CurrentWeather";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
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
