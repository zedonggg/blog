import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "CTC-Global",
    date: "May 2025 - Present",
    description: "Prototyped QA workflows and created technical documentation.",
    titleColor: "text-blue-400", 
  },
  {
    title: "Software Engineer Intern",
    company: "Vetbuddy (NUS Enterprise)",
    date: "Dec 2024",
    description: "Built a frontend platform to provide AI-assisted diagnoses for veterinarians under a startup funded by NUS Enterprise.",
    titleColor: "text-green-400",
  },
  {
    title: "Teaching Assistant",
    company: "National University of Singapore",
    date: "Aug 2024 - Nov 2024",
    description: "Tutored 7 students and provided code and homework reviews for the introductory programming mod CS1101S.",
    titleColor: "text-yellow-400",
  },
];


const ExperienceTimeline = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.6 }}
      className="mt-5"
    >
      <fieldset className="rounded-lg border-2 border-gray-600">
        <legend className="text-xl font-bold px-6" align="center">
          my experiences
        </legend>
        <div className="relative p-3">
          {/* Vertical center line (only on md and up) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2 z-0" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </fieldset>
    </motion.div>
  );
};

const TimelineItem = ({ exp, isLeft, key }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
      className={`relative w-full flex md:items-center ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="w-full md:w-1/2 px-3">
        <div
          className={`
            bg-gray-800 border border-gray-700 
            rounded-md p-3 shadow-md relative
            before:absolute before:top-4 before:w-0 before:h-0 before:border-y-8 before:border-y-transparent
            ${
              isLeft
                ? "before:-right-2 before:border-l-8 before:border-l-gray-600"
                : "before:-left-2 before:border-r-8 before:border-r-gray-600"
            }
          `}
        >
          <h3 className={`text-lg font-bold ${exp.titleColor}`}>{exp.title}</h3>
          <p className="text-sm text-gray-500">{exp.company}</p>
          <span className="text-sm text-gray-400">{exp.date}</span>
          <p className="mt-2 text-white">{exp.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
