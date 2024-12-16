"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    "question": "What is Classify?",
    "answer": "Classify is a SaaS platform designed to help coaching classes create, administer, and analyze online tests efficiently, saving time and improving student outcomes."
  },
  {
    "question": "How do I create an account?",
    "answer": "Simply click on the \"Sign Up\" or \"Free Trial\" button on our website and follow the on-screen instructions."
  },
  {
    "question": "Is there a free trial available?",
    "answer": "Yes, we offer a [duration] free trial so you can experience the platform's features before subscribing."
  },
  {
    "question": "What types of questions can I create?",
    "answer": "Our platform supports a variety of question types, including multiple-choice, true/false, fill-in-the-blank, matching, short answer, and essay questions."
  },
  {
    "question": "Can I upload my own questions?",
    "answer": "Yes, you can easily bulk import questions from a excel file."
  },
  {
    "question": "Does the platform offer automated grading?",
    "answer": "Yes, our platform automatically grades objective question types, saving you valuable time."
  },
]
;
