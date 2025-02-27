import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"

export interface Goal {
  id: number;
  title: string,
  goalAmount: number;
  currentAmount: number;
}

interface GoalProps {
  goals: Goal[];
}

export default function RecentGoal({ goals }: GoalProps) {

   const calcPercent = (currentAmount: number, goalAmount: number) => {
     return ((currentAmount / goalAmount) * 100);
   }
        
  return (
    <div className="m-3 w-5/12 h-fit">
      <Card>
        <CardHeader>
          <CardTitle>Recent Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {goals.map((goal) => (
              <li
                key={goal.id}
                className="p-3 rounded-lg flex flex-col gap-2"
              >
                <p className="font-semibold text-md">{goal.title}</p>
                <Progress value={calcPercent(goal.currentAmount, goal.goalAmount)} className="w-full" />
              </li>
            ))}
          </ul>
          <p className="text-sm leading-none text-muted-foreground mt-3">See more</p>
        </CardContent>
      </Card>
    </div>
  );
}
