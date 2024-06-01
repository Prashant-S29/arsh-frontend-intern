import React from "react";

import AllEventDesktop from "./AllEventDesktop";
import AllEventMobile from "./AllEventMobile";

const AllEvents = () => {
  return (
    <>
      <div className="w-full block sm:flex min-h-screen">
        {/* Mobile View */}
        <div className="block sm:hidden relative ">
          <AllEventMobile />
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <AllEventDesktop />
        </div>
      </div>
    </>
  );
};

export default AllEvents;
