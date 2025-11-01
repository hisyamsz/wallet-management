import { useBalanceStore } from "@/store/useBalanceStore";
import { useTransactionStore } from "@/store/useTransactionStore";
import type { IDashboardCard } from "@/types/Dashboard";
import { convertIDR } from "@/utils/currency";
import { FcBearish, FcBullish } from "react-icons/fc";
import { CiWallet } from "react-icons/ci";
import { LuReceipt } from "react-icons/lu";

const { balance } = useBalanceStore.getState();
const { transactions } = useTransactionStore.getState();

const totalIncome = transactions
  .filter((tr) => tr.type.toLowerCase() === "income")
  .reduce((acc, curr) => acc + curr.amount, 0);

const totalExpense = transactions
  .filter((tr) => tr.type.toLowerCase() === "expense")
  .reduce((acc, curr) => acc + curr.amount, 0);

const avgTransaction =
  transactions.length === 0 ? 0 : transactions.reduce((acc, curr) => acc + curr.amount, 0) / transactions.length;

export const DashboardCard: IDashboardCard[] = [
  {
    id: 1,
    name: "Total Balance",
    value: convertIDR(balance),
    icon: <CiWallet className="w-8 h-8" />,
  },
  {
    id: 2,
    name: "Total Income",
    value: convertIDR(totalIncome),
    icon: <FcBullish className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Total Expense",
    value: convertIDR(totalExpense),
    icon: <FcBearish className="w-8 h-8" />,
  },
  {
    id: 4,
    name: "Average Transaction",
    value: convertIDR(avgTransaction),
    icon: <LuReceipt className="w-8 h-8" />,
  },
];
