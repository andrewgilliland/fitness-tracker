import Head from "next/head";
import Program from "../components/Program";
import { program } from "../data/programs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-50 z-10">
      <Head>
        <title>Fitness Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col px-2 py-10">
        <div className="mx-auto text-center py-5">
          <h1 className="text-xl font-semibold py-5">Fitness Tracker</h1>
          {/* <blockquote>
            "There are no shortcuts—everything is reps, reps, reps.""
          </blockquote>
          <div>- Arnold Schwarzenegger</div> */}
        </div>
        <Program program={program} />
      </main>
    </div>
  );
}
