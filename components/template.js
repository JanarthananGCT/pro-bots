import React from "react";

const Template = (props) => {
  return (
    <div className="">
      <div className=" w-[96vw] rounded-md min-h-[10vh] leading-8  bg-orange-500 flex px-4 items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl ">
        {props.que}
      </div>
      <div className=" w-[96vw] mt-5 rounded-md min-h-[20vh] leaading leading-8  flex px-4 items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl ">
        {JSON.parse(props.ans)}
      </div>
    </div>
  );
};

export default Template;
