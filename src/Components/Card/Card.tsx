import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;


}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={` p-8 rounded-2xl text-white bg-[#122033] ${className}`}>
      {children}
    </div>
  );
}

export default Card;
