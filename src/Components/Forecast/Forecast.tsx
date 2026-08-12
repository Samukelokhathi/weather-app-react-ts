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
        <Card className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
                <Text variant="h3" children="Forecast" />

                <div className="flex gap-2 bg-white/5 rounded-full p-1">
                    <Button className={`px-4 py-1 rounded-full text-sm ${view === "hourly" ? "bg-[#20B5E2] text-white" : "text-gray-400"
                        }`} onClick={() => setView("hourly")} text="Hourly"
                    />

                    <Button className={`px-4 py-1 rounded-full text-sm ${view === "daily" ? "bg-[#20B5E2] text-white" : "text-gray-400"
                        }`} onClick={() => setView("daily")} text="Daily"
                    />
                </div>


                <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {view === "daily" && weather.days.map((day) => (

                        <Card key={day.datetime} className="flex-col items-center gap-2 px-4 py-4 min-w-[90px] snap-start shrink-0 bg-white/5">
                            <Text variant="h4" children={day.datetime} />
                            <span>{getWeatherIcon(day.icon)}</span>
                            <Text variant="p" children={`${day.temp}°C`} />
                        </Card>
                    ))}
                </div>
            </div>

        </Card>
    );
};

export default Forecast;