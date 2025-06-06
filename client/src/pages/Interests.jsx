import DiceRoller from "../components/DiceRoller";

export default function Interests() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">My Interests</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Family Time</h2>
          <p className="text-lg">
            When I'm not coding, my favorite thing is spending time with my
            family — especially my wife and our son. Whether it’s a quiet walk,
            a family trip, or movie night, these moments mean the world to me.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Smite</h2>
          <img
            src="/images/Smite.jpg"
            alt="Smite"
            className="rounded-lg shadow-md w-full mb-4"
          />
          <p className="text-lg">
            Smite is one of my go-to games. I love the fast-paced MOBA action
            and the mythological setting. It’s a great way to decompress and
            test your tactical reflexes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Magic: The Gathering</h2>
          <img
            src="/images/MTG.jpg"
            alt="Magic: The Gathering"
            className="rounded-lg shadow-md w-full mb-4"
          />
          <p className="text-lg">
            I’ve been playing Magic since middle school. I love deck-building,
            trading, and especially playing in local tournaments. It’s a perfect
            mix of strategy and creativity.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🧙 Dungeons & Dragons</h2>
          <img
            src="/images/DnD.jpg"
            alt="Dungeons and Dragons"
            className="rounded-lg shadow-md w-full mb-4"
          />
          <p className="text-lg">
            One of my all-time favorite pastimes is D&D. The creativity,
            storytelling, and camaraderie that come with each session have left
            me with some of my best memories — whether as a player or game
            master.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Try the Dice Roller!
          </h2>
          <DiceRoller />
        </section>
      </div>
    </div>
  );
}
