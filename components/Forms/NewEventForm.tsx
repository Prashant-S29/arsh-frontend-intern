"use client";

import React from "react";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewEventFormSchema } from "@/form-schema/new-event-form";
import { NewEventFormFileds } from "@/contants";

const NewEventForm = () => {
  const { register, handleSubmit } = useForm<
    z.infer<typeof NewEventFormSchema>
  >({
    resolver: zodResolver(NewEventFormSchema),
  });

  const handleFormSubmit: SubmitHandler<z.infer<typeof NewEventFormSchema>> = (
    data
  ) => {
    // Do something with the data
    // console.log(data);
  };

  return (
    <>
      <div className="flex justify-center w-full min-h-screen sm:items-center">
        <div className="w-full sm:w-fit">
          <div>
            <span className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold">
              Create New Event
            </span>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {NewEventFormFileds.map((fieldData, index) => (
              <div key={index} className="py-1">
                <input
                  type={fieldData.fieldType}
                  {...register(fieldData.fieldName)}
                  placeholder={fieldData.placeholder}
                  className="w-full sm:w-[350px] outline-none text-[14px] px-5 py-3 rounded-[10px] border border-gray-400"
                />
              </div>
            ))}
            <button
              type="button"
              className="w-full sm:w-[350px] bg-orange-400 text-white text-[14px] text-center px-5 py-3 font-medium rounded-[10px] mt-1"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewEventForm;
