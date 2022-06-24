import React from "react";

import Image from "next/image";
import cardImg from "../public/img/card.png";
import { GoVerified } from "react-icons/go";
export default function Card() {
  return (
    <>
      <div className="lg:p-1 md:w-full flex justify-center mt-8">
        <div className="mx-w-xl py-11 px-11 border-cyan-200 border-solid rounded-2xl bg-blue-100  shadow-2xl">
          <Image
            src={cardImg}
            width="230"
            height="137"
            alt="Card Illustration"
            layout="intrinsic"
            loading="eager"
            placeholder="blur"
          />
          <h1 className="text-center font-bold text-2xl ">KINDERFEESTJES</h1>
          <div className="px-6 py-4 lg:h-44">
            <div className="title-font pl-5 text-lg font-medium mb-2  ">
              <ul>
                <ul className="flex-auto py-1 flex  ">
                  <li className="flex-auto flex -space-y-2 space-x-3 lg:items-start   sm:flex">
                    <GoVerified className="text-green-500 mt-0" /> <span>Lorem Ipsum</span>
                  </li>
                </ul>
                <ul className="flex-auto py-1 flex  ">
                  <li className="flex-auto flex space-x-3 lg:items-start   sm:flex">
                  <GoVerified className="text-green-500 mt-1" /> <span>Lorem Ipsum</span>
                  </li>
                </ul>
                <ul className="flex-auto py-1 flex  ">
                  <li className="flex-auto flex space-x-3 lg:items-start   sm:flex">
                  <GoVerified className="text-green-500 mt-1" /> <span>Lorem Ipsum</span>
                  </li>
                </ul>
                <ul className="flex-auto py-1 flex  ">
                  <li className="flex-auto flex space-x-3 lg:items-start   sm:flex">
                  <GoVerified className="text-green-500 mt-1" /> <span>Lorem Ipsum</span>
                  </li>
                </ul>
               
               
              </ul>
            </div>
          </div>
          <div className="px-6 pt-4  text-center pb-2">
            <span className="inline-block bg-purple-500 rounded-sm text-white px-14 py-4 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest  hover:bg-purple-500 ">
              LEES MEER!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
