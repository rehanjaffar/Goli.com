import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({docId,speciality}) => {
    const navigate = useNavigate();
    const [filterDoctors, serFilterDoctors] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      serFilterDoctors(doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId));
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
  }, [doctors, speciality,docId]);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
        

<div className="w-full grid grid-cols-auto gap-4 gap-y-6 ">
          {filterDoctors.map((item, i) => (
            <div
              key={i}
              onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
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
  )
}

export default RelatedDoctors