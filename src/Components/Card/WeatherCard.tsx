import Card from "./Card";
import { Text } from "../Text/Text"
import type { WeatherData } from "../../types/Type";
import { getWeatherIcon } from "../../utils/WeatherIcons";

import React from "react";


interface WeatherProps {
    weather: WeatherData | null
}


const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
    if (!weather) return null
    const { temp, humidity, windspeed, icon, datetime } = weather.currentConditions;
    return (
        <div>
            <Card className="card">
                <div>
                    <Text variant="p" children={weather.timezone} />
                    <Text variant="h2" children={weather.address} />
                    <Text variant="p" children={datetime} />
                    <div className="flex items-center">
                        <div className="icon text-6xl">{getWeatherIcon(icon)}</div>
                        <Text variant="h1" children={`${temp}°`} />
                    </div>
                </div>
                <div>
                    <Text variant="p" children={`Humidity: ${humidity}%`} />
                    <Text variant="p" children={`Wind Speed: ${windspeed} km/h`} />
                </div>
            </Card>
        </div>
    );
};

export default WeatherCard;