import SocialIcons from "../components/SocialIcons";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-900 text-white text-center">
      <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-green-400">
        <img
          src="/BiggerFoto.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Brandon Trundle</h1>
      <h2 className="text-xl text-gray-400 mb-4">
        Frontend / Full Stack Developer
      </h2>
      <SocialIcons />
    </section>
  );
}
