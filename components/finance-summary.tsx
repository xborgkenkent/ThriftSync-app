import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FinanceSummaryProps {
  income: number;
  expenses: number;
  savings: number;
  balance: number;
}

export default function FinanceSummary({
  income,
  expenses,
  savings,
  balance,
}: FinanceSummaryProps) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP",
    }).format(amount);

  const stats = [
    { title: "My Balance", value: balance, color: "border-blue-500" },
    { title: "Income", value: income, color: "border-green-500" },
    { title: "Expenses", value: expenses, color: "border-orange-500" },
    { title: "Savings", value: savings, color: "border-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {stats.map((stat, index) => (
        <Card key={index} className={`pl-2 pr-24 border-l-4 ${stat.color} border-t-gray-200 border-r-gray-200 border-b-gray-200`}>
          <CardHeader>
            <CardTitle className="font-thin">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{formatCurrency(stat.value)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
