import { Input } from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { Text } from "../Components/Text/Text";

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

        <div className="flex flex-col justify-center align-center">
          <Text variant={"h2"} children={"Welcome to SkyCast"} />
          <Text
            variant={"p"}
            children={"Allow location for instant local wether"}
          />
          <Button text="Use my Location" />
        </div>
      </div>
    </>
  );
}

export default Home;
