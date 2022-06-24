import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex items-center lg:grid-cols-2 xl:grid-cols-3">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl font-bold  leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-8xl xl:leading-tight dark:text-white">
              <Mark>HİGH SCORE</Mark>
              WAALWIJK
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Garmen brengt mensen samen. High Score brengt mensen samen. Met
              wie ga jij de uit dagging aan?
            </p>

            <div className="flex-auto  flex space-x-7 lg:items-start   sm:flex">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 sm:items-center  text-xl font-medium text-center text-white  bg-purple-500 rounded-md "
              >
                CONTACT
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 sm:items-center  text-xl font-medium text-center text-white  bg-purple-500 rounded-md "
              >
                GROEPEN
              </a>
            </div>
        
          </div>
        </div>
        <div className="flex items-center  lg:px-14 lg:pb-14 justify-center   lg:w-1/2">
          <div className=" lg:block flex items-center justify-center w-full ">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-purple-500 bg-indigo-100 rounded-md ring-indigo-100 ">
        {props.children}
      </mark>{" "}
    </>
  );
}
