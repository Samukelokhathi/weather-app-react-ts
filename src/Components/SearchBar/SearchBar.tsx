import Button from "../Button/Button";

import type React from "react";

type searchBarProps = {
    value?: string;
    onChange: (value: string) => void;
    onSearch: () => void;
    style?: React.CSSProperties;
    error?: string;
};



const SearchBar: React.FC<searchBarProps> = ({ value, onChange, onSearch, style, error }) => {
    return (
        <div className="flex gap-3 w-full  mx-auto mt-4">
            <input
                className="w-full bg-[#112033] text-gray-400 placeholder-EnterPlace placeholder-gray-400 px-9 py-3 rounded-full border border-gray-800/40 focus:outline-none focus:border-blue-500/50"

                placeholder="Enter Location"
                type="text"
                style={style}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <span>{error}</span>}
            <Button text="Search" onClick={onSearch} />
        </div>
    );
};

export default SearchBar