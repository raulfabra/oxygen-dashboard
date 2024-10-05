import { useEffect, useState } from "react";
import { User } from "../types/type";
import { useAppDispatch, useAppSelector } from "../../app/utils/storetsc";
import { getUserThunk } from "../redux/userThunk";

export const useUserDatos = () => {
  const [showData, setShowData] = useState<User[]>([]);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.users.dataList);
  const status = useAppSelector((state) => state.users.status);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUserThunk());
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [data]);

  return { showData, setShowData };
};
