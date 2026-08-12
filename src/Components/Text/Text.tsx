import React from "react";

type Props = {
  variant?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
};

export const Text: React.FC<Props> = ({
  variant,
  children,
  style,
  className,
  onClick,
}) => {
  if (variant === "h1")
    return (
      <h1 style={style} className={className} onClick={onClick}>
        {children}
      </h1>
    );
  if (variant === "h2")
    return (
      <h2 style={style} className={className} onClick={onClick}>
        {children}{" "}
      </h2>
    );
  if (variant === "p")
    return (
      <p style={style} className={className} onClick={onClick}>
        {children}
      </p>
    );
  if (variant === "span")
    return (
      <span style={style} className={className} onClick={onClick}>
        {children}
      </span>
    );

  return (
    <div style={style} className={className} onClick={onClick}>
      {children}
    </div>
  );
};
