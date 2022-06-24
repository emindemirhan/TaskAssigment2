import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container className=" flex justify-self-end">
      <div className=" flex  w-full lg:max-w-8xl gap-5 mx-auto text-white bg-blue-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xlflex flex-wrap items-baseline justify-evenly   max-w-8xl   rounded-xl">
        <div className="flex-grow text-center lg:text-center">
          <h2 className="text-5xl font-bold lg:text-3xl">
            ZIN İN EEN FESSTJE?
          </h2>
        </div>

        <div className="flex-shrink-0 w-full  text-center lg:w-auto lg:pr-36 ">
          <a
            href=""
            target="_blank"
            rel="noopener"
            className="inline-block py-4 md:pl-5 md:ml-2 md:item-center md:text-end mx-auto text-lg  lg:text-center text-indigo-800 font-bold bg-white rounded-md px-7  sm:py-4 sm:ml-24 sm:px-10 sm:text-center   lg:px-10 lg:py-5 "
          >
            BRENG ME İN CONTACT
          </a>
        </div>
      </div>
    </Container>
  );
}
