const storageKey = "savedLocations";

export function getSavedLocations(): string[] {
    const savedLocations = localStorage.getItem(storageKey);
    return savedLocations ? JSON.parse(savedLocations) : [];
}

export function saveLocation(location: string): string[] {
    const currentData = getSavedLocations();
    if (currentData.includes(location)) return currentData;
    const updated = [...currentData, location];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    return updated;
}

export function removeLocation(city: string): string[] {
    const updated = getSavedLocations().filter((c) => c !== city);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    return updated;
}