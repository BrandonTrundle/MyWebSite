import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide text-green-400">
          Brandon Trundle
        </div>
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-green-400 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 transition">
            <Link to="/story">My Story</Link>
          </li>
          <li className="hover:text-green-400 transition">
            <Link to="/interests">My Interests</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
