import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataInterface, Models } from "../types/global";

export function useLoadingData({ getData, getError, getStatus, getApiThunk }: DataInterface) {
  const dispatch = useDispatch();
  const [dataJson, setDataJson] = useState<Models | null>(null);

  const dataSlice = useSelector(getData);
  const errorSlice = useSelector(getError);
  const statusSlice = useSelector(getStatus);

  const refreshData = (newData: Models | null) => {
    if (statusSlice === "idle") dispatch(getApiThunk());
    else if (statusSlice === "rejected") throw Error(errorSlice);
    else if (statusSlice === "fulfilled") setDataJson(newData);
  };

  //Its call when status of BookingsData change.
  useEffect(() => {
    refreshData(dataSlice);
  }, [statusSlice]);

  return { dataJson, refreshData };
}
