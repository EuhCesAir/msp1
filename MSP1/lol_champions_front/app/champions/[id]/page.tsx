import { getChampion } from "../../../lib/api";
import ChampionDetail from "../../../components/ChampionDetail";

export default async function ChampionPage({
  params,
}: {
  params: { id: string };
}) {
  const champion = await getChampion(parseInt(params.id));
  return <ChampionDetail champion={champion} />;
}
