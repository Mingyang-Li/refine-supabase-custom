import { IStatus, IStatusColor } from "interfaces";

export const statusToColor = (status: IStatus): IStatusColor => {
  switch (status) {
    case "COMPLETED":
      return "success";
    case "FAILED":
      return "error";
    case "PENDING":
      return "warning";
    case "PROCESSING":
      return "processing";
    default:
      return "default";
  }
};

export const toReadableDate = (date: string): string => {
  const d = new Date(date);
  return `${date.slice(
    0,
    10
  )}, ${d.getHours()}hr ${d.getMinutes()}min ${d.getSeconds()}s`;
};
