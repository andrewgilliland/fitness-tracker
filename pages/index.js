import Head from "next/head";
import Program from "../components/Program";
import { program } from "../data/programs";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ isConnected, programs }) {
  console.log(programs);
  return (
    <div className="min-h-screen bg-black text-gray-50 z-10">
      <Head>
        <title>Fitness Tracker | {programs[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col px-2 py-10">
        <div className="mx-auto text-center py-5">
          <h1 className="text-xl font-semibold py-5">Fitness Tracker</h1>
        </div>
        <Program program={program} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected();

  const programs = await db.collection("programs").find({}).limit(20).toArray();

  return {
    props: { isConnected, programs: JSON.parse(JSON.stringify(programs)) },
  };
}
