import Head from "next/head";
import Program from "../components/Program";
import { program } from "../data/programs";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ isConnected }) {
  return (
    <div className="min-h-screen bg-black text-gray-50 z-10">
      <Head>
        <title>Fitness Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col px-2 py-10">
        <div className="mx-auto text-center py-5">
          <h1 className="text-xl font-semibold py-5">Fitness Tracker</h1>
          {isConnected ? (
            <h2 className="subtitle">You are connected to MongoDB</h2>
          ) : (
            <h2 className="subtitle">
              You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
              for instructions.
            </h2>
          )}
        </div>
        <Program program={program} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
