import type { WeatherData } from "../types/Type";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


export async function fetchWeatherData(location: string): Promise<WeatherData> {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;


    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    console.log(data);

    return {
        address: data.address,
        timezone: data.timezone,
        currentConditions: {
            temp: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            windspeed: data.currentConditions.windspeed,
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




