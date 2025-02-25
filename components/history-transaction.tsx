import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Transaction {
  id: number;
  type: "Income" | "Expense";
  amount: number;
  description: string;
  date: string;
}

interface HistoryTransactionProps {
  transactions: Transaction[];
}

export default function HistoryTransaction({ transactions }: HistoryTransactionProps) {

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "PHP",
        }).format(amount);

  return (
    <div className="fixed right-1 top-0 h-full w-96 bg-background shadow-lg border-l overflow-y-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="p-3 rounded-lg "
              >
                <p className="text-sm text-gray-500">{transaction.date}</p>
                <p className="font-semibold">{transaction.description}</p>
                <p className={`text-lg font-bold ${transaction.type === "Income" ? "text-green-100" : "text-red-100"}`}>
                  {transaction.type === "Income" ? "+" : "-"} {formatCurrency(transaction.amount)}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
