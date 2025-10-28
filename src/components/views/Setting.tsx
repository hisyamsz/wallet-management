import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { useBalanceStore } from "@/store/useBalanceStore";
import { convertIDR } from "@/utils/currency";

interface SettingProps {
  propName?: string;
}

const Setting: React.FC<SettingProps> = () => {
  const [tempBalance, setTempBalance] = React.useState<string>("");
  const balance = useBalanceStore((state) => state.balance);
  const setBalance = useBalanceStore((state) => state.setBalance);

  const isInvalid = !tempBalance || Number(tempBalance) <= 0 || isNaN(Number(tempBalance));

  const handleSaveBalance = () => {
    if (isInvalid) return;

    setBalance(Number(tempBalance));
    setTempBalance("");
  };

  React.useEffect(() => {}, []);

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="wallet">
        <TabsList>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="wallet">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Settings</CardTitle>
              <CardDescription>Enter the amount of balance you have, then save.</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="wallet-balance">Current balance</Label>
                <div className="text-xl font-semibold">{convertIDR(balance)}</div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="set-balance">Change or Adjust Balance</Label>
                <Input
                  id="set-balance"
                  type="number"
                  placeholder="Enter new balance"
                  min={0}
                  value={tempBalance}
                  onChange={(e) => setTempBalance(e.target.value)}
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button onClick={handleSaveBalance} className="w-full" disabled={isInvalid}>
                Save Balance
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Setting;
