import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          ABOUT <span className="text-gray-800 font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 my-10">
        {/* left side */}
        <div>
          <img
            src={assets.about_image}
            alt=""
            className="w-full md:max-w-[360px]"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            itaque ducimus impedit nesciunt, ex dolore eos repudiandae
            consequuntur. Non quasi ad repudiandae eum? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quo eveniet debitis beatae ut
            mollitia praesentium vero provident, sunt delectus quae consequatur
            minus exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            itaque ducimus impedit nesciunt, ex dolore eos repudiandae
            consequuntur. Non quasi ad repudiandae eum? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Porro exercitationem beatae alias
            id velit ea quasi aperiam ducimus ut labore minima, consequatur
            mollitia quibusdam corrupti blanditiis dolorem repellat iure!
          </p>
          <b className="text-gray-800 font-semibold">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            itaque ducimus impedit nesciunt, ex dolore eos repudiandae
            consequuntur. Non quasi ad repudiandae eum?
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="text-gray-600">
          Why <span className="text-gray-700 font-semibold">CHOOSE US?</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            deleniti placeat illo rem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CLEAN ENVIRONMENT</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            cumque debitis numquam repudiandae, labore illum! Pariatur, in
            debitis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>COMPETENT STAFF</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
            cupiditate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
