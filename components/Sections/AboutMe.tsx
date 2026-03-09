import React from "react";
import { Button } from "../Helpers/MovingBorders";

const cardStyle = {
  background:
    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
  borderRadius: "calc(1.75rem * 0.96)",
};
const cardClass = "text-white border-slate-800";
const randomDuration = () => Math.floor(Math.random() * 10000) + 10000;

const AboutMe = () => {
  return (
    <div
      className="w-full bg-[#000319] px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-20 lg:py-28 xl:px-28 2xl:px-40"
      id="#about"
    >
      <h1 className="pb-8 text-center font-outfit text-3xl font-bold sm:pb-10 sm:text-4xl lg:text-5xl">
        <span className="border-b-2 border-purple-500 pb-2">
          About <span className="text-purple-500">me</span>
        </span>
      </h1>

      <div className="mt-10 grid w-full grid-cols-1 gap-5 font-outfit sm:grid-cols-2 md:gap-6 2xl:grid-cols-4">
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className="flex min-h-[220px] items-center justify-center px-4 py-6 text-center text-sm leading-relaxed sm:min-h-[240px] sm:px-6 sm:text-base lg:text-lg">
            <p>
              <span className="text-purple-400 font-bold">My goal</span> is to
              create meaningful technology that improves lives, combining my
              technical expertise with a{" "}
              <span className="text-purple-500 font-bold">
                desire to innovate and inspire
              </span>{" "}
              others in the tech community.
            </p>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className="flex min-h-[220px] flex-col justify-center gap-4 px-4 py-6 text-center text-sm leading-relaxed sm:min-h-[240px] sm:px-6 sm:text-base lg:text-lg">
            <p>
              2024 and 2025 Serbian Competitive Programming{" "}
              <span className="text-purple-500 font-bold">Olympiad</span>
            </p>
            <p>
              2024 National Competitive Programming Competition{" "}
              <span className="font-bold">3rd Place</span>
            </p>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className="flex min-h-[220px] items-center justify-center px-4 py-6 text-center text-sm leading-relaxed sm:min-h-[240px] sm:px-6 sm:text-base lg:text-lg">
            <p>
              I hold both <span className="text-purple-400 font-bold">FCE</span>{" "}
              and <span className="text-purple-500 font-bold">CAE</span>{" "}
              diplomas, achieved with an A grade, demonstrating a{" "}
              <span className="text-purple-400 font-bold">C2 level</span> of
              English proficiency.
            </p>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className="flex min-h-[220px] items-center justify-center px-4 py-6 text-center text-sm leading-relaxed sm:min-h-[240px] sm:px-6 sm:text-base lg:text-lg">
            <p>
              As someone with a strong foundation in{" "}
              <span className="text-purple-400 font-bold">C</span> and{" "}
              <span className="text-purple-400 font-bold">C++</span>, I have
              continually expanded my technical skill set over the past{" "}
              <span className="text-purple-500 font-bold">6+ years</span> of
              coding experience.
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
