import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { DashboardCard } from "@/constants/Dashboard.constants";

interface DashboardProps {
  title?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
};

export default Dashboard;
