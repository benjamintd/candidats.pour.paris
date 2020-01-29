import React from "react";

export default ({
  children,
  onClick,
  className
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
}) => (
  <button
    className={`f6 link grow ba ph3 pv2 mb2 dib near-black br-pill ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
