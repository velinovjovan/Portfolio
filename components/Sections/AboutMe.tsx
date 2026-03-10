import React from "react";
import { Button } from "../Helpers/MovingBorders";
import {
  SiC,
  SiCplusplus,
  SiSharp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import {
  FaCode,
  FaTrophy,
  FaLaptopCode,
  FaPeopleGroup,
  FaGraduationCap,
  FaComments,
} from "react-icons/fa6";

const cardStyle = {
  background:
    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
  borderRadius: "calc(1.75rem * 0.96)",
};
const cardClass = "text-white border-slate-800";
const randomDuration = () => Math.floor(Math.random() * 10000) + 10000;
const cardContentClass =
  "flex w-full min-h-[300px] flex-col px-5 py-6 text-sm leading-relaxed sm:min-h-[330px] sm:px-6 sm:py-7 sm:text-base";
const cardTitleClass =
  "mb-4 border-b border-purple-500/30 pb-3 text-lg font-bold text-purple-300 sm:text-xl";

const stackGroups = [
  {
    title: "Languages",
    items: [
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
      { name: "C#", Icon: SiSharp },
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "SQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
    ],
  },
  {
    title: "Tools & Backend",
    items: [
      { name: "Supabase", Icon: SiSupabase },
      { name: "Git", Icon: SiGit },
    ],
  },
];

const AboutMe = () => {
  return (
    <div
      className="w-full bg-[#000319] px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-20 lg:py-28 xl:px-28 2xl:px-40"
      id="about"
    >
      <h1 className="pb-8 text-center font-outfit text-xl sm:text-3xl font-bold sm:pb-10 sm:text-4xl lg:text-5xl">
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
          <div className={`${cardContentClass} text-left`}>
            <h2 className={cardTitleClass}>Tech Stack</h2>
            <div className="space-y-4">
              {stackGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(({ name, Icon }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100"
                      >
                        <Icon className="text-sm text-purple-300" />
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className={`${cardContentClass} text-left`}>
            <h2 className={cardTitleClass}>Accolades</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaTrophy className="text-purple-300" /> Olympiad Finalist
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaCode className="text-purple-300" /> Competitive Programming
              </span>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                2024 and 2025 Serbian Competitive Programming{" "}
                <span className="text-purple-500 font-bold">Olympiad</span>,
                solving advanced algorithmic tasks under strict time limits.
              </p>
              <p>
                2024 National Competitive Programming Competition{" "}
                <span className="font-bold">3rd Place</span>, with strong
                performance in data structures and optimization.
              </p>
              <p>
                4-time district 1st Place winner in competitive programming.
              </p>
            </div>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className={`${cardContentClass} text-left`}>
            <h2 className={cardTitleClass}>Experience</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaLaptopCode className="text-purple-300" /> Full-Stack Projects
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaPeopleGroup className="text-purple-300" /> Team Collaboration
              </span>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                6+ years of coding experience across algorithms and full-stack
                web development.
              </p>
              <p>
                Hands-on delivery of responsive apps with a focus on
                performance, clean architecture, and maintainable code.
              </p>
              <p>
                Built and deployed portfolio-grade applications integrating
                APIs, databases, and polished user interfaces.
              </p>
            </div>
          </div>
        </Button>
        <Button
          duration={randomDuration()}
          borderRadius="1.75rem"
          style={cardStyle}
          className={cardClass}
        >
          <div className={`${cardContentClass} text-left`}>
            <h2 className={cardTitleClass}>Education & Communication</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaGraduationCap className="text-purple-300" /> ETF Belgrade
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-gray-100">
                <FaComments className="text-purple-300" /> C2 English
              </span>
            </div>
            <div className="space-y-3 text-gray-200">
              <p>
                Computer Science student at ETF Belgrade with strong
                fundamentals in software engineering and problem solving.
              </p>
              <p>
                Advanced English communication (
                <span className="text-purple-400 font-bold">FCE</span> and{" "}
                <span className="text-purple-500 font-bold">CAE</span>, grade A,
                C2), ready for collaboration in international teams.
              </p>
              <p>
                Comfortable presenting ideas, writing clear technical
                documentation, and communicating with cross-functional teams.
              </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
