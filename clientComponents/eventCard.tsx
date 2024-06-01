import { EventDataType } from "@/types/EventData";
import React from "react";

const EventCard = ({ eventData }: { eventData: EventDataType }) => {
  return (
    <div className="p-5 bg-gray-100 rounded-[15px] cursor-pointer border border-gray-100 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="size-[40px] md:size-[55px] bg-gray-300 rounded-full" />
          <div className="leading-none md:leading-snug">
            <div className="w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="text-[14px] md:text-[15px] font-semibold">
                {eventData.eventName}
              </span>
            </div>
            <div className="w-[200px]">
              <span className="text-[13px] md:text-[14px] font-medium">
                {eventData.eventCompanyName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1">
        <div>
          <span className="text-[14px]">Meetup | 20th Feb, 2024</span>
        </div>
        <div className="mt-1 leading-tight line-clamp-2">
          <span className="text-[14px]">{eventData.eventDescription}</span>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
