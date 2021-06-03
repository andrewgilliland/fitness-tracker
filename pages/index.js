import Head from "next/head";
import Program from "../components/Program";
import { program } from "../data/programs";

export default function Home() {
  console.log(program);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Fitness Tracker</h1>

        <Program program={program}/>
      </main>
    </div>
  );
}
