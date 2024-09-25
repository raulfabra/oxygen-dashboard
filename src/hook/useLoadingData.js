import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useLoadingData(getData, getError, getStatus, getApiThunk) {
  const dispatch = useDispatch();
  const [dataJson, setDataJson] = useState(null);

  const dataSlice = useSelector(getData);
  const errorSlice = useSelector(getError);
  const statusSlice = useSelector(getStatus);

  const changedStatusSlice = (newData) => {
    if (statusSlice === "idle") dispatch(getApiThunk());
    else if (statusSlice === "rejected") throw Err(errorSlice);
    else if (statusSlice === "fulfilled") setDataJson(newData);
  };

  //Its call when status of BookingsData change.
  useEffect(() => {
    changedStatusSlice(dataSlice);
  }, [statusSlice]);

  return { dataJson, changedStatusSlice };
}
