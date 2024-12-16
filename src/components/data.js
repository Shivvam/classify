import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Still using 90s coaching app ?",
  desc: "Our AI-driven SaaS automates test creation, generates professional papers, and provides deep performance insights. It boosts student engagement, reduces admin work, scales easily, and offers a cost-effective way to improve learning outcomes for coaching classes.",
  image: benefitOneImg,
  bullets: [
    {
      title: "AI-Powered Test Creation",
      desc: "Our AI intelligently generates diverse question types, including multiple-choice, true/false, fill-in-the-blank, and even complex problem-solving scenarios, tailored to your specific syllabus and difficulty level.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Automated Test Paper Generation",
      desc: "Instantly create professional-looking test papers with customizable layouts, branding, and instructions.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Advanced Result Analysis",
      desc: "Go beyond simple scores. Our platform provides in-depth analytics, including individual student performance reports, class averages, question-wise analysis, and identification of knowledge gaps.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More reasons",
  desc: "In today's fast-paced educational landscape, effective assessment is crucial for student success and coaching institute growth.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Adaptive Testing",
      desc: " Our AI can dynamically adjust the difficulty of questions based on each student's performance during the test. ",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Reduced Administrative Burden",
      desc: "Automate tedious tasks like grading, reporting, and distribution of results.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Enhanced Student Engagement",
      desc: "Create interactive and engaging online tests with multimedia elements, timers, and gamified features. ",
      icon: <SunIcon />,
    },
  ],
};

const navigation = [
  {
    text: "Product",
    link: "/",
  },
  {
    text: "Features",
    link: "/",
  },
  {
    text: "Pricing",
    link: "/",
  },
  {
    text: "Company",
    link: "/",
  },
  {
    text: "Blog",
    link: "/",
  },
];

export { benefitOne, benefitTwo, navigation };
