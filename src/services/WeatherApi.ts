import type { WeatherData } from "../types/Type";

const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const API_KEY = import.meta.env.VITE_APP_WEATHER_KEY;

export async function fetchWeatherData(location: string): Promise<WeatherData> {
    const url = `${BASE_URL}/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return data;
}




