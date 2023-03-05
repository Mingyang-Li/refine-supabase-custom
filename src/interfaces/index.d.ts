export interface IPayment {
  id: string;
  amount: number;
  currency: string;
  dateOfPayment: Date;
  from: string;
  to: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date;
  archived: boolean;
}

export type IStatus = "COMPLETED" | "PROCESSING" | "PENDING" | "FAILED";
export type IStatusColor =
  | "success"
  | "processing"
  | "error"
  | "warning"
  | "default";
