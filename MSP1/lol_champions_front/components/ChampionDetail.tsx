import { Champion } from "../types";
import Link from "next/link";

interface ChampionDetailProps {
  champion: Champion;
}

export default function ChampionDetail({ champion }: ChampionDetailProps) {
  // Trier les capacités pour que le passif soit en premier, suivi de Q, W, E, R
  const sortedAbilities = champion.abilities.sort((a, b) => {
    const order = { Passive: 0, Q: 1, W: 2, E: 3, R: 4 };
    return order[a.abilityKey] - order[b.abilityKey];
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-4">
        <Link
          href={`/`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pt-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`}
            alt={champion.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-1 text-blue-600">
            {champion.name}
          </h1>
          <p className="text-lg font-bold mb-2 text-gray-600">
            {champion.title}
          </p>
          <p className="mb-4 text-sm text-gray-700 line-clamp-3">
            {champion.lore}
          </p>

          <h2 className="text-xl font-bold mb-2 text-blue-600">Abilities</h2>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sortedAbilities.map((ability) => (
              <div key={ability.id} className="bg-gray-100 rounded-lg p-3">
                <h3 className="text-lg font-bold mb-1 text-gray-800">
                  <span className="text-red-600">{ability.abilityKey}</span> :{" "}
                  {ability.name}
                </h3>
                <p className="mb-1 text-sm text-gray-700 line-clamp-2">
                  {ability.description}
                </p>
                <p className="text-xs text-gray-600">
                  Cooldown: {ability.cooldown}s
                </p>
              </div>
            ))}
          </div>
          <Link href={`/skins/${champion.name}`} key={champion.name}>
            <div className="underline text-blue-600">
              {champion.name} Skin List
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
