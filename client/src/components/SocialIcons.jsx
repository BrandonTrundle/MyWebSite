import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-6 mt-4">
      <a
        href="https://github.com/BrandonTrundle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6 text-white hover:text-gray-300" />
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-6 h-6 text-white hover:text-gray-300" />
      </a>
    </div>
  );
}
