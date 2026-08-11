import "./App.css";
import Navbar from "./Components/Navbar/Nav";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App flex flex-col gap-5">
      <Navbar />
      <Home />

    </div>
  );
}

export default App;
