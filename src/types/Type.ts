export interface CurrentConditions {
    temp: number,
    humidity: number,
    windspeed: number,
    icon: string,
    datetime: string
}

export interface HourData {
    datetime: string;
    temp: number;
    icon: string;
}

export interface DayData {
    datetime: string,
    temp: number,
    humidity: number,
    windspeed: number,
    icon: string,
    conditions: string,
    hours: HourData[];
}
export interface WeatherData {
    timezone: string,
    address: string,
    currentConditions: CurrentConditions,
    days: DayData[]
}