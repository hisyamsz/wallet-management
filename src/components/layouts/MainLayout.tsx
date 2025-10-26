import * as React from "react";
import PageHead from "../commons/PageHead";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";

interface MainLayoutProps {
  buttonShow?: boolean;
  children: React.ReactNode;
  description: string;
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, description, title = "Home", buttonShow = false }) => {
  return (
    <React.Fragment>
      <PageHead title={title} />
      <div className="mx-auto flex max-w-screen-2xl 2xl:container">
        <Sidebar />
        <div className="h-screen w-full overflow-y-auto">
          <Navbar />
          <div className="p-8 space-y-8">
            <Header title={title} description={description} buttonShow={buttonShow} />
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
