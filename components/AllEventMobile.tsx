import AllEventFilterMobile from "@/clientComponents/allEventFilterMobile";
import EventCard from "@/clientComponents/eventCard";
import { EventData } from "@/contants";
import { SearchLensIcon } from "@/lib/all_icons";
import React from "react";

const AllEventMobile = () => {
  return (
    <>
      <div className=" flex justify-between sticky top-0 bg-white py-3 items-center gap-3 pr-5">
        <div className="pl-5 w-full">
          <div className=" border w-full border-gray-300 rounded-full flex items-center gap-3 px-5 py-3">
            <div>
              <SearchLensIcon />
            </div>
            <input
              type="text"
              placeholder="Search by event name"
              className="w-full outline-none text-[13px] md:text-[14px] "
            />
          </div>
        </div>
        <AllEventFilterMobile />
      </div>
      <div className="w-[100%] sm:w-[60%] lg:w-[70%] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 p-5">
        {EventData.map((eventData, index) => (
          <EventCard key={index} eventData={eventData} />
        ))}
      </div>
    </>
  );
};

export default AllEventMobile;
