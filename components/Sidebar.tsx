import { ReactElement, ReactNode } from "react";

type Params = {
  children?: ReactNode;
}

const Sidebar = ({ children }: Params):ReactElement => {
  return (
    <div className="w-64 bg-[#222628] text-white flex flex-col border-[1px] border-[#a5a19950]">
      <h1 className="px-5 py-4 mb-3 font-bold text-lg tracking-wide cursor-pointer border-b-[1px] border-[#a5a19950]">Quick Links</h1>
      {children}
    </div>
  );
};

export default Sidebar;
