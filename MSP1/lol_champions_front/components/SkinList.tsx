"use client";

import { useState, useEffect } from "react";
import { getSkins } from "../lib/api";
import { Skin } from "../types";
import Link from "next/link";

interface SkinListProps {
  championName: string;
}

export default function SkinList({ championName }: SkinListProps) {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSkins(championName)
      .then((data) => {
        const sortedSkins = data.sort((a, b) => a.id - b.id);
        setSkins(sortedSkins);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch skins");
        setLoading(false);
      });
  }, [championName]);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error)
    return <div className="text-center text-2xl text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <Link
          href={`/champions/${championName}`}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skins.map((skin) => (
          <div
            key={skin.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="h-64 overflow-hidden bg-gray-200">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.id}.jpg`}
                alt={skin.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {skin.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
