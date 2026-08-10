import type { WeatherData } from "../types/Type";

const API_KEY = import.meta.env.VITE_APP_WEATHER_KEY;

export async function fetchWeatherData(location: string): Promise<WeatherData> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/2026-08-05/2026-08-05?key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return {
        address: data.address,
        timezone: data.timezone,
        currentConditions: {
            temp: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            windspeed: data.currentConditions.windSpeed,
            icon: data.currentConditions.icon,
            datetime: data.currentConditions.datetime
        },
        days: data.days.map((day: any) => ({
            datetime: day.datetime,
            temp: day.temp,
            humidity: day.humidity,
            windspeed: day.windspeed,
            icon: day.icon,
            conditions: day.conditions,

            hours: day.hours.map((hour: any) => ({
                datetime: hour.datetime,
                temp: hour.temp
            }))
        }))
    }

}




