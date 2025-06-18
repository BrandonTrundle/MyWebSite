import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectShowcase({
  title,
  description,
  images = [],
  tech = [],
  github,
  demo,
}) {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="py-16 px-6 bg-white border-b border-gray-200 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{description}</p>

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {images.map(({ src, caption }, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="rounded shadow-md w-full h-64 object-cover cursor-pointer"
                  onClick={() => setModalImage(src)}
                />
                {caption && (
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    {caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
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

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full preview"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
