import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { DashboardCard } from "@/constants/Dashboard.constants";
import { useTransactionStore } from "@/store/useTransactionStore";
import { FcBearish, FcBullish } from "react-icons/fc";
import { convertIDR } from "@/utils/currency";
import { cn } from "@/lib/utils";

const Dashboard: React.FC = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DashboardCard.map((val) => (
          <Card key={val.id} className="hover:shadow-lg transition-all pb-12">
            <CardContent className="flex justify-between gap-2">
              <div className="space-y-2 font-semibold">
                <p className="text-muted-foreground">{val.name}</p>
                <p className="text-xl">{val.value}</p>
              </div>
              <div className="w-12 h-12 text-indigo-700 bg-gray-100 rounded-lg flex items-center justify-center">
                {val.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
        <Card>
          <CardContent>
            <h1 className="font-semibold text-lg mb-4">Recent Transactions</h1>
            <div className="space-y-4">
              {transactions.map((tr) => (
                <div
                  key={tr.id}
                  className="p-4 hover:bg-gray-100 rounded-lg flex items-center justify-between w-full gap-4 transition-all"
                >
                  <div className="flex-none">
                    {tr.type.toLowerCase() === "income" ? <FcBullish size={40} /> : <FcBearish size={40} />}
                  </div>
                  <div className="flex grow-4 flex-col">
                    <h2 className="text-lg font-semibold">{tr.description}</h2>
                    <p className="text-muted-foreground">
                      {tr.category} • {tr.date}
                    </p>
                  </div>
                  <p
                    className={cn(
                      "text-lg font-semibold",
                      tr.type.toLowerCase() === "income" ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {tr.type.toLowerCase() === "income" ? `+${convertIDR(tr.amount)}` : `-${convertIDR(tr.amount)}`}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
