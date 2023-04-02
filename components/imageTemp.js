import React from "react";
import Image from "next/image";
const ImageTemplate = (props) => {
  const result = JSON.parse(props.ans);
  return (
    <div className="">
      <div className=" w-[96vw] rounded-md min-h-[10vh] leading-8  bg-orange-500 flex px-4 items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl ">
        {props.que}
      </div>

      <div className="w-full min-h-[240vh] md:min-h-[150vh] lg:min-h-[90vh] xl:min-h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {result.map((img) => (
          <div className="flex w-full h-full justify-center items-center">
            <div className="w-[280px] h-[200px] rounded-md">
              <Image
                src={img.url}
                width={280}
                height={200}
                className="rounded-md cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTemplate;
