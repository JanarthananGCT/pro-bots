import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import one from "../public/one.json";
import two from "../public/two.json";
import three from "../public/three.json";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  return (
    <div>
      <div className="min-h-[100vh]   bg-[url('/background.jpg')] bg-cover">
        <div className="">
          <div className="h-[12vh] py-3  rounded-md mx-4 ">
            <div className="flex justify-center items-center">
              <Image src={logo} height={60} />
            </div>
          </div>
          <div className="min-h-[82vh]  mx-1 my-4 mt-7 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
            <div className=" border-r-2 border-white my-3 grid grid-cols-1 gap-6">
              <div className="flex justify-center items-center px-1">
                <div>
                  <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_vzzh2xmw.json"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>

                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/chat");
                  }}
                >
                  Can Answer for Your Questions !
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/generateImage");
                  }}
                >
                  Can Generate Image for You !
                </div>
                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div>
                  <Player
                    autoplay
                    loop
                    src={one}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div>
                  <Player
                    autoplay
                    loop
                    src={two}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>

                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/notes");
                  }}
                >
                  Can Create Notes for You !
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/timeComplexity");
                  }}
                >
                  Can Find Time Complexity !
                </div>
                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div>
                  <Player
                    autoplay
                    loop
                    src={three}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>
              </div>
            </div>
            <div className=" my-3 border-l-2 border-white grid grid-cols-1 gap-6">
              <div className="flex justify-center items-center px-1">
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/grammer");
                  }}
                >
                  Can Correct Grammer Mistakes !
                </div>
                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div>
                  <Player
                    autoplay
                    loop
                    src={three}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div>
                  <Player
                    autoplay
                    loop
                    src={two}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>

                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/emojis");
                  }}
                >
                  Can Generate Emojis !
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/dataset");
                  }}
                >
                  Can Create Dataset For You !
                </div>
                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div>
                  <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_vzzh2xmw.json"
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>
              </div>
              <div className="flex justify-center items-center px-1">
                <div>
                  <Player
                    autoplay
                    loop
                    src={one}
                    className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px]"
                  ></Player>
                </div>

                <div className="w-[7%] h-[2px] bg-white  mx-1"></div>
                <div
                  className=" ml-1 w-[70%] rounded-xl h-[10vh]  bg-orange-500 cursor-pointer flex justify-center items-center text-white font-normal text-[16px] md:text-xl lg:text-xl xl:text-xl text-center"
                  onClick={function handleClick() {
                    router.push("/codeConvertion");
                  }}
                >
                  Can Convert Your Code !
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

// https://assets2.lottiefiles.com/packages/lf20_gaj4x0te.json
