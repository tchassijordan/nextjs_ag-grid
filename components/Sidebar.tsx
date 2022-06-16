import { ReactElement, ReactNode } from "react";

type Params = {
  children?: ReactNode;
  title?: string;
}

const Sidebar = ({title = 'Quick Links', children }: Params):ReactElement => {
  return (
    <div className="w-64 bg-primary text-white flex flex-col border border-primary-border">
      <h1 className="px-5 py-4 mb-3 font-bold text-lg capitalize tracking-wide cursor-pointer border-b border-primary-border">{title}</h1>
      {children}
    </div>
  );
};

export default Sidebar;
