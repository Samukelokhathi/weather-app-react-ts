import type { ReactNode } from "react";
// import type { WeatherData } from "../../../type/Type";

interface CardProps {
  children: ReactNode;
  className?: string;
  height?: string;

}

function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col justify-center h-54  p-8 rounded-2xl text-white bg-[#122033]">
      {children}
    </div>
  );
}

export default Card;
