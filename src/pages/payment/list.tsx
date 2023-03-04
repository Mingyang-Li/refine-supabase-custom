import { IResourceComponentsProps } from "@pankod/refine-core";

import {
  List,
  Table,
  useTable,
  Space,
  EditButton,
  getDefaultSortOrder,
} from "@pankod/refine-antd";

import { IPayment } from "interfaces";

export const PaymentList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IPayment>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
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
        />
        <Table.Column
          key="dateOfPayment"
          dataIndex="dateOfPayment"
          title="Date of Payment"
          sorter
        />
        <Table.Column key="from" dataIndex="from" title="From" sorter />
        <Table.Column key="to" dataIndex="to" title="To" sorter />
        <Table.Column key="status" dataIndex="status" title="Status" sorter />
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
