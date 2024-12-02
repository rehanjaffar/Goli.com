import { useContext } from "react";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Admin/DashBoard";
import DoctorsList from "./pages/Admin/DoctorsList";
import AllAppoinments from "./pages/Admin/Appoinments";
import AddDoctors from "./pages/Admin/AddDoctor";

function App() {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<DashBoard />} />
          <Route path="/all-appoinments" element={<AllAppoinments />} />
          <Route path="/add-doctor" element={<AddDoctors />} />
          <Route path="/doctor-list" element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
