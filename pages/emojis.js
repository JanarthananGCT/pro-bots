import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import send from "../public/send.png";
import Template from "../components/template";
import { useRouter } from "next/router";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useState, useEffect } from "react";
import Axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const Emojis = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();
  console.log(input);
  useEffect(() => {
    const fetchDigital = async () => {
      await setResult(
        getCookie("emoji") == undefined ? null : JSON.parse(getCookie("emoji"))
      );
    };

    fetchDigital();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const arr =
      getCookie("emoji") == undefined ? [] : JSON.parse(getCookie("emoji"));
    console.log("entered");
    const res = await Axios.post("/api/emoji", { prompt: input });
    console.log(res)
    const obj = { question: input, answer: JSON.stringify(res.data[0].text) };
    await arr.push(obj);
    await setCookie("emoji", JSON.stringify(arr), {
      maxAge: 1000000,
    });
    console.log(res.data[0].text);
    console.log("done");
    console.log(JSON.parse(getCookie("emoji")));
    setLoading(false);
    setResult(JSON.parse(getCookie("emoji")));
  };

  return (
    <div>
      <div className="min-h-[100vh]   bg-[url('/background.jpg')] bg-cover">
        <div className="">
          <div className="h-[12vh] py-3  rounded-md mx-4 ">
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={function handleClick() {
                router.push("/");
              }}
            >
              <Image src={logo} height={60} />
            </div>
          </div>
          <div className="mt-8 mx-4 pb-20 flex flex-col justify-center items-center">
            {loading ? (
              <div className="flex justify-center items-center">
                <Player
                  autoplay
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_Xho5ht.json"
                  className="w-[280px] h-[300px]"
                ></Player>
              </div>
            ) : (
              <div>
                {console.log(result)}
                {result ? (
                  result.map((item) => (
                    <Template que={item.question} ans={item.answer} />
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <Player
                      autoplay
                      loop
                      src="https://assets8.lottiefiles.com/packages/lf20_zwwwgco2.json"
                      className="w-[280px] h-[300px]"
                    ></Player>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="fixed   bottom-4 w-[100vw] ">
            <div className="flex justify-center  items-center">
              <div className=" rounded-md  ">
                <div className="relative flex justify-end mr-4 -mb-9">
                  <Image src={send} width={25} height={25} onClick={handleSubmit} className="cursor-pointer"  />
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-center items-center"
                >
                  <input
                    type="text"
                    placeholder="Type Your Question ......"
                    className="border-2 rounded-md bg-[url('/background.jpg')] w-[96vw] bg-cover border-white px-4 py-2 h-[8vh] outline-none bg-transparent text-white  "
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                  <input type="submit" className=" hidden" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emojis;

// https://assets10.lottiefiles.com/packages/lf20_Xho5ht.json
