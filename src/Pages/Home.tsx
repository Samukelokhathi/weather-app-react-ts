import { Input } from "../Components/Input/Input";
import Button from "../Components/Button/Button";

function Home() {
  return (
    <>
      <div className="WeatherApp flex flex-col gap-7">
        <div className="InputDiv">
          <Input onChange={() => {}} />
        </div>

        <div className="savedLocations">
          <Button text="Use my location" />
        </div>
      </div>
    </>
  );
}

export default Home;
