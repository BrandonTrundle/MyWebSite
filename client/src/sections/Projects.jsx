import ProjectCard from "../components/ProjectCard";

const professionalProjects = [
  {
    title: "BRC Solar Include Checker",
    description:
      "An internal C code analyzer that detects unused includes for embedded systems, saving build time and reducing clutter.",
    tech: ["Python", "Regex", "Email Automation", "C", "CI/CD Pipelines"],
    github: "",
    demo: "",
  },
  {
    title: "BRC Solar Include Checker",
    description:
      "An internal C code analyzer that detects unused includes for embedded systems, saving build time and reducing clutter.",
    tech: ["Python", "Regex", "Email Automation", "C", "CI/CD Pipelines"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
