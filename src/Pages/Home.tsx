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

        <div className="flex flex-col justify-center h-54 gap-4 items-center   rounded-2xl text-white bg-[#122033]  ">
          <Text variant={"h2"} children={"Welcome to SkyCast"} />
          <Text
            variant={"p"}
            children={"Allow location for instant local wether"}
          />
          <Button
            style={{ backgroundColor: "#20B5E2" }}
            text="Use my current location"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
