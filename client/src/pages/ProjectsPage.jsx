import { Link } from "react-router-dom";

const projects = [
  {
    slug: "include-checker",
    title: "C/C++ Include Checker",
    image: "/images/IC1.png",
    short:
      "Optimization tool to remove unused #includes from embedded C projects.",
  },
  {
    slug: "flashcard-app",
    title: "Flashcard App",
    image: "/images/Flash1.png",
    short:
      "A PyGame-based flashcard app to reinforce vocabulary and technical terms.",
  },
  {
    slug: "math-game",
    title: "Rainbow Friends Math Game",
    image: "/images/RBF1.png",
    short: "A kid-friendly math game that teaches addition and subtraction.",
  },
  {
    slug: "arcanatable",
    title: "ArcanaTable",
    image: "/images/ACT1.png",
    short: "Virtual tabletop with campaign tools and real-time collaboration.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="text-blue-600 hover:underline"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main overview panel */}
      <main className="flex-1 p-8 bg-gray-200">
        <h1 className="text-3xl font-bold mb-8">Project Overview</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.short}</p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-green-600 hover:underline text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
