import Card from "../../Components/Card/Card";
import { useState } from "react"
import type { WeatherData } from "../../types/Type";
import { getWeatherIcon } from "../../utils/WeatherIcons";
import { Text } from "../Text/Text";
import Button from "../Button/Button";


interface ForecastProps {
    weather: WeatherData;
}

const Forecast: React.FC<ForecastProps> = ({ weather }) => {
    const [view, setView] = useState<"hourly" | "daily">("hourly");

    return (
        <Card className="flex flex-col gap-4 bg-[#122033] p-4">
            <Text variant="h3" children="5-Day Forecast" />

            <div className="flex gap-2 bg-white/5 rounded-full p-1">
                <Button className="bg-white/10 hover:bg-white/20" onClick={() => setView("hourly")} text="Hourly"
                />

                <Button className="bg-white/10 hover:bg-white/20" onClick={() => setView("daily")} text="Daily"
                />
            </div>


            <div className="flex gap-3 overflow-x-auto pb-2">
                {view === "daily" && weather.days.map((day) => (
                    <Card key={day.datetime} className="">
                        <Text variant="h4" children={day.datetime} />
                        <span>{getWeatherIcon(day.icon)}</span>
                        <Text variant="p" children={`${day.temp}°C`} />

                    </Card>
                ))}
            </div>

        </Card>
    );
};

export default Forecast;