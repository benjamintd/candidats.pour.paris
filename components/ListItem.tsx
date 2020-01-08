import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  source: string;
}

export default ({ children, source }: IProps) => (
  <li className="pb2">
    {children}
    <sup>
      <a className="gray no-underline" href={source}>
        ℹ
      </a>
    </sup>
  </li>
);
