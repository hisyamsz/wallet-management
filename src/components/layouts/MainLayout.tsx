import * as React from "react";
import PageHead from "../commons/PageHead";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <PageHead title={title} />
      <div className="mx-auto flex max-w-screen-2xl 2xl:container">
        <Sidebar />
        <div className="h-screen w-full overflow-y-auto">
          <Navbar />
          <div className="p-8 space-y-8">
            <Header title="Dashboard" description="Welcome to your financial overview" />
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
