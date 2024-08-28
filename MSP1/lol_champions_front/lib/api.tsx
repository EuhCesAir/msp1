import { Champion, Skin } from "../types";

const API_BASE_URL = "http://localhost:8080";

export async function getChampions(): Promise<Champion[]> {
  const response = await fetch(`${API_BASE_URL}/champions`);
  if (!response.ok) {
    throw new Error("Failed to fetch champions");
  }
  return response.json();
}

export async function getChampion(name: string): Promise<Champion> {
  const response = await fetch(`${API_BASE_URL}/champions/${name}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch champion with name ${name}`);
  }
  return response.json();
}

export async function getSkins(name: string): Promise<Skin[]> {
  const response = await fetch(`${API_BASE_URL}/skins/${name}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch champion with name ${name}`);
  }
  return response.json();
}
