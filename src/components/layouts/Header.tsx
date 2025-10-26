import * as React from "react";
import Button from "../ui/Button";
import { FaPlus } from "react-icons/fa6";

interface HeaderProps {
  buttonShow?: boolean;
  description: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, buttonShow = false, description }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-lg text-gray-500">{description}</p>
      </div>
      {buttonShow && (
        <Button className="gap-2">
          <FaPlus /> Add Transaction
        </Button>
      )}
    </header>
  );
};

export default Header;
