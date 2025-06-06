import PasswordProtectedDownload from "../components/PasswordProtectedDownload";

export default function Bio() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I’m a full stack developer with a passion for clean design, creative
          problem-solving, and building tools that actually matter. From web
          apps to game engines, I thrive on turning ideas into something people
          can use.
        </p>
        <p className="text-lg mb-8">
          I love working with React, Node.js, and MongoDB — but I'm always
          leveling up my skillset. Currently building a virtual tabletop
          platform, ArcanaTable.
        </p>
        <PasswordProtectedDownload />
      </div>
    </section>
  );
}
