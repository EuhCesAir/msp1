"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getChampions } from "../lib/api";
import { Champion } from "../types";

export default function ChampionList() {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getChampions()
      .then((data) => {
        setChampions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch champions");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error)
    return <div className="text-center text-2xl text-red-600">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {champions.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-64 overflow-hidden bg-gray-200">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${champion.name}.png`}
                alt={champion.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {champion.name}
              </h2>
              <p className="text-sm text-gray-600">{champion.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
