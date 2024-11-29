import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          CONTACT <span className="text-gray-800 font-medium">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          className="w-full md:max-w-[360px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            necessitatibus.
          </p>
          <p className="text-gray-500">+92 3** *******</p>
          <p className="text-gray-500">dumy@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT GOLI.com
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
