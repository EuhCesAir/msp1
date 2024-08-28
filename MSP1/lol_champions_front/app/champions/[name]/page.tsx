import { getChampion } from "../../../lib/api";
import ChampionDetail from "../../../components/ChampionDetail";

export default async function ChampionPage({
  params,
}: {
  params: { name: string };
}) {
  const champion = await getChampion(params.name);
  return <ChampionDetail champion={champion} />;
}
