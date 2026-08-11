import "./App.css";
import Navbar from "./Components/Navbar/Nav";
import SearchBar from "./Components/SearchBar/SearchBar";
// import CurrentWeather from "./pages/CurrentWeather";
import Home from "./pages/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />
      <SearchBar />
      <Home />

    </div>
  );
}

export default App;
