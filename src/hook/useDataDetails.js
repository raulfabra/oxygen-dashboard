import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useDataDetails(ID, getData, getApiThunk) {
  const dispatch = useDispatch();
  const id = Number(ID);
  const dataSlice = useSelector(getData);
  console.log(dataSlice);

  useEffect(() => {
    dispatch(getApiThunk(id));
  }, [id]);

  return { dataSlice };
}
