export interface Customer {
  id: number;
  date: Date;
  fullName: string;
  email: string;
  phone: string;
  score: number;
  comment: string;
  issue: string;
  status: Status;
}

export enum Status {
  Archive = "Archive",
}

export interface TypeCustomerColumns {
  label: string;
  display: (item: Customer) => JSX.Element | string;
}
