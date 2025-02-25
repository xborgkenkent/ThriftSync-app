import FinanceSummary from "@/components/finance-summary";
import HistoryTransaction from "@/components/history-transaction";

export default function Dashboard() {
  const transactions: Transaction[] = [
    { id: 1, type: "Income", amount: 2500, description: "Salary", date: "Feb 1, 2025" },
    { id: 2, type: "Expense", amount: 120, description: "Groceries", date: "Feb 2, 2025" },
    { id: 3, type: "Expense", amount: 50, description: "Gas", date: "Feb 3, 2025" },
    { id: 4, type: "Income", amount: 300, description: "Freelance Work", date: "Feb 4, 2025" },
    { id: 5, type: "Expense", amount: 80, description: "Restaurant", date: "Feb 5, 2025" },
    { id: 6, type: "Expense", amount: 45, description: "Movie Ticket", date: "Feb 6, 2025" },
    { id: 7, type: "Income", amount: 600, description: "Bonus", date: "Feb 7, 2025" },
    { id: 8, type: "Expense", amount: 30, description: "Coffee", date: "Feb 8, 2025" },
    { id: 9, type: "Expense", amount: 200, description: "Shopping", date: "Feb 9, 2025" },
    { id: 10, type: "Income", amount: 100, description: "Stock Dividends", date: "Feb 10, 2025" },
    { id: 11, type: "Expense", amount: 150, description: "Electricity Bill", date: "Feb 11, 2025" },
    { id: 12, type: "Income", amount: 2000, description: "Freelance Project", date: "Feb 12, 2025" },
    { id: 13, type: "Expense", amount: 90, description: "Gym Membership", date: "Feb 13, 2025" },
    { id: 14, type: "Expense", amount: 60, description: "Internet Bill", date: "Feb 14, 2025" },
    { id: 15, type: "Income", amount: 500, description: "Consulting Fee", date: "Feb 15, 2025" },
    { id: 16, type: "Expense", amount: 25, description: "Parking Fee", date: "Feb 16, 2025" },
    { id: 17, type: "Income", amount: 1200, description: "Side Business", date: "Feb 17, 2025" },
    { id: 18, type: "Expense", amount: 300, description: "Car Maintenance", date: "Feb 18, 2025" },
    { id: 19, type: "Expense", amount: 40, description: "Books", date: "Feb 19, 2025" },
    { id: 20, type: "Income", amount: 800, description: "Affiliate Marketing", date: "Feb 20, 2025" },
  ];
  

  return (
    <div className="p-6 flex">
      <div className="flex-col">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex justify-center">
          <FinanceSummary income={5000} expenses={2000} savings={1000} balance={2000} />
        </div>
      </div>
      <HistoryTransaction transactions={transactions} />
    </div>
  );
}
