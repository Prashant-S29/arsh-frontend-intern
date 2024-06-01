"use client";

import React, { useState } from "react";
import { DropdownIcon } from "@/lib/all_icons";

const FilterBox = ({
  filterData,
}: {
  filterData: { category: string; filters: string[] };
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={` select-none border overflow-hidden duration-300 border-gray-300 mt-5 first-of-type:mt-0 rounded-[20px]`}
      >
        <div
          className={`px-4 py-3 md:px-5 md:py-4 cursor-pointer bg-[#f3f4f6] duration-300 flex items-center justify-between  rounded-t-[20px]`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <span className="text-[14px] font-semibold">
              {filterData.category}
            </span>
          </div>
          <div
            className={`duration-200  ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <DropdownIcon className="text-[13px] text-gray-600" />
          </div>
        </div>
        <div
          className={`duration-300 overflow-hidden ${
            isOpen ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div className=" p-2 md:p-3 flex flex-wrap gap-x-3 gap-y-2 ">
            {filterData.filters.map((filter, index) => (
              <div
                key={index}
                className="px-4 cursor-pointer py-1 md:py-2 bg-gray-100 rounded-[20px] "
              >
                <span className="text-[12px] md:text-[13px] font-medium">{filter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBox;


