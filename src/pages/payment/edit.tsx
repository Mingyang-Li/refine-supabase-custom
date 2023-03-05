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
  useForm,
} from "@pankod/refine-antd";
import { IPayment } from "interfaces";
import dayjs from "dayjs";

export const PaymentEdit: React.FC<IResourceComponentsProps> = () => {
  const [isDeprecated, setIsDeprecated] = useState(false);
  const { formProps, saveButtonProps, queryResult } = useForm<IPayment>({
    liveMode: "manual",
    onLiveEvent: () => {
      setIsDeprecated(true);
    },
  });

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
          <Select
            options={[
              {
                label: "USD",
                value: "USD",
              },
              {
                label: "GBP",
                value: "GBP",
              },
            ]}
          />
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
      </Form>
    </Edit>
  );
};
