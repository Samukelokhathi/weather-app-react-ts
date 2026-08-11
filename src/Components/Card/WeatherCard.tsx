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
    const { temp, humidity, windSpeed, icon, datetime } = weather.currentConditions;
    return (
        <div>
            <Card className="flex flex-col justify-center h-84 items-center p-10  rounded-2xl text-white bg-[#122033]">
                <Text variant="p" children={weather.timezone} />
                <Text variant="h2" children={weather.address} />
                <Text variant="p" children={datetime} />
                <div className="flex items-center">
                    <div className="icon">{getWeatherIcon(icon)}</div>
                    <Text variant="h1" children={`${Math.round(temp)}°`} />
                </div>
            </Card>
        </div>
    );
};

export default WeatherCard;