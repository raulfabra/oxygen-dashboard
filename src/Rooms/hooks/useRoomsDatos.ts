import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/utils/storetsc";
import { Room } from "../types/type";
import { getRoom_ID_Thunk, getRoomsThunk } from "../redux/roomThunk";

export const useRoomsDatos = () => {
  const [showData, setShowData] = useState<Room[]>([]);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.rooms.dataList);
  const status = useAppSelector((state) => state.rooms.status);
  const error = useAppSelector((state) => state.rooms.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getRoomsThunk());
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [data]);

  return { showData, setShowData };
};

export const useRoomData = (id: number) => {
  const [showData, setShowData] = useState<Room | null>(null);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.rooms.data);
  const status = useAppSelector((state) => state.rooms.status);
  const error = useAppSelector((state) => state.rooms.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getRoom_ID_Thunk(id));
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [status]);

  return { showData, setShowData };
};
