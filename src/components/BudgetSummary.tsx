import { Card, Statistic, Progress } from "antd";
import type { BudgetInfo } from "../interfaces/Budget";

interface Props {
  budget: BudgetInfo;
}

const BudgetSummary = ({ budget }: Props) => {
  const totalExpenses =
    budget.housing + budget.food + budget.transportation + budget.other;

  const balance = budget.income - totalExpenses;
  const percentage = budget.income
    ? Math.min((totalExpenses / budget.income) * 100, 100)
    : 0;

  return (
    <Card className="summary-card">
      <div className="summary-grid">
        <Statistic title="Total Expenses" value={totalExpenses} prefix="₱" />

        <Statistic
          title="Remaining Balance"
          value={balance}
          prefix="₱"
          valueStyle={{ color: balance >= 0 ? "#2eb70f" : "#FF8FAB" }}
        />
      </div>

      <div style={{ marginTop: 30 }}>
        <Progress
          percent={+percentage.toFixed(1)}
          strokeColor="#A8D8FF"
          trailColor="#F9D5E5"
          strokeWidth={18}
        />
      </div>
    </Card>
  );
};

export default BudgetSummary;