import { ProjectCard } from "../Helpers/ProjectCard";
import { projects } from "../../Constants/Projects";

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
