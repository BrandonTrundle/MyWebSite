import { useParams } from "react-router-dom";
import projectData from "../utils/projectData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-white p-8 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="text-gray-600">
          Please check the URL or go back to the projects page.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-800 py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">{project.title}</h1>
      {project.description && (
        <p className="text-lg text-gray-700 mb-12">{project.description}</p>
      )}

      {project.sections.map((section, index) => (
        <section className="mb-12" key={index}>
          <img
            src={section.image}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-auto rounded shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">What You're Seeing</h2>
          <p className="text-lg text-gray-700 mb-4">{section.what}</p>

          <h3 className="text-xl font-medium mb-1 text-green-700">
            Why It Matters
          </h3>
          <p className="text-gray-700 mb-4">{section.why}</p>

          <h3 className="text-xl font-medium mb-1 text-red-700">
            Challenges I Faced
          </h3>
          <p className="text-gray-700">{section.challenges}</p>
        </section>
      ))}
    </div>
  );
}
