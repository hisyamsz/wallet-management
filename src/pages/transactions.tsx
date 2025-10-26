import MainLayout from "@/components/layouts/MainLayout";
import Transaction from "@/components/views/Transaction";

const TransactionPage = () => {
  return (
    <MainLayout title="Transaction" description="Welcome to your financial overview" buttonShow>
      <Transaction />
    </MainLayout>
  );
};

export default TransactionPage;
