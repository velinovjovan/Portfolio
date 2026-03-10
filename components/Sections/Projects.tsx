"use client";

import Image from "next/image";

type Project = {
  name: string;
  image: string;
  description: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    name: "Quantum Chess",
    image: "/screenshots/quantumChess.png",
    description:
      "Full-stack chess web app built with React, Supabase, and Chess.Js, with real-time multiplayer chess gameplay, chat and move history feature.",
    github: "https://github.com/velinovjovan/Quantum-Chess",
    live: "https://quantumchessgame.vercel.app",
  },
  {
    name: "Turbo FPL",
    image: "/screenshots/turbofpl.png",
    description:
      "A website for football fans that leverages the FPL API to display player stats, featuring a machine learning model to predict player points.",
    github: "https://github.com/velinovjovan/Turbo-FPL",
    live: "https://turbofpl.vercel.app/",
  },
  {
    name: "KnowIt",
    image: "/screenshots/knowit.png",
    description:
      "An interactive trivia web app built with ViteJs, JavaScript, Trivia API, and Tailwind CSS, designed to test users’ knowledge through engaging modes.",
    github: "https://github.com/velinovjovan/KnowIt",
    live: "https://knowitquiz.vercel.app/",
  },
  {
    name: "iRate",
    image: "/screenshots/irate.png",
    description:
      "Showcase of my favorite albums, made with React, Tailwind, and Gsap for stunning visuals. Built with modern tools and updated frequently.",
    github: "https://github.com/velinovjovan/iRate",
    live: "https://i-rate.vercel.app/",
  },
  {
    name: "Brain Swift",
    image: "/screenshots/brainswift.png",
    description:
      "A platform with interactive games to test and improve cognitive and physical performance, featuring reaction time and memory challenges.",
    github: "https://github.com/velinovjovan/BrainSwift",
    live: "https://brainswift.vercel.app/",
  },
  {
    name: "Brainwave",
    image: "/screenshots/brainwave.png",
    description:
      "A sleek, responsive landing page for an AI chat company, showcasing UI/UX design and frontend skills.",
    github: "https://github.com/velinovjovan/Brainwave",
    live: "https://brainwavevelinov.vercel.app/",
  },
  // {
  //   name: "Snoopy Skies",
  //   image: "/screenshots/snoopy.png",
  //   description:
  //     "An infinite web game made with kaboomjs, inspired by flappy bird concept games. Responsive design for every device.",
  //   github: "https://github.com/velinovjovan/Snoopy-Skies",
  //   live: "https://snoopyskies.vercel.app/",
  // },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="22"
    height="22"
    className="fill-current"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.238-.008-.868-.013-1.704-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.272.098-2.653 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.545 1.381.202 2.4.099 2.653.64.699 1.03 1.591 1.03 2.682 0 3.842-2.337 4.685-4.565 4.932.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.745 0 .268.18.579.688.481A10.014 10.014 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="w-[290px] shrink-0 rounded-3xl border border-slate-900 bg-[#000319] p-6 sm:w-[320px]">
      <div className="h-[180px] w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          height={180}
          width={320}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mb-4 mt-6 font-outfit text-2xl font-bold text-white">
        {project.name}
      </h3>

      <p className="min-h-[96px] text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} GitHub`}
          className="text-gray-300 transition-colors duration-300 hover:text-purple-300"
        >
          <GithubIcon />
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit text-sm font-bold text-purple-500 transition-colors duration-300 hover:text-purple-400"
        >
          Check Live Site
        </a>
      </div>
    </article>
  );
};

const RecentProjects = () => {
  return (
    <section className="bg-[#000319] py-24" id="projects">
      <h1 className="pb-10 text-center font-outfit text-xl sm:text-3xl font-bold sm:text-4xl">
        <span className="border-b-2 border-purple-500 pb-2">
          A small selection of{" "}
          <span className="text-purple-500">recent projects</span>
        </span>
      </h1>

      <div className="overflow-hidden">
        <div className="project-marquee mt-14 flex w-max gap-10 px-4 sm:gap-14 sm:px-6 lg:gap-16 lg:px-10">
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
