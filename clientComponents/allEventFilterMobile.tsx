"use client";

import React, { useState } from "react";

import FilterBox from "./filterBox";

import { FilterIcon } from "@/lib/all_icons";
import { SearchFilerData } from "@/contants";

const AllEventFilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="max-[370px]:px-[10px] px-6 py-[10px] h-full bg-gray-100 rounded-full flex gap-2 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="max-[370px]:hidden block">
          <span className="text-[13px] font-medium">Filters</span>
        </div>
        <div>
          <FilterIcon />
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 z-20 h-screen flex items-center justify-center bg-[#0000003d] p-5">
          <div className="bg-white px-5 py-4 rounded-[20px]">
            <div>
              <span className="text-[14px] font-medium">Filters</span>
            </div>
            <div className="mt-2 h-[300px] overflow-y-scroll">
              {SearchFilerData.map((filterData, index) => (
                <FilterBox key={index} filterData={filterData} />
              ))}
            </div>
            <div className="mt-5">
              <div>
                <button className="px-5 py-2 bg-orange-400 border border-orange-400 rounded-full text-[13px] font-medium text-white">
                  Save
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 bg-white border border-white rounded-full text-[13px] font-medium text-black"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AllEventFilterMobile;
