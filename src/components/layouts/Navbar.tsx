import { BsLayoutSidebar, BsLayoutSidebarInset } from "react-icons/bs";
import { useNavOpen } from "../../store/useNavbarOpen";

const Navbar = () => {
  const isOpen = useNavOpen((state) => state.isOpen);
  const setIsOpen = useNavOpen((state) => state.setIsOpen);

  return (
    <nav className="flex justify-between bg-white border-b border-b-gray-200 py-4 px-6 lg:justify-end">
      <h1 className="text-md text-gray-500 font-normal">Welcome back!</h1>
      <button onClick={setIsOpen} className="lg:hidden" title="Sidebar">
        {isOpen ? (
          <BsLayoutSidebarInset size={20} className="text-indigo-600 hover:text-indigo-400" />
        ) : (
          <BsLayoutSidebar size={20} className="text-indigo-600 hover:text-indigo-400" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
