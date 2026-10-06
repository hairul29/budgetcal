import { Alert } from "antd";

interface Props {
  balance: number;
}

const BudgetStatus = ({ balance }: Props) => {
  return (
    <Alert
      className="budget-alert"
      showIcon
      type={balance >= 0 ? "success" : "error"}
      message={
        balance >= 0
          ? "🌸 Within Budget"
          : "🌸 Over Budget"
      }
    />
  );
};

export default BudgetStatus;