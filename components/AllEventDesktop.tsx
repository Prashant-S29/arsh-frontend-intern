import React from "react";

import EventCard from "@/clientComponents/eventCard";
import FilterBox from "@/clientComponents/filterBox";

import { EventData, SearchFilerData } from "@/contants";
import { SearchLensIcon } from "@/lib/all_icons";

const AllEventDesktop = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[40%] lg:w-[30%] h-screen overflow-y-scroll p-5 sticky top-0">
          <div className="border border-gray-300 rounded-full flex items-center gap-3 px-5 py-3">
            <div>
              <SearchLensIcon />
            </div>
            <input
              type="text"
              placeholder="Search by event name"
              className="w-full outline-none text-[13px] md:text-[14px] "
            />
          </div>
          <div className="mt-5">
            {SearchFilerData.map((filterData, index) => (
              <FilterBox key={index} filterData={filterData} />
            ))}
          </div>
        </div>
        <div className="w-[100%] sm:w-[60%] lg:w-[70%] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 p-5">
          {EventData.map((eventData, index) => (
            <EventCard key={index} eventData={eventData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllEventDesktop;
