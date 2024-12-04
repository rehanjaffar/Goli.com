import { createContext, useEffect } from "react";
import { doctors } from "../assets/assets";
import { toast } from "react-toastify";

import axios from "axios";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currancySymbol = "$";

  const [doctor, setDoctors] = useState(doctors);

  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);

  const value = {
    doctor,
    currancySymbol,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
