import "./App.css";
import { Input } from "./Components/Input/Input";
import Navbar from "./Components/Nav Bar/Nav";

function App() {
  return (
    <>
      <div className="WeatherApp">
        <div className="NavBar">
          <Navbar />
        </div>
        <div className="InputDiv">
          <Input onChange={() => {}} />
        </div>
      </div>
    </>
  );
}

export default App;
