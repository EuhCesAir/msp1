import { Champion, Skin } from "../types";

const API_BASE_URL = "http://localhost:8080";

export async function getChampions(): Promise<Champion[]> {
  const response = await fetch(`${API_BASE_URL}/champions`);
  if (!response.ok) {
    throw new Error("Failed to fetch champions");
  }
  return response.json();
}

export async function getChampion(id: number): Promise<Champion> {
  const response = await fetch(`${API_BASE_URL}/champions/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch champion with id ${id}`);
  }
  return response.json();
}

export async function getSkins(id: number): Promise<Skin> {
  const response = await fetch(`${API_BASE_URL}/champions/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch champion with id ${id}`);
  }
  return response.json();
}
