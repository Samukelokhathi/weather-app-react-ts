import "./App.css";
import Navbar from "./Components/Navbar/Nav";
// import SearchBar from "./Components/SearchBar/SearchBar";
// import CurrentWeather from "./pages/CurrentWeather";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />
      {/* <SearchBar value="" onChange={() => { }} onSearch={() => { }} /> */}
      <Home />

    </div>
  );
}

export default App;
