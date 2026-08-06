import Card from "./Card";
import { Text } from "../Text/Text"

const WeatherCard = () => {
    return (
        <div>
            <Card className="flex flex-col justify-center h-54 gap-3 items-center   rounded-2xl text-white bg-[#122033]">
                <Text variant="p" children={"Province"} />
                <Text variant="h2" children={"Pietermarizburg"} />
                <Text variant="p" children={"Monday 10: 00"} />
            </Card>
        </div>
    );
};

export default WeatherCard;