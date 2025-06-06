import ProjectCard from "../components/ProjectCard";

const privateProjects = [
  {
    title: "Flashcard App",
    description:
      "Custom flashcard app to learn tech terms and German vocabulary.",
    tech: ["React", "LocalStorage"],
    github: "https://github.com/BrandonTrundle/FlashCards",
    demo: "",
  },
  {
    title: "Rainbow Friends Math Game",
    description:
      "Math game built with PyGame to help my 6-year-old learn basic addition and subtraction.",
    tech: ["Python", "PyGame"],
    github: "https://github.com/BrandonTrundle/Math-Game",
    demo: "",
  },
  {
    title: "ArcanaTable",
    description:
      "A virtual tabletop platform for TTRPGs with campaign management, real-time map tools, and character management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/BrandonTrundle/arcanatable",
    demo: "",
  },
  {
    title: "ArcanaTable v2",
    description:
      "This is the second iteration of my original idea for ArcanaTable. This version is at thne beginning of development",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/BrandonTrundle/arcanatable-v2",
    demo: "",
  },
  {
    title: "This website!",
    description:
      "I decided that if I wanted to be a frontend web developer, that maybe I should make a business card.",
    tech: ["React", "Node.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/BrandonTrundle/arcanatable-v2",
    demo: "",
  },
];

export default function PrivateProjects() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Private Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {privateProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
