import { DataContext } from "../Contexts/DataContext";
import { Props } from "../../types/global";
import { useState } from "react";

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState([]);

  console.log("Dentro del Provider", data);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};
