import { useEffect, useState } from "react";

import { Customer } from "../types/type";
import { useAppDispatch, useAppSelector } from "../../app/utils/storetsc";
import { getCustomerThunk } from "../redux/customerThunk";

export const useCustomerDatos = () => {
  const [showData, setShowData] = useState<Customer[]>([]);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.customers.dataList);
  const status = useAppSelector((state) => state.customers.status);
  const error = useAppSelector((state) => state.customers.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCustomerThunk());
    } else if (status === "rejected") {
      alert("ERROR");
    } else if (status === "fulfilled") {
      setShowData(data);
    }
  }, [data]);

  return { showData, setShowData };
};
