import type { WeatherData } from "../types/Type";
import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/WeatherApi";
import { Text } from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import WeatherCard from "../Components/Card/WeatherCard";


function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchWeatherData("durban");
        setWeather(data);

      } catch (error: any) {
        setError("Network response was not ok");

      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }



  // return <WeatherCard weather={weather} />;

  return (
    <>
      <div className="WeatherApp flex flex-col gap-7">
        <div className="flex flex-col justify-center h-54 gap-3 items-center mb-5   rounded-2xl text-white bg-[#122033]  ">
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

      <WeatherCard weather={weather} />
    </>
  );
}

export default Home;
