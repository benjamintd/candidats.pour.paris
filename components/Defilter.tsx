import React, { ReactNode } from "react";
import Link from "next/link";

interface IProps {
  href: string;
  children: ReactNode;
}

export default ({ children, href }: IProps) => (
  <Link href={href}>
    <div className="pa3 mb2 dark-gray pointer">
      <span className="pa2 br2 ba b--dark-gray">{children}</span>
    </div>
  </Link>
);
