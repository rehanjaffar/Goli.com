import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  const [filterDoctors, serFilterDoctors] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      serFilterDoctors(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      serFilterDoctors(doctors);
    }
  };

  const Data = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
  ];

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600 ">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* sidebar */}
        <div className="flex flex-col gap-4 text-sm text-gray-600 min-w-[200px]">
          {Data.map((item, i) => (
            <p
              key={i}
              onClick={() =>
                speciality === item
                  ? navigate("/doctors")
                  : navigate(`/doctors/${item}`)
              }
              className={`w-[94vw sm:w-auto pl-3 py-1.5 border border-gray-300 rounded cursor-pointer transition-all ${
                speciality === item && "bg-indigo-100 text-black"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        {/* content */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6 ">
          {filterDoctors.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>{" "}
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
