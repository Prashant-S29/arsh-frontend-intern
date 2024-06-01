import { SocialHandleData } from "@/contants";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative">
        <div className="p-5  rounded-[20px]">
          <div className="max-[370px]:leading-none leading-tight w-fit">
            <div>
              <span className="text-[24px] sm:text-[26px] md:text-[30px] font-bold">
                Frontend Intern Questionnaire
              </span>
            </div>
            <div className="max-[370px]:mt-3 mt-0">
              <span className="text-[16px] md:text-[18px] font-medium">- By Arsh Goyal</span>
            </div>
          </div>
          <div className="mt-5 leading-tight">
            <div>
              <span className="text-[15px] md:text-[16px]">Answer submitted by</span>
            </div>
            <div>
              <span className="text-[17px] md:text-[18px] font-semibold">Prashant Singh</span>
            </div>
            <div>
              <span className="text-[13px]">
                Full Stack Developer | Freelancer | Web Developer and Designer
              </span>
            </div>
            <div className="mt-3">
              <ul className="flex gap-3">
                {SocialHandleData.map((socialHandle, index) => (
                  <li key={index}>
                    <Link href={socialHandle.link} target="_blank">
                      <div className="p-3 border border-r-gray-300 rounded-full">
                        <socialHandle.icon className="text-[18px]" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 my-5 left-[50%] transform -translate-x-1/2 w-fit">
          <span className="text-[13px]">Scroll Up</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
