import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  Create,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  useForm,
} from "@pankod/refine-antd";
import { IPayment } from "interfaces";
import {
  UNIQUE_PAYMENT_CURRENCIES,
  UNIQUE_PAYMENT_STATUSES,
} from "graphql/queries";
import { Query } from "generated/graphql";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";

export const PaymentCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IPayment>();
  const { data: currencies } = useQuery<Query>(UNIQUE_PAYMENT_CURRENCIES);
  const { data: statuses } = useQuery<Query>(UNIQUE_PAYMENT_STATUSES);
  const uniqueCurrencies = currencies?.uniquePaymentCurrencies.map((d) => ({
    label: d.currency,
    value: d.currency,
  }));

  const uniqueStatuses = statuses?.uniquePaymentStatuses.map((d) => ({
    label: d.status,
    value: d.status,
  }));

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item
          label="Currency"
          name="currency"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={uniqueCurrencies} />
        </Form.Item>
        <Form.Item
          label="Date of payment"
          name="dateOfPayment"
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={uniqueStatuses} />
        </Form.Item>
        <Form.Item
          label="From"
          name="from"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="To"
          name="to"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
