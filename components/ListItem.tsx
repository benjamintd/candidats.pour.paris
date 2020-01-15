import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  source: string;
}

export default ({ children, source }: IProps) => (
  <li className="pb2">
    {children}
    <sup>
      <a className="link underline-hover gray" href={source}>
        ℹ
      </a>
    </sup>
  </li>
);
