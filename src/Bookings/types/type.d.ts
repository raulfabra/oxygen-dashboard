export interface Booking {
  id: number;
  fullName: string;
  orderDate: Date;
  checkin: Date;
  checkout: Date;
  request: string;
  roomType: RoomType;
  roomNumber: number;
  status: Status;
}

export enum RoomType {
  DoubleBed = "Double Bed",
  DoubleSuperior = "Double Superior",
  SingleBed = "Single Bed",
  Suite = "Suite",
}

export enum Status {
  Booked = "Booked",
  Canceled = "Canceled",
  Pending = "Pending",
  Refund = "Refund",
}

export interface TypeBookingColumns {
  label: JSX.Element | string;
  display: (item: Booking) => JSX.Element | string;
}
