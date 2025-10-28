import Setting from "@/components/views/Setting";
import MainLayout from "../components/layouts/MainLayout";

const SettingsPage = () => {
  return (
    <MainLayout title="Settings" description="Setting your finance here">
      <Setting />
    </MainLayout>
  );
};

export default SettingsPage;
