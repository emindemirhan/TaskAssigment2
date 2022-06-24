import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import sampleOneImg from "../public/img/sample-one.png";
import sampleTwoImg from "../public/img/sample-two.png";

const sampleOne = {
  title: "Lorem Ipsum is simply. SampleOne ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image: sampleOneImg,
  bullets: [
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <CursorClickIcon />,
    },
  ],
};

const sampleTwo = {
  title: "Lorem Ipsum is simply. sampleTwo ",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image: sampleTwoImg,
  bullets: [
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Lorem Ipsum is simply. ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <SunIcon />,
    },
  ],
};

export { sampleOne, sampleTwo };
