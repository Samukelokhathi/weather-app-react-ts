import Card from "./Card";
import { Text } from "../Text/Text"
import type { WeatherData } from "../../types/Type";
import { getWeatherIcon } from "../../utils/WeatherIcons";
import Button from "../Button/Button";

import React from "react";


interface WeatherProps {
    weather: WeatherData | null
    onSave: () => void;
    isSaved: boolean
}


const WeatherCard: React.FC<WeatherProps> = ({ weather, onSave, isSaved }) => {
    if (!weather) return null
    const { temp, humidity, windspeed, icon } = weather.currentConditions;
    return (
        <div>
            <Card className="card flex-col">
                <div>
                    <div className="flex justify-end ">
                        <Button style={{ backgroundColor: "#20B5E2" }} text={isSaved ? "Remove Location" : "Save Location"} onClick={onSave} />
                    </div>
                    <Text variant="p" children={weather.timezone} />
                    <Text variant="h2" children={weather.address} />
                    {/* <Text variant="p" children={datetime} /> */}
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