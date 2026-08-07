import { Input } from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { Text } from "../Components/Text/Text";
import type { WeatherData } from "../type/Type";
import React, { useState, useEffect } from 'react';
import WeatherCard from "../Components/Card/WeatherCard";
import { useNavigate } from "react-router-dom"


function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("Durban");

  const navigate = useNavigate()





  const apiKey = import.meta.env.VITE_APP_WEATHER_KEY
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}/2026-08-05/2026-08-05?key=${apiKey}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setWeather({
          timezone: data.timezone,
          address: data.address,
          temp: data.days[0].temp,
          humidity: data.days[0].humidity,
          windSpeed: data.days[0].windspeed,
          icon: data.icon,
          date: data.days[0]["datetime"]

        });

      } catch (error: any) {
        setError(error);

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




  return (
    <>
      <div className="WeatherApp flex flex-col gap-7">
        <div className=" flex gap-3 items-center ">
          <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <Button text="Search" onClick={() => {
            navigate(`/CurrentWeather/${searchValue}`)

          }} />
        </div>

        <div className="savedLocations">
          <Button text="Use my location" />
        </div>

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
