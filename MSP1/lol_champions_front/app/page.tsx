import ChampionList from "../components/ChampionList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        League of Legends Champions
      </h1>
      <ChampionList />
    </div>
  );
}
