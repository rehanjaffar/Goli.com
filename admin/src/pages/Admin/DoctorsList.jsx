import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, backendUrl, changeAvailiblity } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  console.log(doctors);
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6 ">
        {doctors.map((doctor, i) => (
          <div
            className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
            key={i}
          >
            <img
              className="bg-indigo-50 group-hover:bg-primary transition-all duration-500"
              src={`${backendUrl}/${doctor.image}`}
              alt="........."
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">
                {doctor.name}
              </p>
              <p className="text-zinc-600 text-sm">{doctor.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onClick={() => changeAvailiblity(doctor._id)}
                  type="checkbox"
                  checked={doctor.availablity}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
