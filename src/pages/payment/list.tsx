import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  useTable,
  Space,
  EditButton,
  getDefaultSortOrder,
  Tag,
} from "@pankod/refine-antd";

import { IPayment, IStatus } from "interfaces";
import { statusToColor, toReadableDate } from "utility/helpers";

export const PaymentList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IPayment>({
    initialFilter: [
      {
        field: "archived",
        value: false,
        operator: "eq",
      },
    ],
    initialSorter: [
      {
        field: "updatedAt",
        order: "desc",
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="id"
          dataIndex="id"
          title="ID"
          sorter
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
        />
        <Table.Column key="amount" dataIndex="amount" title="Amount" sorter />
        <Table.Column
          key="currency"
          dataIndex="currency"
          title="Currency"
          sorter
          render={(value: string) => <Tag color="default">{value}</Tag>}
        />
        <Table.Column
          key="dateOfPayment"
          dataIndex="dateOfPayment"
          title="Date of Payment"
          sorter
          render={(value: string) => toReadableDate(value)}
        />
        <Table.Column key="from" dataIndex="from" title="From" sorter />
        <Table.Column key="to" dataIndex="to" title="To" sorter />
        <Table.Column
          key="status"
          dataIndex="status"
          title="Status"
          sorter
          render={(value: IStatus) => (
            <Tag color={statusToColor(value)}>{value}</Tag>
          )}
        />
        <Table.Column
          key="createdAt"
          dataIndex="createdAt"
          title="Created At"
          sorter
          render={(value: string) => toReadableDate(value)}
        />
        <Table.Column
          key="updatedAt"
          dataIndex="updatedAt"
          title="Updated At"
          sorter
          render={(value: string) => toReadableDate(value)}
        />
        <Table.Column<IPayment>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
