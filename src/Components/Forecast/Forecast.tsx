import Card from "../../Components/Card/Card";
import { useState } from "react"
import type { WeatherData } from "../../types/Type";
import { getWeatherIcon } from "../../utils/WeatherIcons";
import { Text } from "../Text/Text";


interface ForcastProps {
    weather: WeatherData;
}

const Forecast = () => {
    return (
        <Card className="flex flex-col gap-4">
            <p>Forecast content</p>

        </Card>
    );
};

export default Forecast;