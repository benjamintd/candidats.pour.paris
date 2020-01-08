import React from "react";

export default ({ size }: { size: number | string }) => (
  <svg viewBox="0 0 48 48" height={size} width={size} version="1.1">
    <path
      d="M37 45H11a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h19l10 10v29a3 3 0 0 1-3 3z"
      fill="#43A047"
    />
    <path d="M40 13H30V3z" fill="#C8E6C9" />
    <path d="M30 13l10 10V13z" fill="#2E7D32" />
    <path
      d="M31 23H15v14h18V23zm-14 2h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4zm14 2h-8v-2h8zm0-4h-8v-2h8zm0-4h-8v-2h8z"
      fill="#E8F5E9"
    />
  </svg>
);
