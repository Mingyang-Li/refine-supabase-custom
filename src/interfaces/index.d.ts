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
