import Link from "next/link";
import { ReactElement, ReactNode } from "react";

type Params = {
  children?: ReactElement;
  to: string;
  cls?: string;
};

export default function SidebarItem({
  to,
  children,
  cls
}: Params): ReactElement {
  return (
    <Link href={to}>
      <a
        className={`${cls} px-5 py-3 hover:bg-secondary hover:opacity-100 transition capitalize text-sm tracking-wide flex items-baseline`}
      >
        {children}
      </a>
    </Link>
  );
}
