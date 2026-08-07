import react from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";


const CurrentWeather = () => {
    const { location } = useParams();
    return (
        <div>
            <Card>
                <h1>Current Weather for {location}</h1>
            </Card>

        </div>
    );
};

export default CurrentWeather;