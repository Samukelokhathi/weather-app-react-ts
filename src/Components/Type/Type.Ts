import { StringQueryType } from "vite/types/importGlob.js";

export interface WeatherData {
    address: string,
    temp: number,
    humidity: number,
    windSpeed: number,
    icon: string

}