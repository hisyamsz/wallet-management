import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { COLUMN_LIST_TRANSACTION } from "@/constants/Transaction.constants";
import { useTransactionStore } from "@/store/useTransactionStore";
import { Button } from "../ui/Button";

interface TransactionProps {
  title?: string;
}

const Transaction: React.FC<TransactionProps> = () => {
  const transaction = useTransactionStore((state) => state.transactions);
  const deleteTransaction = useTransactionStore((state) => state.deleteTransaction);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {COLUMN_LIST_TRANSACTION.map((list) => (
            <TableHead key={list.uid}>{list.name}</TableHead>
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
            <TableRow key={t.id}>
              <TableCell>{t.type}</TableCell>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.category}</TableCell>
              <TableCell>{t.description}</TableCell>
              <TableCell>{t.amount}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => deleteTransaction(t.id)}>
                    Hapus
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default Transaction;
