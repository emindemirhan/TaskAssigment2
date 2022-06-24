import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import SectionTitle from "../components/sectiontitle";
export default function Faq() {
  return (
    <Container>
     <SectionTitle pretitle="FAQ" title="VEEL GESTELDE ALGEMEEN VRAGEN">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
    <Container className="!p-0 flex-auto flex items-stretch">
    <div className="max-w-2xl p-2 mx-auto rounded-2xl ">
    
    {faqdata.map((item, index) => (
      <div key={item.question} className="mb-5 items-stretch ...">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex font-bold justify-between w-full px-4 py-4 sm:text-sm lg:text-lgtext-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                <span>{item.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180 w-11 h-11" : ""
                  } w-11 h-11  text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 font-bold text-gray-500 dark:text-gray-300">
                {item.answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
      
    ))}
  </div>
      <div className="max-w-2xl p-2 mx-auto rounded-2xl ">
    
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5 items-stretch ...">
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex font-bold justify-between w-full px-4 py-4 sm:text-sm lg:text-lgtext-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180 w-11 h-11" : ""
                      } w-11 h-11  text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 font-bold text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
          
        ))}
      </div>
    </Container>
    </Container>
  );
}

const faqdata = [
  {
    question:
      "IPSUM DOLOR SIT AMET, CONSECTETURSED DO EIUSMOD TEMPOR INCIDIDUNT?",
    answer:
      "ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
  },
  {
    question:
      "NEQUE PORRO QUISQUAM EST, QUI DOLOREM IPSUM QUIA DOLOR SIT AMET?",
    answer: "Yes, you can.",
  },
  {
    question: "BEATAE VITAE DICTA SUNT EXPLICABO? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 50 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "BEATAE VITAE DICTA SUNT EXPLICABO? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];
