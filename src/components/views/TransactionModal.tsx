import type { FC } from "react";
import { Button } from "../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToggleDialog } from "@/store/useToggleDialog";

interface TransactionModalProps {
  dialogTrigger?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TransactionModal: FC<TransactionModalProps> = ({ onSubmit }) => {
  const isOpen = useToggleDialog((state) => state.isOpen);
  const setIsOpen = useToggleDialog((state) => state.setIsOpen);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>Add your transaction here</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 mb-6">
            <div className="grid gap-3">
              <Label htmlFor="type">Type</Label>
              <Input id="type" type="type" name="type" placeholder="Income / Expense" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" name="date" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" placeholder="Food / Transportation / etc" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" placeholder="Example: Buy Coffe, Salary" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="amount">Total</Label>
              <Input id="amount" type="number" name="amount" placeholder="10000" required />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Transaction</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionModal;
