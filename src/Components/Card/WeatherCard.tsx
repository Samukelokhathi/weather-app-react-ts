import Card from "./Card";
import { Text } from "../Text/Text"


const WeatherCard = () => {
    return (
        <div>
            <Card className="flex flex-col justify-center h-74 gap-1 items-center   rounded-2xl text-white bg-[#122033]">
                <Text variant="p" children={"Province"} />
                <Text variant="h2" children={"Pietermarizburg"} />
                <Text variant="p" children={"Monday 10: 00"} />
                <div className="flex items-center">
                    <div className="icon">☀️</div>
                    <Text variant="h1" children={"20"} />
                </div>
            </Card>
        </div>
    );
};

export default WeatherCard;