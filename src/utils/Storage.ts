const storageKey = "savedLocations";

export function getSavedLocations(): string[] {
    const savedLocations = localStorage.getItem(storageKey);
    return savedLocations ? JSON.parse(savedLocations) : [];
}