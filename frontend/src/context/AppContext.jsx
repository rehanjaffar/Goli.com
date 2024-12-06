import { createContext, useEffect } from "react";
import { doctors } from "../assets/assets";
import { toast } from "react-toastify";
import logo from "../assets/upload_area.png";
import axios from "axios";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currancySymbol = "$";

  const [doctor, setDoctors] = useState(doctors);

  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const [userData, setUserData] = useState({
    image: logo,
    name: "Rehan",
    address: { line1: "", linw: "" },
    email: "dumy@gmail.com",
    phone: "+92 3** *******",
    gender: "Male",
    slots_booked: { slotDate: [], slotTime: [] },
  });

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  //get all doctors data
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

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
        toast.success(data.message);
      } else {
        toast.error(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  const value = {
    setUserData,
    loadUserProfileData,
    userData,
    getAllDoctors,
    token,
    setToken,
    doctor,
    currancySymbol,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
