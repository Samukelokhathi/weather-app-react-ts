
export interface WeatherData {
    timezone: string,
    address: string,
    currentConditions: CurrentConditions,
    days: DayData[]

}

export interface CurrentConditions {
    temp: number,
    humidity: number,
    windSpeed: number,
    icon: string,
    datetime: string
}

export interface HourData {
    datetime: string;
    temp: number;
}

export interface DayData {
    datetime: string,
    temp: number,
    humidity: number,
    windSpeed: number,
    icon: string,
    conditions: string,
    hours: HourData[];
}