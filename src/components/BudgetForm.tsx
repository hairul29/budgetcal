import { Form, InputNumber, Button, Row, Col } from "antd";
import type { BudgetInfo } from "../interfaces/Budget";

interface Props {
  onCalculate: (values: BudgetInfo) => void;
}

const fields = [
  { name: "housing", label: "Housing Expenses" },
  { name: "food", label: "Food Expenses" },
  { name: "transportation", label: "Transportation Expenses" },
  { name: "other", label: "Other Expenses" },
];

const BudgetForm = ({ onCalculate }: Props) => (
  <Form
    layout="vertical"
    initialValues={{
      income: 0,
      housing: 0,
      food: 0,
      transportation: 0,
      other: 0,
    }}
    onFinish={onCalculate}
  >
    <Row justify="center">
      <Col xs={24} md={12}>
        <Form.Item
          label="Monthly Income"
          name="income"
          className="budget-label"
          rules={[
            {
              required: true,
              message: "Please enter your monthly income.",
            },
          ]}
        >
          <InputNumber
            min={0}
            controls={false}
            className="budget-input"
            placeholder="₱0.00"
          />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={[30, 15]}>
      {fields.map((field) => (
        <Col xs={24} md={12} key={field.name}>
          <Form.Item
            label={field.label}
            name={field.name}
            className="budget-label"
          >
            <InputNumber
              min={0}
              controls={false}
              className="budget-input"
              placeholder="₱0.00"
            />
          </Form.Item>
        </Col>
      ))}
    </Row>

    <Row justify="center">
      <Col xs={24} md={10}>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="budget-button"
        >
          Calculate Budget
        </Button>
      </Col>
    </Row>
  </Form>
);

export default BudgetForm;