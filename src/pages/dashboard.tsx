import Dashboard from "@/components/views/Dashboard";
import MainLayout from "../components/layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard" description="Welcome to your financial overview">
      <Dashboard />
    </MainLayout>
  );
};

export default DashboardPage;
