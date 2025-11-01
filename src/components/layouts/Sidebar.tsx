import { cn } from "../../utils/cn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import { useNavOpen } from "../../store/useNavbarOpen";
import { Button } from "../ui/Button";
import { SidebarList } from "@/constants/Sidebar.constants";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = useNavOpen((state) => state.isOpen);

  return (
    <div
      className={cn(
        "fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r border-gray-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0",
        { "translate-x-0": isOpen },
      )}
    >
      <div>
        <div className="flex justify-center items-center">
          <Link
            to={"/"}
            className="mb-10 cursor-pointer inline-flex items-center justify-center gap-2 font-semibold text-xl "
          >
            <CiWallet size="40" className="text-slate-700" /> My Wallet
          </Link>
        </div>
        <div>
          <ul className="space-y-4">
            {SidebarList.map((item) => (
              <li key={item.key}>
                <Button
                  className="w-full items-center justify-start gap-2 text-lg"
                  variant={location.pathname === item.href ? "default" : "ghost"}
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
