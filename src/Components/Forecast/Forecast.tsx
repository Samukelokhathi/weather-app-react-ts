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

            <div className="flex gap-2 justify-between  p-1">
                <Text variant="h3" children="Forecast" />
                <div>
                    <Button className={`px-4 py-1 rounded-0  text-sm ${view === "hourly" ? "bg-[#20B5E2] text-white" : "text-gray-400"
                        }`} onClick={() => setView("hourly")} text="Hourly"
                    />
                    <Button className={`px-4 py-1  text-sm ${view === "daily" ? "bg-[#20B5E2] text-white" : "text-gray-400"
                        }`} onClick={() => setView("daily")} text="Daily"
                    />
                </div>
            </div>


            <div className="flex gap-3 overflow-x-auto pb-2 ">
                {view === "daily" && weather.days.map((day) => (

                    <Card key={day.datetime} className="flex-col items-center gap-2 px-4 py-4 min-w-[90px] shrink-0 bg-white/5">

                        <Text variant="h4" children={day.datetime} />
                        <span>{getWeatherIcon(day.icon)}</span>
                        <Text variant="p" children={`${day.temp}°C`} />

                    </Card>
                ))}

                {view === "hourly" && weather.days[0].hours.map((hour) => (

                    <Card key={hour.datetime} className="flex-col items-center gap-2 px-4 py-4 min-w-[90px] shrink-0 bg-white/5">

                        <Text variant="h4" children={hour.datetime} />
                        <span>{getWeatherIcon(hour.icon)}</span>
                        <Text variant="p" children={`${hour.temp}°C`} />
                    </Card>
                ))}
            </div>



        </Card>
    );
};

export default Forecast;