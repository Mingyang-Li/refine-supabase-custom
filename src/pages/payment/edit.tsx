import React, { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  Alert,
  Button,
  DatePicker,
  Edit,
  Form,
  Input,
  ListButton,
  RefreshButton,
  Select,
  Switch,
  useForm,
} from "@pankod/refine-antd";
import { IPayment } from "interfaces";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import {
  UNIQUE_PAYMENT_CURRENCIES,
  UNIQUE_PAYMENT_STATUSES,
} from "graphql/queries";
import { Query } from "generated/graphql";

export const PaymentEdit: React.FC<IResourceComponentsProps> = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IPayment>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });
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

  const handleRefresh = () => {
    queryResult?.refetch();
    setIsDeprecated(false);
  };

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      headerProps={{
        extra: (
          <>
            <ListButton />
            <RefreshButton onClick={handleRefresh} />
          </>
        ),
      }}
    >
      {isDeprecated && (
        <Alert
          message="This payment is changed. Reload to see it's latest version."
          type="warning"
          style={{
            marginBottom: 20,
          }}
          action={
            <Button onClick={handleRefresh} size="small" type="ghost">
              Refresh
            </Button>
          }
        />
      )}

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
          <Input />
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
        <Form.Item
          label="Created At"
          name="createdAt"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Updated At"
          name="updatedAt"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Archived?"
          name="archived"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Switch
            checkedChildren="Archived"
            unCheckedChildren="Active"
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
