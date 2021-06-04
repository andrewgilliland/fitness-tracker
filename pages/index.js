import Head from "next/head";
import Program from "../components/Program";
import { program } from "../data/programs";

export default function Home() {
  console.log(program);
  return (
    <div className="min-h-screen bg-black text-gray-50 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col px-2 py-10">
        <h1 className="text-xl font-semibold mx-auto py-5">Fitness Tracker</h1>
        <Program program={program} />
      </main>
    </div>
  );
}
