import React from "react";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<BtnProps> = ({ text, style, className }) => {
  return (
    <button className={`${className || ""}`} style={style}>
      {text}
    </button>
  );
};

export default Button;
