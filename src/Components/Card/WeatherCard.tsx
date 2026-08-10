import Card from "./Card";
import { Text } from "../Text/Text"
import type { WeatherData } from "../../types/Type";

import React from "react";


interface WeatherProps {
    weather: WeatherData | null
}


const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
    if (!weather) return null
    return (
        <div>
            <Card className="flex flex-col justify-center h-84 items-center p-10  rounded-2xl text-white bg-[#122033]">
                <Text variant="p" children={weather.timezone} />
                <Text variant="h2" children={weather.address} />
                <Text variant="p" children={weather.date} />
                <div className="flex items-center">
                    <div className="icon">☀️</div>
                    <Text variant="h1" children={"20"} />
                </div>
            </Card>
        </div>
    );
};

export default WeatherCard;