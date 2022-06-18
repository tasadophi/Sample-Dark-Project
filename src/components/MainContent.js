import React from "react";

const MainContent = ({ content, contentColor }) => {
  return (
    <div
      className={`flex justify-center shadow-md rounded-md m-4 mb-2 items-center text-lg min-h-[16rem] ${contentColor} lg:h-full lg:w-3/4`}
    >
      {content}
    </div>
  );
};

export default React.memo(MainContent);
