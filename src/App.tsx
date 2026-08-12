import "./App.css";
import Navbar from "./Components/Navbar/Nav";
import Home from "./Pages/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Settings from "./Pages/Settings";
import Location from "./Pages/Location";

function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
