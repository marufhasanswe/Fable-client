import React from "react";

const DashboardHeader = ({ title, description }) => {
  return (
    <div>
      <h4 className="text-3xl font-bold text-[#152351] tracking-tight">
        {title}
      </h4>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  );
};

export default DashboardHeader;
