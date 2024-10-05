export interface Room {
  id: number;
  typeRoom_bed: TypeRoomBed;
  description: string;
  facilities: string;
  pictures: string;
  numberRoom: number;
  priceNight: number;
  isOffer: boolean;
  discount: number;
  status: Status;
  cancellation: string;
}

export enum Status {
  Available = "Available",
  Booked = "Booked",
}

export enum TypeRoomBed {
  DoubleBed = "Double Bed",
  DoubleSuperior = "Double Superior",
  SingleBed = "Single Bed",
  Suite = "Suite",
}

export interface TypeRoomsColumns {
  label: string;
  display: (item: Room) => JSX.Element | string;
}
