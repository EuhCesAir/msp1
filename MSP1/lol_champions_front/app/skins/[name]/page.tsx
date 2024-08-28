import SkinList from "../../../components/SkinList";

export default async function SkinPage({
  params,
}: {
  params: { name: string };
}) {
  return <SkinList championName={params.name} />;
}
