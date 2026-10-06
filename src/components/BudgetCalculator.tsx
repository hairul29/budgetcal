import { useState } from "react";
import { Card, Typography } from "antd";

import BudgetForm from "./BudgetForm";
import BudgetSummary from "./BudgetSummary";
import BudgetStatus from "./BudgetStatus";
import type { BudgetInfo } from "../interfaces/Budget";

const { Title } = Typography;

const BudgetCalculator = () => {
  const [budget, setBudget] = useState<BudgetInfo>({
    income: 0,
    housing: 0,
    food: 0,
    transportation: 0,
    other: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCalculate = (values: BudgetInfo) => {
    setBudget(values);
    setSubmitted(true);
  };

  const totalExpenses =
    budget.housing + budget.food + budget.transportation + budget.other;
  const balance = budget.income - totalExpenses;

  return (
    <div className="budget-container">
      <Card className="budget-card">
        <Title level={1} className="budget-title">
          PERSONAL BUDGET CALCULATOR
        </Title>

        <BudgetForm onCalculate={handleCalculate} />

        {submitted && (
          <>
            <BudgetSummary budget={budget} />
            <BudgetStatus balance={balance} />
          </>
        )}
      </Card>
    </div>
  );
};

export default BudgetCalculator;