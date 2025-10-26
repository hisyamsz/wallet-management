import { cn } from "../../utils/cn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import Button from "../ui/Button";
import { SidebarList } from "../../constants/sidebar.constants";
import { useNavOpen } from "../../store/useNavbarOpen";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = useNavOpen((state) => state.isOpen);

  return (
    <div
      className={cn(
        "fixed flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r border-gray-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0",
        { "translate-x-0": isOpen },
      )}
    >
      <div>
        <div className="flex justify-center items-center">
          <Link
            to={"/"}
            className="mb-10 cursor-pointer inline-flex items-center justify-center gap-2 font-semibold text-xl "
          >
            <CiWallet size="40" className="text-indigo-700" /> My Wallet
          </Link>
        </div>
        <div>
          <ul className="space-y-2">
            {SidebarList.map((item) => (
              <li key={item.key}>
                <Button
                  className="w-full inline-flex justify-start gap-2 text-lg font-semibold"
                  variant={location.pathname === item.href ? "primary" : "ghost"}
                  onClick={() => navigate(item.href)}
                >
                  {item.icon} {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
