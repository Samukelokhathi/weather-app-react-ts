import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  height: string;
}

function Card({ children }: CardProps) {
  return (
    <div className="rounded-3xl bg-[#121F33] flex flex-col justify-center text-white">
      {children}
    </div>
  );
}

export default Card;
