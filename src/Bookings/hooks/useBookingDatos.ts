import { useEffect, useState } from "react";
import { getBooking_ID_Thunk, getBookingsThunk } from "../redux/bookingThunk";
import { Booking } from "../types/type";
import { useAppDispatch, useAppSelector } from "../../app/utils/storetsc";

export const useBookingDatos = () => {
  const [showData, setShowData] = useState<Booking[]>([]);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.bookings.dataList);
  const status = useAppSelector((state) => state.bookings.status);
  const error = useAppSelector((state) => state.bookings.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getBookingsThunk());
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [data]);

  return { showData, setShowData };
};

export const useBookingData = (id: number) => {
  const [showData, setShowData] = useState<Booking | null>(null);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.bookings.data);
  const status = useAppSelector((state) => state.bookings.status);
  const error = useAppSelector((state) => state.bookings.error);

  useEffect(() => {
    console.log("El estado en Detalles", status);
    if (status === "idle") {
      dispatch(getBooking_ID_Thunk(id));
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [status]);

  return { showData, setShowData };
};
