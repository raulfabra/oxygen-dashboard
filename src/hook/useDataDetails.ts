import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataIdInterface } from "../types/global";

export function useDataDetails({ id, getData, getApiThunk }: DataIdInterface) {
  const dispatch = useDispatch();
  const dataSlice = useSelector(getData);
  console.log(dataSlice);

  useEffect(() => {
    dispatch(getApiThunk(id));
  }, [id]);

  return { dataSlice };
}
