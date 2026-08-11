const iconProps: Record<string, string> = {
    "clear-day": "☀️",
    "clear-night": "🌙",
    "partly-cloudy-day": "⛅",
    "partly-cloudy-night": "☁️",
    "cloudy": "☁️",
    "rain": "🌧️",
    "snow": "❄️",
    "wind": "💨",
    "fog": "🌫️",

};

export function getWeatherIcon(icon: string): string {
    return iconProps[icon] || "🌡️"
}