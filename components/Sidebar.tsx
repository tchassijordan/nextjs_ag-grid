const Sidebar = ({ children }) => {
  return (
    <div className="w-1/5 bg-stone-900 text-white border-r-2">
      <ul className="list-none flex flex-col items-center gap-3 pt-5">
        <li className="hover:text-stone-400 cursor-pointer border-b-2 border-stone-400">Home</li>
        <li className="hover:text-stone-400 cursor-pointer border-b-2 border-stone-400">About</li>
        <li className="hover:text-stone-400 cursor-pointer border-b-2 border-stone-400">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
