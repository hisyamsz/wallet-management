import { BsLayoutSidebar } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white border-b border-b-gray-200 py-4 px-6">
      <button>
        <BsLayoutSidebar size={20} className="text-indigo-600 hover:text-indigo-400" />
      </button>
      <h1 className="text-md text-gray-500 font-normal">Welcome back!</h1>
    </nav>
  );
};

export default Navbar;
