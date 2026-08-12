interface SavedLocationsProps {
    locations: string[];
    onSelect: (city: string) => void;
    onDelete: (city: string) => void;
    onClose: () => void;
}

const SavedLocations: React.FC<SavedLocationsProps> = ({ locations, onSelect, onDelete, onClose }) => {
    return (
        <div className="absolute top-16 right-4 bg-[#122033] text-white rounded-xl p-4 shadow-lg w-64 z-50">
            <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Saved Locations</span>
                <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
            </div>

            {locations.length === 0 && (
                <p className="text-gray-400 text-sm">No saved locations yet.</p>
            )}

            <div className="flex flex-col gap-2">
                {locations.map((loc) => (
                    <div key={loc} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
                        <button onClick={() => onSelect(loc)} className="text-sm text-left">
                            {loc}
                        </button>
                        <button
                            onClick={() => onDelete(loc)}
                            className="text-red-400 hover:text-red-300 text-sm"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedLocations;