import type { WeatherData } from "../types/Type";
import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/WeatherApi";
import { Text } from "../Components/Text/Text";
import Button from "../Components/Button/Button";
import WeatherCard from "../Components/Card/WeatherCard";
import SearchBar from "../Components/SearchBar/SearchBar";
import { getSavedLocations, saveLocation } from "../utils/Storage"
import Forecast from "../Components/Forecast/Forecast";


function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [city, setCity] = useState('');
  const [savedLocations, setSavedLocations] = useState<string[]>([]);

  useEffect(() => {
    setSavedLocations(getSavedLocations());
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(city);
        setWeather(data);
        setError(null);

      } catch (error) {
        setError("Network response was not ok");

      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = () => {
    if (searchValue.trim() === "") return;
    setCity(searchValue);
  }

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCity(`${latitude},${longitude}`);
      },
      () => {
        setError("Location access denied. Please search manually.");
      }
    );
  };

  return (
    <>
      <div className="WeatherApp flex flex-col gap-7">
        <SearchBar value={searchValue} onChange={setSearchValue} onSearch={handleSearch} />

        <div className="flex flex-col justify-center h-54 gap-3 items-center mb-5   rounded-2xl text-white bg-[#122033]  ">

          <Text variant={"h2"} children={"Welcome to SkyCast"} />
          <Text
            variant={"p"}
            children={"Allow location for instant local wether"}
          />
          <Button onClick={handleUseLocation} style={{ backgroundColor: "#20B5E2" }} text="Use my current location" />

        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {savedLocations.map((location) => (
          <Button key={location} text={location} onClick={() => setCity(location)} />
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}


      {!loading && !error && weather && (
        <div className="flex flex-col gap-6">
          <WeatherCard
            weather={weather}
            isSaved={savedLocations.includes(city)}
            onSave={() => setSavedLocations(saveLocation(city))}
          />
          <Forecast weather={weather} />
        </div>
      )}



    </>
  );
}

export default Home;
