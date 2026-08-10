import type React from "react";

type InputProps = {
  id?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  error?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  style,

  error,
}) => {
  return (
    <div>
      <input
        className="w-230 bg-[#112033] text-gray-400 placeholder-EnterPlace placeholder-gray-400 px-9 py-3 rounded-full border border-gray-800/40 focus:outline-none focus:border-blue-500/50"
        placeholder="Enter Location"
        type="text"
        id={id}
        style={style}
        value={value}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </div>
  );
};
