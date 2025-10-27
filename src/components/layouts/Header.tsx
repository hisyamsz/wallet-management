import * as React from "react";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../ui/Button";
import { useToggleDialog } from "@/store/useToggleDialog";

interface HeaderProps {
  buttonShow?: boolean;
  description: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, buttonShow, description }) => {
  const setIsOpen = useToggleDialog((state) => state.setIsOpen);

  return (
    <header className="flex justify-between items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-lg text-gray-500">{description}</p>
      </div>
      {buttonShow && (
        <Button onClick={() => setIsOpen(true)} className="px-6">
          <FaPlus /> Add Transaction
        </Button>
      )}
    </header>
  );
};

export default Header;
