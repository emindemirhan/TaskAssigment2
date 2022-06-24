import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import { AiFillStar } from "react-icons/ai";
import SectionTitle from "./sectiontitle";
export default function Testimonials() {
  return (
    <Container className="bg-slate-200 rounded-sm">
      <SectionTitle pretitle="Testimonials" title="WAT ZEGGEN ONZE GAMERS">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-blue-400 px-14 rounded-2xl py-14 ">
            <div className="text-5xl sm:pl-24 lg:pl-12 text-yellow-400 pl-12 pb-5 flex items-stretch ...">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
              <AiFillStar />
            </div>

            <p className="text-2xl leading-normal ">
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-blue-400 px-14 rounded-2xl py-14 ">
            <div className="text-5xl sm:pl-24 lg:pl-12 text-yellow-400 pl-12 pb-5 flex items-stretch ...">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
              <AiFillStar />
            </div>
            <p className="text-2xl leading-normal ">
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-blue-400 px-14 rounded-2xl py-14 ">
            <div className="text-5xl sm:pl-24 lg:pl-12 text-yellow-400 pl-12 pb-5 flex items-stretch ...">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
              <AiFillStar />
            </div>
            <p className="text-2xl  leading-normal ">
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi
            </p>

            <Avatar
              image={userThreeImg}
              name="Mark Zukerbork"
              title="Co-founder of FaceBook"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center  text-white mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600">{props.title}</div>
      </div>
    </div>
  );
}
