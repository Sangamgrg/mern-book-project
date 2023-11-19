import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Find your Favourite
            <span className="text-blue-700"> Books Here! </span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            recusandae consectetur perspiciatis quae, est tempora eos
            dignissimos vero nobis, deserunt libero cupiditate velit, illum
            impedit labore sapiente soluta itaque dolor.
          </p>
        </div>

        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
