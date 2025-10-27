import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { COLUMN_LIST_TRANSACTION } from "@/constants/Transaction.constants";
import { useTransactionStore } from "@/store/useTransactionStore";
import { Button } from "../ui/Button";
import TransactionModal from "./TransactionModal";
import type { ITransaction } from "@/types/Transaction";
import { useToggleDialog } from "@/store/useToggleDialog";
import { FcBearish, FcBullish } from "react-icons/fc";
import { convertIDR } from "@/utils/currency";
import { CiTrash } from "react-icons/ci";

interface TransactionProps {
  title?: string;
}

const Transaction: React.FC<TransactionProps> = () => {
  const transaction = useTransactionStore((state) => state.transactions);
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const deleteTransaction = useTransactionStore((state) => state.deleteTransaction);
  const setIsOpen = useToggleDialog((state) => state.setIsOpen);

  const handleSubmitTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newTransaction: Omit<ITransaction, "id"> = {
      type: formData.get("type") as string,
      date: formData.get("date") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    };

    addTransaction(newTransaction);
    setIsOpen(false);
    e.currentTarget.reset();
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {COLUMN_LIST_TRANSACTION.map((list) => (
              <TableHead key={list.uid} className="font-normal text-gray-500">
                {list.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transaction.length === 0 ? (
            <TableRow className="text-center text-gray-500 py-6">
              <TableCell colSpan={7} className="text-2xl py-16 font-semibold">
                Transaction not found
              </TableCell>
            </TableRow>
          ) : (
            transaction.map((t) => (
              <TableRow key={t.id} className="font-medium text-base">
                <TableCell title={t.type.toUpperCase()}>
                  {t.type.toLowerCase() === "income" ? <FcBullish size={50} /> : <FcBearish size={50} />}
                </TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell>{`${t.category.charAt(0).toUpperCase()}${t.category.slice(1)}`}</TableCell>
                <TableCell>{t.description}</TableCell>
                <TableCell className={t.type.toLowerCase() === "income" ? "text-green-500" : "text-red-500"}>
                  {t.type.toLowerCase() === "income" ? `+${convertIDR(t.amount)}` : `-${convertIDR(t.amount)}`}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      title="Delete"
                      className=" hover:text-red-700 hover:border-none hover:bg-red-200 transition-all"
                      onClick={() => deleteTransaction(t.id)}
                    >
                      <CiTrash size={30} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TransactionModal onSubmit={handleSubmitTransaction} />
    </>
  );
};

export default Transaction;
