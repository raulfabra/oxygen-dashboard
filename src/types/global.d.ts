import { RootState } from "../app/store";

// ROOMS
export interface Room {
  id_room: number;
  typeRoom: TypeRoom;
  numberRoom: string;
  priceNight: string;
  offersRoom: OffersRoom;
  statusRoom: StatusRoom;
  cancellationRoom: string;
}

export interface OffersRoom {
  isOffer: boolean;
  discount: number;
}

export enum StatusRoom {
  Available = "Available",
  Booked = "Booked",
}

export interface TypeRoom {
  bed: Bed;
  description: string;
  amenities: string;
  pictures: string;
}

export enum Bed {
  DoubleBed = "Double Bed",
  DoubleSuperior = "Double Superior",
  SingleBed = "Single Bed",
  Suite = "Suite",
}

// <---------------------------------

// BOOKING
export interface Booking {
  id: string;
  id_booking: number;
  fullName: string;
  booking: BookingClass;
  request: string;
  room: Room;
  statusBooking: StatusBooking;
}

export interface BookingClass {
  orderDate: Date;
  checkIn: Check;
  checkOut: Check;
}

export interface Check {
  date: string;
  time: string;
}

export interface Room {
  type: Type;
  number: string;
}

export enum Type {
  DoubleBed = "Double Bed",
  DoubleSuperior = "Double Superior",
  SingleBed = "Single Bed",
  Suite = "Suite",
}

export enum StatusBooking {
  Booked = "Booked",
  Canceled = "Canceled",
  Pending = "Pending",
  Refund = "Refund",
}

// <---------------------------------

// Users
export interface User {
  id: string;
  id_user: number;
  fullName: string;
  email: string;
  phone: string;
  jobDesk: string;
  statusEmployeer: StatusEmployeer;
  start_date: string;
  picture: string;
}

export enum StatusEmployeer {
  Active = "Active",
  Inactive = "Inactive",
}

// <---------------------------------

// Customer
export interface Customer {
  orderID: string;
  date: DateClass;
  customer: CustomerClass;
  score: number;
  comment: Comment;
  action: Action;
}

export enum Action {
  Archive = "Archive",
}

export interface Comment {
  issue: string;
  comment: string;
}

export interface CustomerClass {
  fullName: string;
  email: string;
  phone: string;
}

export interface DateClass {
  date: string;
  time: string;
}

// <---------------------------------

// Auth
export interface auth {
  fullName: string;
  email: string;
  password: string;
  authentication: boolean;
}
export interface AuthAction {
  payload: auth;
  type: string;
}
export interface AuthInterface {
  authState: auth;
  authDispatch: React.Dispatch<AuthAction>;
}

// <---------------------------------

// Pagination
export interface pagination {
  currentPage: number;
}
export interface PageAction {
  payload: number;
  type: string;
}
export interface PageInterface {
  currentPageState: number;
  currentPageDispatch: React.Dispatch<PageAction>;
}

// <---------------------------------

// PROVIDERS
export interface DataStateInterface {
  status: "idle" | "rooms" | "bookings" | "users" | "customers";
  data: Models | [];
}

interface Props {
  children: React.ReactNode;
}

// MENÚ-LATERAL-HOVER
export interface MenuMouseHover {
  [key: string]: boolean;
}

// <---------------------------------

// CUSTOM-HOOKS
export type Models = Booking[] | Room[] | User[] | Customer[];

export interface DataIdInterface {
  id: number;
  getData: (state: RootState) => Models | null;
  getApiThunk: (id: number) => any;
}

export interface DataInterface {
  getData: (state: RootState) => Models | null;
  getStatus: (state: RootState) => "idle" | "rejected" | "fulfilled" | "pending";
  getError: (state: RootState) => string | undefined;
  getApiThunk: () => any;
}
