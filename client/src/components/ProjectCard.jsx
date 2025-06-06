export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/BrandonTrundle/arcanatable
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
